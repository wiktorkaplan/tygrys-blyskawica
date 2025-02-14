import { Role } from 'react-native'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { Message } from '@/models/chat'
import { Mutations, axiosInstance, endpoints } from '..'

type ParametersType = {
  model: string
  messages: Message[]
}

type ResponseType = {
  id: number
  choices: { message: { role: Role; content: string } }[]
}

type OptionsType = UseMutationOptions<ResponseType, AxiosError, ParametersType>

const useChatCompletionsMutation = (options?: OptionsType) =>
  useMutation<ResponseType, AxiosError, ParametersType>({
    mutationKey: [Mutations.ChatCompletions],
    mutationFn: async (params) => {
      const { data } = await axiosInstance.post(
        endpoints.chatCompletions(),
        params,
      )

      return data
    },
    ...options,
  })

export default useChatCompletionsMutation
