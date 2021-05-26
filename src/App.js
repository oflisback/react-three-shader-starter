import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Cube from "Cube";
import github from "images/github.png";

const linkStyle = {
  cursor: "pointer",
  color: "darkblue",
  textDecoration: "underline",
};

const App = () => {
  const [direction, setDirection] = useState(1);

  return (
    <div style={{ position: "relative" }}>
      <Canvas style={{ height: "100vh", position: "absolute" }}>
        <Suspense fallback={<></>}>
          <Cube
            direction={direction}
            toggleDirection={() => setDirection(-1 * direction)}
          />
        </Suspense>
      </Canvas>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          userSelect: "none",
          width: "100%",
        }}
      >
        <div style={{ padding: "10px" }}>
          React three.js shader starter project, click{" "}
          <span onClick={() => setDirection(-1 * direction)} style={linkStyle}>
            here
          </span>{" "}
          or on the cube to change direction.
        </div>
        <img
          alt="github"
          onClick={() =>
            (window.location.href =
              "https://github.com/oflisback/react-three-shader-starter")
          }
          style={{ ...linkStyle, padding: "10px" }}
          src={github}
        />
      </div>
    </div>
  );
};

export default App;
