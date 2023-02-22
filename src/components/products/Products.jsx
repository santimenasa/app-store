import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { Grid } from "@mui/material";
const Products = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const response = await axios.get("https://fakestoreapi.com/products");

      setCards(response.data);
    }
    fetchCards();
  }, []);

  console.log(cards);

  return (
    <div className="products">
    <Grid
    container spacing={3}
    direction="row"
    justifyContent="space-between"
    alignItems="center"
  
    
    >
      {cards.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          category={product.category}
        />
      ))}
    </Grid>
    </div>
  );
};

export default Products;
