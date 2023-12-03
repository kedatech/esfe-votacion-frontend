import {Navigate, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import { Concursos, Categorias, Informacion, Estadistica, VotarPage} from './pages/index'
import NotFount from './pages/NotFount'

function Public() {
  
  return (
    <div className='public'>
      
      <NavBar />
      <div className='contenedor-main'>
        <Routes>
          <Route path="/" element={<VotarPage />} />
          <Route path="/:codigo" element={<VotarPage />} />
          <Route path='/concursos' element={<Concursos />}/>
          <Route path='/estadisticas' element={<Estadistica />}/>
          <Route path='/informacion' element={<Informacion />}/>
          <Route path='/concursos/categorias/:id' element={<Categorias />}/>
          {/* <Route path='/admin/categorias/:id' element={<Categorias />}/> */}
          <Route path='*' element={<NotFount />}/>
        </Routes>
      </div>
    </div>
  )
}
export default Public