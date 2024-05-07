import MessageInput from "./MessageInput.jsx";
import Messages from "../messagebox/Messages.jsx";
import useConversation from "../../zustand/useConversation.js";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext.jsx";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (<NoChatSelected />) : (
        <>
          <div className="bg-slate-600 px-4 py-2 mb-2">
            <span className="label-text text-white">To: </span>{" "}
            <span className="text-white font-semibold"> {selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}

    </div>
  )
}

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext()
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-700 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} </p>
        <p>Select a friend to start messaging</p>

        <img className="w-12 h-12" src="einbox.png" alt="img" />

      </div>
    </div>
  );
};