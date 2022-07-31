import React from "react";
import { useState } from "react";


export default function AddEmployee ()

{ 
    const [name, setName] = useState("");
    const [workNumber, setWorkNumber] = useState("");
    function handleSubmit(event) {
      event.preventDefault();
      const formData = { Name: name, workNumber: workNumber };

      console.log( 'my',formData);
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

    return (
        <div>
            <h1>Add Employee</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" placeholder="Input employee  Name" onChange={(event)=>{setName(event.target.value)}} />
                <label>work number</label>
                <input type="text" name="workNumber" placeholder="work number" onChange={ ( event ) => { setWorkNumber( event.target.value ) } } />
                <button type="submit">Add Employee</button>
            </form>
        </div>
    )
}