# HCI Lab 5B – Three.js Setup and Basic 3D Cube

## 📌 Overview

This lab demonstrates the basic setup of **Three.js** within a React environment and introduces fundamental concepts of rendering a 3D object. The task focuses on creating a simple animated cube using Three.js to understand how scenes, cameras, and rendering work together.

---

## 🎯 Purpose of the Lab

The main objective of this lab is to:

* Learn how to **install and integrate Three.js** in a project
* Understand the core components of a 3D scene:

  * Scene
  * Camera
  * Renderer
* Create and render a **basic 3D cube**
* Implement **animation using a render loop**
* Practice clean integration of Three.js with **React (using hooks)**

---

## ⚙️ What This Project Does

* Sets up a **Three.js scene**
* Creates a **perspective camera**
* Initializes a **WebGL renderer**
* Adds a **3D cube (BoxGeometry)**
* Applies a **basic material with color**
* Animates the cube with continuous **rotation**
* Properly cleans up resources when the component unmounts

---

## 🧩 Key Concepts Used

* `THREE.Scene()` → Holds all objects in the 3D world
* `THREE.PerspectiveCamera()` → Defines the viewing perspective
* `THREE.WebGLRenderer()` → Renders the scene to the browser
* `THREE.BoxGeometry()` → Creates cube shape
* `THREE.MeshBasicMaterial()` → Adds color to the cube
* `requestAnimationFrame()` → Handles smooth animation loop
* React Hooks:

  * `useEffect` → Lifecycle handling
  * `useRef` → DOM reference for mounting renderer

---

## 📁 Project Structure

* `Cube.js` → Contains Three.js setup and animation logic
* `App.js` → Renders the Cube component

---

## 🚀 Outcome

By completing this lab, we gain a foundational understanding of:

* How 3D graphics are rendered in the browser
* How to integrate **Three.js with React**
* How animation works in real-time rendering

This serves as a starting point for building more complex 3D applications such as interactive scenes, games, or visual simulations.

---

## 📌 Conclusion

This lab successfully demonstrates the basics of Three.js by creating and animating a 3D cube. It reinforces the understanding of core 3D concepts and provides hands-on experience in combining modern frontend tools with 3D rendering.

---
