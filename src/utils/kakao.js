// src/utils/kakao.js
export const initKakao = () => {
  if (!window.Kakao) {
      console.error('Kakao SDK가 로드되지 않았습니다.');
      return;
  }
  // ✅ 카카오 앱 키로 초기화
  if (!window.Kakao.isInitialized()) {
      window.Kakao.init('ab85b3f364744c436afc2726438ed8ee');  // 🔑 여기에 본인의 JavaScript 앱 키를 입력하세요
      console.log('✅ Kakao SDK 초기화 완료');
  }
};

export const shareOnKakao = (message) => {
  if (!window.Kakao) {
      alert('Kakao SDK가 로드되지 않았습니다.');
      return;
  }

  window.Kakao.Link.sendDefault({
      objectType: 'text',
      text: message,
      link: {
        mobileWebUrl: 'http://localhost:3000',
        webUrl: 'http://localhost:3000',
    },
    
  });
};
