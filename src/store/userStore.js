import { create } from 'zustand';

const useUserStore = create((set) => ({
    userId: '',  // 기본 userId 상태
    setUserId: (id) => set({ userId: id }),  // userId 상태 업데이트 함수
}))

export default useUserStore;