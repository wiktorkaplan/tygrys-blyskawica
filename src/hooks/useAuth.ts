import { MOCK_EMAIL, MOCK_PASSWORD } from '@/mocks/login'
import { useAuthStore } from '@/store'
import useUserStore from '@/store/useUserStore'

export const useAuth = () => {
  const { setToken } = useAuthStore()
  const { setUser, removeUser } = useUserStore()
  const login = (email: string, password: string) => {
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      setToken('token-value')
      setUser({ name: 'John Doe', mail: 'test@example.com' })
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
