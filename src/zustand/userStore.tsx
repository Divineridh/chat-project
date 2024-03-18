import create from 'zustand'

interface UserStore {
    currentUser: string
    setCurrentUser: (user: string) => void
}

const useUserStore = create<UserStore>(set => ({
    currentUser: '',
    setCurrentUser: (user: string) => set({ currentUser: user }),
}))

export default useUserStore