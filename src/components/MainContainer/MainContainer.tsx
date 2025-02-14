import { Edges, SafeAreaView } from 'react-native-safe-area-context'
import { Container, SafeView } from './MainContainer.styles'

type SafeContainerProps = {
  children: React.ReactNode
  withTop?: boolean
  withPadding?: boolean
}

const MainContainer = ({
  children,
  withTop = false,
  withPadding = true,
}: SafeContainerProps) => {
  const edges: Edges = withTop
    ? ['top', 'right', 'bottom', 'left']
    : ['right', 'bottom', 'left']

  return (
    <SafeView edges={edges}>
      <Container withPadding={withPadding}>{children}</Container>
    </SafeView>
  )
}

export default MainContainer
