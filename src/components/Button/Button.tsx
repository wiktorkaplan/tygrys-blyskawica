import { StyleProp, ViewStyle } from 'react-native'
import { StyledButton, StyledButtonText } from './Button.style'

type ButtonProps = {
  label: string
  onPress: () => void
  style?: StyleProp<ViewStyle>
  disabled?: boolean
}

const Button = ({ label, onPress, style, disabled }: ButtonProps) => {
  return (
    <StyledButton onPress={onPress} style={style} disabled={disabled}>
      <StyledButtonText label={label} />
    </StyledButton>
  )
}

export default Button
