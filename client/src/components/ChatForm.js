import React from 'react'
import ChatContext from '../context/ChatContext';
import { sendMessage } from '../SocketApi';
import styles from "./styles.module.css";
const ChatForm = () => {

    const [message,setMessage] = React.useState("")
    const {setMessages} = React.useContext(ChatContext)



    const handleSubmit = (e) =>{
        e.preventDefault();
        sendMessage(message)
        console.log(message)
        setMessage("");
        setMessages((prevState)=>[...prevState,{message, fromMe: true}])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input className={styles.textInput} value={message} type="text" onChange={(e) => setMessage(e.target.value)} />

            </form>
        </div>
    )
}

export default ChatForm
