import React from "react";

const ImageList = props => {
  console.log(props.images)
  const imaged = (props.images.map(image => {
    return <img src={image.urls.regular} alt='img' />;
  }));

  return <div>{imaged}</div>;
};


export default ImageList;
