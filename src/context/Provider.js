import React from 'react';
import MyContext from './MyContext';

const Provider = ({children}) => {

  const context = {

  }

  <MyContext.Provider value={ context }>
    {children}
  </MyContext.Provider>
}

export default Provider;
