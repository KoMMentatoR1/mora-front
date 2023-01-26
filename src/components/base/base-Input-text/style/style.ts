import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import { green, red } from '@mui/material/colors'

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
