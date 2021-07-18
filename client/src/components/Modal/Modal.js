import react from "react";
import { useState } from 'react';
import { Button , Modal , Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form_c from '../Form/Form';

const ModalComponent = () =>
{
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState(null);

    const [validated, setValidated] = useState(false);

    const modalHandler = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = (event) => {
      const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
        //console.log("name :",{name});
        //setShow(false);
        console.log("file :",{file});
    }

    const handleEmailChange = (event) => setEmail(event.target.value);

    const handleFileSelect = (event) => setFile(event.target.files[0]);


    const formmy = () => {
     
    }
        
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Add Post
        </Button>
        <p>{name} {email}</p>
    
        <Modal show = {show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Woohoo, you're reading this text in a modal!</p>
            
            <Form_c show = {show} setShow = {setShow} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        

    );
}

export default ModalComponent;