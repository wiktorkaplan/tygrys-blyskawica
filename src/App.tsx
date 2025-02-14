import { NavigationContainer } from '@react-navigation/native'
import { QueryClientProvider } from '@tanstack/react-query'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import ThemeWrapper from './config/theme/ThemeWrapper'
import { useFonts } from './hooks'
import RootNavigation from './screens/RootNavigation'
import { useQueryClientCreator } from './services/api'

SplashScreen.preventAutoHideAsync()

const App = () => {
  const { isLoaded: isFontsLoaded } = useFonts()

  if (!isFontsLoaded) {
    return null
  }

  const queryClient = useQueryClientCreator()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeWrapper>
        <NavigationContainer>
          <StatusBar style="dark" />
          <RootNavigation />
        </NavigationContainer>
      </ThemeWrapper>
    </QueryClientProvider>
  )
}

export default App
