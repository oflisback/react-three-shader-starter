import React, { useEffect, useMemo, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import CustomShader from "CustomShader";

const ShaderPlane = ({ direction, toggleDirection }) => {
  // Pointer cursor on hover to show that the cube is clickable
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  // useMemo to avoid startTime reset on each render
  const startTime = useMemo(() => Date.now(), []);

  const meshRef = useRef();

  useFrame(() => {
    // Set fragment shader time value
    meshRef.current.material.uniforms.iGlobalTime.value =
      (Date.now() - startTime) * 0.05;

    // Rotate the cube
    meshRef.current.rotation.x += direction * 0.01;
    meshRef.current.rotation.y += direction * 0.01;
  });

  return (
    <mesh
      ref={meshRef}
      scale={2}
      onClick={toggleDirection}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <shaderMaterial args={[CustomShader]} />
    </mesh>
  );
};

export default ShaderPlane;
