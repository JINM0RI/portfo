import { useEffect, useRef } from "react";
import * as THREE from "three";

export function TechBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 8.5, 14);
    camera.lookAt(0, -1.6, -5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.className = "h-full w-full";
    container.appendChild(renderer.domElement);

    const skyGeo = new THREE.SphereGeometry(110, 32, 32);
    const skyMat = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x1c2d49) },
        bottomColor: { value: new THREE.Color(0x0a111f) }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(h, 0.0)), 1.0);
        }
      `,
      side: THREE.BackSide
    });

    const sky = new THREE.Mesh(skyGeo, skyMat);
    scene.add(sky);

    const ambient = new THREE.AmbientLight(0x88a4d4, 0.4);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xa6d0ff, 0.8);
    key.position.set(10, 16, 6);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffc08f, 0.45);
    fill.position.set(-12, 6, -8);
    scene.add(fill);

    const terrainGeo = new THREE.PlaneGeometry(34, 24, 140, 100);
    terrainGeo.rotateX(-Math.PI / 2.55);

    const basePositions = Float32Array.from(terrainGeo.attributes.position.array);

    const terrainMat = new THREE.MeshStandardMaterial({
      color: 0x4c8ec4,
      emissive: 0x10345a,
      emissiveIntensity: 0.35,
      wireframe: true,
      transparent: true,
      opacity: 0.62
    });

    const terrain = new THREE.Mesh(terrainGeo, terrainMat);
    terrain.position.set(0, -3, -10);
    scene.add(terrain);

    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x8cc8ff,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      wireframe: true
    });
    const glow = new THREE.Mesh(terrainGeo.clone(), glowMat);
    glow.position.copy(terrain.position);
    glow.position.y += 0.05;
    scene.add(glow);

    let scrollY = window.scrollY;
    const terrainTravel = () => Math.max(window.innerHeight * 2.4, 1);

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    let frameId = 0;
    const animate = (time) => {
      frameId = requestAnimationFrame(animate);

      const positions = terrainGeo.attributes.position.array;
      const glowPositions = glow.geometry.attributes.position.array;
      const t = Math.min(scrollY / terrainTravel(), 1);

      for (let i = 0; i < positions.length; i += 3) {
        const x = basePositions[i];
        const z = basePositions[i + 2];

        const waveA = Math.sin(x * 0.27 + time * 0.00055 + z * 0.18) * 0.75;
        const waveB = Math.cos(z * 0.42 - time * 0.00042 + x * 0.11) * 0.48;
        const ridge = Math.sin((x + z) * 0.17 + time * 0.00033) * 0.35;
        const lift = t * 0.45;

        const y = waveA + waveB + ridge + lift;
        positions[i + 1] = y;
        glowPositions[i + 1] = y + 0.12;
      }

      terrainGeo.attributes.position.needsUpdate = true;
      glow.geometry.attributes.position.needsUpdate = true;
      terrainGeo.computeVertexNormals();

      sky.material.uniforms.topColor.value.lerpColors(new THREE.Color(0x1c2d49), new THREE.Color(0x5f87b6), t);
      sky.material.uniforms.bottomColor.value.lerpColors(new THREE.Color(0x0a111f), new THREE.Color(0x15243b), t);

      terrain.material.emissiveIntensity = 0.28 + t * 0.25;
      terrain.material.opacity = 0.55 + t * 0.15;
      glow.material.opacity = 0.1 + t * 0.12;

      terrain.rotation.z = Math.sin(time * 0.00012) * 0.045;
      glow.rotation.z = terrain.rotation.z;

      renderer.render(scene, camera);
    };

    animate(0);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);

      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className="fixed inset-0 -z-10 h-full w-full opacity-65" />;
}
