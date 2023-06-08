import {Route, Routes, Navigate} from 'react-router-dom'
import {Login, Dashboard} from './pages/index'
import Protected from './pages/Protected'
function Admin() {
  
  const loger = true
  return (
    <div className='admin'>

      < >
        <Routes>
          {
            loger
            ? <Route path='/' element={
              <Protected>
                <Dashboard />
              </Protected>
            }/>
            : <Route path='/' element={<Navigate to="login"/>}/>
          }
            : <Route path='login' element={<Login />}/>

          <Route path='*' element={<h1>No existe</h1>}/>
          
        </Routes>
      </>
    </div>
  )
}
export default Admin