"use client"
import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { CgSearch } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  // const[open, setOpen]=useState (false);
  const[showMenu, setShowMenu]=useState (false);

  return (
    <header>
      <nav className="bg-[#252B42] w-[1439px] h-[58px] grid-cols-4 text-[14px] text-[#FFFFFF] weight-[700] font-bold items-center hidden xs:flex justify-around">
        <div className="w-[415px] h-[46px] gap-[10px] flex">
          <div className="w-[145px] h-[44px] p-[10px] gap[5px] flex items-center space-x-1">
            <BsTelephone className="w-[16px] h-[16px] gap[5px]" />
            <h6 className="w-[104px] h-[24x] text-[14px]">(225) 555-0118</h6>
          </div>
          <div className="w-[260px] h-[44px] p-[10px] gap-[5px] flex space-x-1">
            <a
              href="mailto:michelle.rivera@example.com"
              className="flex items-center gap-[5px]"
            >
              <TfiEmail className="w-[16px] h-[12px]" />
              <h6>michelle.rivera@example.com</h6>
            </a>
          </div>
        </div>
        <div className="w-[332px] h-[44px] p-[10px] gap-[10px] items-center">
          <h6 className="text-[14px] text-[#FFFFFF] weight-700">
            Follow us and get a chance to win 80% off
          </h6>
        </div>
        <div className="flex space-x-2">
          <h6>Follow us :</h6>
          <Link target="_blank" href="https://www.intagram.com">
            <FaInstagram className=" text-white w-[26px] h-[26px]  p-[5px] gap-[10px]" />
          </Link>
          <Link target="_blank" href="https://www.youtube.com">
            <FaYoutube className=" text-white w-[26px] h-[26px] p-[5px] gap-[10px]" />
          </Link>
          <Link target="_blank" href="https://www.facebook.com">
            <FaFacebookF className=" text-[#252B42] w-[26px] h-[26px]  p-[5px] gap-[10px] rounded-full bg-white" />
          </Link>
          <Link target="_blank" href="https://www.twitter.com">
            <FaTwitter className=" text-white w-[26px] h-[26px]  p-[5px] gap-[10px]" />
          </Link>
        </div>
      </nav>
      <nav className="w-[414px] h-[700px] xs:w-[1437px] xs:h-[58px] mt-[20px]  grid-cols-1 xs:flex justify-center items-center align-middle bg-white mx-auto">
        <div className="w-[187px] h-[58px] ml-[72px] mt-[23px]">
          <h3 className="w-[108px] h-[32px]  text-[#252B42] text-[24px] font-bold">
            Bandage
          </h3>
        </div>
        <div className="w-[1155px] h-[58px] ml-[145px] xs:ml-[265px] xs:flex justify-start align-middle grid grid-cols-1 ">
          <div className="w-[123px] h-[400px] xs:w-[361px] xs:h-[25px] xs:gap-[15px]  mt-[16.5px] text-[#737373] xs:text-[14px] text-[30px]  font-bold  grid grid-cols-1 xs:flex">
            <div className="w-[43px] h-[24px] font-bold">
              <Link href="/">Home</Link>
            </div>
            <div className="relative cursor-pointer" onClick={()=>setShowMenu(!showMenu)}>
            <div className="w-[63px] h-[24px]  flex">
              <div className="w-[38px] h-[28px] font-medium">
                <Link href="/shop1">Shop</Link>
              </div>
              <RiArrowDropDownLine size={30} className="text-[#252B42]" />
            </div>
            
            {showMenu && (
              <div className="absolute w-[46px] h-[60px] font-medium bg-zinc-150 grid grid-cols-1 text-center">
              <Link href="/shop1" className="hover:text-black">Shop1</Link>
              <Link href="/shop2" className="hover:text-black">Shop2</Link>
              </div>
            )}
            </div>
            <div className="w-[45px] h-[24px] font-bold">
              <Link href="/about">About</Link>
            </div>
            <div className="w-[33px] h-[24px] font-bold">
              <Link href="/blog">Blog</Link>
            </div>
            <div className="w-[58px] h-[24px] font-bold">
              <Link href="/contact">Contact</Link>
            </div>
            <div className="w-[44px] h-[24px] font-bold">
              <Link href="/pages">Pages</Link>
            </div>
          </div>
          <div className="w-[324px] h-[54px] xs:ml-[350px] ml-[px] mt-[18px] grid-cols-1 xs:flex justify-around items-center align-middle text-[#23A6F0] leading-tight">
            <div className="w-[166px] h-[54px] flex gap-1">
              <IoPersonOutline className="w-[12px] h-[12px] " />
              <div className="w-[119px] h-[24px] font-bold text-[14px]">
                <Link href="/pages">Login / Register</Link> 
              </div>
            </div>
            <div className="w-[46px] h-[46]">
              <CgSearch className="w-[15px] h-[15px] " />
            </div>
            <div className="w-[56px] h-[46px] flex">
              <BsCart className="w-[15px] h-[15px]" />
              <p className="w-[5px] h-[16px] text-[12px] weight-400 ">1</p>
            </div>
            <div className="w-[56px] h-[46px] flex">
              <IoMdHeartEmpty className="w-[16px] h-[15px]" />
              <p className="w-[5px] h-[16px] text-[12px] weight-400 ">1</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
