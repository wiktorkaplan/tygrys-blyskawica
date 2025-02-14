import {
  TextInputProps as RNTextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { Container, StyledLabel, StyledTextInput } from './TextInput.styles'

type TextInputProps = {
  textInputProps: RNTextInputProps
  label?: string
  style?: StyleProp<ViewStyle>
}

const TextInput = ({ textInputProps, label, style }: TextInputProps) => {
  return (
    <Container style={style}>
      {label ? <StyledLabel label={label} /> : null}
      <StyledTextInput {...textInputProps} autoCapitalize="none" />
    </Container>
  )
}

export default TextInput
