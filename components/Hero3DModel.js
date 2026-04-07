'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Hero3DModel() {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    
    // CAMERA SETUP
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4.5;

    // RENDERER SETUP
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(400, 400); // Slightly larger canvas for character
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    mountRef.current.appendChild(renderer.domElement);

    // GROUP FOR POINTER TRACKING
    const group = new THREE.Group();
    scene.add(group);

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(2, 5, 5);
    scene.add(directionalLight);
    
    const fillLight = new THREE.PointLight(0xffc4de, 3, 10);
    fillLight.position.set(-3, 0, 3);
    scene.add(fillLight);

    // POINTER TRACKING
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    
    const onPointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', onPointerMove);

    // ANIMATION & MODEL LOADER
    let mixer = null;
    let model = null;
    const loader = new GLTFLoader();

    loader.load(
      '/models/riko_mikogami.glb',
      (gltf) => {
        model = gltf.scene;

        // Auto-scale and center the character
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxAxis = Math.max(size.x, size.y, size.z);
        const scale = 4.2 / maxAxis; // Zoom in nicely
        
        model.scale.setScalar(scale);
        // Move model slightly up to achieve the 2% upward adjustment requested
        model.position.set(-center.x * scale, -center.y * scale - 1.3, -center.z * scale);
        
        // Fix materials for better rendering
        model.traverse((child) => {
          if (child.isMesh) {
            child.frustumCulled = false;
            // Optionally tweak material settings if needed here
          }
        });

        group.add(model);

        // SETUP CHARACTER ANIMATION ("Say Hi", "Smile", "Talk")
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          
          let actionToPlay = gltf.animations[0]; // Default to first available animation
          
          // Try to specifically find a "wave", "hi", "talk", or "smile" animation
          for (const clip of gltf.animations) {
            const name = clip.name.toLowerCase();
            if (name.includes('wave') || name.includes('hi') || name.includes('smile') || name.includes('talk') || name.includes('idle')) {
              actionToPlay = clip;
              // If it explicitly says wave/hi, prioritize it!
              if (name.includes('wave') || name.includes('hi')) break;
            }
          }

          const action = mixer.clipAction(actionToPlay);
          action.play();
        }
        
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error('Error loading 3D character:', error);
        setLoading(false);
      }
    );

    // ANIMATION LOOP
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Update character animation
      if (mixer) {
        mixer.update(delta);
      }

      // Smooth pointer tracking for the character's gaze/turn
      target.x = pointer.x * 0.4;
      target.y = pointer.y * 0.2;
      
      group.rotation.y += (target.x - group.rotation.y) * 0.08;
      group.rotation.x += (-target.y - group.rotation.x) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(animationFrameId);
      
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (mixer) {
        mixer.stopAllAction();
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center h-full w-full z-20">
      <div 
        ref={mountRef}
        className={`w-full h-full flex items-center justify-center transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}
        style={{ minHeight: '380px' }}
      />
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="h-8 w-8 rounded-full border-4 border-rose-200 border-t-rose-500 animate-spin" />
        </div>
      )}

      {/* "Say Hi" Chat Bubble */}
      {!loading && (
        <div 
          className="absolute bottom-6 right-4 sm:right-8 bg-white/90 backdrop-blur border border-rose-200 text-rose-700 px-4 py-2 rounded-2xl rounded-br-sm font-medium shadow-[0_8px_24px_rgba(226,85,152,0.18)] origin-bottom-right animate-bounce"
          style={{ animationDuration: '3s' }}
        >
          Hi, I'm Krishika! 👋
        </div>
      )}
    </div>
  );
}
