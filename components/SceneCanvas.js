'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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

    let model = null;
    let fallbackMesh = null;

    const loader = new GLTFLoader();
    loader.load(
      '/models/riko_mikogami.glb',
      (gltf) => {
        model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxAxis = Math.max(size.x, size.y, size.z) || 1;
        const targetSize = 5.2;
        const scale = targetSize / maxAxis;

        model.scale.setScalar(scale);
        model.position.set(-center.x * scale, -center.y * scale + 0.8, -center.z * scale);

        model.traverse((child) => {
          if (child.isMesh) {
            child.frustumCulled = false;
          }
        });

        cluster.add(model);
      },
      undefined,
      () => {
        fallbackMesh = new THREE.Mesh(
          new THREE.IcosahedronGeometry(2.2, 8),
          new THREE.MeshPhysicalMaterial({
            color: 0xfff7fb,
            roughness: 0.16,
            metalness: 0.1,
            transmission: 0.45,
            thickness: 1,
            transparent: true,
            opacity: 0.92,
          })
        );
        cluster.add(fallbackMesh);
      }
    );

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

      if (model) {
        model.rotation.y += 0.0035 * motionFactor;
      }

      if (fallbackMesh) {
        fallbackMesh.rotation.y += 0.0042 * motionFactor;
        fallbackMesh.rotation.x += 0.0018 * motionFactor;
      }

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
      if (fallbackMesh) {
        fallbackMesh.geometry.dispose();
        fallbackMesh.material.dispose();
      }

      if (model) {
        model.traverse((child) => {
          if (child.isMesh) {
            child.geometry?.dispose();

            if (Array.isArray(child.material)) {
              child.material.forEach((material) => material.dispose?.());
            } else {
              child.material?.dispose?.();
            }
          }
        });
      }

      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="scene-canvas" aria-hidden="true" />;
}
