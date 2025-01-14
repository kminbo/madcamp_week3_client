import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import home_background from '../../assets/images/home_background.png';
import useUserStore from '../../store/userStore'; // ✅ userId 가져오기
import { saveProgress } from '../../api/progressApi'; // ✅ API 호출 함수 가져오기

// ✅ 로컬스토리지 저장 함수
const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

// ✅ 로컬스토리지 불러오기 함수
const loadFromLocalStorage = (key) => {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : null;
};

const SelfRoom = () => {
    const navigate = useNavigate();
    const { userId } = useUserStore(); // ✅ userId 가져오기
    const [answers, setAnswers] = useState({});
    const [step, setStep] = useState(1);
    const [currentInput, setCurrentInput] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [blink, setBlink] = useState(false);
    const questions = {
        1: '다시 태어난다면 꼭 해보고 싶은 게 있을까요?',
        2: '살면서 가장 즐거웠던 순간은 언제인가요?',
        3: '현재나 과거의 취미나 꿈에 대해서 생각해볼까요?',
    };

    const stage = 3; // ✅ SelfRoom의 stage 값 고정

    // ✅ 페이지 로드 시 로컬스토리지에서 데이터 불러오기
    useEffect(() => {
        const savedAnswers = loadFromLocalStorage('selfRoomAnswers');
        if (savedAnswers) {
            setAnswers(savedAnswers);
            setStep(Object.keys(savedAnswers).length + 1);
            setCurrentInput(savedAnswers[Object.keys(savedAnswers).length + 1] || '');
        }

        // ✅ 블링크 효과
        setBlink(true);
        setTimeout(() => {
            setBlink(false);
        }, 1500);
    }, []);

    // 입력값 변경
    const handleChange = (e) => {
        setCurrentInput(e.target.value);
    };

    // ✅ 진행 상황 저장 함수
    const handleSubmit = async () => {
        if (currentInput.trim() === '') {
            setPopupMessage('답변을 입력해주세요! 😊');
            setIsPopupOpen(true);
            return;
        }

        // ✅ 로컬스토리지에 저장
        const updatedAnswers = { ...answers, [step]: currentInput };
        setAnswers(updatedAnswers);
        saveToLocalStorage('selfRoomAnswers', updatedAnswers);

        // ✅ MongoDB에 진행 상황 저장
        const progressData = {
            userId: userId || 'default-user-id',
            stage: stage, // ✅ 고정된 stage 값 사용
            questions: [
                {
                    stage: stage,
                    questionText: questions[step],
                    answerText: currentInput,
                },
            ],
        };

        try {
            const response = await saveProgress(progressData);
            console.log('진행 상황 저장 성공:', response);
        } catch (error) {
            console.error('진행 상황 저장 중 오류 발생:', error);
        }

        if (step < Object.keys(questions).length) {
            setStep(step + 1);
            setCurrentInput(updatedAnswers[step + 1] || '');
        } else {
            setPopupMessage('당신의 꿈과 행복했던 순간들에 대한 따뜻한 이야기가 마음에 깊이 스며들었어요!');
            setIsPopupOpen(true);
        }
    };

    // 오른쪽 버튼 클릭 시 동작
    const handleRightButtonClick = () => {
        if (isPopupOpen) {
            setIsPopupOpen(false);
            navigate('/friend');
        } else {
            handleSubmit();
        }
    };

    // 왼쪽 버튼 클릭 시 동작
    const handlePreviousButtonClick = () => {
        if (isPopupOpen) {
            setIsPopupOpen(false);
            return;
        }

        if (step > 1) {
            setStep(step - 1);
            setCurrentInput(answers[step - 1] || '');
        }

        if (step === 1) {
            navigate('/reflection');
        }
    };

    // 팝업 닫기
    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div
            className="w-full h-screen flex relative"
            style={{
                backgroundImage: `url(${home_background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* 좌측 메뉴 */}
            <div className="w-1/4 text-white flex flex-col items-center justify-center p-12 space-y-12">
                <h2 className="text-lg font-semibold bg-black bg-opacity-40 px-3 py-2 rounded-md">
                    방랑자 정보 입력
                </h2>
                <ul className="space-y-8 text-lg">
                    <li>1. 감사의 방</li>
                    <li>2. 반성의 방</li>
                    <li className="font-bold bg-black bg-opacity-60 text-white px-2 py-1 rounded-md">3. '나'의 방</li>
                    <li>4. 친구의 방</li>
                    <li>5. 부모님의 방</li>
                </ul>
            </div>

            {/* 우측 메뉴 */}
            <div className="w-3/4 bg-white bg-opacity-45 p-8 rounded-l-3xl flex flex-col items-center justify-center px-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
                    {questions[step]}
                </h1>

                <textarea
                    value={currentInput}
                    onChange={handleChange}
                    placeholder="여기에 남겨주세요 :)"
                    className="w-full h-48 p-4 border-2 border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none bg-white bg-opacity-50"
                />

                {/* 하단 음표 이미지 */}
                <div className="flex mt-16 space-x-4">
                    <img src={require('../../assets/images/note1_purple.png')} alt="note1" className={`w-16 h-30 opacity-100 ${blink ? 'animate-scale-once' : ''}`} />
                    <img src={require('../../assets/images/note2_purple.png')} alt="note2" className={`w-16 h-30 opacity-100 ${blink ? 'animate-scale-once' : ''}`} />
                    <img src={require('../../assets/images/note3.png')} alt="note3" className="w-16 h-30 opacity-60 grayscale" />
                    <img src={require('../../assets/images/note4.png')} alt="note4" className="w-16 h-30 opacity-60 grayscale" />
                    <img src={require('../../assets/images/note5.png')} alt="note5" className="w-16 h-30 opacity-60 grayscale" />
                </div>

                {/* 좌우 네비게이션 버튼 */}
                <div className="absolute bottom-0 left-1/4 right-0 flex justify-between px-4 pb-4">
                    <button className="text-2xl text-gray-700 hover:text-black" onClick={handlePreviousButtonClick}>
                        &#8592;
                    </button>
                    <button className="text-2xl text-gray-700 hover:text-black" onClick={handleRightButtonClick}>
                        &#8594;
                    </button>
                </div>
            </div>

            {/* 팝업 메시지 */}
            {isPopupOpen && (
                <div
                    onClick={closePopup}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-900 bg-opacity-85 text-white px-6 py-4 rounded-lg shadow-lg text-center whitespace-pre-line cursor-pointer"
                >
                    {popupMessage}
                </div>
            )}
        </div>
    );
};

export default SelfRoom;
