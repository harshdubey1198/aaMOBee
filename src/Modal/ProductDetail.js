import React from 'react';
import { Modal, ModalHeader, ModalBody, Table, FormGroup, Label, Input, Button } from 'reactstrap';

const ProductDetail = ({ isOpen, toggleModal, selectedItemDetails }) => {
  
  console.log(selectedItemDetails)
  return (
    <Modal isOpen={isOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Product Details</ModalHeader>
      <ModalBody>
        {selectedItemDetails && (
          <div>
            <h4>{selectedItemDetails.name}</h4>
            <p><strong>Description:</strong> {selectedItemDetails.description}</p>
            <p><strong>Category:</strong> {selectedItemDetails.category}</p>
            <p><strong>Sub Category:</strong> {selectedItemDetails.subcategory}</p>
            <p><strong>Type:</strong> {selectedItemDetails.type}</p>
            <p><strong>Size:</strong> {selectedItemDetails.size}</p>
            <p><strong>Color:</strong> {selectedItemDetails.color}</p>
            <p><strong>Brand:</strong> {selectedItemDetails.brandName}</p>
            <p><strong>Supplier:</strong> {selectedItemDetails.supplier}</p>

            <h5>Variants:</h5>
            <div className="table-responsive"></div>
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Variant</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Tax</th>
                </tr>
              </thead>
              <tbody>
                {selectedItemDetails.variants.map(variant => (
                  <tr key={variant.id}>
                    <td>{variant.name}</td>
                    <td>${variant.price.toFixed(2)}</td>
                    <td>{variant.quantity}</td>
                    <td>{variant.tax}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};

export default ProductDetail;
