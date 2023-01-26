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

const RegisterPage = () => {
  const navigator = useNavigate()

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>()

  const { registration } = useAction()

  const onSubmit: SubmitHandler<FieldValues> = data =>
    registration(data.email, data.password, data.username)

  return (
    <AuthPageLayout title='Mora' subTitle='Register'>
      <FormContainer>
        <BaseInputText
          required
          label='Username'
          error={errors.username ? true : false}
          name='username'
          control={control}
          rules={{ required: 'Username is required' }}
          helperText={errors.username?.message as string}
        />
        <BaseInputText
          required
          label='Email'
          error={errors.email ? true : false}
          name='email'
          control={control}
          helperText={errors.email?.message as string}
          rules={{
            required: 'Email Address is required',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`,{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Email is not valid',
            },
          }}
        />
        <BaseInputPassword
          required
          label='Password'
          error={errors.password ? true : false}
          name='password'
          control={control}
          helperText={errors.password?.message as string}
          rules={{
            required: 'Password is required',
            minLength: { value: 6, message: 'Password very small' },
          }}
        />
        <BaseInputPassword
          required
          label='Repeat password'
          error={errors.repeatPassword ? true : false}
          name='repeatPassword'
          control={control}
          helperText={errors.repeatPassword?.message as string}
          rules={{
            required: 'Repeat password is required',
            minLength: { value: 6, message: 'Repeat password very small' },
            validate: (val: string) => {
              if (watch('password') != val) {
                return 'Your passwords do no match'
              }
            },
          }}
        />

        <AuthButtonContainer>
          <AuthButton
            fullWidth
            onClick={() => navigator('/login')}
            color='success'
            variant='contained'
          >
            back to login
          </AuthButton>
          <AuthButton
            onClick={handleSubmit(onSubmit)}
            fullWidth
            color='success'
            variant='contained'
          >
            sign in
          </AuthButton>
        </AuthButtonContainer>
      </FormContainer>
    </AuthPageLayout>
  )
}

export default RegisterPage
