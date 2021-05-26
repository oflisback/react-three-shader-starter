uniform float iGlobalTime;

// Value from vertex shader
varying vec2 vUv; 

// Fragment shader based on shadertoy.com default shader
void main(void)
{
  float iTime = iGlobalTime * 0.1;
  vec2 uv = (-1.0 + 2.0 * vUv) * 2.0;
  vec3 col = 0.5 + 0.5 * cos(iTime + uv.xyx + vec3(0,2,4));

  gl_FragColor = vec4(col,1.0);
}
