import styled from 'styled-components/native'
import { Button, Text, TextInput } from '@/components'
import { TextEnum } from '@/enums/TextEnum'

export const Title = styled(Text).attrs({ type: TextEnum.header1 })`
  margin-top: 16px;
`

export const LoginWrapper = styled.View`
  margin-top: 48px;
`
export const StyledTextInput = styled(TextInput)`
  margin-top: 12px;
`
export const StyledButton = styled(Button)`
  margin-top: 32px;
`
