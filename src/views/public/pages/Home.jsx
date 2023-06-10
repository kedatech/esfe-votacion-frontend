import { useEffect, useState } from "react"
import QRscanner from "../components/QRscanner"
import Form from "../components/Form"

function Home() {
  const [validate, setValidate] = useState(false);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    return () => {
      
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