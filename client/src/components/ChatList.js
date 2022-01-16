import React from "react";
import ChatContext from "../context/ChatContext";
import ChatItem from "./ChatItem";
import styles from "./styles.module.css";
import ScrollableFeed from "react-scrollable-feed"
const ChatList = () => {

    const {messages} = React.useContext(ChatContext)

  return (
    <div className={styles.chatlist}>
        <ScrollableFeed forceScroll={true} >
        {messages.map((item, key) => (
        <ChatItem item={item} key={key} />
      ))}
        </ScrollableFeed>
      
    </div>
  );
};

export default ChatList;
