// import { useNavigate } from 'react-router-dom';
// import aristotle from '../assets/images/aristotle.png';
// import home_background from '../assets/images/home_background.png';
// import { useState } from 'react';

// const Aristotle = () => {
//     const navigate = useNavigate();
//     const [messages, setMessages] = useState([
//         { sender: 'aristotle', text: '행복은 우리의 행동에서 비롯됩니다. 당신은 오늘 어떤 행동을 했나요?' },
//     ]);
//     const [input, setInput] = useState('');

//     // 이전 페이지 이동
//     const handlePrevious = () => {
//         navigate('/teatime');
//     };

//     //메시지 전송(GPT와 연결 예정)
//     const handleSendMessage = async () => {
//         if (!input.trim()) return;

//         const userMessage = { sender: 'user', text: input };
//         setMessages(prev => [...prev, userMessage]);

//         // GPT와 연결 예정
//         const response = await fetch('https://api.openai.com/v1/chat/completions', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
//             },
//             body: JSON.stringify({ messages: input })
//         });

//         const data = await response.json();

//         // GPT 응답을 아리스토텔레스 메시지로 추가
//         const aristotleReply = { sender: 'aristotle', text: data.reply };
//         setMessages(prev => [...prev, aristotleReply]);

//         setInput('');    // 입력창 비우기
//     };

//     // 엔터 키 입력 시 메시지 전송
//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             handleSendMessage();
//         }
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
//             <div className="w-3/4 h-5/6 bg-white bg-opacity-45 rounded-3xl flex flex-col shadow-lg relative overflow-hidden">
//                 <div className="p-4 text-lg font-bold text-purple-800">
//                     아리스토텔레스와의 대화
//                 </div>

//                 {/* 대화 내용 */}
//                 <div className="flex-1 overflow-y-auto p-4 space-y-4">
//                     {messages.map((msg, index) => (
//                         <div key={index} className={`flex ${msg.sender === 'aristotle' ? 'justify-start' : 'justify-end'}`}>
//                             {msg.sender === 'aristotle' && (
//                                 <img src={aristotle} alt="아리스토텔레스" className="w-10 h-10 rounded-full mr-2" />
//                             )}
//                             <div
//                                 className={`max-w-xs p-3 rounded-lg ${msg.sender === 'aristotle'
//                                         ? 'bg-purple-200 text-gray-800'
//                                         : 'bg-green-200 text-gray-800'
//                                     }`}
//                             >
//                                 {msg.text}
//                             </div>
//                         </div>
//                     ))}
//                 </div>


//                 {/* 입력창 */}
//                 <div className="p-4 flex items-center space-x-4 border-t">
//                     <input
//                         type="text"
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         onKeyDown={handleKeyPress}
//                         placeholder="답변을 입력하세요..."
//                         className="flex-1 p-3 rounded-full border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                     />
//                     <button
//                         onClick={handleSendMessage}
//                         className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-800 transition"
//                     >
//                         전송
//                     </button>
//                 </div>

//                 {/* 돌아가기 버튼 */}
//                 <button
//                     onClick={handlePrevious}
//                     className="absolute top-4 right-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition"
//                 >
//                     돌아가기
//                 </button>

//             </div>
//         </div>
//     );
// };

// export default Aristotle;

import { useNavigate } from 'react-router-dom';
import aristotle from '../assets/images/aristotle.png';
import home_background from '../assets/images/home_background.png';
import { useState, useEffect } from 'react';
import { generateAIResponse } from '../api/aiApi';  // ✅ API 함수 import
import { getProgress } from '../api/progressApi';  // ✅ 사용자 답변 가져오기 API import
import useUserStore from '../store/userStore';  // ✅ 사용자 ID 가져오기

const Aristotle = () => {
    const navigate = useNavigate();
    const { userId } = useUserStore();  // ✅ 사용자 ID 가져오기

    const [messages, setMessages] = useState([
        { sender: 'aristotle', text: '행복은 우리의 행동에서 비롯됩니다. 당신은 오늘 어떤 행동을 했나요?' },
    ]);
    const [input, setInput] = useState('');
    const [questions, setQuestions] = useState([]);  // ✅ 사용자 답변 데이터 상태

    // 사용자 답변 데이터 가져오기
    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const progressData = await getProgress(userId);
                if (progressData?.questions) {
                    setQuestions(progressData.questions);
                }
            } catch (error) {
                console.error('사용자 진행 상황 가져오기 오류:', error);
            }
        };

        fetchProgress();
    }, [userId]);

    // 이전 페이지 이동
    const handlePrevious = () => {
        navigate('/teatime');
    };

    // 메시지 전송
    const handleSendMessage = async () => {
        if (!input.trim()) return;

        // 사용자 메시지 추가
        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);

        try {
            // API 요청 데이터 준비 및 로깅
            const aiData = { questions, userMessage: input };
            console.log('Sending request with data:', aiData);

            // API 호출
            const response = await generateAIResponse('aristotle', aiData);
            console.log('Received response:', response);

            if (response && response.aiResponse) {
                // GPT 응답 추가
                const aristotleReply = { sender: 'aristotle', text: response.aiResponse };
                setMessages(prev => [...prev, aristotleReply]);
            } else {
                console.error('Invalid response format:', response);
                // 사용자에게 에러 메시지 표시
                const errorReply = {
                    sender: 'aristotle',
                    text: '죄송합니다. 잠시 문제가 발생했어요. 다시 말씀해 주시겠어요?'
                };
                setMessages(prev => [...prev, errorReply]);
            }

        } catch (error) {
            console.error('Error details:', error);
            // 사용자에게 에러 메시지 표시
            const errorReply = {
                sender: 'aristotle',
                text: '죄송합니다. 일시적인 오류가 발생했어요. 잠시 후 다시 시도해 주세요.'
            };
            setMessages(prev => [...prev, errorReply]);
        }

        setInput('');  // 입력창 비우기
    };

    // 엔터 키 입력 시 메시지 전송
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
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
            <div className="w-3/4 h-5/6 bg-white bg-opacity-45 rounded-3xl flex flex-col shadow-lg relative overflow-hidden">
                <div className="p-4 text-lg font-bold text-purple-800">
                    아리스토텔레스와의 대화
                </div>

                {/* 대화 내용 */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'aristotle' ? 'justify-start' : 'justify-end'}`}>
                            {msg.sender === 'aristotle' && (
                                <img src={aristotle} alt="아리스토텔레스" className="w-10 h-10 rounded-full mr-2" />
                            )}
                            <div
                                className={`max-w-xs p-3 rounded-lg ${msg.sender === 'aristotle'
                                    ? 'bg-purple-200 text-gray-800'
                                    : 'bg-green-200 text-gray-800'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 입력창 */}
                <div className="p-4 flex items-center space-x-4 border-t">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="답변을 입력하세요..."
                        className="flex-1 p-3 rounded-full border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-800 transition"
                    >
                        전송
                    </button>
                </div>

                {/* 돌아가기 버튼 */}
                <button
                    onClick={handlePrevious}
                    className="absolute top-4 right-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition"
                >
                    돌아가기
                </button>
            </div>
        </div>
    );
};

export default Aristotle;
