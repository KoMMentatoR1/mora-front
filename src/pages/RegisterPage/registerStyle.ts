import styled from '@emotion/styled'
import { green, red } from '@mui/material/colors'
import { Button, TextField, FormControl } from '@mui/material'

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

export const LoginButton = styled(Button)`
  font-family: 'Rubik', sans-serif;
`
