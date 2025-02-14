import { Alert } from 'react-native'
import { Role } from '@/enums/Role'
import useChatCompletionsMutation from '@/services/api/mutations/useChatCompletionsMutation'
import { useChatStore } from '@/store'
import { createChatContent } from '@/utils/helpers/createChatContent'
import { useImagePicker } from './useImagePicker'

export const useChat = () => {
  const { messages, setMessage } = useChatStore()
  const { mutateAsync, isPending } = useChatCompletionsMutation()
  const { pickImage, imageUri, removeImage } = useImagePicker()

  const sendMessage = async (text: string | '') => {
    const content = createChatContent(text, imageUri)
    if (content.length === 0) {
      Alert.alert('Wpisz wiadomość lub dodaj zdjęcie!')
      return
    }

    removeImage()
    try {
      setMessage({ role: Role.User, content: content })

      const data = await mutateAsync({
        model: 'gpt-4-turbo',
        messages: [
          ...messages,
          {
            role: Role.User,
            content: content,
          },
        ],
      })

      setMessage({
        role: Role.Assistant,
        content: [{ type: 'text', text: data.choices[0].message.content }],
      })
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return {
    messages,
    sendMessage,
    isPending,
    pickImage,
    imageUri,
    removeImage,
  }
}
