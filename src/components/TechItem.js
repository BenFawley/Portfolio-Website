import styles from "./TechItem.module.css";

const TechItem = ({ logoSrc, text, showAnimation }) => {
  const classes = [styles.techItem, styles.show].join(" ");
  return (
    <div className={showAnimation ? classes : styles.techItem}>
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoSrc}`}
      />
      <p>{text}</p>
    </div>
  );
};

export default TechItem;
