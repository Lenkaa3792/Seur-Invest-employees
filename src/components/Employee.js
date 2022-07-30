import React from "react";
import { Link } from "react-router-dom";

import { ListGroup, ListGroupItem, Button } from "reactstrap";
export const Employee = (  {employee}) =>
{ 
  console.log( employee);
  const employeelist = employee.map( (emp ) =>
  { 
    return (
      <ListGroupItem className="display: flex">
        <p >Work number:{emp.workNumber} </p>
        <strong>{emp.Name}</strong>
        <div className="ml-auto">
          <Link className="btn btn-warning mr-1" to="/edit">
            Edit
          </Link>
          <Button className="btn btn-danger">Delete</Button>
        </div>
      </ListGroupItem>
    );
    
  })
  return <ListGroup>
    { employeelist }
  </ListGroup>;
}
