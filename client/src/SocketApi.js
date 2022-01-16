import io from "socket.io-client"

let socket;

export const init = () =>{
    console.log("Connecting...")
    socket = io("http://localhost:3000",{
        transports: ["websocket"]
    })
    socket.on("connect",()=> console.log("Connected !"))
}

export const sendMessage = (message) =>{
    if(socket) socket.emit("new-message",message)
}

export const subscribeMessage = (cb) =>{
    if(!socket) return;

    socket.on("receive-message",(message)=>{
        console.log("You have a new message ! :", message)
  
        cb(message);
    })
    
}

export const subscribeInitialMessage= (cb) =>{
    if(!socket) return;

    socket.on("message-list",(messages)=>{
        console.log("Initial Message :", messages)
  
        cb(messages);
    })

}