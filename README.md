## React three.js shader starter

A basic demo and starter project for using three.js shaders with React.

- [create-react-app](https://github.com/facebook/create-react-app) - React app build system

- [three.js](https://github.com/mrdoob/three.js) - The WebGL 3D library

- [react-three-fiber](https://github.com/pmndrs/react-three-fiber) - Three.js react renderer

- [glslify-loader](https://github.com/glslify/glslify-loader) - Separate shader source code files

- [rescripts](https://github.com/harrysolovay/rescripts) - Enable glslify-loader without ejecting project

- The most trivial custom fragment [shader](src/shaders/fragment.glsl)

A live demo is available [here](http://oflisback.github.io/react-three-shader-starter).

## Motivation

It wasn't straight forward to setup a basic project that combined react and three.js
with shader code imported from separate source code files. Having shader source code
in separate files instead of embedded strings enables syntax hightlighting, code
completion and code formatting.

## Installation

Clone the repo then:

```
yarn install
yarn start
```
