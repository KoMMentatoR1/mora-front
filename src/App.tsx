import { HashRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { useAction } from './hooks/useAction'
import './App.css'
import AppRouter from './routes/AppRouter'

const App = () => {
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

export default App
