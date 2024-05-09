import { useEffect, useState } from "react";
import Star from "./Star";

const NightBackground = () => {
    const [stars, setStars] = useState([]);

    const calcRandom = () => (Math.random(-0.5) - 0.5) * 20;

    useEffect(() => {
        const newStars = [...Array(300)].map((_, index) => ({
            key: index,
            position: [
                calcRandom(),
                calcRandom(),
                Math.random() // Random z position
            ],
            scale: [0.05 + Math.random() * 0.1, 0.05 + Math.random() * 0.1, 0.05 + Math.random() * 0.1], // Random scale
            rotation: [0, 0, Math.random() * Math.PI * 2], // Random rotation around z axis
            velocity: [
                0, // No hay velocidad lateral
                -0.01 * Math.random() - 0.005, // Velocidad vertical (hacia arriba)
                0, // No hay velocidad lateral
            ]
        }));
        setStars(newStars);
    }, []);

    useEffect(() => {
        const animate = () => {
            setStars(prevStars =>
                prevStars.map(star => {
                    let newPosition = star.position.map((pos, index) => {
                        let newPos = pos + star.velocity[index];
                        // Si la estrella sale del canvas, la reposicionamos en la parte superior con una posición z aleatoria
                        if (newPos < -1) {
                            newPos = 10 + Math.random() * 10; // Random z position
                        }
                        return newPos;
                    });
                    return {
                        ...star,
                        position: newPosition
                    };
                })
            );
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <group position={[-4,0,0]}>
            {stars.map((star) => (
                <Star
                    key={star.key}
                    position={star.position}
                    scale={star.scale}
                    rotation={star.rotation}
                />
            ))}
        </group>
    );
};

export default NightBackground;