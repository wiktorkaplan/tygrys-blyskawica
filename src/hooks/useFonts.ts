import { useEffect } from 'react'
import { useFonts as useFontsExpo } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export const useFonts = () => {
  const [loaded, error] = useFontsExpo({
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
  })

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  return { isLoaded: loaded }
}
