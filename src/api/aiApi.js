const BASE_URL = process.env.REACT_APP_BACKEND_URL;

// /**
//  * AI 응답 생성 API
//  * @param {Object} aiData - 질문과 답변 데이터 { questions, userMessage }
//  * @returns {Object} AI 응답 데이터
//  */
// export const generateAIResponse = async (aiData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/api/ai/generate-response`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(aiData),
//     });

//     if (!response.ok) {
//       throw new Error(`서버 오류: ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('AI 응답 생성 중 오류 발생:', error);
//     throw error;
//   }
// };

/**
 * 철학자별 AI 응답 생성 API
 * @param {string} philosopher - 철학자 이름 ('aristotle', 'schopenhauer', 'socrates')
 * @param {Object} aiData - 질문과 답변 데이터 { questions, userMessage }
 * @returns {Object} AI 응답 데이터
 */
export const generateAIResponse = async (philosopher, aiData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/ai/generate-response/${philosopher}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(aiData),
    });

    if (!response.ok) {
      throw new Error(`서버 오류: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`${philosopher} 응답 생성 중 오류 발생:`, error);
    throw error;
  }
};
/**
 * AI 통계 생성 API
 * @param {Array} questions - 질문과 답변 데이터 배열
 * @returns {Object} AI 통계 요약 데이터
 */
export const generateStatistics = async (questions) => {
  try {
      const response = await fetch(`${BASE_URL}/api/ai/generate-statistics`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ questions }),
      });

      if (!response.ok) {
          throw new Error(`서버 오류: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error('AI 통계 요약 생성 중 오류 발생:', error);
      throw error;
  }
};