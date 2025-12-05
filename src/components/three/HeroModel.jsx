import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const HeroModel = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.cos(t / 4) / 8;
        meshRef.current.rotation.y = Math.sin(t / 4) / 8;
        meshRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    });

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color="#4338ca" wireframe />
            </mesh>
        </Float>
    );
};

export default HeroModel;
