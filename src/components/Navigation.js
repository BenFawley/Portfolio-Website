import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
          <a href="mailto:benfawley0@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} size="xl" inverse />
          </a>
          <a href="https://github.com/BenFawley" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="xl" inverse />
          </a>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="xl" inverse />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
