import React, { useEffect, useState } from 'react';
import logolight from '../../assets/images/logo-light.png';
import logodark from '../../assets/images/logo-dark.png';
import avatar1 from '../../assets/images/users/avatar-1.jpg';
import { Container, Row, Col, Card, CardBody, Label, Input } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { validatePassword } from '../Utility/FormValidation';
import axios from 'axios';
import { toast } from 'react-toastify';

const LockScreen = () => {
    document.title = "Lock Screen | aaMOBee";
    const [show, setShow] = useState(false)
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [userData, setUserData] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        const authUser = JSON.parse(localStorage.getItem("authUser"));
        if (authUser) {
            setUserData(authUser?.response || {});
        }
        localStorage.setItem("isLocked", 'true')
    }, []);

    const handleChange = (e) => {
        const { value } = e.target;
        setPass(value.replace(/\s/g, ""));
        // setError("");
        //toast.error("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pass === "") {
            // setError("Please enter your password");
            toast.error("Please enter your password");
            return;
        }
        if (!validatePassword(pass)) {
            // setError("Password should contain at least 8 characters and must contain one uppercase, one lowercase, one digit, and one special character!");
            toast.error("Password should contain at least 8 characters and must contain one uppercase, one lowercase, one digit, and one special character!");
            return;
        }
        // Perform the API call here
        axios.post(`${process.env.REACT_APP_URL}/auth/login`, {
            email: userData?.email,
            role: userData?.role,
            password: pass
        }).then((response) =>  {
            localStorage.setItem("isLocked", 'false')
            navigate("/dashboard")
            toast.success("Welcome back!")
        }).catch((error) => {
            // setError(error)
            toast.error("Invalid Password")
        })
    };

    return (
        <React.Fragment>
            <div className="bg-pattern" style={{ height: "100vh" }}>
                <div className="bg-overlay"></div>
                <div className="account-pages pt-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6} md={8} xl={4}>
                                <Card className='mt-5'>
                                    <CardBody className="p-4">
                                        <div>
                                            <div className="text-center">
                                                <Link to="/">
                                                    <img src={logodark} alt="" height="24" className="auth-logo logo-dark mx-auto" />
                                                    <img src={logolight} alt="" height="24" className="auth-logo logo-light mx-auto" />
                                                </Link>
                                            </div>
                                            <h4 className="font-size-18 text-muted mt-2 text-center">Locked Screen</h4>
                                            <p className="mb-5 text-center">Enter your password to unlock the screen!</p>
                                            <form className="form-horizontal" onSubmit={handleSubmit}>
                                                <Row>
                                                    <Col md={12}>
                                                        <div className="user-thumb text-center m-b-30">
                                                            <img src={userData?.avatar || avatar1} className="rounded-circle avatar-lg img-thumbnail mx-auto d-block" alt="thumbnail" />
                                                        </div>
                                                        <div className="mb-4 position-relative">
                                                            <Label className="form-label">Password</Label>
                                                            <Input
                                                            name="password"
                                                            type={show ? "text" : "password"}
                                                            placeholder="Enter Password"
                                                            onChange={handleChange}
                                                            value={pass}
                                                            />
                                                            <button
                                                            onClick={() => setShow(!show)}
                                                            className="btn btn-link position-absolute end-0"
                                                            style={{ top: "74%", transform: "translateY(-50%)" }}
                                                            type="button"
                                                            >
                                                            <i className={`mdi mdi-eye${show ? "-off" : ""}`}></i>
                                                            </button>
                                                        </div>
                                                        {/* {error && <div className="text-danger mt-2">{error}</div>} */}
                                                        <div className="d-grid mt-4">
                                                            <button
                                                                className="btn btn-primary waves-effect waves-light"
                                                                type="submit"
                                                            >
                                                                Sign In
                                                            </button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-5 text-center">
                                    <p className="text-white-50">Not you? Return <Link to="/login" className="fw-medium text-primary"> Sign In </Link></p>
                                    <p className="text-white-50">© {new Date().getFullYear()} aaMOBee.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LockScreen;
