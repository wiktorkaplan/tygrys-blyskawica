import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

type ContainerProps = { withPadding: boolean }

export const SafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`

export const Container = styled.View<ContainerProps>`
  flex: 1;
  padding: ${({ withPadding }: ContainerProps) => (withPadding ? '16px' : '0')};
`
