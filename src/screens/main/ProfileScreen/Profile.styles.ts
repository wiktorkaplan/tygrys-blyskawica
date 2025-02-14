import styled from 'styled-components/native'
import { Button, Text } from '@/components'
import { TextEnum } from '@/enums/TextEnum'

export const ProfileTile = styled.View`
  margin-top: 16px;
`
export const TitleTile = styled(Text).attrs({ type: TextEnum.paragraph })``
export const ValueTile = styled(Text).attrs({ type: TextEnum.label })``
export const StyledButton = styled(Button)`
  margin-top: 16px;
`
