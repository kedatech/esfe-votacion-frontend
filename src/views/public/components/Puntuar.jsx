import { useState } from 'react';
import { votar } from '../../../shared/utils/api/votar'
import useEvent from '../../../shared/helpers/useEvent'
import "./puntuar.css";
import { Link } from 'react-router-dom'

export const Puntuar = ({ participante, setParticipante,  codigoJuez }) => {
  const [puntuacion, setPuntuacion] = useState(0);
  const [error, setError] = useEvent(2)
  const [success, setSuccess] = useEvent(2)

  console.log("pa", participante)
  const handlePuntuacionChange = (valor) => {
    setPuntuacion(valor);
  };


  const handleClick = async () => {
    puntuacion == 0 && setError("Debe elegir una calificación")
    const data = {
      CodigoJuez: codigoJuez,
      CodigoParticipante: participante.data.Codigo,
      Calificacion: puntuacion
    }
    const result = await votar(data)
    if(result.error) setError(result.eror)
    else{
      setSuccess(result.success)
      setParticipante({...participante, preVoto: result.Calificacion})
    }
  }

  const count = [5, 4, 3, 2, 1];

  return (
    <>

      {
        error !== "" ? (
          <div className="msg-resul error">
            <h2>{error}</h2>
            <img src="/icons/cerca.png" alt="icon-error" />
          </div>
        ) : success ? (
          <div className="msg-resul success">
            <h2>{success}</h2>
            <img src="/icons/cheque.png" alt="icon-error" />
          </div>) : null
      }
      {
        error == "" && success == "" &&
        <>
          <div className='btn-back' onClick={()=> setParticipante(null)}>Regresar</div>
          <h1>Califica a:</h1>
          <h2>{participante.data.Nombre}</h2>
          <p>
            {participante.preVoto > 0 &&
              <>
                Ya votaste por este proyecto, si da una nueva calificación sobreescribira la anterior. Su calificación fue <b>{participante.preVoto}/5</b>
              </>}


          </p>


          <form className="form-puntuar">

            {count.map((s, i) => (
              <Star key={s} number={s} onPuntuacionChange={handlePuntuacionChange} />
            ))}
          </form>
          <button onClick={handleClick}>Enviar puntuación</button>
        </>
      }

    </>
  );
};

const Star = ({ number, onPuntuacionChange, indice }) => {
  return (
    <>
      <input
        id={`radio${number}`}
        type="radio"
        name="estrellas"
        value={`${number}`}
        onChange={() => onPuntuacionChange(number)}
      />
      <label htmlFor={`radio${number}`}><StarSvg /></label>
    </>
  );
};

const StarSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={"100%"}
    >
      <path
        fill="#1C274C"
        d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45.28-.213.46-.536.82-1.182l.328-.588Z"
      />
    </svg>
  )
}
