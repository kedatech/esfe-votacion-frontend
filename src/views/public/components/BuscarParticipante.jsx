import { useState, useEffect } from "react";
import Spinner from "../../../shared/utils/components/Spinner";
import Switch from "../../../shared/utils/components/Switch";
import { votar } from "../../../shared/utils/api/votar";
import { getByCodigo } from "../../../shared/utils/api/participante";
import useEvent from "../../../shared/helpers/useEvent";
import Html5QrcodePlugin from "./QRScanner";
import FormCodigo from "./FormCodigo";

export const BuscarParticipante = ({setParticipante}) => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useEvent(3);
  const [success, setSuccess] = useEvent(3);

  const [mode, setMode] = useState("qr")

  const codigoJuez = JSON.parse(localStorage.getItem('codigoJuez'));

  useEffect(() => {
    const votaApi = async () => {
      setLoading(true);
      console.log(result)
      try {
        const response = await getByCodigo(result, codigoJuez);
        if (response.error) setError(response.error);
        else {
          setSuccess("Voto agregado exitosamente");
          setParticipante(response)
        }
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
    const match = url.match(/\/([^\/]+)\/?$/);
    const codigo = qrCodeResult ? match[1] : null;
    console.log(codigo)
    setResult(codigo);
  };

  return (
    <div className="voto-container">
      <h1>Buscar proyecto</h1>
      
      <Switch setMode={setMode}/>
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
      
      {
        !loading && !error && !success && mode == "code" && (
          <FormCodigo handleSubmit={setResult}/>
        )
      }
      {!loading && !error && !success && mode =="qr" && (
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
