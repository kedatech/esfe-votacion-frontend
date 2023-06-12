import { useState } from 'react';

function Event(time = 1) {
  const [event, setEvent] = useState('');

  const setEventWithTimeout = (msg, callback = null, ...args) => {
    setEvent(msg);
    setTimeout(() => {
      
      setEvent('');
      
      if (callback !== null) {
        callback(args);
      }
    }, time * 1000);
  };

  return [event, setEventWithTimeout];
}

export default Event;
