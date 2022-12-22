import styles from "./Button.module.css";

const Button = ({ text, onClick, type, transparent }) => {
  return (
    <button
      type={type}
      className={
        transparent ? `${styles.button} ${styles.transparent}` : styles.button
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
