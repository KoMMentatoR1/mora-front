import { VisibilityOff, Visibility } from '@mui/icons-material'
import {
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material'
import { red, green } from '@mui/material/colors'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAction } from '../../hooks/useAction'
import {
  Container,
  Logo,
  FormContainer,
  CustomInput,
  Dashboard,
  ButtonContainer,
  PageName,
  LoginButton,
  PasswordInput,
} from './registerStyle'

type Inputs = {
  username: string
  email: string
  password: string
  repeatpassword: string
}

const RegisterPage = () => {
  const navigator = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const { registration } = useAction()

  const onSubmit: SubmitHandler<Inputs> = data =>
    registration(data.email, data.password, data.username)

  return (
    <Container>
      <Dashboard>
        <Logo>Mora</Logo>
        <PageName>Register</PageName>
        <FormContainer>
          <CustomInput
            {...register('username', {
              required: 'Username is required',
            })}
            required
            fullWidth
            label='Username'
            error={errors.username ? true : false}
            variant='filled'
            helperText={errors.username?.message}
          />
          <CustomInput
            {...register('email', {
              required: 'Email Address is required',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`,{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Email is not valid',
              },
            })}
            required
            fullWidth
            label='Email'
            error={errors.email ? true : false}
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
          <PasswordInput variant='filled'>
            <InputLabel
              error={errors.repeatpassword ? true : false}
              htmlFor='repeat password'
            >
              Repeat password
            </InputLabel>
            <FilledInput
              id='repeat password'
              type={showPassword ? 'text' : 'password'}
              {...register('repeatpassword', {
                required: 'Repeat password is required',
                minLength: { value: 6, message: 'Repeat password very small' },
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return 'Your passwords do no match'
                  }
                },
              })}
              error={errors.repeatpassword ? true : false}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                    sx={{
                      color: errors.repeatpassword ? red[900] : green[900],
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.repeatpassword?.message && (
              <FormHelperText sx={{ color: red[900] }}>
                {errors.repeatpassword?.message}
              </FormHelperText>
            )}
          </PasswordInput>
          <ButtonContainer>
            <LoginButton
              fullWidth
              onClick={() => navigator('/login')}
              color='success'
              variant='contained'
            >
              back to login
            </LoginButton>
            <LoginButton
              onClick={handleSubmit(onSubmit)}
              fullWidth
              color='success'
              variant='contained'
            >
              sign in
            </LoginButton>
          </ButtonContainer>
        </FormContainer>
      </Dashboard>
    </Container>
  )
}

export default RegisterPage
