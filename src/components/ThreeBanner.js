import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import styles from "./ThreeBanner.module.css";
import { useSpring, animated } from "@react-spring/three";

const Sphere = () => {
  const meshRef = useRef();
  const [animate, setAnimate] = useState({
    scale: 100,
    active: false,
  });
  // useFrame(() => {
  //   if (!meshRef.current) {
  //     return;
  //   }
  //   // meshRef.current.rotation.x += 0.001;
  //   // meshRef.current.rotation.y += 0.002;
  // });
  // useFrame(({ mouse }) => {
  //   const x = (mouse.x * viewport.width) / 2;
  //   const y = (mouse.y * viewport.height) / 2;
  //   meshRef.current.position.set(x, y, 0);
  //   meshRef.current.rotation.set(-y, x, 0);
  // });

  const { scale } = useSpring({
    scale: animate.scale,
    active: animate.active,
  });

  useEffect(() => {
    setAnimate({
      scale: 1,
      active: true,
    });
  }, [animate]);

  return (
    <animated.mesh ref={meshRef} scale={scale}>
      <points>
        <sphereGeometry args={[2, 32, 32]} />
        {/* <meshStandardMaterial color="#1079f3" wireframe /> */}
        <pointsMaterial
          attach="material"
          color="#1079f3"
          size={0.02}
          sizeAttenuation
          transparent={false}
        />
      </points>
    </animated.mesh>
  );
};

export default function ThreeBanner() {
  return (
    <Canvas className={styles.canvas}>
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />
      <ambientLight />
      <pointLight position={[50, 50, 50]} />
      <Sphere />
      <OrbitControls
        autoRotate
        autoRotateSpeed={4}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}
