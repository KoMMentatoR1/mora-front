import React, { FC } from 'react'
import { ButtonContainer } from './AuthButtonContainerStyle'

interface AuthButtonContainerProps {
  children: React.ReactNode
}

const AuthButtonContainer: FC<AuthButtonContainerProps> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>
}

export default AuthButtonContainer
