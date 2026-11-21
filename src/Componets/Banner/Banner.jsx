
import React from 'react';
import data from '../../../public/data.json';
const Banner = async() => {
   
    return (
        <>
            <div className='flex flex-col items-center justify-center space-y-2 mt-10'>
                <h1 className='text-5xl font-bold  '>Friends to keep close in your life</h1>
                <p className='text-lg text-gray-600'>our personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</p>
                <button className="btn bg-[#244D3F] text-amber-50">Add a friend</button>
            </div>

            {/* counting card */}
            <div className="w-full  py-8 px-4 sm:px-8 ">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    {/* Card 1 */}
                    <div className="bg-white rounded-xl py-8 px-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100/80 flex flex-col items-center justify-center text-center">
                        <span className="text-3xl font-bold text-[#1E463A] mb-2">{data.length}</span>
                        <span className="text-sm font-medium text-[#64748B]">Total Friends</span>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl py-8 px-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100/80 flex flex-col items-center justify-center text-center">
                        <span className="text-3xl font-bold text-[#1E463A] mb-2">{data.filter(friend => friend.status === 'on-track').length}</span>
                        <span className="text-sm font-medium text-[#64748B]">On Track</span>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl py-8 px-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100/80 flex flex-col items-center justify-center text-center">
                        <span className="text-3xl font-bold text-[#1E463A] mb-2">{data.filter(friend => friend.status === 'almost due').length}</span>
                        <span className="text-sm font-medium text-[#64748B]">Need Attention</span>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-xl py-8 px-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100/80 flex flex-col items-center justify-center text-center">
                        <span className="text-3xl font-bold text-[#1E463A] mb-2">12</span>
                        <span className="text-sm font-medium text-[#64748B]">Interactions This Month</span>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Banner;