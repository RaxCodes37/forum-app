"use client";

import { socket } from "@/lib/socket-client";
import { Message, sendMessage } from "@/utils/utils";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

interface Props {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  userId: string;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export default function ChatForm({
  newMessage,
  setNewMessage,
  userName,
  userId,
  messages,
  setMessages,
}: Props) {
  const newMessageFunction = async (e: React.FormEvent) => {
    e.preventDefault();

    socket.emit("message", {
      messageContent: newMessage,
      messageCreatorName: userName,
    });
    setMessages((prev) => [...prev, { messageContent: newMessage, messageCreatorName: userName }]);
    await sendMessage(newMessage, userName, userId);

    setNewMessage("");
  };

  return (
    <form action="" className="py-10 w-full flex justify-center gap-3">
      <input
        type="text"
        placeholder="Be nice!"
        className="h-10 w-[74%]"
        value={newMessage}
        onChange={(e) => {
          setNewMessage(e.target.value);
        }}
      />
      <button className="px-3" onClick={newMessageFunction}>
        <FaArrowUp />
      </button>
    </form>
  );
}
