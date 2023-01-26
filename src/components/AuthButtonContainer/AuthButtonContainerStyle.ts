import styled from '@emotion/styled'

export const ButtonContainer = styled('div')`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
