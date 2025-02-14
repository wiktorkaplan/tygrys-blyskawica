import { useEffect } from 'react'
import { AvatarButton, MainContainer } from '@/components'
import { useAuth } from '@/hooks'
import { useImagePicker } from '@/hooks/useImagePicker'
import { useChatStore } from '@/store'
import useUserStore from '@/store/useUserStore'
import {
  ProfileTile,
  StyledButton,
  TitleTile,
  ValueTile,
} from './Profile.styles'

const ProfileScreen = () => {
  const { logout } = useAuth()
  const { clearMessages } = useChatStore()
  const { setPhoto, user, photo } = useUserStore()
  const { pickImage, imageUri } = useImagePicker()

  useEffect(() => {
    if (imageUri) {
      setPhoto(imageUri)
    }
  }, [imageUri])

  return (
    <>
      <MainContainer>
        <AvatarButton
          onPress={pickImage}
          label="Zmień zdjęcie"
          size="big"
          photo={imageUri || photo}
        />
        {user?.name ? (
          <ProfileTile>
            <TitleTile label="Imię" />
            <ValueTile label={user?.name} />
          </ProfileTile>
        ) : null}
        {user?.mail ? (
          <ProfileTile>
            <TitleTile label="Email" />
            <ValueTile label={user?.mail} />
          </ProfileTile>
        ) : null}
        <StyledButton label="Wyczyść chat" onPress={clearMessages} />
        <StyledButton label="Wyloguj mnie" onPress={logout} />
      </MainContainer>
    </>
  )
}

export default ProfileScreen
