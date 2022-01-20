import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CategoryList = [
  { label: 'Primary', value : 'primary'},
  { label: 'Secondary', value : 'secondary'},
  { label: 'Success', value : 'success'},
]

const AddTodo = (props) => {
  const { show, handleClose, addTodo, editData, handleEditData } = props;
  const [name, setName] = useState(editData.name || '');
  const [category, setCategory] = useState(editData.category || '');

  useEffect(() => {
    setName(editData.name || '');
    setCategory(editData.category || '');
  }, [editData.category, editData.name, show]);

  const handleData = () => {
    if( name !== "" && category !== ""){
      editData.id !== undefined ? handleEditData( editData.id, { name, category})  :  addTodo({ name, category})
    }else{
      alert("All field are required.")
    }
  } 

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editData.id !== undefined ? 'Edit' : 'Add'} Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text" 
          placeholder="Enter Name" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Category</Form.Label>
        <Form.Select value={category} onChange={e => setCategory(e.target.value)}>
          <option>Select Category</option>
          {
            CategoryList.map(item => <option value={item.value}>{item.label}</option>)
          }
        </Form.Select>
      </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleData()}>
          {editData.id !== undefined ? 'Edit' : 'Add'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTodo;
