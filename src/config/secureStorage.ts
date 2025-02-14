import * as SecureStore from 'expo-secure-store'
import { StateStorage } from 'zustand/middleware'

const secureStorage: StateStorage = {
  getItem: async (name: string) => {
    const value = await SecureStore.getItemAsync(name)
    return value ? JSON.parse(value) : null
  },
  setItem: async (name: string, value: any) => {
    await SecureStore.setItemAsync(name, JSON.stringify(value))
  },
  removeItem: async (name: string) => {
    await SecureStore.deleteItemAsync(name)
  },
}

export default secureStorage
