import React, { useEffect, useState } from "react";
import { ErrorPage, Navbar } from "../../components";
import { Link, useParams } from "react-router-dom";
import "./chapter.css";
import GetBookContentByChapterID from './functions.js'
// lorem
const DraggableBox = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [fontSize, setFontSize] = useState('20px');
  const [fontColor, setFontColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleDragStart = (e) => {
    // Calculate the initial position of the mouse cursor within the box
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;

    const handleDrag = (e) => {
      // Update the position of the box based on the mouse cursor movement
      setPosition({ x: e.clientX - offsetX, y: e.clientY - offsetY });
    };

    const handleDragEnd = () => {
      // Remove the event listeners when dragging ends
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
    };

    // Attach the event listeners for dragging
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
  };

  const handleFontChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setFontColor(e.target.value);
  };

  const handleBackgroundChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div
      className="draggableBox"
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleDragStart}
    >
      <label htmlFor="fontSize">Font Size:</label>
      <input
        type="number"
        id="fontSize"
        value={fontSize}
        onChange={handleFontChange}
      />

      <label htmlFor="fontColor">Font Color:</label>
      <input
        type="color"
        id="fontColor"
        value={fontColor}
        onChange={handleColorChange}
      />

      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        type="color"
        id="backgroundColor"
        value={backgroundColor}
        onChange={handleBackgroundChange}
      />
    </div>
  );
};

const WhiteBoxForReading = ({ book }) => {
  if (!book) {
    // Handle the case when book is null or undefined
    return <ErrorPage />; // Render nothing if book is not available
  }

  const { chapter_content } = book[0];

  return (
    <div className="whiteBoxForReading">
      <div
        className="whiteBoxForReading__container"
        style={{
          height: "75%",
          width: "75%",
          backgroundColor: "white",
          borderRadius: "30px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          margin: "auto",
        }}
      >
        <div className="whiteBoxForReading__container__title">
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              margin: "0px",
              padding: "0px",
              width: "100%",
              height: "100%",
              display: "flex",
            }}
          >
            Chapter 1
          </h1>
        </div>
        <div className="whiteBoxForReading__container__content">
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              margin: "0px",
              padding: "0px",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {chapter_content}
          </p>
        </div>
      </div>
    </div>
  );
};



const Chapter = () => {
  const { id, chapter } = useParams();
  const [bookContent, setBookContent] = useState(null); // Initialize with null instead of undefined

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetBookContentByChapterID(chapter);
        setBookContent(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Fetch data only when component mounts

    return () => {
      // Cleanup function to cancel any ongoing requests if the component unmounts
      // This prevents setting state on an unmounted component
      // It will be triggered when the component unmounts or when the dependency array changes
      // Since there are no dependencies specified, it will only trigger on unmount
      // If there are dependencies, make sure to include them in the dependency array to trigger the cleanup when they change
      // For example, if `chapter` is a dependency, include it in the dependency array: [chapter]
      // eslint-disable-next-line react-hooks/exhaustive-deps
      return () => {
        // Cleanup function to cancel any ongoing requests if the component unmounts
        // This prevents setting state on an unmounted component
      };
    };
  }, []); // Empty dependency array to fetch data only once on mount

  return (
    <div>
      <Navbar />
      <DraggableBox />
      <WhiteBoxForReading book={bookContent} />
    </div>
  );
};


export default Chapter;
