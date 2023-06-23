import React from 'react';
import { useRouteError } from 'react-router-dom';
const ErroePage = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Error occur as below</h1>
      <h2>{err.status + ` : ` + err.statusText}</h2>
    </div>
  );
};

export default ErroePage;
