import { useEffect, useState } from "react"
import Votar from "../components/Votar"
import LoginEstudiante from "../components/LoginEstudiante"

function Home() {
  const authResult = JSON.parse(localStorage.getItem('authEstudianteResult'));
  const [validate, setValidate] = useState(false);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    if(authResult){
      setValidate(true)
    }
    
  }, [authResult])
  
  return (
    <div>
      {
        validate
        ?<Votar/>
        :<LoginEstudiante />
      }
    </div>
  )
}
export default Home