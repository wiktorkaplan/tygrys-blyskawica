import { RootStackParamList } from '@/models/navigation'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
