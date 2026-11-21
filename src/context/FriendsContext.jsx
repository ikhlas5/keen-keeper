"use client";
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
// import initialFriends from "../../public/data.json"; 

 export const FriendsContext = createContext();


export function FriendsProvider({ children }) {
    const [meetingFriends, setmeetingFriends] = useState([]);
    const[deleteFriend,setDeleteFriend]=useState([])
    
    const handleCheckInFriend = (currentFriend, actionType) => {
        // console.log(currentFriend);
         const isExistFriend = meetingFriends.find(
            (f) => f.id === currentFriend.id,
        );

        if (isExistFriend) {
            toast.error("The friend is already in the call list");
        } else {
            setmeetingFriends([...meetingFriends, { ...currentFriend, actionType }]);
            toast.success(`${currentFriend.name} is added to the call list`);
        }
    }
    

    const handleDeleteFriend = (id) => {
      console.log(id)
    setDeleteFriend((prev) => prev.filter((item) => item.id != id));
      };
    const data = {
        meetingFriends,
        handleCheckInFriend,
        handleDeleteFriend,
        deleteFriend,
    }

  return (
    <FriendsContext.Provider value={data}>
      {children}
    </FriendsContext.Provider>
  );
}