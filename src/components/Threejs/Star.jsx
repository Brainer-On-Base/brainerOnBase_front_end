import React from "react";
import * as THREE from 'three'

const Star = ({ position, scale, rotation }) => {
    return (
        <mesh position={position} scale={scale} rotation={rotation}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color={'white'} />
        </mesh>
    );
};

export default Star;