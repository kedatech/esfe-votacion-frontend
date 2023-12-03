import { useEffect, useState } from "react"
import Votar from "../components/Votar"
import LoginJuez from "../components/LoginJuez"

function Home() {
  const authResult = JSON.parse(localStorage.getItem('authJuezToken'));
  console.log("authResult",authResult)
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
        :<LoginJuez />
      }
    </div>
  )
}
export default Home