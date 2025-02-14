import { ImageContent, TextContent } from '@/models/chat'

export const createChatContent = (
  text: string | '',
  imageUri: string | null,
): (TextContent | ImageContent)[] => {
  const content = []
  if (text) {
    content.push({ type: 'text' as const, text: text })
  }
  if (imageUri) {
    content.push({
      type: 'image_url' as const,
      image_url: { url: imageUri },
    })
  }

  return content
}
