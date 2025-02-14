import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import asyncStorage from '@/config/asyncStorage'
import { Message } from '@/models/chat'

type AuthStore = {
  messages: Message[]
  setMessage: (message: Message) => void
  clearMessages: () => void
}

const useChatStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      messages: [],
      setMessage: (message) => {
        set((state) => ({ ...state, messages: [...state.messages, message] }))
      },
      clearMessages: () => {
        set((state) => ({ ...state, messages: [] }))
      },
    }),
    {
      name: 'messages-store',
      storage: createJSONStorage(() => asyncStorage),
      partialize: (state) => ({
        messages: state.messages,
      }),
    },
  ),
)

export default useChatStore
