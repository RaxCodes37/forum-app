"use client";

import { socket } from "@/lib/socket-client";
import { getMessages, Message } from "@/utils/utils";
import React, { useEffect } from "react";

interface Props {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}

export default function DisplayChat({messages, setMessages}: Props) {
  useEffect(() => {
    const fetchMessages = async () => {
      setMessages(await getMessages());
    }
    
    fetchMessages()
  }, []);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("message");
    };
  }, [messages]); 
  
  return (
    <div className="bg-[#1d1c1c] border border-[#3f3b3b] rounded-md h-[80%] w-[85%] m-auto p-5">
      {messages.map((message, index) => (
        <div className="flex flex-col" key={index}>
          <p>{message.messageCreatorName}</p>
          <p>{message.messageContent}</p>
        </div>
      ))}
    </div>
  )
}