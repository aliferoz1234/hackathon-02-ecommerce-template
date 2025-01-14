import React from "react";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io5";
import {
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-[414px] h-[1342px] xs:w-[1440px] xs:h-[488px] bg-[#FFFFFF] xs:mt-[120px]">
      <div className="w-[414px] h-[173px] xs:w-[1440px] xs:h-[142px] bg-[#FAFAFA]">
        <div className="w-[414px] h-[173px] xs:w-[1050px] xs:h-[138px] xs:ml-[195px] ml-[46px] pt-[40px] pb-[40px]">
          <div className="w-[236px] h-[58px] xs:w-[1049.5px] xs:h-[58px] gap-[577.5px] grid-cols-1 xs:flex items-center ">
            <div className="w-[236px] h-[58px] gap-[10px]">
              <div className="w-[187px] h-[58px]">
                <div className="w-[108] h-[32px] mt-[13px]">
                  <h3 className="text-[#252B42] text-[24px] weight-700 font-bold">
                    Bandage
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-[112px] h-[24px] gap-[20px] flex">
              <Link target="_blank" href="https://www.facebook.com">
                <IoLogoFacebook className=" text-[#23A6F0] w-[23px] h-[23px] " />
              </Link>
              <Link target="_blank" href="https://www.intagram.com">
                <FaInstagram className=" text-[#23A6F0] w-[22px] h-[22px]" />
              </Link>
              <Link target="_blank" href="https://www.twitter.com">
                <FaTwitter className=" text-[#23A6F0] w-[22px] h-[18px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[414px] h-[1071px] xs:w-[1440px] xs:h-[272px] xs:mt-[0px] bg-[#FFFFFF]">
        <div className="w-[321px] h-[1071px] xs:w-[1050px] xs:h-[270px] xs:ml-[195px] ml-[46px] xs:pt[50px] xs:pb-[50px] pt-[70px] pb-[70px]">
          <div className="w-[321px] h-[931px] xs:w-[1041px] xs:h-[170px] gap-[30px] grid-cols-1 xs:flex">
            <div className="w-[148px] h-[170px] gap-[20px]">
              <h5 className="w-[115] h-[24] text-[#252B42] text-[16px] weight-700 font-bold">
                Company info
              </h5>
              <ul className="text-[14px] text-[#737373] mt-[20px] font-bold">
                <li>
                  <Link target="_blank" href="/about">
                    About us
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link target="_blank" href="/carrier">
                    Career
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link target="_blank" href="/">
                    We are hiring
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link target="_blank" href="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[152px] h-[170px] gap-[20px]">
              <h5 className="w-[45px] h-[24px] text-[#252B42] text-[16px] font-bold">
                Legal
              </h5>
              <ul className="text-[14px] text-[#737373] mt-[20px] font-bold">
                <li>
                  <Link target="_blank" href="/about">
                    About us
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link target="_blank" href="/carrier">
                    Career
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link target="_blank" href="/hiring">
                    We are hiring
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link target="_blank" href="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[148px] h-[170px] gap-[20px]">
              <h5 className="w-[72px] h-[24px] text-[#252B42] text-[16px] font-bold">
                Features
              </h5>
              <ul className="text-[14px] text-[#737373] mt-[20px] font-bold">
                <li>
                  <Link target="_blank" href="/">
                    Business Marketting
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link target="_blank" href="/user">
                    User Analytic
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link target="_blank" href="/chat">
                    Live Chat
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link target="_blank" href="/support">
                    Unlimited Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[152px] h-[170px] gap-[20px]">
              <h5 className="w-[86px] h-[24px] text-[#252B42] text-[16px] font-bold">
                Resources
              </h5>
              <ul className="text-[14px] text-[#737373] mt-[20px] font-bold">
                <li>
                  <Link target="_blank" href="/android">
                    IOS & Android
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link target="_blank" href="/demo">
                    Watch & Demo
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link target="_blank" href="/customers">
                    Customers
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link target="_blank" href="/api">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[321px] h-[131px] gap-[20px]">
              <h5 className="w-[103px] h-[24px] text-[#252B42] text-[16px] font-bold">
                Get In Touch
              </h5>
              <form className="w-[321px] h-[58px] mt-[20px]">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-[204px] h-[58px] border-[1px] rounded-[5px] border-[#E6E6E6] bg-[#F9F9F9]"
                />
                <button className="w-[117px] h-[58px] border-[1px] rounded-[5px] border-[#E6E6E6]  bg-[#23A6F0] text-[14px] text-[#FFFFFF] weight-400  ">
                  Subscribe
                </button>
              </form>
              <p className="w-[155px] h-[28px] mt-[5px] ml-[2px] text-[#737373] text-[12px]">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
        <div className="w-[414px] h-[98px] xs:w-[1440px] xs:h-[74px] bg-[#FAFAFA] ">
          <div className="w-[413px] h-[48px] xs:w-[1050px] xs:h-[74px] xs:ml-[195px] xs:pt-[25px] xs:pb-[25px] justify-items-center text-center">
            <h6 className="w-[193px] h-[48px] xs:w-[336] xs:h-[24px] text-[14px] text-[#737373] font-bold">
              Made With Love By Finland All Right Reserved{" "}
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
