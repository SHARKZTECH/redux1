import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  selectedProduct,
  removeselectedProduct
} from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { id } = useParams();
  const dispatch = useDispatch();

  const getProduct = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch(selectedProduct(data));
  };
  useEffect(() => {
    dispatch(removeselectedProduct());
    getProduct();
  }, [id]);

  const { title, price, description, image, category } = product;
  return (
    <Container>
      {Object.keys(product).lenght === 0 ? (
        <div>...Loading</div>
      ) : (
        <Row>
          <Col md={6}>
            <Image
              src={image}
              alt={title}
              fluid
              thumbnail
              style={{ height: "500px", objectFit: "contain" }}
            />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header as="h5">Product Details</Card.Header>
              <Card.Body>
                <Card.Title style={{ color: "green" }}>{title}</Card.Title>
                <Card.Text
                  className="btn btn-success p-3"
                  style={{
                    borderBottomLeftRadius: "2.5rem",
                    borderTopLeftRadius: "4rem",
                    fontWeight: "800"
                  }}
                >
                  ${price}
                </Card.Text>
                <Card.Text
                  style={{
                    color: "orange",
                    background: "wheat",
                    padding: "0.5rem"
                  }}
                >
                  {category}
                </Card.Text>
                <Card.Text>{description}</Card.Text>
                <Button variant="danger">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetails;
