'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SceneCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 9.5);

    const ambient = new THREE.AmbientLight(0xffffff, 1.9);
    const blushLight = new THREE.PointLight(0xff71b8, 20, 28, 2);
    blushLight.position.set(5, 3, 8);
    const pearlLight = new THREE.PointLight(0xffffff, 16, 26, 2);
    pearlLight.position.set(-4, -2, 6);
    const roseLight = new THREE.PointLight(0xffc4de, 12, 24, 2);
    roseLight.position.set(2, -4, 7);
    scene.add(ambient, blushLight, pearlLight, roseLight);

    const cluster = new THREE.Group();
    scene.add(cluster);

    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 700;
    const positions = new Float32Array(starsCount * 3);

    for (let index = 0; index < starsCount * 3; index += 3) {
      positions[index] = (Math.random() - 0.5) * 30;
      positions[index + 1] = (Math.random() - 0.5) * 20;
      positions[index + 2] = (Math.random() - 0.5) * 18;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const stars = new THREE.Points(
      starsGeometry,
      new THREE.PointsMaterial({
        color: 0xff6b9d, // Vibrant pink
        size: 0.18,      // Much larger particles
        transparent: true,
        opacity: 0.85,   // Higher visibility
        blending: THREE.AdditiveBlending, // Glow effect
      })
    );
    scene.add(stars);

    const pointer = { x: 0, y: 0 };
    const clock = new THREE.Clock();
    let animationFrame = 0;
    let baseX = -3.2;
    let baseY = 0.55;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      baseX = width < 1024 ? 0.15 : -3.2;
      baseY = width < 1024 ? 0 : 0.55;
    };

    const onPointerMove = (event) => {
      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;
    };

    const renderFrame = () => {
      const elapsed = clock.getElapsedTime();
      const scroll = window.scrollY / Math.max(window.innerHeight, 1);
      const motionFactor = mediaQuery.matches ? 0.24 : 1;

      cluster.rotation.x = elapsed * 0.05 * motionFactor + pointer.y * 0.18;
      cluster.rotation.y = elapsed * 0.1 * motionFactor + pointer.x * 0.28;
      cluster.position.x = baseX + pointer.x * 0.9;
      cluster.position.y = baseY - scroll * 0.55 + pointer.y * -0.45;

      stars.rotation.y = elapsed * 0.03 * motionFactor; // Faster rotation
      stars.rotation.x = elapsed * 0.01 * motionFactor; // Slight vertical variance
      stars.position.y = -scroll * 0.28 + pointer.y * 0.5; // React to mouse
      stars.position.x = pointer.x * 0.5;
      stars.material.opacity = 0.72 + Math.sin(elapsed * 1.9) * 0.12;

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(renderFrame);
    };

    resize();
    animationFrame = window.requestAnimationFrame(renderFrame);

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);

      starsGeometry.dispose();
      stars.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="scene-canvas" aria-hidden="true" />;
}
