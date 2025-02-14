import { StyleProp, TextStyle } from 'react-native'
import { TextEnum } from '@/enums/TextEnum'
import { StyledText } from './Text.styles'

type TextProps = {
  type?: TextEnum
  label: string
  style?: StyleProp<TextStyle>
}

const Text = ({ type = TextEnum.paragraph, label, style }: TextProps) => {
  return (
    <StyledText type={type} style={style}>
      {label}
    </StyledText>
  )
}

export default Text
