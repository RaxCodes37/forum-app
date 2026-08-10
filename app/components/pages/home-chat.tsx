import ChatForm from "./home-chat/chat-form";

export default function HomeChat() {
  return (
    <div
      id="container"
      className="m-auto w-[30%] h-180 rounded-md mt-20 flex flex-col items-center"
    >
      <h2 className="my-5 text-2xl font-bold">Global Discussion Chat</h2>

      <div className="bg-[#1d1c1c] border border-[#3f3b3b] rounded-md h-[80%] w-[85%] m-auto p-5">
        Messages will be displayed here
      </div>

      <ChatForm />
    </div>
  );
}
