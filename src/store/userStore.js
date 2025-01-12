import { create } from 'zustand';

const useUserStore = create((set) => ({
    userId: null,
    lastName: '',
    firstName: '',
    birthDate: '',
    setUserInfo: (userId, lastName, firstName, birthDate) => set({
        userId,
        lastName,
        firstName,
        birthDate
    }),
}));

export default useUserStore;