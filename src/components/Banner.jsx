import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import axios from "axios";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState("");
  useEffect(() => {
    async function getHandler() {
      const response = await axios.get("https://fakestoreapi.com/products");
      try {
        const images = response.data.map((item, i) => item.image);
        setImage(images);
      } catch (error) {
        console.log(error);
      }
    }
    getHandler();
  }, []);
  function nextItem() {
    if (index < 19) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function prevItem() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(19);
    }
  }

  console.log(index);
  return (
    <div className="banner">
      <button onClick={nextItem} className="nextItem">
        <KeyboardDoubleArrowRightIcon />
      </button>
      <div className="banner-inner">
        <img src={image[index]} alt="" className="imagen" />
      </div>
      <button onClick={prevItem} className="prevItem">
        <KeyboardDoubleArrowLeftIcon />
      </button>
    </div>
  );
};

export default Banner;
