import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
    page not Fount 
        <Link to="/" className="btn-primary">return home</Link>
        </>
  );
};

export default ErrorPage;
