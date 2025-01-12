import React, { useState } from 'react';
import home_background from '../assets/images/home_background.png';
import useUserStore from '../store/userStore';

const JourneyStart = () => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // zustand에서 user_id 가져오기
    const userId = useUserStore((state) => state.userId);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(lastName, firstName, birthDate);

        const userData = {
            user_id: userId,  //로그인된 유저의 id
            last_name: lastName,
            first_name: firstName,
            birth_date: birthDate,
        };

        try {
            const response = await fetch('http://13.211.159.177/basics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();

                if (data.success) {
                    console.log('서버 응답:', data.message);
                    setPopupMessage(`반가워요, ${lastName+firstName}님! 갑작스러운 여정에 놀라셨겠지만.. \n같이 즐겨주셨으면 좋겠어요 :)`);
                    setIsPopupOpen(true);
                } else {
                    console.error('응답 실패:', data.message);
                }
            } else {
                console.error('서버 오류:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
            <div className="w-1/4 text-white flex flex-col items-center justify-center p-8 space-y-6">
                <h2 className="text-lg font-semibold bg-black bg-opacity-60 px-3 py-2 rounded-md">
                    방랑자 정보 입력
                </h2>
                <ul className="space-y-4 text-lg">
                    <li>1. 감사의 방</li>
                    <li>2. 반성의 방</li>
                    <li>3. '나'의 방</li>
                    <li>4. 친구의 방</li>
                    <li>5. 부모님의 방</li>
                </ul>
            </div>

            {/* 우측 폼 */}
            <div className="w-3/4 bg-white bg-opacity-45 p-8 rounded-l-3xl flex flex-col items-center justify-center px-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
                    방랑자님은 생전에 어떤 분이셨나요?
                </h1>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label className='block text-gray-800 font-semibold mb-2'>성</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='성'
                            className='w-full px-4 py-2 border-2 border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300'
                        />
                    </div>

                    <div>
                        <label className='block text-gray-800 font-semibold mb-2'>이름</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder='이름'
                            className='w-full px-4 py-2 border-2 border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300'
                        />
                    </div>

                    <div>
                        <label className='block text-gray-800 font-semibold mb-2'>생년월일</label>
                        <input
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className='w-full px-4 py-2 border-2 border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300'
                        />
                    </div>
                </form>

                {/* 좌우 네비게이션 버튼 */}
                <div className='absolute bottom-0 left-1/4 right-0 flex justify-between px-4 pb-4'>
                    {/* 왼쪽 버튼 */}
                    <button className="text-2xl text-gray-700 hover:text-black">
                        &#8592;
                    </button>

                    {/* 오른쪽 버튼 */}
                    <button 
                        className="text-2xl text-gray-700 hover:text-black"
                        onclick={handleSubmit}
                    >
                        &#8594;
                    </button>
                </div>
            </div>

            {/* 팝업 메시지 */}
            {isPopupOpen && (
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-700 text-white px-6 py-4 rounded-lg shadow-lg text-center whitespace-pre-line'>
                    {popupMessage}
                </div>
            )}
        </div>
    );
};

export default JourneyStart;