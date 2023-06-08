import { Navigate, Route, Routes } from 'react-router-dom'
import Concursos from '../../public/pages/Concursos'
function Dashboard() {
  
  const handleDelete = ()=> console.log("delete")
  const handleEdit = ()=> console.log("edit")
  return (
    <div >
      <h1>Administrar concursos</h1>
      <Routes>
        <Route index element={<Navigate to={"concursos"}/>}/>
        <Route path='concursos' element={<Concursos handleDelete={handleDelete} handleEdit={handleEdit}/>}/>
      </Routes>
      
    </div>
  )
}
export default Dashboard