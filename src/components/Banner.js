// import bannerImg from "../images/Programming-pana.png";
import styles from "./Banner.module.css";
import Button from "./Button";
import ThreeBanner from "./ThreeBanner";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <>
      <div className={styles.homebanner}>
        <div className={styles.homebannerContent}>
          <div className={styles.bannerText}>
            <h1>
              Hello, my name is <br />
              <strong className={styles.textBlue}>Ben Fawley</strong>
            </h1>
            <TypeAnimation
              sequence={[
                1500,
                "Junior Web Developer",
                1000,
                "Junior Frontend Developer",
                2000,
              ]}
              wrapper={"h1"}
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "50px" }}
              speed={10}
            />
            <Button text="Download CV" transparent={false} type="button" />
            <Button text="Contact Me" transparent={true} type="button" />
          </div>
          {/* <img src={bannerImg} alt="Banner Coding Illustration" /> */}
          <ThreeBanner />
        </div>
      </div>
    </>
  );
};

export default Banner;
