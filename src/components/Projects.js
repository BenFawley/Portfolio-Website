import { useRef, useState, useEffect } from "react";
import styles from "./Projects.module.css";
import mountain from "../images/mountains.jpg";

const Projects = () => {
  const [mousePosition, setMousePosition] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const trackerRef = useRef();
  const wrapperRef = useRef();

  let mouseUpPercentage;

  const handleMouseDown = (e) => {
    setMousePosition(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (mousePosition === 0) return;

    const mouseDelta = mousePosition - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentValue = (mouseDelta / maxDelta) * -100;
    const nextPercentage = prevPercentage + percentValue;
    mouseUpPercentage = nextPercentage;

    trackerRef.current.style.transform = `translate(${percentValue}%, -50%)`;
  };

  const handleMouseUp = () => {
    setMousePosition(0);
    setPrevPercentage(mouseUpPercentage);
  };

  return (
    <div ref={wrapperRef} className={styles.projectWrapper}>
      <div
        ref={trackerRef}
        id="imageTracker"
        className={styles.imageTracker}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        // style={{ transform: `translate(${percentage}%, -50%)` }}
      >
        <img src={mountain} alt="mountains" draggable={false} />
        <img src={mountain} alt="mountains" draggable={false} />
        <img src={mountain} alt="mountains" draggable={false} />
        <img src={mountain} alt="mountains" draggable={false} />
        <img src={mountain} alt="mountains" draggable={false} />
      </div>
    </div>
  );
};

export default Projects;
