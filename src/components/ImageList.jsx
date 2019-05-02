import React from "react";
import ImageCard from "./ImageCard";
const ImageList = props => {
  console.log(props.images);
  const imaged = props.images.map(image => {
    return <ImageCard src={image.urls.regular} alt='img' image={image} />;
  });

  return <div className='image-list'>{imaged}</div>;
};

export default ImageList;
