import React from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Form method="post">
        <FormGroup>
          <label>Name</label>
          <FormControl name="name" required />
        </FormGroup>
        <FormGroup>
          <label>Email</label>
          <FormControl type="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <label>Subject</label>
          <FormControl name="subject" required />
        </FormGroup>
        <FormGroup>
          <label>Message</label>
          <textarea name="message" className="form-control" required />
        </FormGroup>
        <Button type="submit" variant="success">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
