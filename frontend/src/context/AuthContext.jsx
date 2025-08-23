import { createContext, useContext, useState } from "react";

// Create and export the context!
export const AuthContext = createContext();

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const jwtCookie = getCookie("jwt");
  const [authUser, setAuthUser] = useState(jwtCookie || null);
  console.log("Raw document.cookie:", document.cookie);
console.log("JWT from cookie:", getCookie("jwt"));


  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
