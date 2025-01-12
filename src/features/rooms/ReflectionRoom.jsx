import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import home_background from '../../assets/images/home_background.png';

const ReflectionRoom = () => {
    const navigate = useNavigate();
    const [answer, setAnswer] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [nextStep, setNextStep] = useState(false);

    // 입력값 변경
    const handleChange = (e) => {
        setAnswer(e.target.value);
    };

    // 다음 페이지 이동
    const handleNext = () => {
        if (answer.trim() === '') {
            setPopupMessage("답변을 입력해주세요! 😊");
            setIsPopupOpen(true);
            return;
        }

        setPopupMessage("그때의 선택과 행동의 의미를 깊이 돌아보며 \n스스로를 더 진지하게 마주하는 시간이 되었길 바랍니다.");
        setIsPopupOpen(true);
        setNextStep(true);

        console.log("반성의 방 답변:", answer);  // 서버 전송 로직 추가 가능
    };

    // 이전 페이지 이동
    const handlePrevious = () => {
        navigate('/gratitude');  // 이전 방으로 이동

        if (nextStep) {
            navigate('/self-room');  // 다음 방으로 이동
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
            <div className="w-1/4 text-white flex flex-col items-center justify-center p-8 space-y-6">
                <h2 className="text-lg font-semibold px-3 py-2 rounded-md">
                    방랑자 정보 입력
                </h2>
                <ul className="space-y-4 text-lg">
                    <li>1. 감사의 방</li>
                    <li className="font-bold bg-black bg-opacity-60 text-white px-2 py-1 rounded-md">2. 반성의 방</li>
                    <li>3. '나'의 방</li>
                    <li>4. 친구의 방</li>
                    <li>5. 부모님의 방</li>
                </ul>
            </div>

            {/* 우측 메뉴 */}
            <div className="w-3/4 bg-white bg-opacity-45 p-8 rounded-l-3xl flex flex-col items-center justify-center px-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
                    과거의 나에게 해주고 싶은 조언이 있다면?
                </h1>

                <textarea
                    value={answer}
                    onChange={handleChange}
                    placeholder="여기에 남겨주세요 :)"
                    className="w-full h-48 p-4 border-2 border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                />

                {/* 하단 음표 이미지 */}
                <div className="flex mt-16 space-x-4">
                    <img src={require('../../assets/images/note1.png')} alt="note1" className="w-16 h-30 opacity-60 grayscale" />
                    <img src={require('../../assets/images/note2.png')} alt="note2" className="w-16 h-30 opacity-60 grayscale" />
                    <img src={require('../../assets/images/note3.png')} alt="note3" className="w-16 h-30 opacity-60 grayscale" />
                    <img src={require('../../assets/images/note4.png')} alt="note4" className="w-16 h-30 opacity-60 grayscale" />
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
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-700 text-white px-6 py-4 rounded-lg shadow-lg text-center whitespace-pre-line cursor-pointer'>
                    {popupMessage}
                </div>
            )}
        </div>
    );
};

export default ReflectionRoom;
