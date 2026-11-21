'use client';
// import { useParams } from 'next/navigation';
import { FriendsContext } from '@/context/FriendsContext';
import React, { useContext } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { FaArchive, FaVideo } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { MdDeleteForever } from 'react-icons/md';
const DtailsCard = ({ friend }) => {
  const{handleCheckInFriend,handleDeleteFriend}=useContext(FriendsContext)
    // const {friendId}=useParams()
    const { id, name, picture, status, email,goal,next_due_date,bio,tags,days_since_contact } = friend;
    return (
        <div className="min-h-screen bg-[#F8FAFC] py-10 px-4 sm:px-8 my-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Profile Card & Action Buttons */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          
          {/* Main Profile Card */}
          <div className="bg-white rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center mb-1">
            <img
              src={picture}
              alt={name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            
            <h2 className="text-lg font-bold text-[#1E293B] mb-2">
              {name}
            </h2>

            {/* Overdue Pill */}
            <span className="bg-[#EF4444] text-white text-xs font-semibold px-3.5 py-1 rounded-full mb-2">
              {status}
            </span>

            {/* Category Pill */}
            <span className="bg-[#DCFCE7] text-[#166534] text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
              {tags.map(tag=>(<span key={tag}>{tag}</span>))}
            </span>

            {/* Bio / Note */}
            <p className="text-sm italic text-[#64748B] mb-2">
              {bio}
            </p>

            {/* Preferred Contact */}
            <p className="text-xs text-[#64748B]">
              Preferred: {email}
            </p>
          </div>

          {/* Snooze 2 Weeks Button */}
          <button className="w-full bg-white hover:bg-gray-50 text-[#1E293B] font-medium text-sm py-3 px-4 rounded-xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-center gap-2 transition-colors">
            <svg className="w-4 h-4 text-[#1E293B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span>Snooze 2 Weeks</span>
          </button>

          {/* Archive Button */}
          <button className="w-full bg-white hover:bg-gray-50 text-[#1E293B] font-medium text-sm py-3 px-4 rounded-xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-center gap-2 transition-colors">
          <FaArchive/>
            <span>Archive</span>
          </button>

          {/* Delete Button */}
            <button
              onClick={() => handleDeleteFriend(id)}
              className="w-full bg-white hover:bg-red-50/50 text-[#EF4444] font-medium text-sm py-3 px-4 rounded-xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-center gap-2 transition-colors">
            <MdDeleteForever className="text-[#EF4444] text-xl" />
            <span>Delete</span>
          </button>

        </div>

        {/* Right Column: Stats, Relationship Goal & Quick Check-In */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Top 3 Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl py-7 px-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-center text-center">
                            <span className="text-3xl font-bold text-[#1E463A] mb-1.5">{ days_since_contact}</span>
              <span className="text-xs font-medium text-[#64748B]">Days Since Contact</span>
            </div>

            <div className="bg-white rounded-xl py-7 px-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-center text-center">
                            <span className="text-3xl font-bold text-[#1E463A] mb-1.5">{goal}</span>
              <span className="text-xs font-medium text-[#64748B]">Goal (Days)</span>
            </div>

            <div className="bg-white rounded-xl py-7 px-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-center text-center">
                            <span className="text-2xl font-bold text-[#1E463A] mb-2">{next_due_date}</span>
              <span className="text-xs font-medium text-[#64748B]">Next Due</span>
            </div>
          </div>

          {/* Relationship Goal Card */}
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start justify-between">
            <div>
              <h3 className="text-base font-bold text-[#1E463A] mb-3">
                Relationship Goal
              </h3>
              <p className="text-sm text-[#64748B]">
                Connect every <span className="font-bold text-[#1E293B]">30 days</span>
              </p>
            </div>

            <button className="bg-[#F8FAFC] hover:bg-gray-100 text-[#1E293B] text-xs font-medium px-3.5 py-1.5 rounded-lg border border-gray-200 transition-colors">
              Edit
            </button>
          </div>

          {/* Quick Check-In Card */}
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100">
            <h3 className="text-base font-bold text-[#1E463A] mb-4">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Call */}
                <button
                  onClick={()=>handleCheckInFriend(friend,"call")}
                  className="bg-[#F8FAFC] hover:bg-gray-100/80 border border-gray-200/70 rounded-xl py-5 px-4 flex flex-col items-center justify-center gap-2 transition-colors">
                <IoCall className="w-5 h-5 text-[#1E293B]" />
                <span className="text-xs font-medium text-[#1E293B]">Call</span>
              </button>

              {/* Text */}
                <button
                  onClick={()=>handleCheckInFriend(friend,"text")}
                  className="bg-[#F8FAFC] hover:bg-gray-100/80 border border-gray-200/70 rounded-xl py-5 px-4 flex flex-col items-center justify-center gap-2 transition-colors">
                <AiOutlineMessage className="w-5 h-5 text-[#1E293B]" />
                <span className="text-xs font-medium text-[#1E293B]">Text</span>
              </button>

              {/* Video */}
                <button
                  onClick={()=>handleCheckInFriend(friend,"video")}
                  className="bg-[#F8FAFC] hover:bg-gray-100/80 border border-gray-200/70 rounded-xl py-5 px-4 flex flex-col items-center justify-center gap-2 transition-colors">
               <FaVideo className="w-5 h-5 text-[#1E293B]" />
                <span className="text-xs font-medium text-[#1E293B]">Video</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
    );
};

export default DtailsCard;