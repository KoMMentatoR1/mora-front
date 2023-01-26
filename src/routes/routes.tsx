import { Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import SimpleBackdrop from '../components/SimpleBackdrop/SimpleBackdrop'

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'))
const MyDB = lazy(() => import('../pages/MyDB/MyDB'))

interface IRouter {
  path: string
  element: React.ReactNode
}

export const publicRoutes: Array<IRouter> = [
  {
    path: '/register',
    element: (
      <Suspense fallback={<SimpleBackdrop />}>
        <RegisterPage />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<SimpleBackdrop />}>
        <LoginPage />{' '}
      </Suspense>
    ),
  },
  { path: '*', element: <Navigate to='/login' replace /> },
]

export const userRoutes: Array<IRouter> = [
  {
    path: '/MyDB',
    element: (
      <Suspense fallback={<SimpleBackdrop />}>
        <MyDB />{' '}
      </Suspense>
    ),
  },
  { path: '*', element: <Navigate to='/MyDB' replace /> },
]
