import styled from '@emotion/styled'
import { green, red } from '@mui/material/colors'
import { Button, TextField, FormControl } from '@mui/material'
import background from '../../assets/I3E36ec1DEM.jpg'

export const Container = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${background}) no-repeat;
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
`

export const Logo = styled('div')`
  text-transform: uppercase;
  font-size: 50px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  color: ${green[900]};
  margin-bottom: 10px;
  margin-top: 35px;
`

export const PageName = styled('div')`
  text-transform: uppercase;
  font-size: 30px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  color: ${green[900]};
  margin-bottom: 20px;
`

export const FormContainer = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  padding: 30px;
`

export const CustomInput = styled(TextField)({
  '& div.MuiFilledInput-root': {
    background: green[50],
  },
  '& div.MuiFilledInput-root.Mui-error': {
    backgroundColor: red[50],
  },
  '& label.Mui-focused': {
    color: green[900],
  },

  '& label.MuiInputLabel-root': {
    color: green[900],
  },
  '& label.MuiInputLabel-root.Mui-error': {
    color: red[900],
  },
  '& div.MuiFilledInput-root:after': {
    borderBottom: green[900],
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: green[900],
  },
})

export const PasswordInput = styled(FormControl)({
  '& div.MuiFilledInput-root': {
    backgroundColor: green[50],
  },
  '& div.MuiFilledInput-root.Mui-error': {
    backgroundColor: red[50],
  },
  '& label.Mui-focused': {
    color: green[900],
  },

  '& label.MuiInputLabel-root': {
    color: green[900],
  },
  '& label.MuiInputLabel-root.Mui-error': {
    color: red[900],
  },
  '& div.MuiFilledInput-root:after': {
    borderBottom: green[900],
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: green[900],
  },
})

export const ButtonContainer = styled('div')`
  display: flex;
  gap: 15px;
  width: 100%;
  height: 50px;

  margin-top: 30px;
`
export const LoginButton = styled(Button)`
  font-family: 'Rubik', sans-serif;
`
