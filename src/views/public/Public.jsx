import {Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
function Public() {
  return (
    <div className='public'>
      
      <NavBar />
      <Routes>
        <Route path='home' element={<Home />}/>
        <Route path='categorias' element={<h1>categorias</h1>}/>
      </Routes>
    </div>
  )
}
export default Public