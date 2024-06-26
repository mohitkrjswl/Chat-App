import Conversation from '..//sidebar/Conversation.jsx'
import useGetConversations from '../../hooks/useGetConversations.js';
import { getRandomEmoji } from '../../utils/emojis.js'
const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("CONVERSATIONS:", conversations);
  return (
    <div className="py-4 flex flex-col overflow-auto">

      {conversations.map((conversation, idx) => (
        <Conversation key={conversation._id} conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
    </div>
  )
}

export default Conversations