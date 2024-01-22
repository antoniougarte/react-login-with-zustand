import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<div>About</div>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<div>Pagina no encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
