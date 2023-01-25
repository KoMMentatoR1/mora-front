import styled from '@emotion/styled'
import background from '../../assets/I3E36ec1DEM.jpg'

export const Container = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${background}) no-repeat;
  background-size: cover;
  position: fixed;
`

export const Dashboard = styled('div')`
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 24px;

  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.9);

  @media (max-width: 1200px) {
    width: 60%;
    overflow-y: scroll;
  }

  @media (max-width: 930px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`
