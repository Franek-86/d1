import React, { useContext, useState, useEffect } from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const test = localStorage.getItem("user");
    if (test) {
      setUserName(test);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ userName, password, setUserName, setPassword }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
