import React, {createContext, useContext, useState} from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [authorities, setAuthorities] = useState([]);

  return (
    <UserContext.Provider value={{ authorities, setAuthorities }}>
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

