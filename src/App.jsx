import { Routes, Route } from 'react-router-dom'
import Public from './views/public/Public.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<Public />}/>
      </Routes>
    </>
  )
}

export default App
