import styled from 'styled-components/native'
import { Role } from '@/enums/Role'
import { TextEnum } from '@/enums/TextEnum'
import { Text } from '../Text'
import { MessageProps } from './Message'

type ContainerProps = Pick<MessageProps, 'role'>

export const Container = styled.View<ContainerProps>`
  background-color: ${({ role }: ContainerProps) =>
    role === Role.User
      ? 'rgb(174, 227, 255)'
      : role === Role.Assistant
        ? 'transparent'
        : 'rgb(255, 137, 137)'};
  padding: 8px;
  margin-top: 4px;
`
export const Label = styled(Text).attrs({ type: TextEnum.paragraph })``
