import React, { FC } from 'react'
import { Container, Dashboard } from './AuthPageLayoutStyle'

interface AuthPageLayoutProps {
  children: React.ReactNode
}

const AuthPageLayout: FC<AuthPageLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Dashboard>{children}</Dashboard>
    </Container>
  )
}

export default AuthPageLayout
