import React from 'react'
import ChatContext from '../context/ChatContext'
import { init, subscribeInitialMessage, subscribeMessage } from '../SocketApi'
import ChatForm from './ChatForm'
import ChatList from './ChatList'

const Container = () => {
    const {setMessages} = React.useContext(ChatContext)

    React.useEffect(()=>{

        init();
        subscribeMessage((message)=>{
            setMessages((prevState)=> [...prevState,{message}])
        })
        subscribeInitialMessage((messages)=>{
            console.log(messages)
            setMessages(messages)
        })
    },[])


    return (
        <div>
            <ChatList/>
            <ChatForm/>
        </div>
    )
}

export default Container
