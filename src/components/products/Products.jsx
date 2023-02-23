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
      {cards.map((item) => (
        <Product
          key={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          category={item.category}
        />
      ))}
    </Grid>
    </div>
  );
};

export default Products;
