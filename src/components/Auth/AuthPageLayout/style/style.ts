import styled from '@emotion/styled'
import { green } from '@mui/material/colors'
import background from '../../../../assets/I3E36ec1DEM.jpg'

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

export const Title = styled('div')`
  text-transform: uppercase;
  font-size: 50px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  color: ${green[900]};
  margin-bottom: 15px;
  padding-top: 45px;
  text-align: center;
`

export const SubTitle = styled('div')`
  text-transform: uppercase;
  font-size: 32px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  color: ${green[900]};
  margin-bottom: 30px;
  text-align: center;
`

export const FormContainer = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  padding: 30px;
`
