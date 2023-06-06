import {Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
function Public() {
  return (
    <div>
      
      <NavBar />
      <Routes>
        <Route path='concursos' element={<h1>concurso</h1>}/>
        <Route path='categorias' element={<h1>categorias</h1>}/>
      </Routes>
    </div>
  )
}
export default Public