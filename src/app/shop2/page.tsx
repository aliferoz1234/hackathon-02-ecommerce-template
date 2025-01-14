import React from "react";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { TiStarOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";
import Header from "@/components/Header";


const productData1 = [
  {
    id: 1,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-21.png",
  },
  {
    id: 2,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-22.png",
  },
  {
    id: 3,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-23.png",
  },
  {
    id: 4,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-24.png",
  },
];
const productData2 = [
  {
    id: 1,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-25.png",
  },
  {
    id: 2,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-26.png",
  },
  {
    id: 3,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-27.png",
  },
  {
    id: 4,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-28.png",
  },
];

const shop2 = () => {
  return (
    <div>
      <Header/>
      <section>
        <div className=" w-[414px] h-[92px] xs:w-[1440px] xs:h-[92px] pt-[24px] pb-[24px] bg-[#FAFAFA]">
          <div className="w-[414px] h-[44px] xs:w-[1033px] xs:h-[44px] gap-[30px] xs:ml-[203.5px] ">
            <div className="w-[414px] h-[44px] xs:w-[509px] xs:h-[44px] gap-[5px]">
              <div className="w-[117px] h-[44px] xs:w-[119px] xs:h-[44px] py-[10px] gap-[15px] flex items-center ml-[297px] xs:ml-[0px] ">
                <Link href="/" className="text-[14px] text-[#252B42] font-bold">
                  Home
                </Link>
                <div className="w-[8.62px] h-[16px] text-[#BDBDBD]">
                  <MdArrowForwardIos />
                </div>
                <h6 className="text-[14px] text-[#BDBDBD]">Shop</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[991px] xs:w-[1440px] xs:h-[598px] bg-[#FAFAFA]">
          <div className="w-[348px] h-[991px] xs:w-[1050px] xs:h-[598px] xs:ml-[195px] ml-[33px] pt-[48px] xs:pt-[0px] pb-[48px]">
            <div className="w-[348px] h-[895px] xs:w-[1050px] xs:h-[550px] gap-[30px] xs:flex grid grid-cols-1">
              <div className="w-[348px] h-[394px] xs:w-[510px] xs:h-[550px]">
                <div className="w-[348px] h-[394px] xs:w-[506px] xs:h-[546px] rounded-[5px]">
                  <div
                    className="w-[348px] h-[277px] xs:w-[506px] xs:h-[450px]"
                    style={{
                      backgroundImage: "url('single-product-1-cover-2.png')",
                    }}
                  >
                    <div className="w-[24px] h-[44.47px] mt-[258.53px] ml-[40px] absolute">
                      <MdArrowBackIosNew className="w-[23.87px] h-[44.07px] text-[#FFFFFF]" />
                    </div>
                    <div className="w-[24px] h-[44.47px] mt-[258.53px] ml-[447px] absolute">
                      <MdArrowForwardIos className="w-[23.87px] h-[44.07px] text-[#FFFFFF]" />
                    </div>
                  </div>
                  <div className="w-[219px] h-[75px] mt-[21px] flex gap-[19px]">
                    <img
                      src="single-product-1-thumb-1.png"
                      alt="image"
                      className="w-[100px] h-[75px]"
                    />
                    <img
                      src="single-product-1-thumb-2.png"
                      alt="image"
                      className="w-[100px] h-[75px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[510px] h-[471px] py-[11px] px-[24px]">
                <h4 className="text-[20px] text-[#252B42] font-normal">
                  Floating Phone
                </h4>
                <div className="w-[221.07px] h-[24px] gap-[10px] flex mt-[18px]">
                  <div className="w-[130.07px] h-[22.01px] gap-[5px] flex">
                    <div className="w-[22.01px] h-[22.01px]">
                      <TiStarFullOutline className="w-[18.34] h-[18.35] mt-[1.83px] ml-[1.83px] text-[#F3CD03] " />
                    </div>
                    <div className="w-[22.01px] h-[22.01px]">
                      <TiStarFullOutline className="w-[18.34] h-[18.35] mt-[1.83px] ml-[1.83px] text-[#F3CD03] " />
                    </div>
                    <div className="w-[22.01px] h-[22.01px]">
                      <TiStarFullOutline className="w-[18.34] h-[18.35] mt-[1.83px] ml-[1.83px] text-[#F3CD03] " />
                    </div>
                    <div className="w-[22.01px] h-[22.01px]">
                      <TiStarFullOutline className="w-[18.34] h-[18.35] mt-[1.83px] ml-[1.83px] text-[#F3CD03] " />
                    </div>
                    <div className="w-[22.01px] h-[22.01px]">
                      <TiStarOutline className="w-[18.34] h-[18.35] mt-[1.83px] ml-[1.83px] text-[#F3CD03] " />
                    </div>
                  </div>
                  <h6 className="text-[14px] text-[#737373] font-bold">
                    10 Reviews
                  </h6>
                </div>
                <h3 className="text-[24px] text-[#252B42] font-bold mt-[20px]">
                  $1,139.33
                </h3>
                <div className="w-[159px] h-[24px] gap-[5px] flex">
                  <h6 className="text-[14px] text-[#737373] font-bold">
                    Availability :
                  </h6>
                  <h6 className="text-[14px] text-[#23A6F0] font-bold">
                    In Stock{" "}
                  </h6>
                </div>
                <p className="text-[14px] text-[#858585] font-normal mt-[30px]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor
                  <br />
                  do met sent. RELIT official consequent door ENIM RELIT Mollie.
                  <br />
                  Excitation venial consequent sent nostrum met.
                </p>
                <hr className="w-[445px] border-[1px] text-[#BDBDBD] ml-[25px] mt-[30px]" />
                <div className="w-[150px] h-[30px] gap-[10px] mt-[29px] flex">
                  <FaRegCircle className="w-[30px] h-[30px] bg-[#23A6F0] rounded-full text-[#23A6F0] " />
                  <FaRegCircle className="w-[30px] h-[30px] bg-[#23856D] rounded-full text-[#23856D] " />
                  <FaRegCircle className="w-[30px] h-[30px] bg-[#E77C40] rounded-full text-[#E77C40] " />
                  <FaRegCircle className="w-[30px] h-[30px] bg-[#252B42] rounded-full text-[#252B42] " />
                </div>
                <div className="w-[298px] h-[44px] gap-[10px] mt-[97px] flex">
                  <button className="w-[148px] h-[44px] text-[14px] text-[#FFFFFF] bg-[#23A6F0] rounded-[5px] py-[10px] px-[20px]">Select Options</button>
                  <button className="w-[40px] h-[40px] rounded-[44.79px] bg-[#FFFFFF] border-[#E8E8E8] border-[1px] px-[10px] py-[10px]">
                  <div className="w-[20px] h-[20px]">
                  <FaRegHeart className="w-[17.5px] h-[15.63px] mt-[2.5px] ml-[1.25px] border-[#252B42] items-center"/>
                  </div>
                  </button>
                  <button className="w-[40px] h-[40px] rounded-[44.79px] bg-[#FFFFFF] border-[#E8E8E8] border-[1px] px-[10px] py-[10px]">
                  <div className="w-[20px] h-[20px]">
                  <BsCart className="w-[19px] h-[19px] mt-[1px]  text-[#252B42] items-center"/>
                  </div>
                  </button>
                  <button className="w-[40px] h-[40px] rounded-[44.79px] bg-[#FFFFFF] border-[#E8E8E8] border-[1px] px-[10px] py-[10px]">
                  <div className="w-[20px] h-[20px]">
                  <BsEyeFill className="w-[19px] h-[19px]   text-[#252B42] items-center"/>
                  </div>
                  </button>
                  
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[1306px] xs:w-[1440px] xs:h-[572px] bg-[#FFFFFF]">
          <div className="w-[414px] h-[91px] xs:w-[1440] xs:h-[91px] bg-[#FFFFFF]">
            <div className="w-[372px] h-[72px] xs:w-[1051px] xs:h-[72px] mt-[10px] xs:ml-[193px] ml-[21px] flex ">
              <div className="w-[98px] h-[72px] xs:w-[134px] xs:h-[72px] xs:ml-[280px] py-[24px] px-[12px] xs:p-[24px] gap-[8px]">
                <Link href="/" className="text-[14px] text-[#737373] font-semibold">Description</Link>
              </div>
              <div className="w-[177px] h-[72px] xs:w-[220px] xs:h-[72px] py-[24px] px-[12px] xs:p-[24px] gap-[8px]">
                <Link href="/" className="text-[14px] text-[#737373] font-bold">Additional Information</Link>
              </div>
              <div className="w-[110px] h-[72px] xs:w-[138px] xs:h-[72px] py-[24px] px-[12px] xs:p-[24px] gap-[8px] flex">
                <Link href="/" className="text-[14px] text-[#737373] font-bold">Reviews</Link>
                <Link href="/" className="text-[14px] text-[#23856D] font-bold">(0)</Link>
              </div>
            </div>

          </div>
          <div className="w-[332px] h-[1275px] xs:w-[1440px] xs:h-[499px] xs:gap-[50px] xs:mt-[17px]">
            <div className="w-[332px] h-[1275px] xs:w-[1056px] xs:h-[499px] pt-[24px] xs:pb-[48px] pb-[80px] xs:gap-[30px] gap-[80px] xs:ml-[192px] ml-[41px]">
              <div className="w-[332px] h-[1171px] xs:w-[1056px] xs:h-[427px] gap-[30px] grid grid-cols-1 xs:flex xs:grid-cols-3">
                <div className="w-[332px] h-[292px] xs:w-[332px] xs:h-[392px]">
                  <div className="w-[337px] h-[292px] xs:w-[3370px] xs:h-[392px] rounded-[9px]">
                    <img src="unsplash_QANOF9iJlFs.png" alt="image" className="w-[321] h-[271] xs:w-[316px] xs:h-[327px] rounded-[5.39px]"/>

                  </div>

                </div>
                <div className="w-[332px] h-[452px] xs:w-[332px] xs:h-[427px] rounded-[9px] pb-[25px] gap-[30px] grid grid-cols-1">
                  <h3 className="text-[24px] text-[#252B42] font-bold">the quick fox jumps over </h3>
                  <p className="w-[332px] h-[340px] text-[14px] text-[#737373] font-normal">
                  Met minim Mollie non desert Alamo est sit<br/> cliquey dolor do met sent. RELIT official<br/> consequent door ENIM RELIT Mollie.<br/> Excitation venial consequent sent nostrum <br/> met.<br/><br/>

                  Met minim Mollie non desert Alamo est sit<br/> cliquey dolor do met sent. RELIT official<br/> consequent door ENIM RELIT Mollie.<br/> Excitation venial consequent sent nostrum <br/> met.<br/><br/>

                  Met minim Mollie non desert Alamo est sit<br/> cliquey dolor do met sent. RELIT official<br/> consequent door ENIM RELIT Mollie.<br/> Excitation venial consequent sent nostrum <br/> met.<br/><br/>
                  </p>


                </div>
                <div className="w-[332px] h-[367px] grid grid-cols-1 gap-[20px]">
                  <div className="w-[332px] h-[188px] gap-[30px] rounded-[9px] grid grid-cols-1">
                  <h3 className="text-[24px] text-[#252B42] font-bold">the quick fox jumps over </h3>
                  <ul className="w-[303px] h-[126px] gap-[10px] grid grid-cols-1 text-[14px] text-[#737373] font-bold">
                  <li className="flex gap-[10px]"><SlArrowRight className="w-[9px] h-[16px]" />the quick fox jumps over the lazy dog</li>
                  <li className="flex gap-[10px]"><SlArrowRight className="w-[9px] h-[16px]" />the quick fox jumps over the lazy dog</li>
                  <li className="flex gap-[10px]"><SlArrowRight className="w-[9px] h-[16px]" />the quick fox jumps over the lazy dog</li>
                  <li className="flex gap-[10px]"><SlArrowRight className="w-[9px] h-[16px]" />the quick fox jumps over the lazy dog</li>
                  </ul>
                  </div>
                  <div className="w-[332px] h-[188px] gap-[30px] rounded-[9px] grid grid-cols-1">
                  <h3 className="text-[24px] text-[#252B42] font-bold">the quick fox jumps over </h3>
                  <ul className="w-[303px] h-[126px] gap-[10px] grid grid-cols-1 text-[14px] text-[#737373] font-bold">
                  <li className="flex gap-[10px]"><SlArrowRight className="w-[9px] h-[16px]" />the quick fox jumps over the lazy dog</li>
                  <li className="flex gap-[10px]"><SlArrowRight className="w-[9px] h-[16px]" />the quick fox jumps over the lazy dog</li>
                  <li className="flex gap-[10px]"><SlArrowRight className="w-[9px] h-[16px]" />the quick fox jumps over the lazy dog</li>
                  <li className="flex gap-[10px]"><SlArrowRight className="w-[9px] h-[16px]" />the quick fox jumps over the lazy dog</li>
                  </ul>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
      <section>
        <div className="w-[414px] h-[2622] xs:w-[1440px] xs:h-[1086px] bg-[#FAFAFA]">
          <div className="w-[331px] h-[2622px] xs:w-[1124px] xs:h-[1086px] xs:ml-[195px] py-[48px] gap-[24px] px-[48px] grid grid-cols-1">
            <div className="w-[324px] h-[32px] xs:w-[1040px] xs:h-[32px]">
              <div className="w-[332px] h-[32px] xs:w-[691px] xs:h-[32px] gap-[10px]">
              <h3 className="text-[24px] text-[#252B42] font-bold">BESTSELLER PRODUCTS</h3>
              </div> 
            </div>
            
            <hr className="w-[331px] xs:w-[1024px] border-[1px] xs:border-[2px] border-[#ECECEC] xs:mt-[24px]"/>
            <div className="w-[328px] h-[2446px] xs:w-[1049px] xs:h-[442px] gap-[30px] xs:flex xs:grid-cols-4 grid grid-cols-1">
              {productData1.map((product) => (
                <div
                  key={product.id}
                  className="product-card w-[348px] h-[589px] xs:w-[239px] xs:h-[442px] bg-[#FFFFFF] text-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[348px] h-[427px] xs:w-[239px] xs:h-[280px] transition-transform duration-600 transform hover:scale-105"
                  />
                  <div className="w-[348px] h-[162px] xs:w-[239px] xs:h-[162px] pt-[25px] pb-[35px] px-[25px] gap-[10px] grid grid-cols-1 justify-items-start">
                    <h5 className="text-16px font-bold text-[#252B42]">
                      {product.name}
                    </h5>

                    <Link
                      href="/"
                      className="text-[#737373] text-[14px] font-bold"
                    >
                      {product.description}
                    </Link>

                    <div className=" w-[108px] h-[34px] pt-[5px] pb-[5px] pl-[3px] pr-[3px] flex gap-[5px] items-center  ">
                      <h5 className="price text-[#BDBDBD] text-[16px] font-bold mt-2">
                        ${product.oldprice}
                      </h5>
                      <h5 className="price text-[#23856D] text-[16px] font-bold mt-2">
                        ${product.newprice}
                      </h5>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden xs:w-[1049px] xs:h-[442px] xs:gap-[30px] xs:flex xs:grid-cols-4">
              {productData2.map((product) => (
                <div
                  key={product.id}
                  className="product-card xs:w-[239px] xs:h-[442px] bg-[#FFFFFF] text-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[348px] h-[427px] xs:w-[239px] xs:h-[280px] transition-transform duration-600 transform hover:scale-105"
                  />
                  <div className="w-[239px] h-[162px] pt-[25px] pb-[35px] px-[25px] gap-[10px] grid grid-cols-1 justify-items-start">
                    <h5 className="text-16px font-bold text-[#252B42]">
                      {product.name}
                    </h5>

                    <Link
                      href="/"
                      className="text-[#737373] text-[14px] font-bold"
                    >
                      {product.description}
                    </Link>

                    <div className=" w-[108px] h-[34px] pt-[5px] pb-[5px] pl-[3px] pr-[3px] flex gap-[5px] items-center ">
                      <h5 className="price text-[#BDBDBD] text-[16px] font-bold mt-2">
                        ${product.oldprice}
                      </h5>
                      <h5 className="price text-[#23856D] text-[16px] font-bold mt-2">
                        ${product.newprice}
                      </h5>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
            
          </div>

        </div>
      </section>
      <section>
        <div className=" w-[414px] h-[1173px] xs:w-[1440px] xs:h-[175px] bg-[#FAFAFA]">
          <div className="w-[414px] h-[952px] xs:w-[1054px] xs:h-[175px] xs:ml-[195px] py-[50px] grid grid-cols-1 xs:flex justify-items-center xs:justify-around mt-[110px] xs:mt-[0px] xs:gap-[30px]">
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
      </section>
    </div>
  );
};

export default shop2;
