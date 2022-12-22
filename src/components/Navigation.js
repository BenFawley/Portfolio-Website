import styles from "./Navigation.module.css";

const openTag = "<";
const closeTag = "/>";

const Navigation = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <span className={styles.opening}>{openTag}</span>
          <h2>Ben Fawley</h2>
          <span className={styles.closing}>{closeTag}</span>
        </div>
        <div className={styles.links}>
          <ul>
            <li>About</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.socials}>
          <a href="#" target="_blank">
            Email
          </a>
          <a href="#" target="_blank">
            Github
          </a>
          <a href="#" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
