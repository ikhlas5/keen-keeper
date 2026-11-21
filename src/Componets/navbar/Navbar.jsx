'use client'
import React from 'react';
import logo from '../../assets/logo-xl.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdAccessTime, MdHome } from 'react-icons/md';
import { FaChartLine } from 'react-icons/fa';
// import Image from 'next/image';
const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                {/* <Image src={logo} alt="Logo" width={50} height={50} href="/" className="btn btn-ghost text-lg text-black" /> */}
                <Link href='/' > <button className="btn btn-ghost text-lg text-black font-bold">Keen<span className=" text-[#244D3F]">Keeper</span></button></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                    <Link
                        href="/home"
                        className={`text-lg font-semibold mr-1 flex items-center gap-1 ${pathname === "/home" ? "bg-[#244D3F] text-amber-50"  : ""
                            }`}
                    >
                        <MdHome /> Home
                    </Link>
                    </li>
                    <li>
                        <Link href='/timeline'
                            className={`text-lg font-semibold mr-1 flex items-center gap-1 ${pathname === "/timeline" ? "bg-[#244D3F] text-amber-50" : ""
                            }`}
                        ><MdAccessTime /> Timeline</Link>
                    </li>
                    <li>
                        <Link href='/stats'
                            className={`text-lg font-semibold mr-1 flex items-center gap-1 ${pathname === "/stats" ? "bg-[#244D3F] text-amber-50" : ""
                            }`}
                        ><FaChartLine /> Stats</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;