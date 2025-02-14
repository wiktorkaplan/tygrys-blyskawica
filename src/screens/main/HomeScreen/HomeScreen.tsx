import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlashList } from '@shopify/flash-list'
import { AvatarButton, Message, NavBar } from '@/components'
import { Role } from '@/enums/Role'
import { Screens } from '@/enums/Screens'
import { useChat } from '@/hooks/useChat'
import { Message as MessageType } from '@/models/chat'
import {
  SafeContainer,
  Container,
  ImageContainer,
  StyledButton,
  StyledTextInput,
  StyledImage,
  InputContainer,
} from './HomeScreen.styles'

const HomeScreen = () => {
  const navigation = useNavigation()

  const { messages, sendMessage, isPending, pickImage, imageUri, removeImage } =
    useChat()

  const [text, setText] = useState('')

  const handleOnSubmit = (textValue: string) => {
    sendMessage(textValue)
    setText('')
  }
  const flashListRef = useRef<FlashList<MessageType>>(null)

  useEffect(() => {
    if (flashListRef.current && messages.length > 0) {
      setTimeout(() => {
        flashListRef.current?.scrollToEnd({ animated: true })
      }, 100)
    }
  }, [messages])

  const renderItem = useCallback(({ item }: { item: MessageType }) => {
    const textContent = item.content.find((c) => c.type === 'text')
    const imageContent = item.content.find((c) => c.type === 'image_url')
    const label = textContent ? textContent.text : ''
    const imageUri = imageContent ? imageContent.image_url.url : ''

    return <Message role={item.role} label={label} imageUri={imageUri} />
  }, [])

  return (
    <SafeContainer>
      <Container>
        <NavBar
          DoneComponent={
            <AvatarButton
              onPress={() => navigation.navigate(Screens.Profile)}
            />
          }
          withoutSafe
        />

        <FlashList
          snapToEnd={false}
          ref={flashListRef}
          data={messages}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 16 }}
          ListFooterComponent={
            isPending ? <Message role={Role.Assistant} label="hmm..." /> : null
          }
          estimatedItemSize={40}
        />
        {imageUri ? (
          <ImageContainer>
            <StyledImage source={imageUri} />
            <StyledButton label="-" onPress={() => removeImage()} />
          </ImageContainer>
        ) : null}
        <InputContainer>
          <StyledTextInput
            textInputProps={{
              placeholder: 'Zapytaj',
              value: text,
              onChangeText: setText,
              onSubmitEditing: () => handleOnSubmit(text),
            }}
          />
          <StyledButton
            label="+"
            onPress={() => pickImage()}
            disabled={isPending}
          />
          <StyledButton
            label=">"
            onPress={() => handleOnSubmit(text)}
            disabled={isPending}
          />
        </InputContainer>
      </Container>
    </SafeContainer>
  )
}

export default HomeScreen
