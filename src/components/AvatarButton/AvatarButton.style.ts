import { Image } from 'expo-image'
import styled from 'styled-components/native'
import { TextEnum } from '@/enums/TextEnum'
import { Text } from '../Text'

type StyledImageProps = { size: 'big' | 'small' }
export const StyledContainer = styled.TouchableOpacity`
  align-items: center;
`

export const StyledImage = styled(Image).attrs<StyledImageProps>({
  contentFit: 'cover',
})`
  align-items: center;
  justify-content: center;
  border-radius: ${({ size }: StyledImageProps) =>
    size === 'small' ? '32px' : size === 'big' ? '64px' : '32px'};
  width: ${({ size }: StyledImageProps) =>
    size === 'small' ? '64px' : size === 'big' ? '128px' : '64px'};
  height: ${({ size }: StyledImageProps) =>
    size === 'small' ? '64px' : size === 'big' ? '128px' : '64px'};
  background-color: black;
  border-width: 1px;
  border-color: black;
`
export const StyledText = styled(Text).attrs({ type: TextEnum.label })`
  text-align: center;
  size: 12px;
`
