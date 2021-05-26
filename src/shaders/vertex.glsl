varying vec2 vUv; 

// For info on available uniforms and attributes see:
// https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );
}
