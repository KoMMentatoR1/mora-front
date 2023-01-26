import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
  AuthButton,
  AuthButtonContainer,
} from '../../components/Auth/AuthButtonContainer'
import {
  AuthPageLayout,
  FormContainer,
} from '../../components/Auth/AuthPageLayout'
import { BaseInputPassword } from '../../components/base/base-input-password'
import { BaseInputText } from '../../components/base/base-Input-text'
import { useAction } from '../../shared/hooks/useAction'
const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>()

  const navigator = useNavigate()

  const { login } = useAction()

  const onSubmit: SubmitHandler<FieldValues> = data =>
    login(data.email, data.password)

  return (
    <AuthPageLayout title='mora' subTitle='Login'>
      <FormContainer>
        <BaseInputText
          rules={{
            required: 'Email address is required',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Email is not valid',
            },
          }}
          required
          error={errors.email ? true : false}
          label='Email'
          name='email'
          helperText={errors.email?.message as string}
          control={control}
        />
        <BaseInputPassword
          required
          error={errors.password ? true : false}
          label='Password'
          name='password'
          helperText={errors.password?.message as string}
          control={control}
          rules={{
            required: 'Password is required',
            minLength: { value: 6, message: 'Password very small' },
          }}
        />
        <AuthButtonContainer>
          <AuthButton
            onClick={() => navigator('/register')}
            fullWidth
            color='success'
            variant='contained'
          >
            Sing up
          </AuthButton>
          <AuthButton
            onClick={handleSubmit(onSubmit)}
            fullWidth
            color='success'
            variant='contained'
          >
            log in
          </AuthButton>
        </AuthButtonContainer>
      </FormContainer>
    </AuthPageLayout>
  )
}

export default LoginPage
