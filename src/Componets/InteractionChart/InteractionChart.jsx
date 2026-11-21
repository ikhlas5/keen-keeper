
"use client";
import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { FriendsContext } from "@/context/FriendsContext";
const InteractionChart = () => {
    const { meetingFriends } = useContext(FriendsContext);
    const textCount = meetingFriends.filter((f) => f.actionType === "text").length;
    const callCount = meetingFriends.filter((f) => f.actionType === "call").length;
    const videoCount = meetingFriends.filter((f) => f.actionType === "video").length;
    const data = [
    { name: "Text", value: textCount, color: "#7C3AED" },  
    { name: "Call", value: callCount, color: "#214637" },  
    { name: "Video", value: videoCount, color: "#34A853" }, 
    ];
    return (
       <div className="bg-white rounded-xl p-6 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 w-full">
     
      <h3 className="text-lg font-bold text-[#1E463A] mb-6">
        By Interaction Type
      </h3>
      
      {meetingFriends.length === 0 ? (
        <div className="h-64 flex flex-col items-center justify-center text-center text-sm text-[#64748B]">
          <p>No interactions recorded yet.</p>
          <p className="text-xs mt-1">Click Call, Text, or Video on a friends profile to see stats.</p>
        </div>
      ) : (
        <>
          {/* Donut Chart Container */}
          <div className="w-full h-64 flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={68}
                  outerRadius={88}
                  startAngle={155}
                  endAngle={-205}
                  paddingAngle={6}
                  cornerRadius={8}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Custom Legend (নাম ও সাথে সংখ্যা সহ) */}
          <div className="flex items-center justify-center gap-6 mt-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-xs sm:text-sm font-medium text-[#64748B]">
                  {item.name} ({item.value})
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
    );
};

export default InteractionChart;