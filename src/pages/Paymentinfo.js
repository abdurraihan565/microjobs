import React from 'react';
import { useLocation } from 'react-router-dom';

function Paymentinfo() {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <h1>payment</h1>
      <h1>{location.state.name}</h1>
    </div>
  );
}

export default Paymentinfo;
