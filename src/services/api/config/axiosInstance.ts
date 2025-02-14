import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_OPENAI_API,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_OPENAI_API_KEY}`,
  },
})

export default axiosInstance
