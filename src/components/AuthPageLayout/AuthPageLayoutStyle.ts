import styled from '@emotion/styled'
import background from '../../assets/I3E36ec1DEM.jpg'

export const Background = styled('div')`
  background: url(${background}) no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 30px 0;
  margin: 0 auto;
`

export const Container = styled('div')`
  width: 40%;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 930px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`

export const Dashboard = styled('div')`
  background: white;
  border-radius: 24px;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.9);
`
