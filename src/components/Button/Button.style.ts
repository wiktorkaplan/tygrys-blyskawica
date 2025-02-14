import styled from 'styled-components/native'
import { TextEnum } from '@/enums/TextEnum'
import { Text } from '../Text'

export const StyledButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 12px;
  border-radius: 32px;
`
export const StyledButtonText = styled(Text).attrs({ type: TextEnum.label })`
  color: white;
`
