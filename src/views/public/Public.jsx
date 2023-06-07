import {Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import {Home, Concursos, Categorias} from './pages/index'
function Public() {
  return (
    <div className='public'>
      
      <NavBar />
      <div className='contenedor-main'>
        <Routes>
          <Route path='home' element={<Home />}/>
          <Route path='concursos' element={<Concursos />}/>
          <Route path='concursos/categorias/:id' element={<Categorias />}/>
        </Routes>
      </div>
    </div>
  )
}
export default Public