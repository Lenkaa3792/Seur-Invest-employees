import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import
  {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  } from 'reactstrap'

export default function AddUser ()
{
  const [ name, setName ] = useState( "" );
  const [ workNumber, setWorkNumber ] = useState( "" );

  function handlename (event)
  {
    setName( event.target.value );
  }
  function handleworkNumber (event)
  {
    setWorkNumber( event.target.value );
  }
  function handleSubmit ( event )
  {
    event.preventDefault();
    // console.log( name, workNumber );
    if (name === "" || workNumber === "")
    {
      alert( "Please fill all the fields" );
    }
    else
    {

      fetch("http://localhost:3000/SeurEmployees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, workNumber }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setName("");
          setWorkNumber("");
        });
    }
    
    
    console.log( name, workNumber );
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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
        <Button type="submit">Submit</Button>
        <Link to={"/"} className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
}
