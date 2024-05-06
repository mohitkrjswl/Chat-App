
const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="DP" />

        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hi! Where are you?</div>
      <div className="chat-footer text-gray-900 opacity-60 text-xs flex gap-1 items-center">18:45</div>
    </div>
  );
};

export default Message;