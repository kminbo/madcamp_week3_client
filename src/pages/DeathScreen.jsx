import React, { useEffect, useState } from 'react';
import home_background from '../assets/images/home_background.png';

const DeathScreen = () => {
    const [showText, setShowText] = useState(false);
    const [showButton1, setShowButton1] = useState(false);
    const [showButton2, setShowButton2] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 1000);

        const button1Timer = setTimeout(() => {
            setShowButton1(true);
        }, 2500);

        const button2Timer = setTimeout(() => {
            setShowButton2(true);
        }, 2500);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(button1Timer);
            clearTimeout(button2Timer);
        };
    }, []);

    const handleButtonClick = () => {
        setShowButton1(false);
        setShowButton2(false);
        setShowMessage(true);
    };

    return (
        <div
            className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-start pt-40"
            style={{
                backgroundImage: `url(${home_background})`,
            }}
        >
            {showText && (
                <h1
                    className={`text-4xl font-bold text-white transition-opacity duration-1000 ${
                        showText ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    당신은 죽었습니다
                </h1>
            )}

            {showButton1 && (
                <button
                    className={`bg-black bg-opacity-60 text-white px-6 py-3 rounded-md mt-10 transition-opacity duration-1000 ${
                        showButton1 ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={handleButtonClick}
                >
                    헉
                </button>
            )}

            {showButton2 && (
                <button
                    className={`bg-black bg-opacity-60 text-white px-6 py-3 rounded-md mt-4 transition-opacity duration-1000 ${
                        showButton2 ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={handleButtonClick}
                >
                    진짜요?
                </button>
            )}

            {showMessage && (
                <div className="text-center text-white mt-8 transition-opacity duration-1000 opacity-100">
                    <p>여기가 마지막일까요?</p>
                    <p>아니면 아직 남겨둔 무언가가</p>
                    <p>당신을 기다리고 있을까요?</p>
                </div>
            )}
        </div>
    );
}

export default DeathScreen;