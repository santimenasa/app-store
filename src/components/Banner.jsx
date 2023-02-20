import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const [image, setImage] = useState('')
  async function getHandler() {
    const response = await axios.get("https://fakestoreapi.com/products");
    try {
      const images = response.data.map((item, i) => item.image);
      //console.log(images);
      setImage(images[0])
    } catch (error) {
      console.log(error);
    }
  }
  getHandler() 
//console.log(image);
const sliderStyle = {
  
  height:"400px",
  position: "relative"
}
const slideStyles = {
  width:"15%",
  height:"100%",
  margin: "0 auto",
  marginTop:"5%",
  borderRaius: "10px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundImage: `url(${image})`
}
  return (
    <div className="slider" style={sliderStyle}>
      <div className="arrowLeft"></div>
      <div className="arrowRight"></div>
      <div style={slideStyles}></div>
    </div>
  );
};

export default Banner;
