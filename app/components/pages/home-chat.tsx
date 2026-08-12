"use client"

import { Message } from "@/utils/utils";
import ChatForm from "./home-chat/chat-form";
import DisplayChat from "./home-chat/display-chat";
import { useState } from "react";

interface Props {
  userName: string;
  userId: string;
}

export default function HomeChat({userName, userId}: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  return (
    <div
      id="container"
      className="m-auto w-[30%] h-180 rounded-md mt-20 flex flex-col items-center"
    >
      <h2 className="my-5 text-2xl font-bold">Global Discussion Chat</h2>

      <DisplayChat messages={messages} setMessages={setMessages}/>

      <ChatForm newMessage={newMessage} setNewMessage={setNewMessage} userName={userName} userId={userId} messages={messages} setMessages={setMessages}/>
    </div>
  );
}
