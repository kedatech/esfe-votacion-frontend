import { useState } from 'react';

function useError(time = 1) {
  const [error, setError] = useState('');

  const setErrorWithTimeout = (msg, callback = null, ...args) => {
    setError(msg);
    setTimeout(() => {
      
      setError('');
      
      if (callback !== null) {
        callback(args);
      }
    }, time * 1000);
  };

  return [error, setErrorWithTimeout];
}

export default useError;
