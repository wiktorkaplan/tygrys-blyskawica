import { createStackNavigator } from '@react-navigation/stack'
import { Screens } from '@/enums/Screens'
import { useAuth } from '@/hooks'
import { RootStackParamList } from '@/models/navigation'
import { LoginScreen } from '@/screens/auth'
import { HomeScreen, ProfileScreen } from '@/screens/main'

export const Stack = createStackNavigator<RootStackParamList>()

const RootNavigation = () => {
  const { isAuthorized } = useAuth()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthorized ? (
        <Stack.Screen name={Screens.Login} component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name={Screens.Home} component={HomeScreen} />
          <Stack.Screen
            name={Screens.Profile}
            component={ProfileScreen}
            options={{
              headerShown: true,
              title: 'Twój profil',
              headerBackTitle: '',
              headerBackTitleStyle: {
                fontFamily: 'PoppinsRegular',
                color: '#000',
              },
              headerTitleStyle: { fontFamily: 'PoppinsBold' },
              headerShadowVisible: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  )
}

export default RootNavigation
