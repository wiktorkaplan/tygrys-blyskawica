import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const SafeSpace = styled(SafeAreaView).attrs({ edges: ['top'] })`
  flex: 0;
  z-index: 20;
  background-color: white;
`

export const Container = styled.View`
  background-color: white;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled(Image).attrs({
  contentFit: 'contain',
  transition: 1000,
  source: require('../../assets/logo.png'),
})`
  width: 160px;
  height: 80px;
`
export const StyledButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 16, left: 16, bottom: 16, right: 16 },
})`
  padding: 16px;
  border-width: 1px;
  border-color: black;
  border-radius: 8px;
`
