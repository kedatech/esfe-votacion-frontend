import { useState } from "react";
import { useZxing } from "react-zxing";

function _QRscanner({setResult}) {
  const [pauseCamera, setPauseCamera] = useState(false);

  const { ref } = useZxing({
    paused: pauseCamera,
    onResult(result) {
      setResult(result.getText());
    },
  });

  const toggleCamera = () => {
    setPauseCamera(() => !pauseCamera);
};
  return (
    <>
        <h1 className="title">Escanea un QR</h1>
        <div className="video-container">
          <video className="Scanner-Video-Render" ref={ref} />
        </div>
        <br />
        <button className="button-cancel-camera" onClick={toggleCamera}>
          {pauseCamera ? "Encender cámara" : "Apagar cámara"}
        </button>
        <button className="button-cancel-camera" onClick={toggleCamera}>
          Escanear
        </button>
        
    </>
  )
}
export default _QRscanner