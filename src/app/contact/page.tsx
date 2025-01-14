import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { PiArrowBendRightDownBold } from "react-icons/pi";
const contact = () => {
  return (
    <div>
      <section>
        <div
          className="w-[414px] h-[1616px] xs:w-[1440px] xs:h-[882px] bg-[#FFFFFF] xs:bg-cover xs:bg-center"
          style={{ backgroundImage: "url('/background (1).png')" }}
        >
          <nav className="w-[414px] h-[532px] xs:w-[1322px] xs:h-[91px] xs:ml-[59px] xs:flex xs:items-center xs:justify-around grid grid-cols-1 bg-[#F6F6F6]">
            <div className="w-[187px] h-[58px] xs:mt-[17px] ml-[35px] xs:ml-[0px] mt-[23px]">
              <h3 className="text-[#252B42] text-[24px] font-bold">Bandage</h3>
            </div>
            <div className="w-[815px] h-[58px] xs:mt-[16px] flex flex-row">
              <div className="w-[123px] h-[270px]  ml-[145px] xs:ml-[0px] gap-[30px] xs:w-[275px] xs:h-[24px] xs:mt-[17px] text-[30px] xs:text-[14px] font-normal text-[#737373] xs:font-bold xs:gap-[21px] xs:flex grid grid-cols-1">
                <div className="w-[43px] h-[24px]">
                  <Link href="/">Home</Link>
                </div>
                <div className="w-[59px] h-[24px]">
                  <Link href="/shop1">Product</Link>
                </div>
                <div className="w-[52px] h-[24px]">
                  <Link href="/pricing">Pricing</Link>
                </div>
                <div className="w-[58px] h-[24px]">
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
              <div className="hidden xs:w-[300px] xs:h-[52px] xs:ml-[240px] xs:gap-[45px] xs:flex xs:items-center">
                <div className="w-[41px] h-[22px]">
                  <button className="text-[14px] font-bold text-[#23A6F0]">
                    Login
                  </button>
                </div>
                <div className="w-[214px] h-[52px]">
                  <button className="w-[214px] h-[52px] rounded-[5px] py-[15px] px-[25px] bg-[#23A6F0] gap-[15px] text-[14px] text-[#FFFFFF] font-bold flex items-center">
                    Become a member
                    <div className="w-[12px] h-[10px] text-[#FFFFFF]">
                      <FaArrowRight />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div className="w-[418px] h-[1080px] py-[80px] xs:w-[1050px] xs:h-[742px] xs:ml-[195px] xs:py-[112px] xs:gap-[80px]">
            <div className="w-[418px] h-[1071px] gap-[41px] xs:w-[1044px] xs:h-[518px] xs:gap-[30px]">
              <div className="w-[418px] h-[590px] gap-[40px] xs:w-[599px] xs:h-[518px] xs:gap-[35px] grid grid-cols-1 xs:text-left text-center">
                <h5 className="text-[16px] text-[#252B42] font-bold">
                  CONTACT US
                </h5>
                <h1 className="text-[58px] text-[#252B42] font-bold">
                  Get in touch <br />
                  today!
                </h1>
                <h4 className="text-[20px] text-[#737373] font-normal">
                  We know how large objects will act, <br />
                  but things on a small scale
                </h4>
                <div className="w-[242px] h-[84px] text-[24px] text-[#252B42] font-bold ml-[88px] xs:ml-[0px]">
                  <h3>Phone ; +451 215 215 </h3>
                  <h3>Fax : +451 215 215</h3>
                </div>
                <div className="w-[242px] h-[50px] ml-[88px] xs:ml-[0px] p-[10px] gap-[34px] justify-items-center flex grid-cols-4">
                  <div className="w-[30px] h-[24.49px] text-[#252B42]">
                    <Link target="_blank" href="https://www.twitter.com">
                      <FaTwitter size={30} />
                    </Link>
                  </div>
                  <div className="w-[30px] h-[30px] text-[#252B42] ">
                    <Link target="_blank" href="https://www.facebook.com">
                      <ImFacebook2 size={30} />
                    </Link>
                  </div>
                  <div className="w-[30px] h-[30px] text-[#252B42] ">
                    <Link target="_blank" href="https://www.instagram.com">
                      <FaInstagram size={30} />
                    </Link>
                  </div>
                  <div className="w-[30px] h-[30px] text-[#252B42] ">
                    <Link target="_blank" href="https://www.linkedin.com">
                      <FaLinkedin size={30} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="xs:hidden w-[387px] h-[440px] ml-[15.5px]">
            <img src="technology 1.png" width={375.73} height={439.19} />
          </div>
        </div>
            </div>
          </div>
        
      </section>
      <section>
        <div className="w-[414px] h-[1531px] xs:w-[1440px] xs:h-[814px] bg-[#FAFAFA] xs:bg-[#FFFFFF]">
          <div className="w-[330px] h-[1453px] mt-[30px] ml-[42px] py-[45px] gap-[60px] xs:w-[1050px] xs:h-[841px] xs:ml-[195px] xs:py-[112px] xs:gap-[80px] grid grid-cols-1">
            <div className="w-[301px] h-[184px] xs:w-[625px] xs:h-[134px] gap-[10px] grid grid-cols-1 xs:ml-[212.5px] justify-items-center">
              <h6 className="text-[14px] text-[#252B42] font-bold">
                VISIT OUR OFFICE
              </h6>
              <h2 className="text-[40px] text-[#252B42] font-bold text-center">
                We help small businesses <br />
                with big ideas
              </h2>
            </div>
            <div className="w-[329px] h-[1119px] xs:w-[985px] xs:h-[403px] xs:flex grid grid-cols-1 gap-[30px]">
              <div className="w-[328px] h-[343px] py-[50px] px-[40px] gap-[15px] bg-[#FFFFFF] mt-[30px] grid grid-cols-1 justify-items-center">
                <BsTelephone size={72} className="text-[#23A6F0]" />
                <div className="w-[216px] h-[48px] ml-[55.5px]">
                  <h6 className="text-[14px] text-[#252B42] font-bold">
                    georgia.young@example.com
                  </h6>
                  <h6 className="text-[14px] text-[#252B42] ml-[20px] font-bold">
                    georgia.young@ple.com
                  </h6>
                </div>
                <h5 className="text-[16px] text-[#252B42] font-bold">
                  Get Support
                </h5>
                <button className="w-[189px] h-[54px] rounded-[37px] border-[1px] py-[15px] px-[36px] border-[#23A6F0] text-[#23A6F0] gap-[10px]">
                  Submit Request
                </button>
              </div>
              <div className="w-[328px] h-[403px] pt-[60px] pb-[100px] px-[40px] gap-[15px] bg-[#252B42] mt-[30px] grid grid-cols-1 justify-items-center align-middle">
                <div className="w-[72px] h-[72px]">
                  <FaMapMarkerAlt className="w-[51px] h-[67px] ml-[10.5px] text-[#23A6F0]" />
                </div>
                <div className="w-[216px] h-[48px] ml-[55.5px]">
                  <h6 className="text-[14px] text-[#FFFFFF] font-bold">
                    georgia.young@example.com
                  </h6>
                  <h6 className="text-[14px] text-[#FFFFFF] ml-[20px] font-bold">
                    georgia.young@ple.com
                  </h6>
                </div>
                <h5 className="text-[16px] text-[#FFFFFF] font-bold">
                  Get Support
                </h5>
                <button className="w-[189px] h-[54px] rounded-[37px] border-[1px] py-[15px] px-[36px] border-[#23A6F0] text-[#23A6F0] gap-[10px]">
                  Submit Request
                </button>
              </div>
              <div className="w-[328px] h-[343px] py-[50px] px-[40px] gap-[15px] bg-[#FFFFFF] mt-[30px] grid grid-cols-1 justify-items-center">
                <div className="w-[72px] h-[72px]">
                  <IoIosMail
                    size={72}
                    className=" text-[#23A6F0] mt-[9px] ml-[0.5px]"
                  />
                </div>
                <div className="w-[216px] h-[48px] ml-[55.5px]">
                  <h6 className="text-[14px] text-[#252B42] font-bold">
                    georgia.young@example.com
                  </h6>
                  <h6 className="text-[14px] text-[#252B42] ml-[20px] font-bold">
                    georgia.young@ple.com
                  </h6>
                </div>
                <h5 className="text-[16px] text-[#252B42] font-bold">
                  Get Support
                </h5>
                <button className="w-[189px] h-[54px] rounded-[37px] border-[1px] py-[15px] px-[36px] border-[#23A6F0] text-[#23A6F0] gap-[10px]">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[440px] xs:w-[1440px] xs:h-[348px] xs:bg-[#FFFFFF]">
          <div className="w-[321px] h-[440px] ml-[47px] py-[112px]  xs:w-[1050px] xs:h-[348px] xs:ml-[195px] xs:py-[80px] xs:gap-[20px] justify-items-center grid grid-cols-1">
            <PiArrowBendRightDownBold size={72} className="text-[#23A6F0]" />
            <div className="w-[321px] h-[216px] xs:w-[607px] xs:h-[188px] gap-[36px]  justify-items-center">
              <div className="w-[321px] h-[216px] gap-[30px] xs:w-[272px] xs:h-[188px] xs:gap-[16px] grid grid-cols-1 justify-items-center text-center">
                <h5 className="text-[16px] text-[#252B42] font-bold">
                  WE Can&apos;t WAIT TO MEET YOU
                </h5>
                <h1 className="text-[58px] text-[#252B42] font-bold">
                  Let&apos;s Talk
                </h1>
                <button className="w-[186px] h-[52px] rounded-[5px] py-[15px] px-[40px] gap-[10px] bg-[#23A6F0] text-[14px] text-[#FFFFFF] font-bold">
                  Try it free now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
