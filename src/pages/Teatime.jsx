import { useNavigate } from 'react-router-dom';
import home_background from '../assets/images/home_background.png';
import aristotleImage from '../assets/images/aristotle.png';
import schopenhauerImage from '../assets/images/schopenhauer.png';
import socratesImage from '../assets/images/socrates.png';

const TeaTime = () => {
    const navigate = useNavigate();

    // 철학자 선택 시 이동
    const handleSelectPhilosopher = (philosopher) => {
        navigate(`/mentor/${philosopher}`);  // 철학자에 따라 경로 이동
    };

    // 이전 페이지 이동
    const handlePrevious = () => {
        navigate('/revival');
    };


    return (
        <div
            className="w-full h-screen flex items-center justify-center relative"
            style={{
                backgroundImage: `url(${home_background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* 중앙 박스 */}
            <div className="w-3/4 h-5/6 bg-white bg-opacity-45 rounded-3xl flex flex-col items-center justify-center space-y-8 shadow-lg relative overflow-hidden">

                {/* 안내 문구 */}
                <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 text-center leading-relaxed">
                    고생 많으셨습니다!{"\n"}
                    이제 멘토와 함께하는 힐링의 <span className="text-purple-600 font-extrabold">Tea time☕</span> 을 즐겨보세요 ✨
                </h1>

                <h2 className="text-xl sm:text-2xl font-semibold text-purple-800 text-center">
                    오늘 당신의 영혼을 책임질 철학자는 누구인가요?
                </h2>

                {/* 철학자 선택 박스 */}
                <div className="flex space-x-24">
                    {/* 아리스토텔레스 */}
                    <div
                        className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => handleSelectPhilosopher('aristotle')}
                    >
                        <div className="w-40 h-40 bg-gray-300 rounded-xl shadow-lg overflow-hidden">
                            <img
                                src={aristotleImage}
                                alt="아리스토텔레스"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="mt-2 text-lg text-purple-800 font-medium">아리스토텔레스</p>
                    </div>

                    {/* 쇼펜하우어 */}
                    <div
                        className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => handleSelectPhilosopher('schopenhauer')}
                    >
                        <div className="w-40 h-40 bg-gray-300 rounded-xl shadow-lg overflow-hidden">
                            <img
                                src={schopenhauerImage}
                                alt="쇼펜하우어"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="mt-2 text-lg text-purple-800 font-medium">쇼펜하우어</p>
                    </div>

                    {/* 소크라테스 */}
                    <div
                        className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => handleSelectPhilosopher('socrates')}
                    >
                        <div className="w-40 h-40 bg-gray-300 rounded-xl shadow-lg overflow-hidden">
                            <img
                                src={socratesImage}
                                alt="소크라테스"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="mt-2 text-lg text-purple-800 font-medium">소크라테스</p>
                    </div>
                </div>

                {/* 좌우 네비게이션 버튼 */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8 py-8">
                    {/* 왼쪽 버튼 */}
                    <button
                        className="text-2xl text-gray-700 hover:text-black"
                        onClick={handlePrevious}
                    >
                        &#8592;
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TeaTime;