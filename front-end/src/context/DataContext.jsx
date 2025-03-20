import React, { createContext, useState, useContext } from "react";

const ResponseContext = createContext();

export const useResponse = () => {
  return useContext(ResponseContext);
};

export const ResponseProvider = ({ children }) => {
  const [responseMessage, setResponseMessage] = useState("");

  return (
    <ResponseContext.Provider value={{ responseMessage, setResponseMessage }}>
      {children}
    </ResponseContext.Provider>
  );
};
