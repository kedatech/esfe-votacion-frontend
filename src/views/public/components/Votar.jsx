import { useState, useEffect } from "react";
import Spinner from "../../../shared/utils/components/Spinner";
import { votar } from "../../../shared/utils/api/votar";
import useEvent from "../../../shared/helpers/useEvent";
import Html5QrcodePlugin from "./QRScanner";

const Votar = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useEvent(3);
  const [success, setSuccess] = useEvent(3);

  useEffect(() => {
    const votaApi = async () => {
      setLoading(true);
      try {
        const response = await votar({ CodigoParticipante: result });

        if (response.error) setError(response.error);
        else setSuccess("Voto agregado exitosamente");
      } catch (error) {
        setError("Error al realizar la votación");
      }
      setLoading(false);
    };

    if (result !== "") {
      votaApi();
    }
  }, [result]);

  const onNewScanResult = (qrCodeResult) => {
    setResult(qrCodeResult);
  };

  return (
    <div className="voto-container">
      {loading ? (
        <Spinner />
      ) : error !== "" ? (
        <div className="msg-resul error">
          <h2>{error}</h2>
          <img src="/icons/cerca.png" alt="icon-error" />
        </div>
      ) : success ? (
        <div className="msg-resul success">
          <h2>{success}</h2>
          <img src="/icons/cheque.png" alt="icon-error" />
        </div>
      ) : null}

      {!loading && !error && !success && (
        <div className="qr-container">
          <Html5QrcodePlugin
            fps={30}
            qrbox={200}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
        </div>
      )}

      {/* <div>     
        <span>Lista de Resultados:</span>
        <span>{result}</span>
        <button onClick={() => setResult("p1")}>bueno</button>
        <button onClick={() => setResult("lalal")}>malo</button>
      </div> */}
    </div>
  );
};

export default Votar;
