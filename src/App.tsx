import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import './styles/App.scss'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Navigate to="/home" replace />} />
            <Route path='/home' element={<Home />} />
            <Route />
            <Route />
            <Route />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
