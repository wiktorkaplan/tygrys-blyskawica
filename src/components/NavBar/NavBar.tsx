import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Container, Logo, SafeSpace } from './NavBar.styles'

interface NavBarProps {
  DoneComponent?: React.ReactNode
  withoutSafe?: boolean
}

const NavBar = ({ DoneComponent, withoutSafe }: NavBarProps) => {
  return (
    <>
      <StatusBar />
      {!withoutSafe ? <SafeSpace /> : null}
      <Container>
        <Logo />
        {DoneComponent}
      </Container>
    </>
  )
}

export default NavBar
