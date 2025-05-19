import Link from 'next/link';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface MenuCardProps {
  title: string;
  description: string;
  image: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, description, image }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={image}
        style={{ height: '200px', objectFit: 'cover' }}
        alt={title}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link href={`/menu/${title}`}>
          <Button variant="success" className="mt-3">
            View Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;
