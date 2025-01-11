import React, { useEffect, useState } from 'react';

const DeathScreen = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        //2초 후에 글자가 천천히 나타남
        const timer = setTimeout(() => {
            setShowText(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home_background.png)`,
            }}
        >
            <h1
                className={`text-4xl font-bold text-white transition-opacity duration-2000 ${
                    showText ? 'opacity-100' : 'opacity-0'
                }`}
            >
                당신은 죽었습니다
            </h1>
        </div>
    );
}

export default DeathScreen;