import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import home_background from '../assets/images/home_background.png';

const DeathScreen = () => {
    const navigate = useNavigate();
    const [showInitialText, setShowInitialText] = useState(false);
    const [showButtons, setShowButtons] = useState(false);

    // 메시지를 3단계로 구분
    const [showMessage, setShowMessage] = useState(false);
    const [showSecondMessage, setShowSecondMessage] = useState(false);
    const [showThirdMessage, setShowThirdMessage] = useState(false);

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
        console.log("버튼이 클릭되었습니다!");
        setShowInitialText(false);
        setShowButtons(false);

        // 첫 번째 문구
        setTimeout(() => {
            setShowMessage(true);

            // 두 번째 문구
            setTimeout(() => {
                setShowSecondMessage(true);

                // 세 번째 문구
                setTimeout(() => {
                    setShowThirdMessage(true);

                    // 잠시 후 모두 사라짐
                    setTimeout(() => {
                        setShowMessage(false);
                        setShowSecondMessage(false);
                        setShowThirdMessage(false);

                        // 이후 최종 문구 3줄 순서 등장
                        setTimeout(() => {
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
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 1000);
    };

    const handleStartJourney = () => {
        navigate('/journey-start');
    };

    return (
        <div
            className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-start pt-20 sm:pt-40 px-4 "
            style={{
                backgroundImage: `url(${home_background})`,
            }}
        >
            {/* 텍스트 묶음: pointer-events-none로 설정하여 클릭 막힘 방지 */}
            <div className="relative pointer-events-none ">
                {/* 처음 뜨는 문구 */}
                <h1
                    className={`text-4xl sm:text-5xl font-bold text-white transition-opacity duration-1000 ${showInitialText &&
                            !showMessage &&
                            !showSecondMessage &&
                            !showThirdMessage &&
                            !showFinalMessage1 &&
                            !showFinalMessage2 &&
                            !showFinalMessage3
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                >
                    당신은 죽었습니다
                </h1>

                {/* 첫 번째 문구: "여기가 마지막일까요?" */}
                <h1
                    className={`text-4xl sm:text-5xl font-bold text-white transition-opacity duration-1000 absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap ${showMessage &&
                            !showFinalMessage1 &&
                            !showFinalMessage2 &&
                            !showFinalMessage3
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                >
                    여기가 마지막일까요?
                </h1>

                {/* 두 번째 문구: "아니면 아직 남겨둔 무언가가" */}
                <h1
                    className={`text-4xl sm:text-5xl font-bold text-white transition-opacity duration-1000 absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap ${showSecondMessage &&
                            !showFinalMessage1 &&
                            !showFinalMessage2 &&
                            !showFinalMessage3
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                >
                    아니면 아직 남겨둔 무언가가
                </h1>

                {/* 세 번째 문구: "당신을 기다리고 있을까요?" */}
                <h1
                    className={`text-4xl sm:text-5xl font-bold text-white transition-opacity duration-1000 absolute top-40 left-1/2 -translate-x-1/2 whitespace-nowrap ${showThirdMessage &&
                            !showFinalMessage1 &&
                            !showFinalMessage2 &&
                            !showFinalMessage3
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                >
                    당신을 기다리고 있을까요?
                </h1>

                {/* 최종 문구 1: "영혼의 여정에서" */}
                <h1
                    className={`text-4xl sm:text-5xl font-bold text-white transition-opacity duration-1000 absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap ${showFinalMessage1 ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    영혼의 여정에서
                </h1>

                {/* 최종 문구 2: "각 단계마다 음표를 모아가며" */}
                <h1
                    className={`text-4xl sm:text-5xl font-bold text-white transition-opacity duration-1000 absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap ${showFinalMessage2 ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    각 단계마다 음표를 모아가며
                </h1>

                {/* 최종 문구 3: "그 답을 찾아보세요." */}
                <h1
                    className={`text-4xl sm:text-5xl font-bold text-white transition-opacity duration-1000 absolute top-40 left-1/2 -translate-x-1/2 whitespace-nowrap ${showFinalMessage3 ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    그 답을 찾아보세요.
                </h1>
            </div>

            {/* 버튼들: pointer-events-auto 유지로 클릭 가능 */}
            <div
                className={`relative flex flex-col items-center space-y-4 mt-10 transition-opacity duration-1000 ${showButtons ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{ pointerEvents: 'auto' }}
            >
                <button
                    className="w-80 bg-black bg-opacity-50 text-white px-6 py-3 rounded-md hover:bg-opacity-70 transition-opacity duration-300"
                    onClick={handleButtonClick}
                >
                    헉
                </button>
                <button
                    className="w-80 bg-black bg-opacity-50 text-white px-6 py-3 rounded-md hover:bg-opacity-70 transition-opacity duration-300"
                    onClick={handleButtonClick}
                >
                    진짜요?
                </button>
            </div>

            {/* 최종 버튼 */}
            <button
                className={`relative mt-10 bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg hover:bg-opacity-30 transition-all duration-1000 ${showStartButton ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{ pointerEvents: 'auto' }}
                onClick={handleStartJourney}
            >
                영혼의 여정 시작하기
            </button>
        </div>
    );
};

export default DeathScreen;
