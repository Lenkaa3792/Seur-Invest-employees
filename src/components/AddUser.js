import React from "react";
import { Link } from "react-router-dom";
import
  {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  } from 'reactstrap'

export default function Adduser() {
  return (
    <div>
      <Form>
        <FormGroup>
          <label>Name</label>
          <Input type="text" name="name" placeholder="Enter Name" />
        </FormGroup>
        <FormGroup>
          <label>Work Number</label>
          <Input type="text" name="name" placeholder="work number" />
        </FormGroup>
        <Button type="submit" >Submit</Button>
        <Link to={"/"} className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
}
