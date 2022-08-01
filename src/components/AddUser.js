import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function AddUser() {
  const [name, setName] = useState("");
  const [workNumber, setWorkNumber] = useState("");

  function handlename(event) {
    setName( event.target.value );
    console.log(event.target.value);
  }
  function handleworkNumber(event) {
    setWorkNumber( event.target.value );
     console.log(event.target.value);
  }
  function handleSubmitting ( event )
  {
   
    event.preventDefault();
    const formData = { "Name": name, "workNumber": workNumber };
    console.log( formData );
    fetch("http://localhost:3000/SeurEmployees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName("");
        setWorkNumber("");
      });
  }
    
  

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = { "Name": name, "workNumber":workNumber }
    
  //   console.log(formData);
    

  return (
    <div>
      <Form  onSubmit={handleSubmitting}>
        <FormGroup>
          <label>Name</label>
          <Input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handlename}
          />
        </FormGroup>
        <FormGroup>
          <label>Work Number</label>
          <Input
            type="text"
            name="name"
            placeholder="work number"
            onChange={handleworkNumber}
          />
        </FormGroup>
        <Button type="submit" onClick={handleSubmitting} >Submit</Button>
        <Link to={"/"} className="btn btn-danger ml-2">
          List
        </Link>
      </Form>
    </div>
  );
}

// if (name === "" || workNumber === "") {
//   alert("Please fill all the fields");
// } else {
//   fetch("http://localhost:3000/SeurEmployees", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ Name: name, workNumber: workNumber }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       setName("");
//       setWorkNumber("");
//     });
// }

// console.log(name, workNumber);