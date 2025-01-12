import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import home_background from '../../assets/images/home_background.png';
import useUserStore from '../../store/userStore';

const GratitudeRoom = () => {
    const { lastName, firstName } = useUserStore();
    const [answer, setAnswer] = useState('');

    const handleChange = (e) => {
        setAnswer(e.target.value);
    }

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
                    <h2 className="text-lg font-semibold bg-black bg-opacity-60 px-3 py-2 rounded-md">
                        방랑자 정보 입력
                    </h2>
                    <ul className="space-y-4 text-lg">
                        <li className="font-bold bg-black bg-opacity-60 text-white px-2 py-1 rounded-md">1. 감사의 방</li>
                        <li>2. 반성의 방</li>
                        <li>3. '나'의 방</li>
                        <li>4. 친구의 방</li>
                        <li>5. 부모님의 방</li>
                    </ul>
                </div>

                {/* 우측 메뉴 */}
                <div className="w-3/4 flex flex-col items-center justify-center px-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
                    {`${lastName}${firstName}`}님의 삶에서 가장 감사했던 순간은 언제였나요?
                </h1>

                <textarea
                    value={answer}
                    onChange={handleChange}
                    placeholder="여기에 남겨주세요 :)"
                    className="w-full h-48 p-4 border-2 border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                />

                {/* 하단 음표 이미지 */}
                <div className="flex justify-center mt-8 space-x-4">
                    <img src={require('../../assets/images/note1.png')} alt="note1" className="w-8 h-8" />
                    <img src={require('../../assets/images/note2.png')} alt="note2" className="w-8 h-8" />
                    <img src={require('../../assets/images/note3.png')} alt="note3" className="w-8 h-8" />
                    <img src={require('../../assets/images/note4.png')} alt="note4" className="w-8 h-8" />
                    <img src={require('../../assets/images/note5.png')} alt="note5" className="w-8 h-8" />
                </div>

                {/* 좌우 네비게이션 버튼 */}
                <div className="absolute bottom-0 left-1/4 right-0 flex justify-between px-4 pb-4">
                    {/* 왼쪽 버튼 */}
                    <button className="text-2xl text-gray-700 hover:text-black">
                        &#8592;
                    </button>

                    {/* 오른쪽 버튼 */}
                    <button 
                        className="text-2xl text-gray-700 hover:text-black"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GratitudeRoom;