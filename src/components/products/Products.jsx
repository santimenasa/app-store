import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import Navbar from "../Navbar";
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
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
        <Navbar /> 
      <div className="filter">
        <span className="input-span">
          <input
            className="input"
            type={"text"}
            placeholder={`Product`}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </span>
      </div>
      <div className="products">
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {cards
            .filter((val) => {
              if (!searchTerm) {
                return val;
              } else if (
                val.title
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((product) => (
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
    </>
  );
};

export default Products;
