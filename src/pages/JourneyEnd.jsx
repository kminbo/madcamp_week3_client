// import home_background from '../assets/images/home_background.png';
// import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getProgress } from '../api/progressApi';  // ✅ API 함수 가져오기
// import { generateStatistics } from '../api/aiApi';  // ✅ API 함수 가져오기
// import useUserStore from '../store/userStore';  // ✅ 사용자 ID 가져오기

// const JourneyEnd = () => {
//     const navigate = useNavigate();
//     const { userId } = useUserStore();  // ✅ 사용자 ID 가져오기

//     const [showSummary, setShowSummary] = useState(false);   // 요약 표시 여부
//     const [animateNotes, setAnimateNotes] = useState(false); // 음표 애니메이션 여부
//     const [summaries, setSummaries] = useState([]);          // ✅ AI 요약 데이터 상태 추가

//     // ✅ 진행 상황과 AI 통계 요약 가져오기
//     useEffect(() => {
//         const fetchSummaries = async () => {
//             try {
//                 // 사용자 진행 상황 가져오기
//                 const progressData = await getProgress(userId);

//                 if (progressData && progressData.questions) {
//                     // AI 통계 요약 생성 API 호출
//                     const result = await generateStatistics(progressData.questions);
//                     setSummaries(result.summaries);
//                 }
//             } catch (error) {
//                 console.error('통계 요약을 가져오는 중 오류 발생:', error);
//             }
//         };

//         fetchSummaries();
//     }, [userId]);

//     // 음표 애니메이션과 요약 표시를 한 번에 관리
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setAnimateNotes(true);  // 음표 올라감
//         }, 2000);  // 2초 후 애니메이션 시작

//         const summaryTimer = setTimeout(() => {
//             setShowSummary(true);   // 3초 후 요약 표시
//         }, 3000);

//         // 타이머 정리
//         return () => {
//             clearTimeout(timer);
//             clearTimeout(summaryTimer);
//         };
//     }, []);  // 의존성 배열 비워서 한 번만 실행

//     // 이전 페이지 이동
//     const handlePrevious = () => {
//         navigate('/parents');
//     };

//     // 다음 페이지 이동
//     const handleNext = () => {
//         navigate('/revival');
//     };

//     return (
//         <div
//             className="w-full h-screen flex items-center justify-center relative"
//             style={{
//                 backgroundImage: `url(${home_background})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}
//         >
//             {/* 중앙 박스 */}
//             <div className="w-3/4 h-5/6 bg-white bg-opacity-45 rounded-3xl flex flex-col items-center justify-center space-y-8 shadow-lg relative overflow-hidden">

//                 {/* 음표 이미지 */}
//                 <div className={`absolute top-20 flex space-x-4 transition-transform duration-1000 ${animateNotes ? '-translate-y-12' : 'translate-y-0'}`}>
//                     <img src={require('../assets/images/note1_purple.png')} alt="note1" className="w-16 h-30 opacity-100" />
//                     <img src={require('../assets/images/note2_purple.png')} alt="note2" className="w-16 h-30 opacity-100" />
//                     <img src={require('../assets/images/note3_purple.png')} alt="note3" className="w-16 h-30 opacity-100" />
//                     <img src={require('../assets/images/note4_purple.png')} alt="note4" className="w-16 h-30 opacity-100" />
//                     <img src={require('../assets/images/note5_purple.png')} alt="note5" className="w-16 h-30 opacity-100" />
//                 </div>

//                 {/* 초기 멘트 */}
//                 {!showSummary && (
//                     <h1 className="mt-40 text-3xl font-bold text-purple-800 transition-opacity duration-1000">
//                         음표를 모두 모아 영혼의 여정을 마쳤어요.
//                     </h1>
//                 )}

//                 {/* 답변 요약 */}
//                 {showSummary && (
//                     <div className="mt-48 w-2/3 space-y-4 text-base text-gray-800">
//                         {summaries.map((summary) => (
//                             <div key={summary.stage} className="p-4 border-2 border-purple-500 rounded-2xl">
//                                 <strong>{getStageTitle(summary.stage)}:</strong> {summary.summary}
//                             </div>
//                         ))}
//                     </div>
//                 )}

//                 {/* 좌우 네비게이션 버튼 */}
//                 <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8 py-8">
//                     {/* 왼쪽 버튼 */}
//                     <button className="text-2xl text-gray-700 hover:text-black" onClick={handlePrevious}>
//                         &#8592;
//                     </button>

//                     {/* 오른쪽 버튼 */}
//                     <button className="text-2xl text-gray-700 hover:text-black" onClick={handleNext}>
//                         &#8594;
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // ✅ 각 stage별 제목 반환 함수
// const getStageTitle = (stage) => {
//     switch (stage) {
//         case 1: return '감사했던 순간';
//         case 2: return '후회하는 것';
//         case 3: return '취미와 꿈';
//         case 4: return '친구에게 하고 싶었던 말';
//         case 5: return '부모님께 하고 싶었던 말';
//         default: return '';
//     }
// };

// export default JourneyEnd;
import home_background from '../assets/images/home_background.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProgress } from '../api/progressApi';  // ✅ API 함수 가져오기
import { generateStatistics } from '../api/aiApi';  // ✅ API 함수 가져오기
import useUserStore from '../store/userStore';  // ✅ 사용자 ID 가져오기

const JourneyEnd = () => {
    const navigate = useNavigate();
    const { userId } = useUserStore();  // ✅ 사용자 ID 가져오기

    const [showSummary, setShowSummary] = useState(false);   // 요약 표시 여부
    const [summaries, setSummaries] = useState([]);          // ✅ AI 요약 데이터 상태 추가

    // ✅ 진행 상황과 AI 통계 요약 가져오기
    useEffect(() => {
        const fetchSummaries = async () => {
            try {
                const progressData = await getProgress(userId);

                if (progressData && progressData.questions) {
                    const result = await generateStatistics(progressData.questions);
                    setSummaries(result.summaries);
                }
            } catch (error) {
                console.error('통계 요약을 가져오는 중 오류 발생:', error);
            }
        };

        fetchSummaries();
    }, [userId]);

    // 음표 애니메이션과 요약 표시를 한 번에 관리
    useEffect(() => {
        const summaryTimer = setTimeout(() => {
            setShowSummary(true);   // 3초 후 요약 표시
        }, 3000);

        return () => {
            clearTimeout(summaryTimer);
        };
    }, []);  // 의존성 배열 비워서 한 번만 실행

    // 이전 페이지 이동
    const handlePrevious = () => {
        navigate('/parents');
    };

    // 다음 페이지 이동
    const handleNext = () => {
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

                {/* 음표 이미지 */}
                <div
                    className={`absolute top-20 flex space-x-4 transition-opacity duration-1000 ${showSummary ? 'opacity-0' : 'opacity-100'}`}
                >
                    <img src={require('../assets/images/note1_purple.png')} alt="note1" className="w-16 h-30" />
                    <img src={require('../assets/images/note2_purple.png')} alt="note2" className="w-16 h-30" />
                    <img src={require('../assets/images/note3_purple.png')} alt="note3" className="w-16 h-30" />
                    <img src={require('../assets/images/note4_purple.png')} alt="note4" className="w-16 h-30" />
                    <img src={require('../assets/images/note5_purple.png')} alt="note5" className="w-16 h-30" />
                </div>

                {/* 초기 멘트 */}
                {!showSummary && (
                    <h1 className="mt-40 text-3xl font-bold text-purple-800 transition-opacity duration-1000">
                        음표를 모두 모아 영혼의 여정을 마쳤어요.
                    </h1>
                )}

                {/* 답변 요약 */}
                {showSummary && (
                    <div className="mt-48 w-2/3 space-y-4 text-base text-gray-800">
                        {summaries.map((summary) => (
                            <div key={summary.stage} className="p-4 border-2 border-purple-500 rounded-2xl">
                                <strong>{getStageTitle(summary.stage)}:</strong> {summary.summary}
                            </div>
                        ))}
                    </div>
                )}

                {/* 좌우 네비게이션 버튼 */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8 py-8">
                    {/* 왼쪽 버튼 */}
                    <button className="text-2xl text-gray-700 hover:text-black" onClick={handlePrevious}>
                        &#8592;
                    </button>

                    {/* 오른쪽 버튼 */}
                    <button className="text-2xl text-gray-700 hover:text-black" onClick={handleNext}>
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
};

// ✅ 각 stage별 제목 반환 함수
const getStageTitle = (stage) => {
    switch (stage) {
        case 1: return '감사했던 순간';
        case 2: return '후회하는 것';
        case 3: return '취미와 꿈';
        case 4: return '친구에게 하고 싶었던 말';
        case 5: return '부모님께 하고 싶었던 말';
        default: return '';
    }
};

export default JourneyEnd;
