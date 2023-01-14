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
          <CustomInput
            fullWidth
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password very small' },
            })}
            label='Password'
            required
            error={errors.password ? true : false}
            helperText={errors.password?.message}
            variant='filled'
          />
          <CustomInput
            fullWidth
            {...register('repeatpassword', {
              required: 'Repeat password is required',
              minLength: { value: 6, message: 'Repeat password very small' },
              validate: (val: string) => {
                if (watch('password') != val) {
                  return 'Your passwords do no match'
                }
              },
            })}
            required
            label='Repeat Password'
            error={errors.repeatpassword ? true : false}
            variant='filled'
            helperText={errors.repeatpassword?.message}
          />
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
