import Input from '@/components/Input';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container id="contact" className="my-5 vh-100">
      <h2 className="mb-4 text-success fw-bold">Contact Us</h2>
      <p className="mb-5 fs-5">
        Have questions, want to place a special order, or just want to say hi?
        We&apos;d love to hear from you!
      </p>

      <Row>
        <Col md={6} className="mb-5">
          <h5 className="mb-3 text-success">Contact Details</h5>
          <p className="mb-2">
            <strong>Email:</strong>{' '}
            <a
              href="mailto:contact@lutongagoo.com"
              className="text-decoration-none text-success"
            >
              contact@lutongagoo.com
            </a>
          </p>
          <p className="mb-2">
            <strong>Phone:</strong>{' '}
            <a
              href="tel:+639123456789"
              className="text-decoration-none text-success"
            >
              +63 912 345 6789
            </a>
          </p>
          <p className="mb-0">
            <strong>Address:</strong> Agoo, La Union, Philippines
          </p>
        </Col>

        <Col md={6}>
          <h5 className="mb-3 text-success">Send Us a Message</h5>
          <form>
            <Input label="Name" />
            <Input label="Email" type="email" />
            <textarea
              name=""
              id=""
              placeholder="Write your message here..."
              className="form-control"
            ></textarea>
            <Button variant="success" type="submit" className="w-100 mt-3">
              Send Message
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
