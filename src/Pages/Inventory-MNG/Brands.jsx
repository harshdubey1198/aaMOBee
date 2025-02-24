import React, { useState } from 'react';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Container, Table, Modal, ModalBody, ModalFooter, Button, Input } from 'reactstrap';
import FetchBrands from './FetchBrands';
import BrandModal from '../../Modal/BrandModal';
import axiosInstance from '../../utils/axiosInstance';
import { toast } from 'react-toastify';

const Brands = () => {
  const authuser = JSON.parse(localStorage.getItem("authUser")).response;
  const firmId = authuser?.adminId;
  const [brands, setBrands] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [brandToEdit, setBrandToEdit] = useState(null);
  const [brandToAdd, setBrandToAdd] = useState(null);
  const [brandToDelete, setBrandToDelete] = useState(null);
  const [triggerBrand, setTriggerBrand] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  const handleBrandsFetched = (fetchedBrands) => setBrands(fetchedBrands);

  const handleBrandEdit = (brand) => {
    setBrandToEdit(brand);
    toggleModal();
  };
  
  const handleBrandAdd = (brand) => {
    setBrandToAdd(brand);
    toggleModal();
  };

  const handleBrandDelete = (brand) => {
    setBrandToDelete(brand);
    toggleDeleteModal();
  };

  const confirmDelete = async () => {
    if (!brandToDelete) return;
    try {
      const response = await axiosInstance.delete(`${process.env.REACT_APP_URL}/brand/delete-brand/${brandToDelete._id}`);
      setBrands(brands.filter((brand) => brand._id !== brandToDelete._id));
      toast.success(response.message);
    } catch (error) {
      toast.error("Failed to delete brand.");
    } finally {
      setBrandToDelete(null);
      toggleDeleteModal();
    }
  };

  const handleBrandUpdated = (updatedBrand) => {
    setBrands((prevBrands) =>
      prevBrands.map((brand) =>
        brand._id === updatedBrand._id ? updatedBrand : brand
      )
    );
    setBrandToEdit(null);
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    brand.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Inventory Management" breadcrumbItem="Brands" />
          <FetchBrands onBrandsFetched={handleBrandsFetched} triggerBrand={setTriggerBrand} firmId={firmId} />
        </div>

        <Container className="my-3">
          <Input
            type="text"
            placeholder="Search by name or country"
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ width: '100%', padding: '10px' }}
          />
        </Container>

        <div className='relative h-35'>   
          <i className='bx bx-plus ab-right' style={{ fontSize: "24px", fontWeight: "bold", cursor: "pointer", backgroundColor:"lightblue" , padding:"2px", marginLeft:"5px", borderRadius:"5px" }} onClick={handleBrandAdd}></i>
        </div>
        
        <div className='table-responsive'>
          <Table bordered className='table table-centered table-nowrap mb-0'>
            <thead className='thead-light'>
              <tr>
                <th>Brand Name</th>
                <th>Country</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBrands.map((brand) => (
                <tr key={brand._id}>
                  <td>
                    <a 
                      href={brand.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: '#007bff' }}
                    >
                      {brand.name}
                    </a>
                  </td>
                  <td>{brand.country}</td>
                  <td>{brand.description.length > 30 ? brand.description.slice(0, 30) + "..." : brand.description}</td>
                  <td>
                    <i
                      className='bx bx-edit'
                      style={{ fontSize: '22px', fontWeight: 'bold', cursor: 'pointer' }}
                      onClick={() => handleBrandEdit(brand)}
                    ></i>
                    <i
                      className='bx bx-trash'
                      style={{ fontSize: '22px', fontWeight: 'bold', cursor: 'pointer', marginLeft: '5px' }}
                      onClick={() => handleBrandDelete(brand)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <BrandModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        brandToEdit={brandToEdit}
        onBrandUpdated={handleBrandUpdated}
        setTriggerBrand={setTriggerBrand}
        brandToAdd={brandToAdd}
      />
      
      <Modal isOpen={isDeleteModalOpen} toggle={toggleDeleteModal}>
        <ModalBody>Are you sure you want to delete this brand?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={confirmDelete}>Delete</Button>
          <Button color="secondary" onClick={toggleDeleteModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default Brands;
