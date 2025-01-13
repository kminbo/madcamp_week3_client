import home_background from '../assets/images/home_background.png';
import { useNavigate } from 'react-router-dom';


const JourneyEnd = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/parents');
    };

    const handleNext = () => {
        // navigate('/death');
        return;
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
            <div className="w-3/4 h-5/6 bg-white bg-opacity-45 rounded-3xl flex flex-col items-center justify-center space-y-8 shadow-lg">

                {/* 음표 이미지 */}
                <div className="flex mt-16 space-x-4">
                    <img src={require('../assets/images/note1_purple.png')} alt="note1" className="w-16 h-30 opacity-100" />
                    <img src={require('../assets/images/note2_purple.png')} alt="note2" className="w-16 h-30 opacity-100" />
                    <img src={require('../assets/images/note3_purple.png')} alt="note3" className="w-16 h-30 opacity-100" />
                    <img src={require('../assets/images/note4_purple.png')} alt="note4" className="w-16 h-30 opacity-100" />
                    <img src={require('../assets/images/note5_purple.png')} alt="note5" className="w-16 h-30 opacity-100" />
                </div>

                {/* 텍스트 메시지 */}
                <h1 className="text-3xl font-bold text-purple-800">
                    영혼의 여정을 마쳤어요.
                </h1>

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
        </div>
    );
};

export default JourneyEnd;