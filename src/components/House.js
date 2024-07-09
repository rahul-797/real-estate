import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, } from "react-three-fiber";
import { softShadows, OrbitControls, useGLTF } from "@react-three/drei";
import "./House.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from 'three';

// softShadows();

const House = () => {
    const [model, setModel] = useState();
    useEffect(() => {
        new GLTFLoader().load("/house/scene.gltf", (model) => {
            model.scene.scale.set(0.03, 0.03, 0.03);
            setModel(model);
        });
    });
    return model ? <primitive object={model.scene} /> : null;
};

const Content = () => {
    const ref = useRef();
    useFrame(() => (ref.current.rotation.y += 0.002));
    return (
        <mesh ref={ref} position={[0, 0, 0]}>
            <House />
        </mesh>
    );
};

const Scene = () => {
    return (

        <div className="fixed-size-div">
            <Canvas camera={{ position: [-20, 5, 20] }}>
                <Suspense fallback={null}>
                    <Content />
                </Suspense>

                {/* This light makes things look pretty */}
                <ambientLight intensity={0.3} />
                {/* Our main source of light, also casting our shadow */}
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                {/* A light to help illumnate the spinning boxes */}
                <pointLight position={[-10, 0, -20]} intensity={0.5} />
                <pointLight position={[0, -10, 0]} intensity={1.5} />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Scene;