import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { MdPlayArrow } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter, FaInstagram } from "react-icons/fa";
const about = () => {
  const teamData = [
    {
      id: 1,
      name: "Username",
      description: "Profession",
      image: "/team-1-user-1.png",
    },
    {
      id: 2,
      name: "Username",
      description: "Profession",
      image: "/team-1-user-2.png",
    },
    {
      id: 3,
      name: "Username",
      description: "Profession",
      image: "/team-1-user-3.png",
    },
  ];
  return (
    <div>
      <section>
        <div className="w-[414px] h-[1616px] xs:w-[1440px] xs:h-[729px] bg-[#FFFFFF]">
          <div
            className="w-[387px] h-[1616px] xs:w-[1440px] xs:h-[700px]  bg-cover bg-center"
            style={{ backgroundImage: "url(/hero-2-bg-shape-cover.png)" }}
          >
            <nav className="hidden xs:w-[1322px] xs:h-[91px] xs:ml-[59px] xs:flex xs:items-center xs:justify-around">
              <div className="w-[187px] h-[58px] mt-[17px] ml-[136px]">
                <h3 className="text-[#252B42] text-[24px] font-bold">
                  Bandage
                </h3>
              </div>
              <div className="w-[815px] h-[58px] mt-[16px] flex flex-row">
                <div className="w-[275px] h-[24px] mt-[17px] text-[14px] text-[#737373] font-bold gap-[21px] flex">
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
                <div className="w-[300px] h-[52px] ml-[240px] gap-[45px] flex items-center">
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
            <div className="w-[418px] h-[1080px] py-[80px] xs:w-[1050px] xs:h-[545px] xs:mt-[104px] xs:ml-[195px] xs:py-[112px] xs:gap-[80px]">
              <div className="w-[418px] h-[1071px] gap-[41px] xs:w-[1044px] xs:h-[321px] xs:gap-[30px] xs:flex">
                <div className="w-[418px] h-[590px]  xs:w-[599px] xs:h-[321px] xs:gap-[35px] grid grid-cols-1 justify-items-center">
                  <h5 className="hidden xs:text-[16px] text-[#252B42] font-bold">
                    ABOUT COMPANY
                  </h5>
                  <h1 className="text-[40px] xs:text-[58px] text-[#252B42] font-bold">
                    ABOUT US
                  </h1>
                  <h4 className="text-[20px] text-[#737373] font-bold">
                    We know how large objects will act,
                    <br />
                    but things on a small scale
                  </h4>
                  <div className="w-[195px] h-[52px] gap-[10px] flex">
                    <button className="w-[195px] h-[52px] text-[14px] text-[#FFFFFF] font-bold rounded-[5px] py-[15px] px-[40px] gap-[10px] bg-[#23A6F0]">
                      Get Quote Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[500px] xs:w-[1440] xs:h-[236px] bg-[#FFFFFF] py-[24px]">
          <div className="w-[381px] h-[500px] xs:w-[1018px] xs:h-[188px] xs:gap-[60px] xs:ml-[211px] ml-[16.5px] xs:flex  xs:grid-cols-2 grid-cols-1 justify-items-center py-[80px] xs:py-[0px] xs:items-center">
            <div className="w-[381px] h-[220px] xs:w-[394px] xs:h-[188px] py-[24px] gap-[80px]">
              <div className="w-[381px] h-[172px] xs:w-[394px] xs:h-[140px] gap-[24px] grid grid-cols-1  text-center xs:text-left">
                <p className="text-[14px] text-[#E74040] font-normal">
                  Problems trying
                </p>
                <h3 className="text-[24px] text-[#252B42] font-bold">
                  Met minim Mollie non desert
                  <br /> Alamo est sit cliquey dolor do
                  <br /> met sent.
                </h3>
              </div>
            </div>
            <div className="w-[306px] h-[60px] xs:w-[529px] xs:h-[40px] xs:gap-[49px] gap-[38px] justify-items-center ">
              <p className="text-[14px] text-[#737373] font-normal">
                Problems trying to resolve the conflict between the two major
                realms of
                <br /> Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[1006px] py-[100px] xs:py-[0px] xs:w-[1440px] xs:h-[264px] bg-[#FFFFFF]">
          <div className="w-[329px] h-[806px] ml-[42.5px] xs:w-[1050] xs:h-[264px] xs:ml-[195px] py-[80px] gap-[50px]">
            <div className="w-[241px] h-[716px] gap-[100px] xs:w-[1049px] xs:h-[104px] xs:gap-[30px] xs:flex grid grid-cols-1 text-center">
              <div className="w-[238px] h-[104px] grid grid-cols-1 text-center">
                <h1 className="text-[58px] text-[#252B42] font-bold">15K</h1>
                <h5 className="text-[16px] text-[#737373] font-bold">
                  Happy Customers
                </h5>
              </div>
              <div className="w-[241px] h-[104px]">
                <h1 className="text-[58px] text-[#252B42] font-bold">150K</h1>
                <h5 className="text-[16px] text-[#737373] font-bold">
                  Monthly Visitors
                </h5>
              </div>
              <div className="w-[240px] h-[104px]">
                <h1 className="text-[58px] text-[#252B42] font-bold">15</h1>
                <h5 className="text-[16px] text-[#737373] font-bold">
                  Countries Worldwide
                </h5>
              </div>
              <div className="w-[241px] h-[104px]">
                <h1 className="text-[58px] text-[#252B42] font-bold">100+</h1>
                <h5 className="text-[16px] text-[#737373] font-bold">
                  Top Partners
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[477px] xs:w-[1440px] xs:h-[764px] bg-[#FFFFFF]">
          <div className="w-[307px] h-[316px] mt-[81px] ml-[54px] xs:mt-[0px] xs:w-[1050px] xs:h-[764px] xs:ml-[195px]">
            <div
              className="w-[307px] h-[316px] rounded-[12.3px] xs:w-[989px] xs:h-[540px] xs:mt-[112px] xs:ml-[31px] xs:rounded-[20px] bg-[#FFFFFF] bg-cover bg-center"
              style={{ backgroundImage: "url('/media bg-cover.png')" }}
            >
              <button className="w-[56.95px] h-[56.95px] mt-[129.71px]  ml-[124.1px] rounded-[45.26px] pl-[16px] xs:w-[92.6px] xs:h-[92.6px] xs:mt-[224px] xs:ml-[448px] xs:rounded-[73.6px] bg-[#23A6F0] xs:py-[34.8px] xs:px-[36.8px]">
                <MdPlayArrow size={25} className="text-[#FFFFFF]" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[1627px] xs:w-[1440px] xs:h-[826px] bg-[#FFFFFF]">
          <div className="w-[361px] h-[1609px] ml-[26px] py-[30px] xs:w-[1050px] xs:h-[819px] xs:ml-[195px] xs:py-[112px] xs:gap-[112px] grid grid-cols-1 justify-items-center">
            <div className="w-[302px] h-[190px] xs:w-[607px] xs:h-[100px] gap-[10px] xs:ml-[221.5px] text-center">
              <h2 className="text-[#252B42] text-[40px] font-bold">
                Meet Our Team
              </h2>
              <p className="text-[14px] text-[#737373] font-normal">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
            <div className="w-[329px] h-[1269px] xs:w-[1034px] xs:h-[383px] gap-[30px] grid grid-cols-1 xs:flex xs:grid-cols-3 items-center">
              {teamData.map((team) => (
                <div
                  key={team.id}
                  className="team-card w-[316px] h-[383px] bg-[#FFFFFF] text-center"
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
        <div className="w-[414px] h-[1444px] xs:w-[1440px] xs:h-[479px] bg-[#FAFAFA]">
          <div className="w-[410px] h-[1192px] mt-[120px] xs:mt-[0px] xs:w-[1050px] xs:h-[479px] xs:ml-[195px] py-[80px] gap-[24px] grid grid-cols-1 ml-[42.5px]">
            <div className="w-[318px] h-[240px] xs:w-[864px] xs:h-[120px] gap-[30px] grid grid-cols-1 justify-items-center  text-center">
              <h2 className="text-[40px] text-[#252B42] font-bold">
                Big Companies Are Here
              </h2>
              <p className="text-[14px] text-[#737373] font-normal">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
            <div className="w-[414px] h-[952px] xs:w-[1054px] xs:h-[175px]  py-[50px] grid grid-cols-1 xs:flex justify-items-center xs:justify-around mt-[110px] xs:mt-[0px] xs:gap-[30px]">
              <div className="w-[153px] h-[50px] xs:w-[153px] xs:h-[34px]">
                <img
                  src="fa-brands-1.png"
                  className="w-[149px] h-[50px] xs:w-[103px] xs:h-[34px] text-[#737373]"
                />
              </div>
              <div className="w-[146px] h-[99px] xs:w-[146px] xs:h-[59px]">
                <img
                  src="fa-brands-2.png"
                  className="w-[139px] h-[99px] xs:w-[83px] xs:h-[59px] ml-[31.5px]"
                />
              </div>
              <div className="w-[152px] h-[109px] xs:w-[152px] xs:h-[75px]">
                <img
                  src="fa-brands-3.png"
                  className="w-[149px] h-[109px] xs:w-[102px] xs:h-[75px] ml-[25px]"
                />
              </div>
              <div className="w-[149px] h-[60px] xs:w-[151px] xs:h-[42px]">
                <img
                  src="fa-brands-4.png"
                  className="w-[149px] h-[60px] xs:w-[103px] xs:h-[42px] ml-[24px]"
                />
              </div>
              <div className="w-[151px] h-[92px] xs:w-[151px] xs:h-[62px]">
                <img
                  src="fa-brands-5.png"
                  className="w-[153px] h-[92px] xs:w-[104px] xs:h-[62px] ml-[23.5px]"
                />
              </div>
              <div className="w-[151p] h-[142px] xs:w-[151px] xs:h-[72px]">
                <img
                  src="fa-brands-6.png"
                  className="w-[149px] h-[142px] xs:w-[76px] xs:h-[72px] ml-[37.5px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="w-[414px] h-[520px] xs:w-[1440px] xs:h-[636px] bg-[#2A7CC7] bg-cover bg-center"
          style={{ backgroundImage: "url('/background.png')" }}
        >
          <div className="w-[414px] h-[388px] mt-[60px] py-[30px] gap-[36px] xs:w-[1050px] xs:h-[636px] xs:ml-[195px] xs:py-[112px]">
            <div className="w-[414px] h-[388px] xs:w-[1050px] xs:h-[412px] xs:justify-between">
              <div className="w-[272px] h-[328px] xs:w-[438px] xs:h-[238px] gap-[24px] grid grid-cols-1 text-[#FFFFFF] text-center justify-items-center">
                <h5 className="text-[16px] font-bold">WORK WITH US</h5>
                <h2 className="text-[40px] font-bold">Now Let&apos;s grow Yours</h2>
                <p className="text-[14px] font-normal">
                  The gradual accumulation of information about atomic and{" "}
                  <br />
                  small-scale behavior during the first quarter of the 20th{" "}
                </p>
                <button className="w-[132px] h-[52px] border-[1px] rounded-[5px] border-[#FAFAFA] py-[15px] px-[40px] text-[14px] text-[#FAFAFA] font-bold">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
