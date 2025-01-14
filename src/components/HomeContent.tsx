
import React from "react";
import Link from "next/link";
import { FaRegCircle } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FaChartArea } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import Header from "./Header";

const HomeContent = () => {
  const productData = [
    {
      id: 1,
      name: "Graphic Design",
      description: "English Department",
      oldprice: 16.48,
      newprice: 6.48,
      image: "/product-cover-5-1.png",
    },
    {
      id: 2,
      name: "Graphic Design",
      description: "English Department",
      oldprice: 16.48,
      newprice: 6.48,
      image: "/product-cover-5-2.png",
    },
    {
      id: 3,
      name: "Graphic Design",
      description: "English Department",
      oldprice: 16.48,
      newprice: 6.48,
      image: "/product-cover-5-3.png",
    },
    {
      id: 4,
      name: "Graphic Design",
      description: "English Department",
      oldprice: 16.48,
      newprice: 6.48,
      image: "/product-cover-5-4.png",
    },
    {
      id: 5,
      name: "Graphic Design",
      description: "English Department",
      oldprice: 16.48,
      newprice: 6.48,
      image: "/product-cover-5-5.png",
    },
    {
      id: 6,
      name: "Graphic Design",
      description: "English Department",
      oldprice: 16.48,
      newprice: 6.48,
      image: "/product-cover-5-6.png",
    },
    {
      id: 7,
      name: "Graphic Design",
      description: "English Department",
      oldprice: 16.48,
      newprice: 6.48,
      image: "/product-cover-5-7.png",
    },
    {
      id: 8,
      name: "Graphic Design",
      description: "English Department",
      oldprice: 16.48,
      newprice: 6.48,
      image: "/product-cover-5-8.png",
    },
  ];

  return (
    <div>
      <Header/>
      <section>
        <div
          className="w-[414px] h-[753px] xs:w-[1439px] xs:h-[716px] mt-[0px] ml-[1px] border-[1px] rounded-[5px] border-[#DEDEDE] bg-[#FFFFFF] bg-cover bg-center items-center"
          style={{ backgroundImage: "url('image-01.png')" }}
        >
          <div className="w-[414px] h-[753px] xs:w-[1044px] xs:h-[651px] mt-[48px] ml-[197.5px] pt-[112px] pb-[112px] gap-[80px]">
            <div className="w-[414px] h-[753px] xs:w-[1044] xs:h-[427] pt-[48px] pb-[48px] gap-[30px]">
              <div className="w-[599px] h-[38px1] xs:w-[599px] xs:h-[331px] gap-[35px] items-center">
                <h5 className="w-[122px] h-[24px] text-[#FFFFFF] text-[16px] font-bold">
                  SUMMER 2020
                </h5>
                <h1 className="w-[548px] h-[80px] text-[58px] text-[#FFFFFF] font-bold">
                  New Collection
                </h1> 
                <h4 className="w-[376px] h-[60px] text-[20px] text-[#FAFAFA] font-normal">
                  We know how large objects will act,
                  <br />
                  but things on a small scale.
                </h4>
                <button className="W-[221px] h-[62px] rounded-[5px] bg-[#2DC071] pt-[15px] pr-[40px] pl-[40px] pb-[15px] gap-[10px] mt-[30px]">
                  <h3 className="w-[141px] h-[32px] text-[24px] align-middle text-[#FFFFFF]">
                    SHOP NOW
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[1850px] xs:w-[1440] xs:h-[770px] bg-[#FAFAFA]">
          <div className="w-[333px] h-[1850px] xs:w-[1050px] xs:h-[770px] xs:ml-[195px] mx-auto pt-[80px] pb-[80px] gap-[48px] grid grid-cols-1 justify-center items-center">
            <div className="w-[333px] h-[82px] xs:w-[607px] xs:h-[62px] gap-[10px]  grid grid-cols-1 justify-items-center xs:ml-[221.5px] mx-auto">
              <h3 className=" h-[32px] text-[24px] text-[#252B42] font-bold ">
                EDITOR&apos;S PICK
              </h3>
              <p className="w-[347px] h-[20px] text-[14px] text-[#737373] font-normal pl-[40px]">
                Problems trying to resolve the conflict between{" "}
              </p>
            </div>
            <div className="w-[325px] h-[1560] xs:w-[1050px] xs:h-[500px] gap-[30px] xs:flex grid grid-cols-1 mt-[50px]">
              <div
                className="w-[324px] h-[500px] xs:w-[509px] xs:h-[500px] pl-[1px] bg-[#212121]  bg-cover bg-center items-center"
                style={{ backgroundImage: "url(image-02.png)" }}
              >
                <div className="w-[170px] h-[48px] mt-[426px] ml-[31px] bg-[#FFFFFF]">
                  <h5 className="w-[40px] h-[24px] pt-[12px] pl-[64px] text-[16px] font-bold text-[#252B42]">
                    MEN
                  </h5>
                </div>
              </div>
              <div
                className="w-[324px] h-[500px] xs:w-[239px] xs:h-[500px] pl-[1px] bg-[#212121]  bg-cover bg-center items-center"
                style={{ backgroundImage: "url(image-03.png)" }}
              >
                <div className="w-[130px] h-[48px] mt-[434px] ml-[21px] gap-[10px] bg-[#FFFFFF]">
                  <h5 className="w-[40px] h-[24px] text-[16px] pt-[12px] pb-[12px] pl-[32px] font-bold text-[#252B42]">
                    WOMEN
                  </h5>
                </div>
              </div>
              <div className="w-[324px] h-[500px] grid grid-cols-1 xs:w-[240px] xs:h-[500px] gap-[16px]">
                <div
                  className="w-[324px] h-[242px] xs:w-[239px] xs:h-[242px] ml-[1px] bg-[#212121] bg-cover bg-center items-center"
                  style={{ backgroundImage: "url(image-04.png)" }}
                >
                  <div className="w-[170px] h-[48px] mt-[171px] ml-[14px] bg-[#FFFFFF]">
                    <h5 className="w-[118px] h-[24px] text-[16px] pt-[12px] pl-[26px] text-[#252B42] font-bold">
                      ACCESSORIES
                    </h5>
                  </div>
                </div>
                <div
                  className="w-[324px] h-[242px] xs:w-[239px] xs:h-[242px] ml-[1px] bg-[#212121] bg-cover bg-center items-center"
                  style={{ backgroundImage: "url(image-05.png)" }}
                >
                  <div className="w-[120px] h-[48px] mt-[176px] ml-[18px] bg-[#FFFFFF]">
                    <h5 className="w-[118px] h-[24px] text-[16px] pt-[12px] pl-[40px] text-[#252B42] font-bold">
                      KIDS
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[5510px] xs:w-[1440px] xs:h-[1652px] bg-[#FFFFFF] items-center">
          <div className="w-[328px] h-[5510px] xs:w-[1124px] xs:h-[1652px] xs:ml-[195px] mx-auto justify-items-center">
            <div className="w-[300px] h-[154px] xs:w-[692] xs:h-[102] gap-[10px] justify-items-center">
              <h4 className=" text-[20px] text-[#737373] font-normal">
                Featured Products
              </h4>
              <h3 className="text-[24px] text-[#252B42] font-bold">
                BESTSELLER PRODUCTS
              </h3>
              <p className=" text-[14px] text-[#737373] font-normal">
                Problems trying to resolve the conflict between{" "}
              </p>
            </div>
            <div className="w-[328px] h-[2515px] xs:w-[1049px] xs:h-[1260px] gap-[30px] grid grid-cols-1 xs:grid-cols-4 items-center">
              {productData.map((product) => (
                <div key={product.id} className="product-card bg-[#FFFFFF] text-center sm:text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[348px] h-[427px] xs:w-[239px] xs:h-[427px] transition-transform duration-600 transform hover:scale-105"
                  />
                  <h5 className="mt-4 text-16px font-bold">{product.name}</h5>
                  <div className="mt-3">
                    <Link
                      href="/"
                      className="text-[#737373] text-[14px] font-bold"
                    >
                      {product.description}
                    </Link>
                  </div>
                  <div className="flex gap-1 items-center xs:justify-center ml-[120px] xs:ml-[0px]">
                    <h5 className="price text-[#BDBDBD] text-[16px] font-bold mt-2">
                      ${product.oldprice}
                    </h5>
                    <h5 className="price text-[#23856D] text-[16px] font-bold mt-2">
                      ${product.newprice}
                    </h5>
                  </div>
                  <div className="flex flex-row gap-[6.08px] items-center xs:justify-center mt-3 ml-[120px] xs:ml-[0px]">
                    <FaRegCircle className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full text-[#23A6F0] " />
                    <FaRegCircle className="w-[16px] h-[16px] bg-[#23856D] rounded-full text-[#23856D] " />
                    <FaRegCircle className="w-[16px] h-[16px] bg-[#E77C40] rounded-full text-[#E77C40] " />
                    <FaRegCircle className="w-[16px] h-[16px] bg-[#252B42] rounded-full text-[#252B42] " />
                  </div>
                </div>
              ))}
              ;
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[1230px] xs:w-[1440px] xs:h-[709px] bg-[#FFFFFF] border-[1px] rounded-[5px] border-[#DEDEDE]">
          <div className=" w-[412px] h-[1230px] xs:w-[1440px] xs:h-[711px] bg-[rgb(35,133,109)]">
            <div className="w-[412px] h-[1230px] xs:w-[1036px] xs:h-[711px] ml-[209px] gap-[80px]">
              <div className="w-[412px] h-[1230px] xs:w-[1049px] xs:h-[599px] gap-[30px] pt-[110] grid grid-cols-1 xs:grid-cols-2 justify-items-center">
                <div className="w-[509px] h-[432px] pt-[60px] gap-[30px]">
                  <h4 className="w-[154px] h-[30px] text-[20px] font-normal text-[#FFFFFF]">
                    SUMMER 2020
                  </h4>
                  <h1 className="w-[509px] h-[160px] xs:text-[58px] text-[40px] text-[#FFFFFF] font-bold items-center">
                    Vita Classic <br /> Product
                  </h1>
                  <h4 className="w-[341px] h-[40px] xs:text-[14px] text-[20px] text-[#FFFFFF] font-normal xs:mt-[40px] mt-[10px]">
                    We know how large objects will act, We know <br /> how are
                    objects will act, We know
                  </h4>
                  <div className="w-[295px] h-[52px] xs:gap-[34px] gap-[20px] xs:flex grid grid-cols-1 xs:mt-[30px] mt-[60px] justify-items-center">
                    <h3 className="w-[77px] h-[32px] text-[24px] text-[#FFFFFF] font-bold">
                      $16.48
                    </h3>
                    <button className="w-[184px] h-[52px] rounded-[5px] bg-[#2DC071] text-[14px] text-[#FFFFFF] font-bold">
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className=" w-[416px] h-[681px] xs:w-[510px] xs:h-[685px] mt-[60px] xs:mt-[0px] ">
                  <img
                    src="shop-hero-2-png-picture-1.png"
                    alt="image"
                    className="w-[443px] h-[598px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[999px] xs:w-[1440px] xs:h-[682px] bg-[#FFFFFF] gap-[50px] grid-cols-1 xs:flex xs:grid-cols-2 justify-items-center">
          <div className="w-[784px] h-[682px]">
          <div>
          <img src="asian-woman-man-with-winter-clothes 1@2x.png" alt="image"
           className="w-[600px] h-[774] ml-[137px] mr-[100]"/>
           </div>
           </div>
        <div className="w-[573px] h-[326px] grid grid-cols-1 gap-[30px] mt-[178] justify-items-center">
          <h5 className="w-[122px] h-[24px] text-[16px] text-[#BDBDBD] font-bold">SUMMER 2020</h5>
          <h2 className="text-[40px] text-[#252B42] font-bold">Part of the Neural <br/> Universe</h2>
          <h4 className="text-[20px] text-[#737373] font-normal">We know how large objects will act, <br/> but things on a small scale.</h4>
          <div className="w-[339px] h-[52px] gap-[10px] flex">
          <button className="w-[156px] h-[52px] bg-[#2DC071] rounded-[5px] text-[14px] font-bold text-[#FFFFFF]">BUY NOW</button>
          <button className="w-[173px] h-[52px] border-[1px] text-[#2DC071] rounded-[5px] text-[14px] font-bold">READ MORE</button>
          </div>

        </div>
        </div>

      </section>
      <section>
        <div className="w-[414px] h-[2302px] xs:w-[1440px] xs:h-[1044px] bg-[#FFFFFF]">
          <div className="w-[414px] h-[2302px] xs:w-[1050px] xs:h-[1044] xs:ml-[195px] ml-[0px] pt-[112px] pb-[112px] gap-[80px]">
            <div className="w-[300px] h-[184px] xs:w-[692px] xs:h-[134px] ml-[0px] xs:ml-[179px] grid grid-cols-1 justify-items-center xs:mt-[100px] mt-[150px] mx-auto">
              <h6 className="text-[14px] text-[#23A6F0] font-bold ">Practice Advice</h6>
              <h2 className="text-[40px] text-[#252B42] font-bold">Featured Posts</h2>
              <p className="text-[14px] text-[#737373] font-normal">Problems trying to resolve the conflict between </p> 
              <p className="text-[14px] text-[#737373] font-normal">the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="w-[329px] h-[1878px] xs:w-[1045px] xs:h-[606px] gap-[30px] grid-cols-1 xs:flex xs:grid-cols-3 mt-[80px] mx-auto">
              <div className="w-[348px] h-[606px] bg-[#FFFFFF] shadow-light-drop">
                <div className="w-[348px] h-[300px]" style={{ backgroundImage: "url(unsplash_hHdHCfAifHU.png)" }}>
                <button className="w-[58px] h-[24px] bg-[#E74040] rounded-[3px] mt-[20px] ml-[20px] text-[14px] text-[#FFFFFF] font-bold">NEW</button>
                </div>
                <div className="w-[348px] h-[306px] gap-[10px] pt-[25px] pb-[35px] pl-[25px] pr-[25px]">
                  <div className="w-[159px] h-[16px] gap-[15px] flex text-[12px] font-normal">
                    <p className="text-[#8EC2F2]">Google</p>
                    <p className="text-[#737373]">Trending</p>
                    <p className="text-[#737373]">News</p>

                  </div>
                  <h4 className="text-[20px] text-[#252B42] font-normal">Loudest à la Madison #1 <br/> (L&apos;integral)</h4>
                  <p className="text-[14px] text-[#737373] ">We focus on ergonomics and meeting <br/> you where you work. It&apos;s only a <br/> keystroke away.</p>
                  <div className="w-[298px] h-[46px] flex grid-cols-2 justify-between pt-[15px] pb-[15px]">
                    <div className="w-[98px] h-[16px] gap-[5px] flex items-center">
                      <div className="w-[16px] h-[16px]">
                      <CiClock2 className="w-[12.94px] h-[13.14px] text-[#23A6F0]" />
                    </div>
                    <p className="text-[12px] text-[#737373] font-normal">22 April 2021</p>

                    </div>
                    <div className="w-[105px] h-[16px] gap-[5px] flex items-center">
                      <FaChartArea className="w-[16px] h-[14.67px] text-[#23856D]"/>
                      <p className="text-[12px] text-[#737373] font-normal">10 comments</p>
                    </div>

                  </div>
                  <div className="w-[104px] h-[24px] gap-[10px] flex items-center">
                    <h6 className="text-[14px] text-[#737373] font-bold">Learn More</h6>
                    <div className="w-[9px] h-[16px]">
                    <MdArrowForwardIos className=" text-[#23A6F0]"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[606px] bg-[#FFFFFF] shadow-light-drop">
                <div className="w-[348px] h-[300px]" style={{ backgroundImage: "url(unsplash_tVEqStC2uz8.png)" }}>
                <button className="w-[58px] h-[24px] bg-[#E74040] rounded-[3px] mt-[20px] ml-[20px] text-[14px] text-[#FFFFFF] font-bold">NEW</button>
                </div>
                <div className="w-[348px] h-[306px] gap-[10px] pt-[25px] pb-[35px] pl-[25px] pr-[25px]">
                  <div className="w-[159px] h-[16px] gap-[15px] flex text-[12px] font-normal">
                    <p className="text-[#8EC2F2]">Google</p>
                    <p className="text-[#737373]">Trending</p>
                    <p className="text-[#737373]">News</p>

                  </div>
                  <h4 className="text-[20px] text-[#252B42] font-normal">Loudest à la Madison #1 <br/> (L&apos;integral)</h4>
                  <p className="text-[14px] text-[#737373] ">We focus on ergonomics and meeting <br/> you where you work. It&apos;s only a <br/> keystroke away.</p>
                  <div className="w-[298px] h-[46px] flex grid-cols-2 justify-between pt-[15px] pb-[15px]">
                    <div className="w-[98px] h-[16px] gap-[5px] flex items-center">
                      <div className="w-[16px] h-[16px]">
                      <CiClock2 className="w-[12.94px] h-[13.14px] text-[#23A6F0]" />
                    </div>
                    <p className="text-[12px] text-[#737373] font-normal">22 April 2021</p>

                    </div>
                    <div className="w-[105px] h-[16px] gap-[5px] flex items-center">
                      <FaChartArea className="w-[16px] h-[14.67px] text-[#23856D]"/>
                      <p className="text-[12px] text-[#737373] font-normal">10 comments</p>
                    </div>

                  </div>
                  <div className="w-[104px] h-[24px] gap-[10px] flex items-center">
                    <h6 className="text-[14px] text-[#737373] font-bold">Learn More</h6>
                    <div className="w-[9px] h-[16px]">
                    <MdArrowForwardIos className=" text-[#23A6F0]"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[348px] h-[606px] bg-[#FFFFFF] shadow-light-drop">
                <div className="w-[348px] h-[300px]" style={{ backgroundImage: "url(unsplash_dEGu-oCuB1Y.png)" }}>
                <button className="w-[58px] h-[24px] bg-[#E74040] rounded-[3px] mt-[20px] ml-[20px] text-[14px] text-[#FFFFFF] font-bold">NEW</button>
                </div>
                <div className="w-[348px] h-[306px] gap-[10px] pt-[25px] pb-[35px] pl-[25px] pr-[25px]">
                  <div className="w-[159px] h-[16px] gap-[15px] flex text-[12px] font-normal">
                    <p className="text-[#8EC2F2]">Google</p>
                    <p className="text-[#737373]">Trending</p>
                    <p className="text-[#737373]">News</p>

                  </div>
                  <h4 className="text-[20px] text-[#252B42] font-normal">Loudest à la Madison #1 <br/> (L&apos;integral)</h4>
                  <p className="text-[14px] text-[#737373] ">We focus on ergonomics and meeting <br/> you where you work. It&apos;s only a <br/> keystroke away.</p>
                  <div className="w-[298px] h-[46px] flex grid-cols-2 justify-between pt-[15px] pb-[15px]">
                    <div className="w-[98px] h-[16px] gap-[5px] flex items-center">
                      <div className="w-[16px] h-[16px]">
                      <CiClock2 className="w-[12.94px] h-[13.14px] text-[#23A6F0]" />
                    </div>
                    <p className="text-[12px] text-[#737373] font-normal">22 April 2021</p>

                    </div>
                    <div className="w-[105px] h-[16px] gap-[5px] flex items-center">
                      <FaChartArea className="w-[16px] h-[14.67px] text-[#23856D]"/>
                      <p className="text-[12px] text-[#737373] font-normal">10 comments</p>
                    </div>

                  </div>
                  <div className="w-[104px] h-[24px] gap-[10px] flex items-center">
                    <h6 className="text-[14px] text-[#737373] font-bold">Learn More</h6>
                    <div className="w-[9px] h-[16px]">
                    <MdArrowForwardIos className=" text-[#23A6F0]"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
