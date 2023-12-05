import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"

import { BuscarParticipante } from "../../components/BuscarParticipante"
import { LoginJuez } from "../../components/LoginJuez"
import { Puntuar } from "../../components/Puntuar"
import { getByCodigo } from '../../../../shared/utils/api/participante'
import useEvent from "../../../../shared/helpers/useEvent";


export function VotarPage() {
  const {codigo} = useParams()

  const authResult = JSON.parse(localStorage.getItem('authJuezToken'));
  const codigoJuez = JSON.parse(localStorage.getItem('codigoJuez'));

  const [validate, setValidate] = useState(false);
  const [participante, setParticipante] = useState(null);
  const [error, setError] = useEvent(3);
  
  useEffect(() => {
    
    if(authResult){
      setValidate(true)
    }
    
  }, [authResult])

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const data = await getByCodigo(codigo, codigoJuez);
        if(data.error) setError(data.error)
        else setParticipante(data);
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
        error === ""  ?
        validate
        ?participante? <Puntuar codigoJuez={codigoJuez} participante={participante} setParticipante={setParticipante}/> : <BuscarParticipante setParticipante={setParticipante}/>
        :<LoginJuez setValidate={setValidate}/> : null
        
      }

      {
        error !== "" && <div className="msg-resul error">
        <h2>{error}</h2>
        <img src="/icons/cerca.png" alt="icon-error" />
      </div>
      }
    </div>
  )
}
