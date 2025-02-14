import styled from 'styled-components/native'
import theme from '@/config/theme'
import { TextEnum } from '@/enums/TextEnum'

type StyledTextProps = { type: TextEnum }

export const StyledText = styled.Text<StyledTextProps>`
  ${({ type }: StyledTextProps) => theme.typography[type]};
`
