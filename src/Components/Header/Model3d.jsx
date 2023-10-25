const { useGLTF, OrbitControls } = require('@react-three/drei');
const { Canvas } = require('@react-three/fiber');

const Model3d = () => {
    const model3d = useGLTF('/model3D/scene.gltf');
    return <primitive object={model3d.scene}/>
};

useGLTF.preload('/model3D/scene.gltf')

const Model3dComponent = () => {
    return (
        <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.8} />
            <Model3d />
        </Canvas>
    )
}

export default Model3dComponent;