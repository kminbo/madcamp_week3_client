import React, { useEffect, useState } from 'react';
import home_background from '../assets/images/home_background.png';

const DeathScreen = () => {
    const [showInitialText, setShowInitialText] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showSecondMessage, setShowSecondMessage] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setShowInitialText(true);
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
        setShowInitialText(false);
        setShowButtons(false);
        setTimeout(() => {
            setShowMessage(true);
            setTimeout(() => {
                setShowSecondMessage(true);
            }, 1000);
        }, 300);
    };

    return (
        <div
            className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-start pt-20 sm:pt-40 px-4"
            style={{
                backgroundImage: `url(${home_background})`,
            }}
        >
            <div className="relative">
                <h1
                    className={`text-4xl sm:text-5xl font-bold text-white transition-opacity duration-1000 ${
                        showInitialText && !showMessage ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    당신은 죽었습니다
                </h1>

                <div className={`text-4xl sm:text-5xl font-bold text-white text-center`}>
                    <h1
                        className={`transition-opacity duration-700 ${
                            showMessage ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        여기가 마지막일까요?
                    </h1>
                    <h1
                        className={`transition-opacity duration-700 mt-4 ${
                            showSecondMessage ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <p>아니면 아직 남겨둔 무언가가 </p>
                        <p>당신을 기다리고 있을까요?</p>
                    </h1>
                </div>
            </div>

            <div
                className={`flex flex-col items-center space-y-4 mt-10 transition-opacity duration-1000 ${
                    showButtons ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <button
                    className="bg-black bg-opacity-60 text-white px-6 py-3 rounded-md hover:bg-opacity-70 transition-opacity duration-300"
                    onClick={handleButtonClick}
                >
                    헉
                </button>
                <button
                    className="bg-black bg-opacity-60 text-white px-6 py-3 rounded-md hover:bg-opacity-70 transition-opacity duration-300"
                    onClick={handleButtonClick}
                >
                    진짜요?
                </button>
            </div>
        </div>
    );
}

export default DeathScreen;