import { VisibilityOff, Visibility } from '@mui/icons-material'
import {
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAction } from '../../hooks/useAction'
import { PasswordInput } from '../RegisterPage/registerStyle'
import { green, red } from '@mui/material/colors'
import {
  Container,
  Logo,
  FormContainer,
  Input,
  Dashboard,
  ButtonContainer,
  PageName,
  LoginButton,
} from './loginStyle'

type Inputs = {
  email: string
  password: string
}

const LoginPage = () => {
  const navigator = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const { login } = useAction()

  const onSubmit: SubmitHandler<Inputs> = data =>
    login(data.email, data.password)

  return (
    <Container>
      <Dashboard>
        <Logo>Mora</Logo>
        <PageName>login</PageName>
        <FormContainer>
          <Input
            {...register('email', {
              required: 'Email address is required',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Email is not valid',
              },
            })}
            required
            fullWidth
            error={errors.email ? true : false}
            label='Email'
            variant='filled'
            helperText={errors.email?.message}
          />

          <PasswordInput variant='filled'>
            <InputLabel
              error={errors.password ? true : false}
              htmlFor='password'
            >
              Password
            </InputLabel>
            <FilledInput
              id='password'
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password very small' },
              })}
              error={errors.password ? true : false}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                    sx={{ color: errors.password ? red[900] : green[900] }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.password?.message && (
              <FormHelperText sx={{ color: red[900] }}>
                {errors.password?.message}
              </FormHelperText>
            )}
          </PasswordInput>
          <ButtonContainer>
            <LoginButton
              onClick={() => navigator('/register')}
              fullWidth
              color='success'
              variant='contained'
            >
              Sing up
            </LoginButton>
            <LoginButton
              onClick={handleSubmit(onSubmit)}
              fullWidth
              color='success'
              variant='contained'
            >
              log in
            </LoginButton>
          </ButtonContainer>
        </FormContainer>
      </Dashboard>
    </Container>
  )
}

export default LoginPage
