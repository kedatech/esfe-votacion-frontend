import { useState, useEffect } from "react";
import { useZxing } from "react-zxing";
import Loading from '../../../shared/utils/components/Loading'
import { votar } from '../../../shared/utils/api/votar'

const QRscanner = () => {
  const [result, setResult] = useState("");
  const [pauseCamera, setPauseCamera] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { ref } = useZxing({
    paused: pauseCamera,
    onResult(result) {
      setResult(result.getText());
    },
  });

  const toggleCamera = () => {
      setPauseCamera(() => false);
  };

  useEffect(() => {
    const votaApi = async () => {
      setLoading(true);
      try {
        setPauseCamera(() => true);
        const result2 = result; // Asigna el valor de 'result' a 'result2' aquí
        const response = await votar({ CodigoParticipante: result2 });
        if (response.error) {
          setError(response.error);
          setTimeout(() => {
            setError("");
            setPauseCamera(false)

          }, 4000); // Establece un retraso de 4 segundos antes de limpiar el error
        }

      } catch (error) {
        setError("Error al realizar la votación");
        setTimeout(() => {
          setError("");
        }, 4000); // Establece un retraso de 4 segundos antes de limpiar el error
      }
      setLoading(false);
    };

    if (result !== "") {
      votaApi();
    }
  }, [result]);

  return (
    <div className="scanner-container">
      <h1 className="title">Escanea un QR</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error !== "" ? (
            <>
            <h1>{error}</h1>
            <img src="/icons/cerca.png" alt="" />
            </>
          ) : (
            <>
              <div className="video-container">
                <video className="Scanner-Video-Render" ref={ref} />
              </div>
              <br />
              {/* <button className="button-cancel-camera" onClick={toggleCamera}>
                {pauseCamera ? "Encender cámara" : "Apagar cámara"}
              </button> */}
              <button className="button-cancel-camera" onClick={toggleCamera}>
                Escanear
              </button>
              
            </>
          )}
        </>
      )}

      <p>
        <span>Lista de Resultados:</span>
        <span>{result}</span>
        <button onClick={()=> setResult("p2")}>
                bueno
        </button>
        <button onClick={()=> setResult("lalal")}>
                malo
        </button>
      </p>
    </div>
  );
};

export default QRscanner;
