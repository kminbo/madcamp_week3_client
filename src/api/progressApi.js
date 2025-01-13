const BASE_URL = process.env.REACT_APP_BACKEND_URL;

/**
 * 진행 상황 저장 또는 업데이트 API
 * @param {Object} progressData - 진행 상황 정보 { userId, stage, questions }
 * @returns {Object} 서버 응답 데이터
 */
export const saveProgress = async (progressData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(progressData),
    });

    if (!response.ok) {
      throw new Error(`서버 오류: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('진행 상황 저장 중 오류 발생:', error);
    throw error;
  }
};

/**
 * 특정 사용자의 진행 상황 조회 API
 * @param {string} userId - 조회할 사용자 ID
 * @returns {Object} 서버 응답 데이터
 */
export const getProgress = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/progress/${userId}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`서버 오류: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('진행 상황 조회 중 오류 발생:', error);
    throw error;
  }
};
