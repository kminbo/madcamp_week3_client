import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import home_background from '../../assets/images/home_background.png';
import useUserStore from '../../store/userStore';  // ✅ userId 가져오기
import { saveProgress } from '../../api/progressApi';  // ✅ API 호출 함수 가져오기

// ✅ 로컬스토리지 저장 함수
const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

// ✅ 로컬스토리지 불러오기 함수
const loadFromLocalStorage = (key) => {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : null;
};

const ParentsRoom = () => {
    const navigate = useNavigate();
    const { userId } = useUserStore();  // ✅ userId 가져오기
    const [answer, setAnswer] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // ✅ 페이지 로드 시 로컬스토리지에서 데이터 불러오기
    useEffect(() => {
        const savedAnswer = loadFromLocalStorage('parentsRoomAnswer');
        if (savedAnswer) {
            setAnswer(savedAnswer);
        }
    }, []);

    // 입력값 변경
    const handleChange = (e) => {
        setAnswer(e.target.value);
    };

    // ✅ 진행 상황 저장 함수
    const handleNext = async () => {
        if (isPopupOpen) {
            navigate('/journey-end');
            return;
        }

        if (answer.trim() === '') {
            setPopupMessage("답변을 입력해주세요! 😊");
            setIsPopupOpen(true);
            return;
        }

        setPopupMessage("부모님은 언제나 우리 곁에서 든든하게 지켜주는 존재죠. \n그 사랑과 감사함이 마음속에 오래 남길 바랍니다.");
        setIsPopupOpen(true);

        // ✅ 로컬스토리지에 저장
        saveToLocalStorage('parentsRoomAnswer', answer);

        // ✅ MongoDB에 진행 상황 저장
        const progressData = {
            userId: userId || 'default-user-id',
            stage: 5,
            questions: [
                {
                    stage: 5,
                    questionText: "부모님께 마지막으로 전하고 싶은 말이 있나요?",
                    answerText: answer,
                },
            ],
        };

        try {
            const response = await saveProgress(progressData);
            console.log('진행 상황 저장 성공:', response);
        } catch (error) {
            console.error('진행 상황 저장 중 오류 발생:', error);
        }
    };

    // 이전 페이지 이동
    const handlePrevious = () => {
        navigate('/friend');  // 이전 방으로 이동
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
            <div className="w-1/4 text-white flex flex-col items-center justify-center p-8 space-y-6">
                <h2 className="text-lg font-semibold px-3 py-2 rounded-md">
                    방랑자 정보 입력
                </h2>
                <ul className="space-y-4 text-lg">
                    <li>1. 감사의 방</li>
                    <li>2. 반성의 방</li>
                    <li>3. '나'의 방</li>
                    <li>4. 친구의 방</li>
                    <li className="font-bold bg-black bg-opacity-60 text-white px-2 py-1 rounded-md">5. 부모님의 방</li>
                </ul>
            </div>

            {/* 우측 메뉴 */}
            <div className="w-3/4 bg-white bg-opacity-45 p-8 rounded-l-3xl flex flex-col items-center justify-center px-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
                    부모님께 마지막으로 전하고 싶은 말이 있나요?
                </h1>

                <textarea
                    value={answer}
                    onChange={handleChange}
                    placeholder="여기에 남겨주세요 :)"
                    className="w-full h-48 p-4 border-2 border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                />

                {/* 하단 음표 이미지 */}
                <div className="flex mt-16 space-x-4">
                    <img src={require('../../assets/images/note1_purple.png')} alt="note1" className="w-16 h-30 opacity-100" />
                    <img src={require('../../assets/images/note2_purple.png')} alt="note2" className="w-16 h-30 opacity-100" />
                    <img src={require('../../assets/images/note3_purple.png')} alt="note3" className="w-16 h-30 opacity-100" />
                    <img src={require('../../assets/images/note4_purple.png')} alt="note4" className="w-16 h-30 opacity-100" />
                    <img src={require('../../assets/images/note5.png')} alt="note5" className="w-16 h-30 opacity-60 grayscale" />
                </div>

                {/* 좌우 네비게이션 버튼 */}
                <div className="absolute bottom-0 left-1/4 right-0 flex justify-between px-4 pb-4">
                    {/* 왼쪽 버튼 */}
                    <button
                        className="text-2xl text-gray-700 hover:text-black"
                        onClick={handlePrevious}
                    >
                        &#8592;
                    </button>

                    {/* 오른쪽 버튼 */}
                    <button
                        className="text-2xl text-gray-700 hover:text-black"
                        onClick={handleNext}
                    >
                        &#8594;
                    </button>
                </div>
            </div>

            {/* 팝업 메시지 */}
            {isPopupOpen && (
                <div
                    onClick={closePopup}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-700 text-white px-6 py-4 rounded-lg shadow-lg text-center whitespace-pre-line cursor-pointer"
                >
                    {popupMessage}
                </div>
            )}
        </div>
    );
};

export default ParentsRoom;
