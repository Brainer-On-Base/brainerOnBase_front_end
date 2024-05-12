import { Sparkles } from "@react-three/drei";

const NightBackground = () => {


    return (
        <group position={[0,0,0]}>
            <object3D>
                <Sparkles count={50} scale={[12, 6, 2.5]} color={"#ffaacc"} size={6} speed={0.3} noise={0.1}/>
            </object3D>
            <object3D>
                <Sparkles count={50} scale={[12, 6, 5]} color={"#ffaacc"} size={6} speed={0.3} noise={0.4}/>
            </object3D>
        </group>
    );
};

export default NightBackground;