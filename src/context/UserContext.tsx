// import { createContext, useEffect, useState } from "react";

// const UserContext = createContext()

// const UserContextProvider = ({ children }) => {

//   const [ usuario, setUsuario ] = useState({})
//   useEffect(() => {
//     setUsuario({
//       name: "Paulo Ugarte",
//       registered: "22/Enero/20233"
//     })
//   }, [])

//   return (
//     <UserContext.Provider value={usuario} >
//       { children }
//     </UserContext.Provider>
//   )
// }

// export { UserContext, UserContextProvider }