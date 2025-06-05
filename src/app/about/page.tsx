'use client';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container id="about" className="mt-4 vh-100">
      <Row className="align-items-center mb-5">
        <Col md={8}>
          <h2 className="mb-4 text-success fw-bold">About Us</h2>
          <p>
            <strong>Lutong Agoo</strong> was born in the heart of Agoo, La
            Union, out of a deep love for Ilokano cooking and tradition. Our
            founders— local chefs and food lovers—came together to bring
            familiar flavors to life, using ingredients sourced from nearby
            farms and coastal communities.
          </p>
          <p>
            Whether you&apos;re a kababayan craving comfort food or a curious
            traveler exploring La Union, <strong>Lutong Agoo</strong> offers a
            flavorful journey through Ilokano heritage—served fresh, hearty, and
            made with love.
          </p>
        </Col>
        <Col md={4}>
          <Image
            src="images/image2.jpeg"
            alt="Lutong Agoo"
            fluid
            rounded
            className="shadow"
            width={400}
            height={400}
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={4}>
          <h4>Our Mission</h4>
          <p>
            To deliver authentic Ilocano food made with love and local
            ingredients, while supporting our community&apos;s culinary and
            agricultural roots.
          </p>
        </Col>
        <Col md={4}>
          <h4>Our Vision</h4>
          <p>
            To become the leading local food brand representing Agoo and La
            Union, preserving traditions through flavor and experience.
          </p>
        </Col>
        <Col md={4}>
          <h4>Our Values</h4>
          <ul>
            <li>Authenticity</li>
            <li>Community Support</li>
            <li>Freshness & Quality</li>
            <li>Sustainability</li>
            <li>Passion for Service</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
