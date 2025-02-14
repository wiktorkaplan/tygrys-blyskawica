import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { Button, TextInput } from '@/components'

export const SafeContainer = styled(SafeAreaView)`
  background-color: white;
  flex: 1;
`
export const Container = styled.View`
  flex: 1;
`
export const ImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
`
export const StyledButton = styled(Button)`
  margin-left: 8px;
  width: 50px;
`
export const StyledTextInput = styled(TextInput)`
  flex-grow: 1;
`
export const StyledImage = styled(Image)`
  width: 100px;
  height: 100px;
  align-self: center;
`
export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`
