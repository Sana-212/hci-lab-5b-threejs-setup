import * as THREE from "three";
import { useEffect, useRef } from "react";

const Cube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // 1️⃣ Create Scene
    const scene = new THREE.Scene();

    // 2️⃣ Create Camera
    const camera = new THREE.PerspectiveCamera(
    40,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // 3️⃣ Create Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Attach renderer to div
    mountRef.current.appendChild(renderer.domElement);

    // 4️⃣ Create Cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x33ff11 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 5️⃣ Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // 6️⃣ Cleanup when component unmounts
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default Cube;