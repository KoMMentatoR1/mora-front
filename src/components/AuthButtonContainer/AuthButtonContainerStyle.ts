import styled from '@emotion/styled'

export const ButtonContainer = styled('div')`
  display: flex;
  gap: 15px;
  width: 100%;
  height: 50px;

  margin-top: 30px;

  @media (max-width: 1200px) {
    margin-top: 10px;
    height: auto;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    margin-top: 0px;
    height: auto;
    flex-direction: column;
  }
`
