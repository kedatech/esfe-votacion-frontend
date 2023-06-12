// file = Html5QrcodePlugin.jsx
import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
    let config = {
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
    };
    if (props.fps) {
        config.fps = props.fps;
    }
    if (props.qrbox) {
        config.qrbox = props.qrbox;
    }
    if (props.aspectRatio) {
        config.aspectRatio = props.aspectRatio;
    }
    if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip;
    }
    return config;
};

const Html5QrcodePlugin = (props) => {

    useEffect(() => {
        // when component mounts
        const config = createConfig(props);
        const verbose = props.verbose === true;
        // Suceess callback is required.
        if (!(props.qrCodeSuccessCallback)) {
            throw "qrCodeSuccessCallback is required callback.";
        }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);

    
        // cleanup function when component will unmount
        if(document.getElementById("html5-qrcode-button-camera-permission")){
            document.getElementById("html5-qrcode-button-camera-permission").innerText = "INICIAR"
        }
        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, []);

    return (
        <div className='qr-scanner' id={qrcodeRegionId} />
    );
};

Html5QrcodePlugin.propTypes = {
    fps: PropTypes.number,
    qrbox: PropTypes.number,
    aspectRatio: PropTypes.number,
    disableFlip: PropTypes.bool,
    verbose: PropTypes.bool,
    qrCodeSuccessCallback: PropTypes.func.isRequired,
    qrCodeErrorCallback: PropTypes.func,
};

export default Html5QrcodePlugin;