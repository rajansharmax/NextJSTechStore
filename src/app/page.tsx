'use client';
import Image from "next/image";
import Banner from "./components/common/Banner";
import FlashSlider from "./components/common/FlashSlider";
import PhotosSlider from "./components/common/PhotosSlider";

const Home = () => {
  return (
    <>
      <Banner />
      <FlashSlider />
      <PhotosSlider />
    </>
  );
};

export default Home;
