import styles from "./Tech.module.css";
import TechItem from "./TechItem";
import { useInView } from "react-intersection-observer";

const technologies = [
  {
    id: 1,
    text: "HTML",
    logoSrc: "html5/html5-original.svg",
  },
  {
    id: 2,
    text: "CSS",
    logoSrc: "css3/css3-original.svg",
  },
  {
    id: 3,
    text: "JS",
    logoSrc: "javascript/javascript-plain.svg",
  },
  {
    id: 4,
    text: "PHP",
    logoSrc: "php/php-plain.svg",
  },
  {
    id: 5,
    text: "Magento",
    logoSrc: "magento/magento-original.svg",
  },
  {
    id: 6,
    text: "React",
    logoSrc: "react/react-original.svg",
  },
  {
    id: 7,
    text: "Next JS",
    logoSrc: "nextjs/nextjs-original.svg",
  },
  {
    id: 8,
    text: "Node JS",
    logoSrc: "nodejs/nodejs-plain-wordmark.svg",
  },
];

const Tech = () => {
  const { ref, inView } = useInView();
  return (
    <section id="tech" className={styles.technologies}>
      <h1 className={inView ? styles.showTitle : ""}>My Tech Stack</h1>
      <div ref={ref} className={styles.techWrapper}>
        {technologies.map((tech) => {
          return (
            <TechItem
              key={tech.id}
              logoSrc={tech.logoSrc}
              text={tech.text}
              showAnimation={inView}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
