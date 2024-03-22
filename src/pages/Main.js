import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { CardNews } from "../components/card/CardNews";
import "../css/main/main.css";
import { MainTop } from "../components/main/MainTop";
import { MainBottom } from "../components/main/MainBottom";



const Main = () => {
  return (
    <>
      <MainTop />
      <MainBottom />
    </>
  );
};

export default Main;