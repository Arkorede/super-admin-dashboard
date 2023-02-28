// import React, { useContext, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// // import ErrorPage from "./Error";
// import Login from "./pages/login";
// import { AppProvider } from "./context/context";
// import { getLocalStorage } from "./localStorage";
// import UserContext from "./context/UserContext";

// const RoutesComponents = () => {
//   const { setUser } = useContext(UserContext);

//   const userData = getLocalStorage("user");
//   useEffect(() => {
//     setUser(userData);
//   }, []);

//   return (
//     <AppProvider>
//       <Routes location={location} key={location.pathname}>
//         <Route path="">
//           <Route exact path="/login" element={<Login />} />
//         </Route>
//       </Routes>
//     </AppProvider>
//   );
// };

// export default RoutesComponents;
