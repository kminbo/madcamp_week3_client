const BASE_URL = process.env.REACT_APP_BACKEND_URL;

/**
 * 사용자 생성 API
 * @param {Object} userData - 사용자 정보 { name, surname, birthday }
 * @returns {Object} 서버 응답 데이터
 */
export const createUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`서버 오류: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('사용자 생성 중 오류 발생:', error);
    throw error;
  }
};

/**
 * 특정 사용자 조회 API
 * @param {string} userId - 조회할 사용자 ID
 * @returns {Object} 서버 응답 데이터
 */
export const getUser = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/${userId}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`서버 오류: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('사용자 조회 중 오류 발생:', error);
    throw error;
  }
};
