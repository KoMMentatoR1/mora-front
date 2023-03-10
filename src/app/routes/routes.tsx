import { Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import MyDB from '../../pages/MyDB/MyDB'

interface IRouter {
  path: string
  element: React.ReactNode
}

export const publicRoutes: Array<IRouter> = [
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  { path: '*', element: <Navigate to='/login' replace /> },
]

export const userRoutes: Array<IRouter> = [
  {
    path: '/MyDB',
    element: <MyDB />,
  },
  { path: '*', element: <Navigate to='/MyDB' replace /> },
]
