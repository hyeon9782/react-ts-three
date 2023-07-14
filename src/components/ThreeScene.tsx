import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행되는 로직

    // Three.js 장면 생성
    const scene = new THREE.Scene();

    // Three.js 카메라 생성
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.offsetWidth / containerRef.current.offsetHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Three.js 렌더러 생성
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.offsetWidth,
      containerRef.current.offsetHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Three.js 박스 생성
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    // Three.js 바운딩 박스 헬퍼 생성
    const boxHelper = new THREE.BoxHelper(boxMesh, 0xffff00);
    scene.add(boxHelper);

    // 애니메이션 루프 함수
    const animate = () => {
      requestAnimationFrame(animate);
      boxMesh.rotation.x += 0.01;
      boxMesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    // 애니메이션 루프 실행
    animate();

    // 언마운트 시 Three.js 자원 해제
    return () => {
      renderer.dispose();
      scene.remove(boxMesh);
      scene.remove(boxHelper);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeScene;
