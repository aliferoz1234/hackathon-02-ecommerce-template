import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

const blog = () => {
  const teamData1 = [
    {
      id: 1,
      name: "Username",
      description: "Profession",
      image: "/team-1-user-4.png",
    },
    {
      id: 2,
      name: "Username",
      description: "Profession",
      image: "/team-1-user-5.png",
    },
    {
      id: 3,
      name: "Username",
      description: "Profession",
      image: "/team-1-user-6.png",
    },
  ];
  const teamData2 = [
    {
      id: 1,
      name: "Username",
      description: "Profession",
      image: "/team-1-user-7.png",
    },
    {
      id: 2,
      name: "Username",
      description: "Profession",
      image: "/team-1-user-8.png",
    },
    {
      id: 3,
      name: "Username",
      description: "Profession",
      image: "/team-1-user-9.png",
    },
  ];
  const teamData3 = [
    {
      id: 1,
      name: "Username",
      description: "Profession",
      image: "/team-1-user-10.png",
    },
    {
      id: 2,
      name: "Username",
      description: "Profession",
      image: "/team-1-user-11.png",
    },
    {
      id: 3,
      name: "Username",
      description: "Profession",
      image: "/team-1-user-12.png",
    },
  ];

  return (
    <div>
      <section>
        <div className="w-[414px] h-[869px] xs:w-[1440px] xs:h-[384px] bg-[#FFFFFF] mx-auto mb-[80px]">
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
          <div className="w-[414px] h-[200px] mt-[82px] xs:mt-[0px] xs:w-[870px] xs:h-[280px]  xs:ml-[285px] xs:py-[50px]">
            <div className="w-[414px] h-[200px] xs:w-[788px] xs:h-[180px] gap-[16px] grid grid-cols-1 justify-items-center text-center">
              <h5 className="text-[16px] text-[#737373] font-bold">
                WHAT WE DO
              </h5>
              <h1 className="text-[58px] text-[#252B42] font-bold">
                Innovation tailored for you
              </h1>
              <div className="w-[117px] h-[44px] xs:w-[134px] xs:h-[44px] py-[10px] gap-[15px] flex justify-items-center xs:ml-[40px]  ">
                <Link href="/" className="text-[14px] text-[#252B42] font-bold">
                  Home
                </Link>
                <div className="w-[8.62px] h-[16px] text-[#BDBDBD]">
                  <MdArrowForwardIos />
                </div>
                <h6 className="text-[#737373] text-[14px]">Team</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[413px] h-[800px] xs:w-[1440px] xs:h-[530px] bg-[#FFFFFF] xs:flex xs:gap-[8px] grid grid-cols-1">
        <div className="w-[413px] h-[530px] xs:w-[700px] xs:h-[530px]">
          <img src="unsplash_Lks7vei-eAg.png" alt="image" />
        </div>
        <div className="w-[413px] h-[540px] xs:w-[730px] xs:h-[530] grid grid-cols-2 xs:gap-[5px]">
          <div className="w-[204px] h-[260px] xs:w-[360px] xs:h-[260px]">
            <img src="unsplash_gMsnXqILjp4.png" alt="image" />
          </div>
          <div className="w-[204px] h-[260px] xs:w-[360px] xs:h-[260px]">
            <img src="unsplash_PSmDDeXaEWE.png" alt="image" />
          </div>
          <div className="w-[204px] h-[260px] xs:w-[360px] xs:h-[260px]">
            <img src="unsplash_1-aA2Fadydc.png" alt="image" />
          </div>
          <div className="w-[204px] h-[260px] xs:w-[360px] xs:h-[260px]">
            <img src="unsplash_mcSDtbWXUZU.png" alt="image" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[4180px] xs:w-[1440px] xs:h-[1759px] bg-[#FFFFFF] mt-[180px] xs:mt-[0px]">
          <div className="w-[361px] h-[4117px] ml-[26px] py-[30px] xs:w-[1050px] xs:h-[1759px] xs:ml-[195px] xs:py-[112px] xs:gap-[112px] grid grid-cols-1 justify-items-center">
            <div className="w-[302px] h-[100px] xs:w-[607px] xs:h-[50px] gap-[10px] xs:ml-[221.5px] text-center">
              <h2 className="text-[40px] text-[#252B42] font-bold">
                Meet Our Team
              </h2>
            </div>
            <div className="w-[329px] h-[1209px] xs:w-[1034px] xs:h-[383px] gap-[30px] grid xs:grid-cols-3 grid-cols-1">
              {teamData1.map((team) => (
                <div
                  key={team.id}
                  className="team-card w-[316px] h-[403px] xs:h-[383px] bg-[#FFFFFF] text-center"
                >
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-[316px] h-[231px] transition-transform duration-600 transform hover:scale-105"
                  />
                  <div className="w-[316px] h-[152px] p-[30px] gap-[10px] grid grid-cols-1 justify-items-center">
                    <h5 className="mt-4 text-[#252B42] text-16px font-bold">
                      {team.name}
                    </h5>
                    <h6 className="text-[14px] text-[#737373] font-bold">
                      {team.description}
                    </h6>

                    <div className="w-[112px] h-[24px] gap-[20px] flex grid-cols-3 items-center">
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
              ))}
            </div>
            <div className="w-[329px] h-[1209px] xs:w-[1034px] xs:h-[383px] gap-[30px] grid xs:grid-cols-3 grid-cols-1">
              {teamData2.map((team) => (
                <div
                  key={team.id}
                  className="team-card w-[316px] h-[403px] xs:h-[383px] bg-[#FFFFFF] text-center"
                >
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-[316px] h-[231px] transition-transform duration-600 transform hover:scale-105"
                  />
                  <div className="w-[316px] h-[152px] p-[30px] gap-[10px] grid grid-cols-1 justify-items-center">
                    <h5 className="mt-4 text-[#252B42] text-16px font-bold">
                      {team.name}
                    </h5>
                    <h6 className="text-[14px] text-[#737373] font-bold">
                      {team.description}
                    </h6>

                    <div className="w-[112px] h-[24px] gap-[20px] flex grid-cols-3 items-center">
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
              ))}
            </div>
            <div className="w-[329px] h-[1209px] xs:w-[1034px] xs:h-[383px] gap-[30px] grid xs:grid-cols-3 grid-cols-1">
              {teamData3.map((team) => (
                <div
                  key={team.id}
                  className="team-card w-[316px] h-[403px] xs:h-[383px] bg-[#FFFFFF] text-center"
                >
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-[316px] h-[231px] transition-transform duration-600 transform hover:scale-105"
                  />
                  <div className="w-[316px] h-[152px] p-[30px] gap-[10px] grid grid-cols-1 justify-items-center">
                    <h5 className="mt-4 text-[#252B42] text-16px font-bold">
                      {team.name}
                    </h5>
                    <h6 className="text-[14px] text-[#737373] font-bold">
                      {team.description}
                    </h6>

                    <div className="w-[112px] h-[24px] gap-[20px] flex grid-cols-3 items-center">
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
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[586px] xs:w-[1440px] xs:h-[442px] bg-[#FFFFFF]">
          <div className="w-[332px] h-[576px] xs:w-[1050px] xs:h-[442px] ml-[41.5px] xs:ml-[195px] xs:py-[80px] py-[112px] gap-[96px] grid grid-cols-1">
            <div className="w-[332px] h-[352px] gap-[36px] xs:w-[547px] xs:h-[282px] xs:gap-[30px] grid grid-cols-1 xs:ml-[251.5px] justify-items-center text-center">
              <h2 className="text-[40px] text-[#252B42] font-bold">
                Start your 14 days free trial
              </h2>
              <p className="text-[14px] text-[#737373] font-normal">
                Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                do met sent. RELIT official consequent.
              </p>
              <button className="w-[186px] h-[52px] rounded-[5px] py-[15px] px-[40px] bg-[#23A6F0] text-[14px] text-[#FFFFFF] font-bold">
                Try it free now
              </button>
              <div className="w-[242px] h-[50px] p-[10px] gap-[34px] justify-items-center flex grid-cols-4">
                <div className="w-[30px] h-[24.49px] text-[#55ACEE]">
                  <Link target="_blank" href="https://www.twitter.com">
                    <FaTwitter size={30} />
                  </Link>
                </div>
                <div className="w-[30px] h-[30px] text-[#395185] ">
                  <Link target="_blank" href="https://www.facebook.com">
                    <ImFacebook2 size={30} />
                  </Link>
                </div>
                <div className="w-[30px] h-[30px] text-[#000000] ">
                  <Link target="_blank" href="https://www.instagram.com">
                    <FaInstagram size={30} />
                  </Link>
                </div>
                <div className="w-[30px] h-[30px] text-[#0A66C2] ">
                  <Link target="_blank" href="https://www.linkedin.com">
                    <FaLinkedin size={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default blog;
