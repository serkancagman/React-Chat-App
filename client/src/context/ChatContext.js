import React from "react";

const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = React.useState([
    
  ]);

  


  const values = {
    messages,
    setMessages,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};
export default ChatContext;
