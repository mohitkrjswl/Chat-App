import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { toast } from 'react-hot-toast';
import useConversation from "../../zustand/useConversation";
import useGetConvesations from "../../zustand/useGetConvesations";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConvesations()


  const handleSbumit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('Serach term must be atleast 3 characters long')
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
    if (conversation) {
      setSelectedConversation(conversation)
      setSearch("");
    } else toast.error('No such user found!')
  }
  return (
    <form onSubmit={handleSbumit} className="flex items-center gap-2">
      <input type="text" placeholder="Search.." className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle border-none bg-sky-500 text-white"><IoSearchSharp className="w-6 h-6 outline-none" />

      </button>
    </form>
  );
};

export default SearchInput;