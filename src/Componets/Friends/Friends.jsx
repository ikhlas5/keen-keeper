
import React from 'react';
import data from '../../../public/data.json';
import FriendCard from '@/app/friend/page';
const Friends = async () => {
    // const res = await fetch('/public/data.json');
    // const data = await res.json();
    // console.log(data);
    return (
        <div>
            <h1>My Friends</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 ">
                {data.map((friend) => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    );
};

export default Friends;