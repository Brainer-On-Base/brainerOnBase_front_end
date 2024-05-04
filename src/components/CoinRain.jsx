import { useEffect, useRef, useState } from "react";
import Coin from "./Coin";

const CoinRain = () => {
    const [coins, setCoins] = useState([]);

    const calcRandom = () => (Math.random(0.5) - 0.5) * 12

    useEffect(() => {
        const newCoins = [...Array(300)].map((_, index) => ({
            key: index,
            position: [
                calcRandom(),
                calcRandom(),
                -1
            ],
            scale: [0.5, 0.2, 0.5],
            rotation: [
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                0
            ],
            velocity: [
                0, // No hay velocidad lateral
                0, // No hay velocidad lateral
                -0.02 * Math.random() - 0.01 // Velocidad vertical
            ]
        }));
        setCoins(newCoins);
    }, []);

    useEffect(() => {
        const animate = () => {
            setCoins(prevCoins => prevCoins.map(coin => ({
                ...coin,
                position: coin.position.map((pos, index) => {
                    let newPos = pos + coin.velocity[index];
                    if (index === 2 && newPos < -1) {
                        newPos = 10;
                    }
                    return newPos;
                })
            })));
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <group>
            {coins.map((coin) => (
                <Coin
                    key={coin.key}
                    position={coin.position}
                    scale={coin.scale}
                    rotation={coin.rotation}
                />
            ))}
        </group>
    );
};

export default CoinRain;