import { useState } from "react";
import { useZxing } from "react-zxing";

const QRscanner = () => {
  const [result, setResult] = useState("");
  const [pauseCamera, setPauseCamera] = useState(false);
  const { ref } = useZxing({
    paused: pauseCamera,
    onResult(result) {
      setResult(result.getText());
    },
  });

  const toggleCamera = () => {
    setPauseCamera((prev) => !prev);
  };

  return (
    <div className="scanner-container">
        <h1 className="title">Escanea un QR</h1>
      <div className="video-container">
        <video className="Scanner-Video-Render" ref={ref} />
      </div>
      <br />
      <button className="button-cancel-camera" onClick={toggleCamera}>
        {pauseCamera ? "Encender cámara" : "Apagar cámara"}
      </button>
      <p>
        <span>Lista de Resultados:</span>
        <span>{result}</span>
      </p>
    </div>
  );
};

export default QRscanner;
