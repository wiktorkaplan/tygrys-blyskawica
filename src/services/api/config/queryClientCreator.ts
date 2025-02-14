import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

const useQueryClientCreator = (): QueryClient => {
  queryClient.setDefaultOptions({
    queries: { retry: false },
    mutations: { retry: false },
  })

  return queryClient
}

export default useQueryClientCreator
