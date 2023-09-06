import React, {createContext, useContext, useState} from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [authorities, setAuthorities] = useState([]);
  const [jwtToken, setJwtToken] = useState('');

  return (
    <UserContext.Provider value={{ authorities, setAuthorities, jwtToken, setJwtToken }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserAuthorities= () =>{
  return useContext(UserContext).authorities;
}

export const useSetUserAuthorities = () => {
  return useContext(UserContext).setAuthorities;
}

export const useUserToken = () => {
  return usecontext(UserContext).jwtToken;
}
export const useSetUserToken = () => {
  return usecontext(UserContext).setJwtToken;
}