// Corrected version
import React, { useEffect } from 'react';

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='text-center mt-10'>
      <div>
        <h1>Something Went Wrong. Please try again later.</h1>
        <button className='hover:text-amber-600' onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
