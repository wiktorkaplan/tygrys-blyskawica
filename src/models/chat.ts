import { Role } from '@/enums/Role'

export type TextContent = {
  type: 'text'
  text: string
}

export type ImageContent = {
  type: 'image_url'
  image_url: {
    url: string
  }
}

export type Message = {
  role: Role
  content: (TextContent | ImageContent)[]
}
