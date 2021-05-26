import fragmentShader from "shaders/fragment.glsl";
import vertexShader from "shaders/vertex.glsl";

const CustomShader = {
  fragmentShader,
  uniforms: {
    iGlobalTime: { type: "f", value: 1.0 },
  },
  vertexShader,
};

export default CustomShader;
