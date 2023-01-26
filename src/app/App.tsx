import { HashRouter } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import AppRouter from './routes/AppRouter'
import { useAction } from '../shared/hooks/useAction'

export const App = () => {
  const { cheackAuth } = useAction()

  useEffect(() => {
    localStorage.getItem('token') && cheackAuth()
  }, [])

  return (
    <HashRouter>
      <AppRouter></AppRouter>
    </HashRouter>
  )
}
