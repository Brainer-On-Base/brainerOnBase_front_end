import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Html } from "@react-three/drei";

function MenuItem({ position, label, onClick }) {
  const ref = useRef();
  const hoverRef = useRef(false);

  useFrame(() => {
    if (hoverRef.current) {
      ref.current.scale.set(1.2, 1.2, 1.2);
    } else {
      ref.current.scale.set(1, 1, 1);
    }
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onClick={onClick}
      onPointerOver={() => (hoverRef.current = true)}
      onPointerOut={() => (hoverRef.current = false)}
    >
      <boxGeometry args={[2, 1, 0.5]} />
      <meshStandardMaterial color={hoverRef.current ? "#ff5722" : "#3f51b5"} />
      <Html position={[0, 0, 0.6]}>
        <div style={{ color: "white", textAlign: "center", fontSize: "20px" }}>{label}</div>
      </Html>
    </mesh>
  );
}

function Menu() {
  const handleStartGame = () => alert("Start Game Clicked!");
  const handleSettings = () => alert("Settings Clicked!");
  const handleExit = () => alert("Exit Clicked!");

  return (
        <>


      <MenuItem position={[0, 1, 0]} label="Start Game" onClick={handleStartGame} />
      <MenuItem position={[0, -1, 0]} label="Settings" onClick={handleSettings} />
      <MenuItem position={[0, -3, 0]} label="Exit" onClick={handleExit} />
      </>
  );
}

export default function Game() {
  return (
      <Menu />
  );
}
