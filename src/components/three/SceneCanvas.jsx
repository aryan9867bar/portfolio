import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lights from './Lights';
import HeroModel from './HeroModel';
import Particles from './Particles';
import Effects from './Effects';
import Loader from '../ui/Loader';

const SceneCanvas = () => {
    return (
        <div className="h-[60vh] w-full absolute top-0 left-0 -z-10">
            <Suspense fallback={null}>
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 75 }}
                    dpr={[1, 2]}
                    gl={{ antialias: false }}
                >
                    <color attach="background" args={['#000000']} />
                    <Lights />
                    <HeroModel />
                    <Particles />
                    <Effects />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </Suspense>
        </div>
    );
};

export default SceneCanvas;
