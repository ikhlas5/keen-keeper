import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { FaVideo } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';

const TimelineCard = ({ friend, currentDate }) => {
    return (
        <div className="p-4 ">
                                {/* Main Card Container */}
                                <div className="  bg-white border-2 border-dotted border-sky-400 rounded-md px-6 py-4 flex items-center gap-4 shadow-sm">

                                    {/* Phone Receiver Icon */}
                                    <div className="text-2xl select-none" aria-hidden="true">
                                        {friend.actionType === 'call' && <span className="text-green-500"><IoCall /></span>}
                                        {friend.actionType === 'text' && <span className="text-blue-500"><AiOutlineMessage /></span>}
                                        {friend.actionType === 'video' && <span className="text-purple-500"><FaVideo /></span>}
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col">
                                        <h2 className="text-lg leading-snug">
                                            <span className="font-medium text-[#1b3c2b]">{friend.actionType}</span>{' '}
                                            <span className="text-slate-500 font-normal">with {friend.name}</span>
                                        </h2>

                                        {/* Real-time Date */}
                                        <p className="text-sm text-slate-500 mt-0.5">
                                            {currentDate}
                                        </p>
                                    </div>

                                </div>
                            </div>
    );
};

export default TimelineCard;