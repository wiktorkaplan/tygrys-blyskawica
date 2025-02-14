import { MOCK_EMAIL, MOCK_PASSWORD, MOCK_USER } from '@/mocks/login'
import { useAuthStore } from '@/store'
import useUserStore from '@/store/useUserStore'

export const useAuth = () => {
  const { setToken } = useAuthStore()
  const { setUser, removeUser } = useUserStore()
  const login = (email: string, password: string) => {
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      setToken('token-value')
      setUser({ name: MOCK_USER.NAME, mail: MOCK_USER.EMAIL })
      return true
    } else {
      return false
    }
  }

  const logout = () => {
    setToken(null)
    removeUser()
  }

  const isAuthorized = Boolean(useAuthStore.getState().token)

  return {
    login,
    logout,
    isAuthorized,
  }
}
