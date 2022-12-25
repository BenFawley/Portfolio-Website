import { useRef, useState, useEffect } from "react";
import styles from "./Projects.module.css";
import mountain from "../images/mountains.jpg";

const Projects = () => {
  const trackerRef = useRef();
  const wrapperRef = useRef();
  const [mousePosition, setMousePosition] = useState(0);
  const [prevMousePosition, setPrevMousePosition] = useState(0);

  useEffect(() => {}, [mousePosition]);

  let track;

  const handleMouseDown = (e) => {
    const track = (trackerRef.current.mouseDownPos = e.clientX);
    setMousePosition(track);
    return track;
  };

  const handleMouseMove = (e) => {
    if (mousePosition === 0) return;

    const mouseDelta = parseFloat(mousePosition) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentValue = (mouseDelta / maxDelta) * -100;
    console.log(percentValue);

    trackerRef.current.style.transform = `translate(${percentValue}%, -50%)`;
    setPrevMousePosition(percentValue);
  };

  const handleMouseUp = (e) => {
    setMousePosition(0);
  };

  return (
    <div ref={wrapperRef} className={styles.projectWrapper}>
      <div
        ref={trackerRef}
        id="imageTracker"
        className={styles.imageTracker}
        data-mouse-down-pos={0}
        data-prev-percentage={0}
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
