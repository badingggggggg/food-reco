'use client';

import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { MenuItem } from '@/types/menu';
import MenuCard from '@/components/MenuCard';
import Link from 'next/link';

const sampleMenu: MenuItem[] = [
  {
    title: 'Adobo',
    description:
      'Classic Filipino adobo made with tender pork or chicken simmered in soy sauce, vinegar, and garlic.',
    image: 'images/adobo.jpg',
  },
  {
    title: 'Bagnet',
    description:
      'Crispy deep-fried pork belly that’s crunchy on the outside and juicy inside.',
    image: 'images/adobo.jpg',
  },
  {
    title: 'Pinakbet',
    description:
      'A healthy vegetable dish cooked with fermented fish sauce and flavorful spices.',
    image: 'images/adobo.jpg',
  },
];

export default function Home() {
  return (
    <>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-start">
            <h1>Authentic Flavors from Agoo, La Union</h1>
            <p>
              Savor the rich culinary heritage of Agoo with every bite. We bring
              you the freshest local ingredients, traditional recipes, and bold
              flavors that tell the story of La Union’s vibrant food culture.
            </p>
            <p>
              From famous Ilocano dishes to modern twists on Filipino favorites,
              <strong> Lutong Agoo </strong> is your go-to for comfort food
              delivered hot and fresh.
            </p>
            <Link href="/about">
              <Button variant="success">Read More</Button>
            </Link>
          </Col>

          <Col md={6} className="d-flex justify-content-center">
            <Image
              src="images/adobo.jpg"
              alt="Delicious food from Agoo"
              fluid
              roundedCircle
              style={{ objectFit: 'cover', height: '500px', width: '500px' }}
            />
          </Col>
        </Row>
      </Container>

      <Container className="my-5" id="menu">
        <h2 className="mb-4 text-center">Top Menu</h2>
        <Row>
          {sampleMenu.map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <MenuCard
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
