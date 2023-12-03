import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"

import { BuscarParticipante } from "../../components/BuscarParticipante"
import { LoginJuez } from "../../components/LoginJuez"
import { Puntuar } from "../../components/Puntuar"
import { getByCodigo } from '../../../../shared/utils/api/participante'

export function VotarPage() {
  const {codigo} = useParams()
  console.log(codigo)
  const authResult = JSON.parse(localStorage.getItem('authJuezToken'));
  console.log("authResult",authResult);
  const [validate, setValidate] = useState(false);
  const [participante, setParticipante] = useState(null);
  console.log(participante)
  useEffect(() => {
    
    if(authResult){
      setValidate(true)
    }
    
  }, [authResult])

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const data = await getByCodigo(codigo);
        console.log(data)
        setParticipante(data);
      } catch (error) {
        console.error('Error al obtener los datos de concursos:', error);
      }
    };
    if(codigo){
      fetchData();
    }
  },[])
  
  return (
    <div>
      {
        validate
        ?participante? <Puntuar participante={participante}/> : <BuscarParticipante setParticipante={setParticipante}/>
        :<LoginJuez setValidate={setValidate}/>
      }
    </div>
  )
}
