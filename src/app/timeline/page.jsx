'use client';
import TimelineCard from '@/Componets/TimelneCard/TimelineCard';
import { FriendsContext } from '@/context/FriendsContext';
import React, { useContext, useEffect, useState } from 'react';


const TimelinePage = () => {
    const { meetingFriends } = useContext(FriendsContext);
    // console.log(callFriends[0]);

    const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      setCurrentDate(now.toLocaleDateString('en-US', options));
    };
    updateDate();
    // প্রতি সেকেন্ডে আপডেট হবে যাতে রাত ১২টার পর তারিখ অটোমেটিক বদলে যায়
    const timer = setInterval(updateDate, 1000);
    return () => clearInterval(timer);
  }, []);
    
    return (
        <div className="w-full bg-[#F8FAFC] py-10 px-4 sm:px-8 my-5">
            <h1 className="text-2xl font-bold text-black mb-4">Timeline</h1>
            {
                meetingFriends.map((friend, inx) => <TimelineCard key={inx} friend={friend} currentDate={currentDate} />)
            }
        </div >
    );
};

export default TimelinePage;