import React from "react";
import { useSelector } from "react-redux";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <Row xs={1} sm={1} md={2} lg={3} xl className="g-4">
      {products.map((product) => (
        <Col key={product.id}>
          <CardGroup>
            <Card>
              <Link to={`/product/${product.id}`}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "300px", objectFit: "contain" }}
                />
              </Link>
              <hr />
              <Card.Body>
                <Card.Title style={{ fontSize: "0.8rem" }}>
                  {product.title}
                </Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                {product.category}
              </Card.Footer>
            </Card>
          </CardGroup>
        </Col>
      ))}
    </Row>
  );
};

export default ProductComponent;
