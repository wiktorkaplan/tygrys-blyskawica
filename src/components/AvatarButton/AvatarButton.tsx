import { StyleProp, ViewStyle } from 'react-native'
import useUserStore from '@/store/useUserStore'
import { StyledContainer, StyledImage, StyledText } from './AvatarButton.style'

type AvatarButtonProps = {
  label?: string
  onPress: () => void
  size?: 'big' | 'small'
  style?: StyleProp<ViewStyle>
  photo?: string | null
}

const AvatarButton = ({
  label,
  onPress,
  size = 'small',
  style,
  photo,
}: AvatarButtonProps) => {
  const { photo: photoStore } = useUserStore()
  return (
    <StyledContainer onPress={onPress} style={style}>
      <StyledImage
        source={
          photo || photoStore
            ? { uri: photo || photoStore }
            : require('../../assets/avatar.png')
        }
        size={size}
      />
      {label ? <StyledText label={label} /> : null}
    </StyledContainer>
  )
}

export default AvatarButton
