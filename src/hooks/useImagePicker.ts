import { useState } from 'react'
import { Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export const useImagePicker = () => {
  const [imageUri, setImageUri] = useState<string | null>(null)

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Brak uprawnień', 'Potrzebujemy dostępu do galerii!')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      base64: true,
      quality: 0,
    })

    if (!result.canceled) {
      const mimeType = result.assets[0].mimeType
      if (mimeType === 'image/png' || mimeType === 'image/jpeg') {
        setImageUri(`data:${mimeType};base64,${result.assets[0].base64}`)
        return imageUri
      } else {
        Alert.alert('Nieprawidłowy format', 'Proszę wybrać plik PNG lub JPG.')
      }
    }
  }

  return { imageUri, pickImage, removeImage: () => setImageUri(null) }
}
