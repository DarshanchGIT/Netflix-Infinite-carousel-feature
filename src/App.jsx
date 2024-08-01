import React, { useState } from "react";
import "./App.css";

export default function App() {
  const data = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    image_uri: `https://picsum.photos/200/300?cars=${i + 1}`,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  // Get the two images to display
  const getVisibleImages = () => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(data[(currentIndex + i) % data.length]);
    }
    // const firstImageIndex = currentIndex;
    // const secondImageIndex = (currentIndex + 1) % data.length;
    // return [data[firstImageIndex], data[secondImageIndex]];
    return arr;
  };

  const visibleImages = getVisibleImages();

  return (
    <>
      {/* <h2>Netflix Infinite Scroll</h2> */}
      <div className="main" style={{ fontFamily:"poppins", fontSize: "30px", display:"flex", flexDirection:"column", marginTop:"100px",}} >
        <h2>Netflix Infinite Scroll</h2>
        <div className="main">
          <button className="btn" onClick={handlePrev}>
            Prev
          </button>
          <div>
            {visibleImages.map((image) => (
              <img
                width={260}
                height={230}
                key={image.id}
                src={image.image_uri}
                style={{
                  border: "3px solid black",
                  borderRadius: "10px",
                  padding: "0, 3px",
                  margin: "0 5px",
                }}
              />
            ))}
          </div>
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
