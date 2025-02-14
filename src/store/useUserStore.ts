import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import asyncStorage from '@/config/asyncStorage'
import { UserI } from '@/models/user'

type UserStore = {
  user: UserI | null
  photo: string | null
  setUser: (user: UserI) => void
  setPhoto: (photo: string) => void
  removeUser: () => void
}

const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      photo: null,
      setUser: (user) => {
        set((state) => ({ ...state, user }))
      },
      setPhoto: (photo) => {
        set((state) => ({ ...state, photo: photo }))
      },
      removeUser: () => {
        set((state) => ({ ...state, user: null, photo: null }))
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => asyncStorage),
      partialize: (state) => ({
        user: state.user,
        photo: state.photo,
      }),
    },
  ),
)

export default useUserStore
