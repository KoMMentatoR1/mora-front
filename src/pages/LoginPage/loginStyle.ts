import styled from '@emotion/styled'
import { green, red } from '@mui/material/colors'
import { TextField, Button, FormControl } from '@mui/material'

export const Logo = styled('div')`
  text-transform: uppercase;
  font-size: 50px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  color: ${green[900]};
  margin-bottom: 15px;
  margin-top: 45px;
`

export const PageName = styled('div')`
  text-transform: uppercase;
  font-size: 32px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  color: ${green[900]};
  margin-bottom: 30px;
`

export const FormContainer = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  padding: 30px;
`

export const Input = styled(TextField)({
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

export const LoginButton = styled(Button)`
  font-family: 'Rubik', sans-serif;

  @media (max-width: 600px) {
    height: 100px;
  }
`
