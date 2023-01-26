import React, { FC } from 'react'
import { Background, Container, Dashboard } from './AuthPageLayoutStyle'

interface AuthPageLayoutProps {
  children: React.ReactNode
}

const AuthPageLayout: FC<AuthPageLayoutProps> = ({ children }) => {
  return (
    <Background>
      <Container>
        <Dashboard>{children}</Dashboard>
      </Container>
    </Background>
  )
}

export default AuthPageLayout
