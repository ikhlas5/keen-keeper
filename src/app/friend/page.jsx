import Link from 'next/link';
import React from 'react';

const FriendCard = ({ friend }) => {
    // console.log(friend)
    const { id, name, picture, status, email } = friend
    
    const statusStyles = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-yellow-500 text-white",
    "on-track": "bg-green-800 text-white",
  };

    return (
        <Link href={`/friend/${id}`}>
        <div className="card bg-base-100 flex-1 shadow-sm">
            <figure>
                <img className="w-25 h-25 object-cover object-top rounded-full"
                    src={picture}
                    alt="friend" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className={`badge text-xs font-semibold px-3 py-1 rounded-full ${
          statusStyles[status] || "bg-gray-200 text-gray-700"
        }`}>{status}</div>
                </h2>
                <p>{email}</p>

            </div>
        </div>
        </Link>
    );
};

export default FriendCard;