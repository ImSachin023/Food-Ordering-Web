import { useRouteError } from 'react-router';
import React from 'react'

const Error = () => {
    const error = useRouteError();
    console.log(error);

  return (
    <div>
        <h1>OOPS!!</h1>
        <h2>Something Went Wrong....</h2>
        <h3>{error.status}:{error.statusText}</h3>
        <h5>{error.data}</h5>
    </div>
  )
}

export default Error;