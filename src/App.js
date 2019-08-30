import React from 'react';
import NavBar from './components/navbar';

export default ({ children }) => {
  return (
    <React.Fragment>
      <NavBar className="navbar" />
      {children}
    </React.Fragment>
  );
};