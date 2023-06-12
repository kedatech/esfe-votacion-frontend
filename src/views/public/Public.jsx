import {Navigate, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import {Home, Concursos, Categorias, Informacion} from './pages/index'
function Public() {
  
  return (
    <div className='public'>
      
      <NavBar />
      <div className='contenedor-main'>
        <Routes>
          <Route index element={<Navigate to="/home" />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/concursos' element={<Concursos />}/>
          <Route path='/informacion' element={<Informacion />}/>
          <Route path='/concursos/categorias/:id' element={<Categorias />}/>
          <Route path='/admin/categorias/:id' element={<Categorias />}/>
        </Routes>
      </div>
    </div>
  )
}
export default Public