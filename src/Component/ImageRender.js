import React, { useState } from 'react';
import { Fab } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function ImageRender({ images }) {
  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // You can adjust the objectFit property based on your needs
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%', // You can adjust the height as needed
  };

  const fabStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const [imageIndex, setImageIndex] = useState(0);

  const goToPrevSlide = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Check if images array is empty or index is out of range
  if (!images || images.length === 0 || imageIndex >= images.length || !images[imageIndex]?.ImageURL) {
    return <div>No images available or invalid index</div>;
  }

  return (
    <div style={containerStyle}>
      <a href={images[imageIndex].ImageLink} target="_blank" rel="noreferrer" style={{ width: '100%', height: '100%', display: 'block' }}>
        <img style={imgStyle} src={images[imageIndex].ImageURL} alt="" />
      </a>
      <Fab color="primary" style={{ ...fabStyle, left: 0 }} onClick={goToPrevSlide}>
        <NavigateBeforeIcon />
      </Fab>
      <Fab color="primary" style={{ ...fabStyle, right: 0 }} onClick={goToNextSlide}>
        <NavigateNextIcon />
      </Fab>
    </div>
  );
}
