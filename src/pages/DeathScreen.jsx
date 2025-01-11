import React, { useEffect, useState } from 'react';
import home_background from '../assets/images/home_background.png';

const DeathScreen = () => {
    const [showText, setShowText] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 1000);

        const buttonsTimer = setTimeout(() => {
            setShowButtons(true);
        }, 3000);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(buttonsTimer);
        };
    }, []);

    const handleButtonClick = () => {
        setShowText(false);
        setShowButtons(false);
        setShowMessage(true);
    };

    return (
        <div
            className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-start pt-40"
            style={{
                backgroundImage: `url(${home_background})`,
            }}
        >
            <h1
                className={`text-4xl font-bold text-white transition-opacity duration-1000 ${
                    showText ? 'opacity-100' : 'opacity-0'
                }`}
            >
                당신은 죽었습니다
            </h1>

            <div
                className={`flex flex-col items-center space-y-4 mt-16 transition-opacity duration-1000 ${
                    showButtons ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <button
                    className="bg-black bg-opacity-60 text-white px-6 py-3 rounded-md"
                    onClick={handleButtonClick}
                >
                    헉
                </button>
                <button
                    className="bg-black bg-opacity-60 text-white px-6 py-3 rounded-md"
                    onClick={handleButtonClick}
                >
                    진짜요?
                </button>
            </div>
{/* 
            <div
                className={`text-center text-white mt-8 transition-opacity duration-1000 ${
                    showMessage ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <p>여기가 마지막일까요?</p>
                <p>아니면 아직 남겨둔 무언가가</p>
                <p>당신을 기다리고 있을까요?</p>
            </div> */}

            <h1
                className={`text-4xl font-bold mt-8 text-white transition-opacity duration-1000 ${
                    showMessage ? 'opacity-100' : 'opacity-0'
                }`}
            >
            <p>여기가 마지막일까요?</p>
            <p>아니면 아직 남겨둔 무언가가</p>
            <p>당신을 기다리고 있을까요?</p>
            </h1>
        </div>
    );
}

export default DeathScreen;