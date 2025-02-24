import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, CardBody, FormGroup, Label, Input, Button, Form } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { validateEmail, validatePhone, validatePassword } from "../Utility/FormValidation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateFirm() {
  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
  });
  document.title = "Firm Form";

  const [formValues, setFormValues] = useState({
    role: "firm",
    companyTitle: "",
    companyMobile: "",
    email: "",
    avatar: null, 
    password: "Admin@123",
    incorporationDate: "",
    firmType: "",
    firmSpecified:"",
  });
  
  const [firmType, setFirmType] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const firmTypes = [ "sole_proprietorship", "partnership", "llp", "pvt_ltd", "public_ltd", "opc"];


  const handleFirmTypeChange = (e) => {
    const selectedFirmType = e.target.value;
    setFirmType(selectedFirmType);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormValues((prevState) => ({
        ...prevState,
        avatar: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateEmail(formValues.email)) {
      toast.error("Invalid email");
      setLoading(false);
      return;
    }
    if (!validatePhone(formValues.companyMobile)) {
      toast.error("Invalid Phone Number");
      setLoading(false);
      return;
    }
    if (!validatePassword(formValues.password)) {
      toast.error("Invalid Password");
      setLoading(false);
      return;
    }
    // if (formValues.password !== formValues.confirmPassword) {
    //   toast.error("Passwords do not match");
    //   setLoading(false);
    //   return;
    // }
    const authUserData = JSON.parse(localStorage.getItem("authUser"));
    const authUser = authUserData?.response;
    const clientId = authUser?._id;

    if (!clientId) {
      setLoading(false);
      toast.error("User ID not found");
      return;
    }

    const formData = new FormData();
    formData.append("role", formValues.role);
    formData.append("companyTitle", formValues.companyTitle);
    formData.append("companyMobile", formValues.companyMobile);
    formData.append("email", formValues.email);
    formData.append("password", formValues.password);
    formData.append("incorporationDate", formValues.incorporationDate);
    formData.append("firmType", firmType);
    formData.append("firmSpecified", formValues.firmSpecified);

    if (formValues.avatar) {
      formData.append("avatar", formValues.avatar);
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/auth/createUser/${clientId}`,
        formData, 
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        }
      );

      toast.success(response.message);
      setFormValues({
        role: "firm",
        companyTitle: "",
        companyMobile: "",
        email: "",
        password: "Admin@123",
        // confirmPassword: "",
        avatar: null,
        incorporationDate: "",
        firmType: "",
        firmSpecified:[],
      });
      navigate('/firms');
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'An unexpected error occurred';
      console.log(errorMessage, "errormessage");
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Inventory Management" breadcrumbItem="Firm Form" />
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} md={10}>
              <Card className="mt-1">
                <CardBody className="m-0 p-0">
                  <h4 className="font-size-22 text-center card-title-heading">
                    Create Firm
                  </h4>
                  <Form onSubmit={handleSubmit} className="p-4">
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label htmlFor="companyTitle">Firm Name</Label>
                          <Input
                            type="text"
                            id="companyTitle"
                            name="companyTitle"
                            placeholder="Enter firm name"
                            value={formValues.companyTitle}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label htmlFor="companyMobile">Phone</Label>
                          <Input
                            type="text"
                            id="companyMobile"
                            name="companyMobile"
                            placeholder="Enter phone number"
                            value={formValues.companyMobile}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label htmlFor="email">Firm Email</Label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formValues.email}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    
                      <Col md={6}>
                        <FormGroup>
                          <Label htmlFor="avatar">Avatar</Label>
                          <Input
                            type="file"
                            id="avatar"
                            name="avatar"
                            placeholder="Select avatar"
                            onChange={handleFileChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label htmlFor="firmSpecified">Specified Sales</Label>
                          <select 
                            id="firmSpecified"
                            name="firmSpecified"
                            className="form-select"
                            value={formValues.firmSpecified}
                            onChange={handleChange}
                          >
                            <option value="">Select Firm Specified</option>
                            <option value="Invoice-Trader">Invoice Trader</option>
                            <option value="Direct-Sales">Direct Sales</option>
                          </select>
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup>
                          <Label htmlFor="incorporationDate">Incorporation Date</Label>
                          <Input
                            type="date"
                            id="incorporationDate"
                            name="incorporationDate"
                            placeholder="Select start date"
                            value={formValues.incorporationDate}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                          <FormGroup>
                            <Label htmlFor="firmType" >Firm Type</Label>
                          
                            <select
                              id="firmType"
                              className="form-select"
                              value={firmType}
                              onChange={handleFirmTypeChange}
                            >
                              <option value="" >Select Firm Type</option>
                              {firmTypes.map((type) => (
                                <option key={type} value={type}>{type?.replace(/[_-]/g, " ") 
                                  .replace(/\b\w/g, (char) => char.toUpperCase())}</option>
                              ))}
                            </select>

                          </FormGroup>
                      </Col>
                      <Col md={12} className="text-center">
                        <Button color="primary" type="submit" disabled={loading}>
                          {loading ? "Adding..." : "Add Firm"}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default CreateFirm;
