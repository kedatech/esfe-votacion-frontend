import {Route, Routes} from 'react-router-dom'
function Public() {
  return (
    <div>
      <h1>public</h1>
      <Routes>
        <Route path='concursos' element={<h1>concurso</h1>}/>
        <Route path='categorias' element={<h1>categorias</h1>}/>
      </Routes>
    </div>
  )
}
export default Public