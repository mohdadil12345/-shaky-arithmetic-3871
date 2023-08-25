import React, { createContext, useState } from 'react';

export const authval = createContext();

const initialData = {
  isAuth: false,
  email: '',
  password: '',
};

function ContextProvider({ children }) {
  const [state, setstate] = useState(initialData);
  const [cart, setcart] = useState([]);
  const [myOrder, setmyOrder] = useState([]);

  const login = (checklogin) => {
    setstate({
      isAuth: true,
      email: checklogin.email,
      password: checklogin.password,
      username : checklogin.username
    });
  };


  const logout = () => {
    setstate({
      isAuth: false,
      email: '',
      password: '',
    });
  };

  const totalCartPrice = () => {};
  const applyCoupan = () => {};

  return (
    <authval.Provider value={{ state, login, logout, cart, setcart }}>
      {children}
    </authval.Provider>
  );
}

export default ContextProvider;
