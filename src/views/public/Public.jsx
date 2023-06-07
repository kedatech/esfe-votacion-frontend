import {Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import {Home,Concursos} from './pages/index'
function Public() {
  return (
    <div className='public'>
      
      <NavBar />
      <Routes>
        <Route path='home' element={<Home />}/>
        <Route path='concursos' element={<Concursos />}/>
      </Routes>
    </div>
  )
}
export default Public