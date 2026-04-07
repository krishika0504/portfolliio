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

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 10);

    const ambient = new THREE.AmbientLight(0xffffff, 1.3);
    const pointLight = new THREE.PointLight(0x8bd3ff, 18, 30, 2);
    pointLight.position.set(5, 3, 8);
    const rimLight = new THREE.PointLight(0xffb86b, 12, 30, 2);
    rimLight.position.set(-6, -3, 6);
    scene.add(ambient, pointLight, rimLight);

    const cluster = new THREE.Group();
    scene.add(cluster);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.1, 12),
      new THREE.MeshPhysicalMaterial({
        color: 0x78c4ff,
        roughness: 0.1,
        metalness: 0.08,
        transmission: 0.35,
        thickness: 0.8,
        transparent: true,
        opacity: 0.92,
      })
    );
    cluster.add(core);

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(3.4, 0.045, 32, 240),
      new THREE.MeshBasicMaterial({
        color: 0xffc778,
        transparent: true,
        opacity: 0.45,
      })
    );
    halo.rotation.x = Math.PI * 0.55;
    halo.rotation.y = Math.PI * 0.1;
    cluster.add(halo);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.85, 1),
      new THREE.MeshBasicMaterial({
        color: 0xd8f1ff,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      })
    );
    wire.rotation.z = Math.PI * 0.14;
    cluster.add(wire);

    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 900;
    const positions = new Float32Array(starsCount * 3);

    for (let index = 0; index < starsCount * 3; index += 3) {
      positions[index] = (Math.random() - 0.5) * 28;
      positions[index + 1] = (Math.random() - 0.5) * 20;
      positions[index + 2] = (Math.random() - 0.5) * 18;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const stars = new THREE.Points(
      starsGeometry,
      new THREE.PointsMaterial({
        color: 0xf7fbff,
        size: 0.045,
        transparent: true,
        opacity: 0.75,
      })
    );
    scene.add(stars);

    const pointer = { x: 0, y: 0 };
    const clock = new THREE.Clock();
    let animationFrame = 0;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const onPointerMove = (event) => {
      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;
    };

    const renderFrame = () => {
      const elapsed = clock.getElapsedTime();
      const scroll = window.scrollY / Math.max(window.innerHeight, 1);
      const motionFactor = mediaQuery.matches ? 0.25 : 1;

      cluster.rotation.x = elapsed * 0.1 * motionFactor + pointer.y * 0.45;
      cluster.rotation.y = elapsed * 0.16 * motionFactor + pointer.x * 0.8;
      cluster.position.x = pointer.x * 1.3;
      cluster.position.y = -scroll * 0.45 + pointer.y * -0.8;

      halo.rotation.z += 0.0025 * motionFactor;
      wire.rotation.x -= 0.0015 * motionFactor;
      stars.rotation.y = elapsed * 0.015 * motionFactor;
      stars.position.y = -scroll * 0.3;

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
      core.geometry.dispose();
      core.material.dispose();
      halo.geometry.dispose();
      halo.material.dispose();
      wire.geometry.dispose();
      wire.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="scene-canvas" aria-hidden="true" />;
}
