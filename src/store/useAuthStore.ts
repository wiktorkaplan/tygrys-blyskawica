import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import secureStorage from '@/config/secureStorage'

type AuthStore = {
  token: string | null
  setToken: (token: string | null) => void
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      token: null,
      setToken: (token) => {
        set((state) => ({ ...state, token, isLoggedIn: () => Boolean(token) }))
      },
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({
        token: state.token,
      }),
    },
  ),
)

export default useAuthStore
