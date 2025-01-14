import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineArrowForwardIos } from "react-icons/md"
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

const Pricing = () => {
  return (
    <div>
      <section>
        <div className="w-[414px] h-[4538px] xs:w-[1440px] xs:h-[1600px] bg-[#FAFAFA]">
          <div className="xs:w-[1050px] xs:h-[1600px] py-[45px] xs:py-[112px] gap-[48px] xs:grid grid-cols-1">
            <div className="w-[1440px] h-[384px] bg-[#FFFFFF]">
              <div className="w-[1440px] h-[352px] bg-[#FFFFFF]">
                <nav className="hidden xs:w-[1322px] xs:h-[91px] xs:ml-[59px] xs:flex xs:items-center xs:justify-around">
                  <div className="w-[187px] h-[58px] mt-[17px] ">
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
                <section>
                  <div className="w-[414px] h-[150px] xs:w-[870px] xs:h-[280px] xs:ml-[285px] xs:py-[50px]">
                    <div className="w-[414px] h-[150px] gap-[30px] xs:w-[427px] xs:h-[180px] xs:gap-[16px] justify-items-center xs:ml-[221.5px]">
                      <h5 className="text-[16px] text-[#737373] font-bold">
                        PRICING
                      </h5>
                      <h1 className="text-[58px] text-[#252B42] font-bold">
                        Simple Pricing
                      </h1>
                      <div className="w-[117px] h-[44px] xs:w-[134px] xs:h-[44px] py-[10px] gap-[15px] flex justify-items-center ml-[297px] xs:ml-[0px] ">
                        <Link
                          href="/"
                          className="text-[14px] text-[#252B42] font-bold"
                        >
                          Home
                        </Link>
                        <div className="w-[8.62px] h-[16px] text-[#BDBDBD]">
                          <MdArrowForwardIos />
                        </div>
                        <h6 className="text-[#737373] text-[14px]">Pricing</h6>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="w-[301px] h-[140px] ml-[56.5px] xs:w-[625px] xs:h-[100px] gap-[10px] xs:ml-[403.5px] justify-items-center text-center">
                    <h2 className="text-[40px] text-[#252B42] font-bold">
                      Pricing
                    </h2>
                    <p className="text-[14px] text-[#737373] font-normal">
                      Problems trying to resolve the conflict between <br />
                      the two major realms of Classical physics: Newtonian
                      mechanics{" "}
                    </p>
                  </div>
                </section>
                <section>
                  <div className="w-[311px] h-[44px] gap-[16px] ml-[56.5px] xs:ml-[564.5px] mt-[40px] grid grid-cols-2 items-center">
                    <div className="w-[186px] h-[28px] flex">
                      <h5 className="text-[16px] text-[#252B42] font-bold">
                        Monthly
                      </h5>
                      <input type="radio" name="selection" />
                      <h5 className="text-[16px] text-[#252B42] font-bold">
                        Yearly
                      </h5>
                    </div>
                    <button className="w-[109px] h-[44px] rounded-[37px] py-[10px] px-[20px] gap-[10px] bg-[#B2E3FF] text-[14px] text-[#23A6F0] font-bold">
                      Save 25%
                    </button>
                  </div>
                </section>
              </div>
            </div>
            <section>
              <div className="w-[329px] h-[2112px] ml-[56.5px] gap-[30px] xs:gap-[0px] xs:w-[985px] xs:h-[385px] grid grid-cols-1 xs:flex xs:grid-cols-3 xs:ml-[227.5px] xs:mt-[180px]">
                <div className="w-[327px] h-[664px] rounded-[10px] border-[1px] py-[50px] px-[40px] gap-[35px] bg-[#FFFFFF] border-[#23A6F0] mt-[40px] grid grid-cols-1 justify-items-center">
                  <h3 className="text-[24px] text-[#252B42] font-bold">FREE</h3>
                  <h5 className="text-[16px] text-[#737373] font-bold">
                    Organize across all <br />
                    apps by hand
                  </h5>
                  <div className="w-[114px] h-[56px] gap-[10px] flex grid-cols-2">
                    <h2 className="text-[40px] text-[#23A6F0] font-bold">0</h2>
                    <div className="w-[76px] h-[56px] grid-cols-1"></div>
                    <h3 className="text-[24px] text-[#23A6F0] font-bold">$</h3>
                    <h6 className="text-[14px] text-[#8EC2F2] font-bold">
                      Per Month
                    </h6>
                  </div>
                  <div className="w-[247px] h-[236px] gap-[15px]">
                    <div className="w-[247px] h-[32px] gap-[10px] flex">
                      <FaCircleCheck size={32} className="text-[#2DC071]" />
                      <h6 className="text-[14px] text-[#252B42] font-bold">
                        Unlimited product updates
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="w-[327px] h-[664px] rounded-[10px] border-[1px] py-[50px] px-[40px] gap-[35px]  border-[#23A6F0] bg-[#252B42] grid grid-cols-1 justify-items-center">
                  <h3 className="text-[24px] text-[#FFFFFF] font-bold">
                    STANDARD
                  </h3>
                  <h5 className="text-[16px] text-[#FFFFFF] font-bold">
                    Organize across all <br />
                    apps by hand
                  </h5>
                  <div className="w-[114px] h-[56px] gap-[10px] flex grid-cols-2">
                    <h2 className="text-[40px] text-[#23A6F0] font-bold">
                      9.99
                    </h2>
                    <div className="w-[76px] h-[56px] grid-cols-1"></div>
                    <h3 className="text-[24px] text-[#23A6F0] font-bold">$</h3>
                    <h6 className="text-[14px] text-[#8EC2F2] font-bold">
                      Per Month
                    </h6>
                  </div>
                  <div className="w-[247px] h-[236px] gap-[15px] grid-cols-1">
                    <div className="w-[247px] h-[32px] gap-[10px] flex">
                      <FaCircleCheck size={32} className="text-[#2DC071]" />
                      <h6 className="text-[14px] text-[#FFFFFF] font-bold">
                        Unlimited product updates
                      </h6>
                    </div>
                    <br />
                    <div className="w-[247px] h-[32px] gap-[10px] flex">
                      <FaCircleCheck size={32} className="text-[#2DC071]" />
                      <h6 className="text-[14px] text-[#FFFFFF] font-bold">
                        Unlimited product updates
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="w-[327px] h-[664px] rounded-[10px] border-[1px] py-[50px] px-[40px] gap-[35px] bg-[#FFFFFF] border-[#23A6F0] mt-[40px] grid grid-cols-1 justify-items-center">
                  <h3 className="text-[24px] text-[#252B42] font-bold">
                    PREMIUM
                  </h3>
                  <h5 className="text-[16px] text-[#737373] font-bold">
                    Organize across all <br />
                    apps by hand
                  </h5>
                  <div className="w-[114px] h-[56px] gap-[10px] flex grid-cols-2">
                    <h2 className="text-[40px] text-[#23A6F0] font-bold">
                      19.99
                    </h2>
                    <div className="w-[76px] h-[56px] grid-cols-1"></div>
                    <h3 className="text-[24px] text-[#23A6F0] font-bold">$</h3>
                    <h6 className="text-[14px] text-[#8EC2F2] font-bold">
                      Per Month
                    </h6>
                  </div>
                  <div className="w-[247px] h-[236px] gap-[15px]">
                    <div className="w-[247px] h-[32px] gap-[10px] flex">
                      <FaCircleCheck size={32} className="text-[#2DC071]" />
                      <h6 className="text-[14px] text-[#252B42] font-bold">
                        Unlimited product updates
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="w-[414px] h-[1173px] xs:w-[1440px] xs:h-[365px] bg-[#FAFAFA]">
                <div className="w-[414px] h-[1035px] mt-[84px] gap-[23px] xs:w-[1050px] xs:h-[365px] xs:ml-[195px] xs:py-[80px] grid grid-cols-1 justify-items-center">
                  <h4 className="text-[20px] text-[#252B42] font-normal">
                    Trusted By Over 4000 Big Companies
                  </h4>
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
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[1849px] xs:w-[1440px] xs:h-[1037px] bg-[#FFFFFF]">
          <div className="w-[394px] h-[1849px] ml-[10px] gap-[80px] xs:w-[1056px] xs:h-[1037px] xs:ml-[192px] py-[80px] xs:gap-[50px] grid grid-cols-1 justify-items-center">
            <div className="w-[394px] h-[125px] xs:w-[1050px] xs:h-[210px] xs:py-[45px]">
              <div className="w-[372px] h-[125px] gap-[15px] xs:w-[607px] xs:h-[120px] xs:gap-[10px] grid grid-cols-1 xs:ml-[221.5px] justify-items-center text-center">
                <h2 className="text-[40px] text-[#252B42] font-bold">Pricing FAQs</h2>
                <h4 className="text-[20px] text-[#737373] font-normal">Problems trying to resolve the conflict between <br/>
                the two major realms of Classical physics</h4>


              </div>

            </div>
            <div className="w-[414px] h-[1344px] xs:w-[1056px] xs:h-[537px] gap-[30px] grid grid-cols-1">
              <div className="w-[362px] h-[440px] gap-[10px] xs:w-[1056px] xs:h-[159px] xs:gap-[30px] grid grid-cols-1 xs:flex xs:grid-cols-2">
                <div className="w-[491px] h-[159px] rounded-[9px] p-[25px]">
                  <div className="w-[437px] h-[109px] gap-[20px] flex grid-cols-2">
                    <div className="w-[9px] h-[16px] text-[#23A6F0]">
                  <MdOutlineArrowForwardIos/>
                  </div>
                  <div className="w-[408px] h-[109px] gap-[5px] grid grid-cols-1">
                    <h5 className="text-[16px] text-[#252B42] font-bold">the quick fox jumps over the lazy dog</h5>
                    <p className="text-[14px] text-[#737373] font-bold">Met minim Mollie non desert Alamo est sit cliquey <br/>
                       dolor do met sent. RELIT official consequent door ENIM <br/>
                       RELIT Mollie. Excitation venial consequent sent <br/>
                       nostrum met.</p>

                  </div>
                  </div>
                </div>
                <div className="w-[491px] h-[159px] rounded-[9px] p-[25px]">
                  <div className="w-[437px] h-[109px] gap-[20px] flex grid-cols-2">
                    <div className="w-[9px] h-[16px] text-[#23A6F0]">
                  <MdOutlineArrowForwardIos/>
                  </div>
                  <div className="w-[408px] h-[109px] gap-[5px] grid grid-cols-1">
                    <h5 className="text-[16px] text-[#252B42] font-bold">the quick fox jumps over the lazy dog</h5>
                    <p className="text-[14px] text-[#737373] font-bold">Met minim Mollie non desert Alamo est sit cliquey <br/>
                       dolor do met sent. RELIT official consequent door ENIM <br/>
                       RELIT Mollie. Excitation venial consequent sent <br/>
                       nostrum met.</p>
                  </div>
                  </div>
                </div>
              </div>
              <div className="w-[362px] h-[440px] gap-[10px] xs:w-[1056px] xs:h-[159px] xs:gap-[30px] grid grid-cols-1 xs:flex xs:grid-cols-2">
                <div className="w-[491px] h-[159px] rounded-[9px] p-[25px]">
                  <div className="w-[437px] h-[109px] gap-[20px] flex grid-cols-2">
                    <div className="w-[9px] h-[16px] text-[#23A6F0]">
                  <MdOutlineArrowForwardIos/>
                  </div>
                  <div className="w-[408px] h-[109px] gap-[5px] grid grid-cols-1">
                    <h5 className="text-[16px] text-[#252B42] font-bold">the quick fox jumps over the lazy dog</h5>
                    <p className="text-[14px] text-[#737373] font-bold">Met minim Mollie non desert Alamo est sit cliquey <br/>
                       dolor do met sent. RELIT official consequent door ENIM <br/>
                       RELIT Mollie. Excitation venial consequent sent <br/>
                       nostrum met.</p>

                  </div>
                  </div>
                </div>
                <div className="w-[491px] h-[159px] rounded-[9px] p-[25px]">
                  <div className="w-[437px] h-[109px] gap-[20px] flex grid-cols-2">
                    <div className="w-[9px] h-[16px] text-[#23A6F0]">
                  <MdOutlineArrowForwardIos/>
                  </div>
                  <div className="w-[408px] h-[109px] gap-[5px] grid grid-cols-1">
                    <h5 className="text-[16px] text-[#252B42] font-bold">the quick fox jumps over the lazy dog</h5>
                    <p className="text-[14px] text-[#737373] font-bold">Met minim Mollie non desert Alamo est sit cliquey <br/>
                       dolor do met sent. RELIT official consequent door ENIM <br/>
                       RELIT Mollie. Excitation venial consequent sent <br/>
                       nostrum met.</p>
                  </div>
                  </div>
                </div>
              </div>
              <div className="w-[362px] h-[440px] gap-[10px] xs:w-[1056px] xs:h-[159px] xs:gap-[30px] grid grid-cols-1 xs:flex xs:grid-cols-2">
                <div className="w-[491px] h-[159px] rounded-[9px] p-[25px]">
                  <div className="w-[437px] h-[109px] gap-[20px] flex grid-cols-2">
                    <div className="w-[9px] h-[16px] text-[#23A6F0]">
                  <MdOutlineArrowForwardIos/>
                  </div>
                  <div className="w-[408px] h-[109px] gap-[5px] grid grid-cols-1">
                    <h5 className="text-[16px] text-[#252B42] font-bold">the quick fox jumps over the lazy dog</h5>
                    <p className="text-[14px] text-[#737373] font-bold">Met minim Mollie non desert Alamo est sit cliquey <br/>
                       dolor do met sent. RELIT official consequent door ENIM <br/>
                       RELIT Mollie. Excitation venial consequent sent <br/>
                       nostrum met.</p>

                  </div>
                  </div>
                </div>
                <div className="w-[491px] h-[159px] rounded-[9px] p-[25px]">
                  <div className="w-[437px] h-[109px] gap-[20px] flex grid-cols-2">
                    <div className="w-[9px] h-[16px] text-[#23A6F0]">
                  <MdOutlineArrowForwardIos/>
                  </div>
                  <div className="w-[408px] h-[109px] gap-[5px] grid grid-cols-1">
                    <h5 className="text-[16px] text-[#252B42] font-bold">the quick fox jumps over the lazy dog</h5>
                    <p className="text-[14px] text-[#737373] font-bold">Met minim Mollie non desert Alamo est sit cliquey <br/>
                       dolor do met sent. RELIT official consequent door ENIM <br/>
                       RELIT Mollie. Excitation venial consequent sent <br/>
                       nostrum met.</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
             <h4 className="text-[20px] text-[#737373] font-normal ml-[53.5px] xs:ml-[0px] text-center">Haven&apos;t got your answer? Contact our support</h4>
          </div>

        </div>

      </section>
      <section>
        <div className="w-[414px] h-[586px] xs:w-[1440px] xs:h-[582px] bg-[#FFFFFF]">
          <div className="w-[332px] h-[576px] xs:w-[1050px] xs:h-[602px] ml-[41.5px] xs:ml-[195px] py-[112px] xs:py-[160px] gap-[96px]">
            <div className="w-[332px] h-[352px] gap-[36px] xs:w-[547px] xs:h-[282px] xs:gap-[30px] grid grid-cols-1 xs:ml-[251.5px] justify-items-center text-center">
              <h2 className="text-[40px] text-[#252B42] font-bold">Start your 14 days free trial</h2>
              <p>Met minim Mollie non desert Alamo est sit cliquey dolor <br/> 
              do met sent. RELIT official consequent.</p>
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
                <ImFacebook2 size={30}/>
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

export default Pricing;
