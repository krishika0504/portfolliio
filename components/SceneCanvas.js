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

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.15, 14),
      new THREE.MeshPhysicalMaterial({
        color: 0xfff8fc,
        roughness: 0.08,
        metalness: 0.05,
        transmission: 0.58,
        thickness: 1.4,
        transparent: true,
        opacity: 0.96,
        iridescence: 0.7,
        iridescenceIOR: 1.3,
        iridescenceThicknessRange: [100, 480],
      })
    );
    cluster.add(core);

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(3.55, 0.05, 32, 260),
      new THREE.MeshBasicMaterial({
        color: 0xff7dbd,
        transparent: true,
        opacity: 0.42,
      })
    );
    halo.rotation.x = Math.PI * 0.56;
    halo.rotation.y = Math.PI * 0.12;
    cluster.add(halo);

    const haloTwo = new THREE.Mesh(
      new THREE.TorusGeometry(2.85, 0.035, 26, 240),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.58,
      })
    );
    haloTwo.rotation.x = Math.PI * 0.18;
    haloTwo.rotation.z = Math.PI * 0.24;
    cluster.add(haloTwo);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.9, 1),
      new THREE.MeshBasicMaterial({
        color: 0xf4b2d0,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      })
    );
    wire.rotation.z = Math.PI * 0.12;
    cluster.add(wire);

    const orbitGroup = new THREE.Group();
    const satellite = new THREE.Mesh(
      new THREE.SphereGeometry(0.24, 24, 24),
      new THREE.MeshStandardMaterial({
        color: 0xff6ead,
        roughness: 0.25,
        metalness: 0.12,
      })
    );
    orbitGroup.add(satellite);
    cluster.add(orbitGroup);

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
        color: 0xf1bfd7,
        size: 0.05,
        transparent: true,
        opacity: 0.42,
      })
    );
    scene.add(stars);

    const pointer = { x: 0, y: 0 };
    const clock = new THREE.Clock();
    let animationFrame = 0;
    let baseX = 2.4;
    let baseY = 0.2;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      baseX = width < 1024 ? 0.2 : 2.4;
      baseY = width < 1024 ? 0 : 0.2;
    };

    const onPointerMove = (event) => {
      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;
    };

    const renderFrame = () => {
      const elapsed = clock.getElapsedTime();
      const scroll = window.scrollY / Math.max(window.innerHeight, 1);
      const motionFactor = mediaQuery.matches ? 0.24 : 1;

      cluster.rotation.x = elapsed * 0.08 * motionFactor + pointer.y * 0.24;
      cluster.rotation.y = elapsed * 0.14 * motionFactor + pointer.x * 0.42;
      cluster.position.x = baseX + pointer.x * 0.9;
      cluster.position.y = baseY - scroll * 0.55 + pointer.y * -0.45;

      halo.rotation.z += 0.0022 * motionFactor;
      haloTwo.rotation.y -= 0.003 * motionFactor;
      wire.rotation.x -= 0.0014 * motionFactor;
      orbitGroup.rotation.z = elapsed * 0.62 * motionFactor;
      satellite.position.set(Math.cos(elapsed * 0.62) * 4.15, Math.sin(elapsed * 0.62) * 1.2, 0.9);
      stars.rotation.y = elapsed * 0.012 * motionFactor;
      stars.position.y = -scroll * 0.28;

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
      haloTwo.geometry.dispose();
      haloTwo.material.dispose();
      wire.geometry.dispose();
      wire.material.dispose();
      satellite.geometry.dispose();
      satellite.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="scene-canvas" aria-hidden="true" />;
}
