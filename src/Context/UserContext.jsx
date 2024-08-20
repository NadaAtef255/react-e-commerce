// import React, { createContext, useContext, useEffect, useState } from 'react';
// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [authToken, setAuthToken] = useState(null)
//  useEffect( () => {
//   setAuthToken(localStorage.getItem("authToken") )
//  },[authToken])
//   return (
//     <AuthContext.Provider value={{ authToken, setAuthToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
// export function useAuth() {
//   return useContext(AuthContext);
// }
import { createContext, useState } from "react";
export let UserContext = createContext();
export default function UserContextProvider({children}){
const [userData , setUserData] = useState(null)
 return <UserContext.Provider value={{userData, setUserData}}>
 {children}
 </UserContext.Provider>
}