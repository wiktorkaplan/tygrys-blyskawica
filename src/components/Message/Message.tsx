import React from 'react'
import { Image } from 'expo-image'
import { Role } from '@/enums/Role'
import { Container, Label } from './Message.styles'

export type MessageProps = { role: Role; label?: string; imageUri?: string }

const Message = React.memo(({ role, label, imageUri }: MessageProps) => {
  return (
    <Container role={role}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      ) : null}
      {label ? <Label label={label} /> : null}
    </Container>
  )
})

export default Message
