import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProdects } from "../redux/actions/productAction";
import { Container } from "react-bootstrap";

const ProductList = () => {
  const dispatch = useDispatch();
  const getProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products/");
    dispatch(setProdects(data));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <ProductComponent />
    </Container>
  );
};

export default ProductList;
