import ImageItem from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const LogoCarousal = ({
  images,
}: {
  images: { url: string; alt: string }[];
}) => {
  const items = images.map((img, i) => (
    <div key={img.alt} className="relative w-56 mx-3 max-w-56 h-32">
      <ImageItem
        alt={img.alt}
        objectFit="contain"
        layout="fill"
        src={img.url}
        width="12rem"
        height="7rem"
        className="px-3"
      />
    </div>
  ));

  return (
    <AliceCarousel
      autoPlay
      //   autoPlayControls
      autoPlayStrategy="none"
      autoPlayInterval={5000}
      animationDuration={1000}
      infinite
      autoWidth
      touchTracking={false}
      disableDotsControls
      disableButtonsControls
      mouseTracking
      items={items}

    />
  );
};

export default LogoCarousal;
