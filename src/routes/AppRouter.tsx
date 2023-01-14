import { publicRoutes, userRoutes } from './routes'
import { Routes, Route } from 'react-router-dom'
import { useTypeSelector } from '../hooks/useTypeSelector'

const AppRouter = () => {
  const { user } = useTypeSelector(store => store.auth)

  const getRouts = () => {
    switch (user.user.role) {
      case '':
        return publicRoutes
      case 'USER':
        return userRoutes
      default:
        return publicRoutes
    }
  }

  return (
    <Routes>
      {getRouts().map(route => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  )
}

export default AppRouter
