import React from 'react';
import friendsData from '../../../../public/data.json';
import DtailsCard from '@/Componets/DtailsCard/DtailsCard';

const FriendDetails = async ({ params }) => {
    const { friendId } = await params;
    const friend = friendsData.find((f) => f.id == friendId);
    // console.log(friend);
    return (
        <div>
            <DtailsCard friend={friend} />
        </div>
    );
};

export default FriendDetails;