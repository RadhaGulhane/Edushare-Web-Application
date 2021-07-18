import react from "react";
import { useState } from 'react';
import { Button , Modal , Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const FormCustom = ({show , setShow}) =>{
    const [year, setYear] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    const [validated, setValidated] = useState(false);


    const handleSubmit = (event) => {
       // const form = event.currentTarget;
      //   if (form.checkValidity() === true){
      //       //close setShow
      //   }
      // if (form.checkValidity() === false) {
      //   event.preventDefault();
      //   event.stopPropagation();
      // }

      var data = new FormData();
      
      data.append("year", year);
      data.append("subject", subject);
      data.append("description", description);
      data.append("file", file);
     
     
    //   const requestOptions = {
    //     method: 'POST',
    //     body : data,
    // };
    // fetch('http://localhost:3001/temp', requestOptions)
    //     .then((res) => res.json());

    // axios.post("http://localhost:3001/temp", data, { 
    //       // receive two    parameter endpoint url ,form data
    //   })
    // .then(res => { // then print response status
    //     console.log(res.statusText)
    //  })
    
    axios.post(
      "http://localhost:3001/upload", 
      data, { 
          // receive two    parameter endpoint url ,form data
      })
    .then(res => { // then print response status
        console.log(res.statusText)
     })

      setValidated(true);
      setShow(false);
  }

  const handleYearChange = (event) => setYear(event.target.value);

  const handleSubjectChange = (event) => setSubject(event.target.value);

  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleFileSelect = (event) => setFile(event.target.files[0]);


    return(
        // <Form noValidate validated={validated} onSubmit={handleSubmit}>
        // <Form.Row>
        //   <Form.Group  md="4" controlId="validationCustom01">
        //     <Form.Label>First name</Form.Label>
        //     <Form.Control
        //       required
        //       type="text"
        //       placeholder="First name"
        //       defaultValue="Mark"
        //     />
        //     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        //   </Form.Group>
        //   <Form.Group  md="4" controlId="validationCustom02">
        //     <Form.Label>Last name</Form.Label>
        //     <Form.Control
        //       required
        //       type="text"
        //       placeholder="Last name"
        //       defaultValue="Otto"
        //     />
        //     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        //   </Form.Group>
          
        // </Form.Row>
        // <Form.Row>
        //   <Form.Group  md="6" controlId="validationCustom03">
        //     <Form.Label>City</Form.Label>
        //     <Form.Control type="text" placeholder="City" required />
        //     <Form.Control.Feedback type="invalid">
        //       Please provide a valid city.
        //     </Form.Control.Feedback>
        //   </Form.Group>
        //   <Form.Group  md="3" controlId="validationCustom04">
        //     <Form.Label>State</Form.Label>
        //     <Form.Control type="text" placeholder="State" required />
        //     <Form.Control.Feedback type="invalid">
        //       Please provide a valid state.
        //     </Form.Control.Feedback>
        //   </Form.Group>
        //   <Form.Group  md="3" controlId="validationCustom05">
        //     <Form.Label>Zip</Form.Label>
        //     <Form.Control type="text" placeholder="Zip" required />
        //     <Form.Control.Feedback type="invalid">
        //       Please provide a valid zip.
        //     </Form.Control.Feedback>
        //   </Form.Group>
        // </Form.Row>
        // <Form.Group>
        //   <Form.Check
        //     required
        //     label="Agree to terms and conditions"
        //     feedback="You must agree before submitting."
        //   />
        // </Form.Group>
        // <Button type="submit">Submit form</Button>
        // </Form>


        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
          <Form.Group  md="4" >
            <Form.Label>Year</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Year"
              onChange={handleYearChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group  md="4" >
            <Form.Label>Subject</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Subject"
              onChange={handleSubjectChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group  md="4" >
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="textarea"
              placeholder="Description"
              onChange={handleDescriptionChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group  md="4" >
            <Form.Label>File</Form.Label>
            <Form.Control
              required
              type="file"
              placeholder="choose file"
              onChange={handleFileSelect}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        
        <Button type="submit">Submit form</Button>
        </Form>
      
    );

}

export default FormCustom;


