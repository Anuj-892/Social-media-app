import { createContext, useContext, useEffect, useState } from 'react';
import { makeRequest } from '../axios';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // console.log(user,"here again");
  //   async function fetchData(){
  //     console.log(user,"here again");
  //     try {
  //       const res = await makeRequest.get(`/users/refetch`);
  //       // console.log(res.data);
  //       setUser(res.data)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   if (!user) {
  //     fetchData();
  //   }
  // }, [user])
  

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
