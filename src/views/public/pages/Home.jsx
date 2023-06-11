import { useEffect, useState } from "react"
import QRscanner from "../components/QRscanner"
import Form from "../components/Form"

function Home() {
  const authResult = JSON.parse(localStorage.getItem('authEstudianteResult'));
  const [validate, setValidate] = useState(true);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    if(authResult){
      setValidate(true)
    }
    
  }, [])
  
  return (
    <div>
      {
        validate
        ?<QRscanner/>
        :<Form />
      }
    </div>
  )
}
export default Home