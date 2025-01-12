import React, { useEffect, useState } from 'react';
import home_background from '../assets/images/home_background.png';

const DeathScreen = () => {
    const [showInitialText, setShowInitialText] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showSecondMessage, setShowSecondMessage] = useState(false);
    const [showFinalMessage1, setShowFinalMessage1] = useState(false);
    const [showFinalMessage2, setShowFinalMessage2] = useState(false);
    const [showFinalMessage3, setShowFinalMessage3] = useState(false);
    const [showStartButton, setShowStartButton] = useState(false);

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
        console.log("버튼이 클릭되었습니다!");  // ✅ 디버깅용 로그
        setShowInitialText(false);
        setShowButtons(false);
        setTimeout(() => {
            setShowMessage(true);
            setTimeout(() => {
                setShowSecondMessage(true);
                setTimeout(() => {
                    setShowMessage(false);
                    setShowSecondMessage(false);
                    setShowFinalMessage1(true);
                    setTimeout(() => {
                        setShowFinalMessage2(true);
                        setTimeout(() => {
                            setShowFinalMessage3(true);
                            setTimeout(() => {
                                setShowStartButton(true);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 2000);
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
                        showInitialText && !showMessage && !showSecondMessage && !showFinalMessage1 && !showFinalMessage2 && !showFinalMessage3 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    당신은 죽었습니다
                </h1>

                <h1
                    className={`text-4xl sm:text-5xl font-bold text-white transition-opacity duration-1000 absolute top-0 left-0 w-full ${
                        showMessage && !showFinalMessage1 && !showFinalMessage2 && !showFinalMessage3 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    여기가 마지막일까요?
                </h1>

                <h1
                    className={`text-4xl sm:text-5xl font-bold text-white transition-opacity duration-1000 top-20 ${
                        showSecondMessage && !showFinalMessage1 && !showFinalMessage2 && !showFinalMessage3 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    아니면 아직 남겨둔 무언가가
                    <br />
                    당신을 기다리고 있을까요?
                </h1>

                <h1
                    className={`text-4xl sm:text-5xl font-bold text-white transition-opacity duration-1000 absolute top-0 left-0 w-full ${
                        showFinalMessage1 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    영혼의 여정에서
                </h1>

                <h1
                    className={`text-4xl sm:text-5xl font-bold text-white transition-opacity duration-1000 absolute top-20 left-0 w-full ${
                        showFinalMessage2 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    각 단계마다 음표를 모아가며
                </h1>

                <h1
                    className={`text-4xl sm:text-5xl font-bold text-white transition-opacity duration-1000 absolute top-40 left-0 w-full ${
                        showFinalMessage3 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    그 답을 찾아보세요.
                </h1>
            </div>

            <div
                className={`flex flex-col items-center space-y-4 mt-10 transition-opacity duration-1000 ${
                    showButtons ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <button
                    className="bg-black bg-opacity-60 text-white px-6 py-3 rounded-md hover:bg-opacity-70 transition-opacity duration-300"
                    onClick={handleButtonClick}
                    style={{ pointerEvents: 'auto' }}  // ✅ 추가
                    >
                    헉
                </button>
                <button
                    className="bg-black bg-opacity-60 text-white px-6 py-3 rounded-md hover:bg-opacity-70 transition-opacity duration-300"
                    onClick={handleButtonClick}
                    style={{ pointerEvents: 'auto' }}  // ✅ 추가
                >
                    진짜요?
                </button>
            </div>

            <button
                className={`mt-10 bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg hover:bg-opacity-30 transition-all duration-1000 ${
                    showStartButton ? 'opacity-100' : 'opacity-0'
                }`}
            >
                영혼의 여정 시작하기
            </button>
        </div>
    );
}

export default DeathScreen;