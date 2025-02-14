import styled from 'styled-components/native'
import { TextEnum } from '@/enums/TextEnum'
import { Text } from '../Text'

export const Container = styled.View``
export const StyledTextInput = styled.TextInput`
  padding: 12px;
  border-color: #d8d8d8;
  border-width: 2px;
  border-radius: 4px;
`
export const StyledLabel = styled(Text).attrs({ type: TextEnum.paragraph })`
  color: black;
  margin-bottom: 4px;
`
