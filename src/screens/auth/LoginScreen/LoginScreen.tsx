import { useState } from 'react'
import { MainContainer, NavBar, TextInput } from '@/components'
import { useAuth } from '@/hooks'
import {
  StyledButton,
  LoginWrapper,
  StyledTextInput,
  Title,
} from './LoginScreen.styles'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleLogin = () => {
    const loginSuccess = login(email, password)

    if (!loginSuccess) alert('Niepoprawne dane')
  }

  return (
    <>
      <NavBar />
      <MainContainer>
        <Title label="Bądź jak tygrys" />
        <LoginWrapper>
          <TextInput
            textInputProps={{
              placeholder: 'Podaj swój adres email',
              value: email,
              onChangeText: setEmail,
            }}
            label="Email"
          />
          <StyledTextInput
            textInputProps={{
              placeholder: 'Wpisz hasło',
              value: password,
              onChangeText: setPassword,
              secureTextEntry: true,
            }}
            label="Hasło"
          />
          <StyledButton label="Login" onPress={handleLogin} />
        </LoginWrapper>
      </MainContainer>
    </>
  )
}

export default LoginScreen
