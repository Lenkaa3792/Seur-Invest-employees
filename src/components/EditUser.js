import React from "react";

import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function EditUser() {
  return (
    <div>
      <Form>
        <FormGroup>
          <label>Name</label>
          <Input type="text" name="name" placeholder="Input employee  Name" />
        </FormGroup>
        <FormGroup>
          <label>Work number</label>
          <Input type="text" name="name" placeholder="work number" />
        </FormGroup>

        <Button type="submit">Edit Name</Button>
        <Link to={"/"} className="btn btn-danger ml-2">
          List
        </Link>
      </Form>
    </div>
  );
}
