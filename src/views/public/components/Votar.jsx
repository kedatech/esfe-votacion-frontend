import { useState, useEffect } from "react";
import Loading from '../../../shared/utils/components/Loading'
import _QRscanner from './_QRscanner'
import { votar } from '../../../shared/utils/api/votar'
import useError from '../../../shared/helpers/useError'


const Votar = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useError(3);
  
  useEffect(() => {
    const votaApi = async () => {
      setLoading(true);
      try {
        const result2 = result; // Asigna el valor de 'result' a 'result2' aquí
        const response = await votar({ CodigoParticipante: result2 });
        console.log(response)
        if (response.error)  setError(response.error);
      } catch (error) {
        setError("Error al realizar la votación");
      }
      setLoading(false);
    };

    if (result !== "") {
      votaApi();
    }
  }, [result]);

  return (
    <div className="voto-container">
      {loading 
      ? <Loading />
      : error !== ""?(
        <div className="error">
          <h2>{error}</h2>
          <img src="/icons/cerca.png" alt="icon-error" />
        </div>
      ):null}

      <div className={loading || error ? "display-none" : null}>
        <_QRscanner setResult={setResult}/>
      </div>

      <div>
        {/* for testing */}
        <span>Lista de Resultados:</span>
        <span>{result}</span>
        <button onClick={()=> setResult("p2")}>
                bueno
        </button>
        <button onClick={()=> setResult("lalal")}>
                malo
        </button>

        <h1>{error}</h1>
        <h2>{error!==""}</h2>
      </div>
    </div>
  );
};

export default Votar;
