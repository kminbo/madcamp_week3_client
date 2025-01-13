import { useNavigate } from 'react-router-dom';
import socrates from '../assets/images/socrates.png';
import home_background from '../assets/images/home_background.png';
import { useState } from 'react';

const Socrates = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        { sender: 'socrates', text: '너 자신을 알라. 오늘 당신이 가장 깊이 생각한 것은 무엇인가요?' },
    ]);
    const [input, setInput] = useState('');

    // 이전 페이지 이동
    const handlePrevious = () => {
        navigate('/teatime');
    };

    //메시지 전송(GPT와 연결 예정)
    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);

        // GPT와 연결 예정
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            },
            body: JSON.stringify({ messages: input })
        });

        const data = await response.json();

        // GPT 응답을 아리스토텔레스 메시지로 추가
        const socratesReply = { sender: 'socrates', text: data.reply };
        setMessages(prev => [...prev, socratesReply]);

        setInput('');    // 입력창 비우기
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
                    소크라테스와의 대화
                </div>

                {/* 대화 내용 */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'socrates' ? 'justify-start' : 'justify-end'}`}>
                            {msg.sender === 'socrates' && (
                                <img src={socrates} alt="소크라테스" className="w-10 h-10 rounded-full mr-2" />
                            )}
                            <div
                                className={`max-w-xs p-3 rounded-lg ${msg.sender === 'socrates'
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

export default Socrates;