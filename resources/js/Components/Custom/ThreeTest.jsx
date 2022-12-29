import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function ThreeTest() {
    const containerRef = useRef(null);
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const controls = new OrbitControls(camera, containerRef.current);
        const renderer = new THREE.WebGLRenderer();
        const geometry = new THREE.BoxGeometry(10, 1, 10);
        const geometry2 = new THREE.BoxGeometry(1, 10, 10);
        const material = new THREE.MeshBasicMaterial({ color: "red" });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        const cube2 = new THREE.Mesh(geometry2, material);
        scene.add(cube2);
        camera.position.z = 5;

        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);
        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }

        animate();
    }, []);

    return <div ref={containerRef} />;
}
