import leaf from '../assets/images/leaf.png';
import { useState, useEffect } from 'react';

const FallingLeaf = () => {
    const [shouldFall, setShouldFall] = useState(false);

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes sway {
                0% { transform: translateX(0px) rotate(0deg); }
                50% { transform: translateX(100px) rotate(15deg); }
                100% { transform: translateX(-100px) rotate(-15deg); }
            }`;
        document.head.appendChild(style);

        const timeout = setTimeout(() => {
            setShouldFall(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                backgroundColor: 'transparent',
            }}
        >
            {shouldFall && (
                <img
                    src={leaf}
                    alt="falling leaf"
                    style={{
                        position: 'absolute',
                        top: '-10%',
                        left: '50%',
                        width: '100px',
                        height: '100px',
                        opacity: 0.8,
                        transform: 'rotate(45deg)',
                        animation: 'fall 5s linear forwards, sway 2s ease-in-out infinite alternate',
                    }}
                />
            )}
            <style>
                {`
                    @keyframes fall {
                        0% { top: -10%; }
                        100% { top: 110%; }
                    }
                `}
            </style>
        </div>
    );
};

export default FallingLeaf;