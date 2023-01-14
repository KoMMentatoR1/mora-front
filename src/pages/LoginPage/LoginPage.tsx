import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAction } from '../../hooks/useAction'
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
    watch,
    formState: { errors },
  } = useForm<Inputs>()

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
              required: 'Email Address is required',
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
          <Input
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password very small' },
            })}
            required
            error={errors.password ? true : false}
            fullWidth
            label='Password'
            variant='filled'
            helperText={errors.password?.message}
          />
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
