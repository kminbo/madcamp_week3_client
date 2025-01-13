// // import { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import home_background from '../assets/images/home_background.png';

// // // // 카카오 SDK 불러오기
// // // const loadKakaoSDK = () => {
// // //     if (!window.Kakao) {
// // //         const script = document.createElement("script");
// // //         script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
// // //         script.onload = () => {
// // //             window.Kakao.init("YOUR_KAKAO_APP_KEY");  // 카카오 앱 키 입력
// // //         };
// // //         document.head.appendChild(script);
// // //     }
// // // };

// // const Revival = () => {
// //     const navigate = useNavigate();

// //     // 각 줄의 표시 여부 상태
// //     const [visibleLines, setVisibleLines] = useState([false, false, false]);
// //     const [isPopupOpen, setIsPopupOpen] = useState(false);
// //     const [popupVisible, setPopupVisible] = useState(false);

// //     // useEffect(() => {
// //     //     loadKakaoSDK();
// //     // }, []);

// //     // 이전 페이지 이동
// //     const handlePrevious = () => {
// //         navigate('/journey-end');
// //     };

// //     // 다음 페이지 이동
// //     const handleNext = () => {
// //         navigate('/teatime');
// //     };

// //     // 팝업 열기
// //     const openPopup = () => {
// //         setIsPopupOpen(true);
// //         setTimeout(() => setPopupVisible(true), 100); //팝업 서서히 등장
// //     };

// //     // 팝업 닫기
// //     const closePopup = () => {
// //         setIsPopupOpen(false);
// //         setTimeout(() => setIsPopupOpen(false), 500);
// //     };

// //     // 줄별 애니메이션 효과
// //     useEffect(() => {
// //         const timers = [];

// //         // 각 줄을 1초 간격으로 표시
// //         visibleLines.forEach((_, index) => {
// //             const timer = setTimeout(() => {
// //                 setVisibleLines((prev) => {
// //                     const updated = [...prev];
// //                     updated[index] = true;
// //                     return updated;
// //                 });
// //             }, index * 1000);  // 1초 간격으로 표시
// //             timers.push(timer);
// //         });

// //         //4초 후 팝업 자동 열기
// //         const popupTimer = setTimeout(() => {
// //             openPopup();
// //         }, 4000);

// //         return () => {
// //             timers.forEach(clearTimeout);  // 컴포넌트 해제 시 타이머 정리
// //             clearTimeout(popupTimer);
// //         };
// //     }, []);

// //     return (
// //         <div
// //             className="w-full h-screen flex items-center justify-center relative"
// //             style={{
// //                 backgroundImage: `url(${home_background})`,
// //                 backgroundSize: 'cover',
// //                 backgroundPosition: 'center',
// //             }}
// //         >

// //             {/* 중앙 박스 */}
// //             <div className="w-3/4 h-5/6 bg-white bg-opacity-45 rounded-3xl flex flex-col items-center justify-center space-y-6 shadow-lg relative overflow-hidden">

// //                 {/* 줄별로 천천히 나타나는 메시지 */}
// //                 <p className={`text-xl sm:text-2xl font-bold text-center text-purple-800 leading-relaxed whitespace-pre-line transition-opacity duration-1000 ${visibleLines[0] ? 'opacity-100' : 'opacity-0'}`}>
// //                     영혼의 여정을 통해 삶을 되돌아본 당신은,
// //                 </p>
// //                 <p className={`text-xl sm:text-2xl font-bold text-center text-purple-800 leading-relaxed whitespace-pre-line transition-opacity duration-1000 ${visibleLines[1] ? 'opacity-100' : 'opacity-0'}`}>
// //                     마침내 기적처럼 다시 삶으로 돌아갈 기회를 얻게 되었어요.
// //                 </p>
// //                 <p className={`text-xl sm:text-2xl font-bold text-center text-purple-800 leading-relaxed whitespace-pre-line transition-opacity duration-1000 ${visibleLines[2] ? 'opacity-100' : 'opacity-0'}`}>
// //                     이제 그 소중한 순간들을 더 깊이 느끼고 살아가길 바라요.
// //                 </p>

// //                 {/* 좌우 네비게이션 버튼 */}
// //                 <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8 py-8">
// //                     {/* 왼쪽 버튼 */}
// //                     <button
// //                         className="text-2xl text-gray-700 hover:text-black"
// //                         onClick={handlePrevious}
// //                     >
// //                         &#8592;
// //                     </button>

// //                     {/* 오른쪽 버튼 */}
// //                     <button
// //                         className="text-2xl text-gray-700 hover:text-black"
// //                         onClick={handleNext}
// //                     >
// //                         &#8594;
// //                     </button>
// //                 </div>
// //             </div>

// //             {/* 팝업 */}
// //             {isPopupOpen &&
// //                 <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ${popupVisible ? 'opacity-100' : 'opacity-0'}`}>
// //                     {/* 팝업 박스 */}
// //                     <div className="w-3/4 md:w-1/2 bg-purple-100 rounded-3xl p-8 shadow-2xl text-center relative max-h-[80vh] overflow-y-auto">
// //                         <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
// //                             부모님께 하고 싶었던 말:
// //                         </h2>
// //                         <p className="text-lg text-gray-700 mb-6 whitespace-pre-wrap break-words">
// //                             efewfwfuewwwwwwwwwwifhuwiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiieefewfwfuewwwwwwwwwwifhuwiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiieefewfwfuewwwwwwwwwwifhuwiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiieefewfwfuewwwwwwwwwwifhuwiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiie
// //                         </p>

// //                         <button
// //                             className="mt-4 px-6 py-2 border-2 border-purple-800 text-purple-800 font-semibold rounded-full hover:bg-purple-800 hover:text-white transition"
// //                         >
// //                             지금이라도 카톡으로 마음을 전해보세요!
// //                         </button>
// //                     </div>
// //                 </div>
// //             }
// //         </div>
// //     );
// // };

// // export default Revival;

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import home_background from '../assets/images/home_background.png';
// import { getProgress } from '../api/progressApi';  // ✅ 진행 상황 조회 API 가져오기
// import useUserStore from '../store/userStore';  // ✅ 사용자 ID 가져오기

// const Revival = () => {
//     const navigate = useNavigate();
//     const { userId } = useUserStore();  // ✅ 사용자 ID 가져오기

//     // 상태 관리
//     const [visibleLines, setVisibleLines] = useState([false, false, false]);
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [popupVisible, setPopupVisible] = useState(false);
//     const [parentMessage, setParentMessage] = useState('');  // ✅ 부모님께 쓴 메시지 저장 상태
//     const [loading, setLoading] = useState(true);  // ✅ 로딩 상태 추가

//     // 진행 상황 가져오기 (부모님께 쓴 메시지 필터링)
//     useEffect(() => {
//         const fetchParentMessage = async () => {
//             try {
//                 const progressData = await getProgress(userId);
//                 if (progressData && progressData.questions) {
//                     // ✅ Stage 5의 답변 필터링
//                     const parentQuestion = progressData.questions.find(q => q.stage === 5);
//                     if (parentQuestion) {
//                         setParentMessage(parentQuestion.answerText);
//                     }
//                 }
//             } catch (error) {
//                 console.error('진행 상황 가져오는 중 오류 발생:', error);
//             } finally {
//                 setLoading(false);  // ✅ 로딩 완료
//             }
//         };

//         fetchParentMessage();
//     }, [userId]);

//     // 이전 페이지 이동
//     const handlePrevious = () => {
//         navigate('/journey-end');
//     };

//     // 다음 페이지 이동
//     const handleNext = () => {
//         navigate('/teatime');
//     };

//     // 팝업 열기
//     const openPopup = () => {
//         setIsPopupOpen(true);
//         setTimeout(() => setPopupVisible(true), 100);  // 팝업 서서히 등장
//     };

//     // 팝업 닫기
//     const closePopup = () => {
//         setPopupVisible(false);
//         setTimeout(() => setIsPopupOpen(false), 500);
//     };

//     // 줄별 애니메이션 효과
//     useEffect(() => {
//         const timers = [];

//         // 각 줄을 1초 간격으로 표시
//         for (let index = 0; index < visibleLines.length; index++) {
//             const timer = setTimeout(() => {
//                 setVisibleLines((prev) => {
//                     const updated = [...prev];
//                     updated[index] = true;
//                     return updated;
//                 });
//             }, index * 1000);  // 1초 간격으로 표시
//             timers.push(timer);
//         }

//         // 4초 후 팝업 자동 열기
//         const popupTimer = setTimeout(() => {
//             openPopup();
//         }, 4000);

//         return () => {
//             timers.forEach(clearTimeout);  // 컴포넌트 해제 시 타이머 정리
//             clearTimeout(popupTimer);
//         };
//     }, []);  // ✅ 의존성 배열을 빈 상태로 유지



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
//             <div className="w-3/4 h-5/6 bg-white bg-opacity-45 rounded-3xl flex flex-col items-center justify-center space-y-6 shadow-lg relative overflow-hidden">

//                 {/* 줄별로 천천히 나타나는 메시지 */}
//                 <p className={`text-xl sm:text-2xl font-bold text-center text-purple-800 leading-relaxed whitespace-pre-line transition-opacity duration-1000 ${visibleLines[0] ? 'opacity-100' : 'opacity-0'}`}>
//                     영혼의 여정을 통해 삶을 되돌아본 당신은,
//                 </p>
//                 <p className={`text-xl sm:text-2xl font-bold text-center text-purple-800 leading-relaxed whitespace-pre-line transition-opacity duration-1000 ${visibleLines[1] ? 'opacity-100' : 'opacity-0'}`}>
//                     마침내 기적처럼 다시 삶으로 돌아갈 기회를 얻게 되었어요.
//                 </p>
//                 <p className={`text-xl sm:text-2xl font-bold text-center text-purple-800 leading-relaxed whitespace-pre-line transition-opacity duration-1000 ${visibleLines[2] ? 'opacity-100' : 'opacity-0'}`}>
//                     이제 그 소중한 순간들을 더 깊이 느끼고 살아가길 바라요.
//                 </p>

//                 {/* 좌우 네비게이션 버튼 */}
//                 <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8 py-8">
//                     {/* 왼쪽 버튼 */}
//                     <button
//                         className="text-2xl text-gray-700 hover:text-black"
//                         onClick={handlePrevious}
//                     >
//                         &#8592;
//                     </button>

//                     {/* 오른쪽 버튼 */}
//                     <button
//                         className="text-2xl text-gray-700 hover:text-black"
//                         onClick={handleNext}
//                     >
//                         &#8594;
//                     </button>
//                 </div>
//             </div>

//             {/* 팝업 */}
//             {isPopupOpen && (
//                 <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ${popupVisible ? 'opacity-100' : 'opacity-0'}`}>
//                     {/* 팝업 박스 */}
//                     <div className="w-3/4 md:w-1/2 bg-purple-100 rounded-3xl p-8 shadow-2xl text-center relative max-h-[80vh] overflow-y-auto">
//                         <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
//                             부모님께 하고 싶었던 말:
//                         </h2>
//                         {/* ✅ 부모님 메시지 표시 */}
//                         {loading ? (
//                             <p className="text-lg text-gray-700 mb-6">로딩 중...</p>
//                         ) : (
//                             <p className="text-lg text-gray-700 mb-6 whitespace-pre-wrap break-words">
//                                 {parentMessage || '부모님께 전할 메시지가 없습니다.'}
//                             </p>
//                         )}

//                         <button
//                             className="mt-4 px-6 py-2 border-2 border-purple-800 text-purple-800 font-semibold rounded-full hover:bg-purple-800 hover:text-white transition"
//                             onClick={closePopup}
//                         >
//                             지금이라도 카톡으로 마음을 전해보세요!
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Revival;
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import home_background from '../assets/images/home_background.png';
import { getProgress } from '../api/progressApi';
import useUserStore from '../store/userStore';

const Revival = () => {
    const navigate = useNavigate();
    const { userId } = useUserStore();

    const [visibleLines, setVisibleLines] = useState([false, false, false]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [parentMessage, setParentMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchParentMessage = async () => {
            try {
                const progressData = await getProgress(userId);
                if (progressData?.questions) {
                    const parentQuestion = progressData.questions.find(q => q.stage === 5);
                    if (parentQuestion) {
                        setParentMessage(parentQuestion.answerText);
                    }
                }
            } catch (error) {
                console.error('진행 상황 가져오는 중 오류 발생:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchParentMessage();
    }, [userId]);

    const handlePrevious = () => {
        navigate('/journey-end');
    };

    const handleNext = () => {
        navigate('/teatime');
    };

    const openPopup = () => {
        setIsPopupOpen(true);
        setTimeout(() => setPopupVisible(true), 100);
    };

    const closePopup = () => {
        setPopupVisible(false);
        setTimeout(() => {
            setIsPopupOpen(false);
        }, 500);
    }
    // Fixed useEffect with proper dependency
    useEffect(() => {
        const linesCount = visibleLines.length;
        const timers = [];

        for (let index = 0; index < linesCount; index++) {
            const timer = setTimeout(() => {
                setVisibleLines(prev => {
                    const updated = [...prev];
                    updated[index] = true;
                    return updated;
                });
            }, index * 1000);
            timers.push(timer);
        }

        const popupTimer = setTimeout(() => {
            openPopup();
        }, 4000);

        return () => {
            timers.forEach(clearTimeout);
            clearTimeout(popupTimer);
        };
    }, [visibleLines.length]); // Added visibleLines.length as dependency

    return (
        <div
            className="w-full h-screen flex items-center justify-center relative"
            style={{
                backgroundImage: `url(${home_background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            
            <div className="w-3/4 h-5/6 bg-white bg-opacity-45 rounded-3xl flex flex-col items-center justify-center space-y-6 shadow-lg relative overflow-hidden">
                <p className={`text-xl sm:text-2xl font-bold text-center text-purple-800 leading-relaxed whitespace-pre-line transition-opacity duration-1000 ${visibleLines[0] ? 'opacity-100' : 'opacity-0'}`}>
                    영혼의 여정을 통해 삶을 되돌아본 당신은,
                </p>
                <p className={`text-xl sm:text-2xl font-bold text-center text-purple-800 leading-relaxed whitespace-pre-line transition-opacity duration-1000 ${visibleLines[1] ? 'opacity-100' : 'opacity-0'}`}>
                    마침내 기적처럼 다시 삶으로 돌아갈 기회를 얻게 되었어요.
                </p>
                <p className={`text-xl sm:text-2xl font-bold text-center text-purple-800 leading-relaxed whitespace-pre-line transition-opacity duration-1000 ${visibleLines[2] ? 'opacity-100' : 'opacity-0'}`}>
                    이제 그 소중한 순간들을 더 깊이 느끼고 살아가길 바라요.
                </p>

                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8 py-8">
                    <button
                        className="text-2xl text-gray-700 hover:text-black"
                        onClick={handlePrevious}
                    >
                        &#8592;
                    </button>
                    <button
                        className="text-2xl text-gray-700 hover:text-black"
                        onClick={handleNext}
                    >
                        &#8594;
                    </button>
                </div>
            </div>

            {isPopupOpen && (
                <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ${popupVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-3/4 md:w-1/2 bg-purple-100 rounded-3xl p-8 shadow-2xl text-center relative max-h-[80vh] overflow-y-auto">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                            부모님께 하고 싶었던 말:
                        </h2>
                        {loading ? (
                            <p className="text-lg text-gray-700 mb-6">로딩 중...</p>
                        ) : (
                            <p className="text-lg text-gray-700 mb-6 whitespace-pre-wrap break-words">
                                {parentMessage || '부모님께 전할 메시지가 없습니다.'}
                            </p>
                        )}

                        <button
                            className="mt-4 px-6 py-2 border-2 border-purple-800 text-purple-800 font-semibold rounded-full hover:bg-purple-800 hover:text-white transition"
                            onClick={closePopup}
                        >
                            지금이라도 카톡으로 마음을 전해보세요!
                        </button>

                        {/* 팝업 닫기 버튼 */}
                        <button
                            className="mt-4 ml-4 px-6 py-2 border-2 border-purple-800 text-purple-800 font-semibold rounded-full hover:bg-purple-800 hover:text-white transition"
                            onClick={closePopup}
                        >
                            닫기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Revival;