import React, { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ModelViewer = () => {
  const gltfPath = process.env.PUBLIC_URL + 'models/honey.glb';

  return (
    <div className='honey-container'>
      <Canvas onCreated={({ gl }) => gl.setPixelRatio(window.devicePixelRatio)}>
        <CameraControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model gltfPath={gltfPath} />
        </Suspense>
      </Canvas>
    </div>
  );
};

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  React.useEffect(() => {
    camera.position.set(0, 2, 6); // Adjust the position here
    camera.lookAt(0, 0, 0);

    controlsRef.current = new OrbitControls(camera, gl.domElement);
    controlsRef.current.enableDamping = true;
    controlsRef.current.dampingFactor = 0.1;
    controlsRef.current.enableZoom = false; // Disable zooming
    controlsRef.current.enablePan = false; // Disable panning

    return () => {
      controlsRef.current.dispose();
    };
  }, [camera, gl]);

  useFrame(() => {
    controlsRef.current.update();
  });

  return null;
};

const Model = ({ gltfPath }) => {
  const { scene } = useThree();
  const gltfRef = useRef();

  React.useEffect(() => {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(gltfPath, (gltf) => {
      gltfRef.current = gltf.scene;
      gltfRef.current.scale.set(0.5, 0.5, 0.5);
      scene.add(gltf.scene);
    });
    return () => {
      scene.remove(gltfRef.current);
    };
  }, [gltfPath, scene]);

  useFrame(({ clock }) => {
    if (gltfRef.current) {
      gltfRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return null;
};

export default ModelViewer;
