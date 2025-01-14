import Link from "next/link";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { HiViewGrid } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import Header from "@/components/Header";

const productData1 = [
  { id: 1, name: "CLOTH", description: "5 items", image: "/image-19.png" },
  { id: 2, name: "CLOTH", description: "5 items", image: "/image-20.png" },
  { id: 3, name: "CLOTH", description: "5 items", image: "/image-21.png" },
  { id: 4, name: "CLOTH", description: "5 items", image: "/image-22.png" },
  { id: 5, name: "CLOTH", description: "5 items", image: "/image-23.png" },
];
const productData2 = [
  {
    id: 1,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-9.png",
  },
  {
    id: 2,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-10.png",
  },
  {
    id: 3,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-11.png",
  },
  {
    id: 4,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-12.png",
  },
];
const productData3 = [
  {
    id: 1,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-13.png",
  },
  {
    id: 2,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-14.png",
  },
  {
    id: 3,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-15.png",
  },
  {
    id: 4,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-16.png",
  },
];
const productData4 = [
  {
    id: 1,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-17.png",
  },
  {
    id: 2,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-18.png",
  },
  {
    id: 3,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-19.png",
  },
  {
    id: 4,
    name: "Graphic Design",
    description: "English Department",
    oldprice: 16.48,
    newprice: 6.48,
    image: "/product-cover-5-20.png",
  },
];

const shop1 = () => {
  return (
    <div>
      <Header/>
      <section>
        <div className="w-[414px] h-[202px] xs:w-[1440px] xs:h-[92px] pt-[24px] pb-[24px] bg-[#FAFAFA]">
          <div className="w-[414px] h-[154px] xs:w-[1049px] xs:h-[44px] gap-[30px] xs:ml-[195.5px] ml-[180px]  grid-cols-1 xs:flex xs:justify-around items-center mx-auto justify-items-center">
            <div className="w-[414px] h-[80px] xs:w-[510] xs:h-[32px]">
              <h3 className="text-[24px] text-[#252B42] font-bold align-middle">
                Shop
              </h3>
            </div>
            <div className="w-[414px] h-[44px] xs:w-[509px] xs:h-[44px] gap-[5px] xs:ml-[540px] items-center">
              <div className="w-[117px] h-[44px] xs:w-[119px] xs:h-[44px] pt-[10px] pb-[10px] gap-[15px] xs:ml-[390px] flex">
                <Link href="/" className="text-[14px] text-[#252B42] font-bold">
                  Home
                </Link>
                <div className="w-[8.62px] h-[16px]">
                  <MdArrowForwardIos className=" text-[#BDBDBD]" />
                </div>
                <h6 className="text-[14px] text-[#BDBDBD] font-bold">Shop</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[414px] h-[1628px] xs:w-[1440px] xs:h-[271px] bg-[#FAFAFA]">
          <div className="w-[333px] h-[1615px] xs:w-[1088px] xs:h-[271px] xs:ml-[176px] ml-[41px] xs:pb-[48px] py-[24px]">
            <div className="w-[333px] h-[1615px] xs:w-[1088px] xs:h-[223px] xs:gap-[15px] space-y-[18px] xs:space-y-[0px] grid-cols-1 xs:flex xs:grid-cols-5 mx-auto justify-items-center">
              {productData1.map((product) => (
                <div
                  key={product.id}
                  className="product-card bg-[#FFFFFF] text-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[332px] h-[300px] xs:w-[206px] xs:h-[223px] transition-transform duration-600 transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[412px] h-[216px] xs:w-[1440px] xs:h-[98px] bg-[#FFFFFF]">
          <div className="w-[252px] h-[168px] xs:w-[1050px] xs:h-[98px] xs:ml-[195px] xs:pt-[24px] xs:pb-[21px] xs:gap-[80px] ml-[80px]">
            <div className="xs:w-[1049px] xs:h-[50px] grid grid-cols-1 xs:flex xs:justify-between justify-items-center gap-[24px]">
              <div className="w-[168px] h-[24px] pr-[1px] pl-[1px] gap-[15px]">
                <h6 className="text-[14px] text-[#737373] font-bold">
                  Showing all 12 results
                </h6>
              </div>
              <div className="w-[177px] h-[46px] pr-[1px] pl-[1px] gap-[15px] flex items-center">
                <h6 className="text-[14px] text-[#737373] font-bold">Views:</h6>
                <div className="w-[107px] h-[46px] gap-[15px] flex">
                  <button className="w-[46px] h-[46px] bg-[#ECECEC] border-[1px] rounded-[5px] p-[15px]">
                    <HiViewGrid className="w-[16px] h-[16px]" />
                  </button>
                  <button className="w-[46px] h-[46px] border-[1px] rounded-[5px] p-[15px] bg-[#ECECEC]">
                    <RxHamburgerMenu className="w-[16px] h-[16px]" />
                  </button>
                </div>
              </div>
              <div className="w-[252px] h-[50px] pr-[1px] pl-[1px] gap-[15px] flex">
                <div className="w-[141px] h-[50px] border-[1px] rounded-[5px] border-[#DDDDDD] bg-[#F9F9F9] flex">
                  <p className="text-[14px] text-[#737373] font-normal mt-[11px] ml-[18px]">
                    Popularity
                  </p>
                  <div className="w-[8px] h-[14px] mt-[10px]  text-[#737373]">
                    <RiArrowDropDownLine size={25} />
                  </div>
                </div>
                <div>
                  <button className="w-[94px] h-[50px] rounded-[5px] bg-[#23A6F0] px-[20px] py-[10px] gap-[10px] text-[14px] text-[#FFFFFF] font-bold">
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" hidden:xs w-[414px] h-[1173px] xs:w-[1440px] xs:h-[175px] bg-[#FAFAFA]">
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
      <section>
        <div className="w-[414px] h-[2832px] xs:w-[1440px] xs:h-[1778px] bg-[#FFFFFF] justify-around">
          <div className="w-[328px] h-[2832px] xs:w-[1124px] xs:h-[1778px] xs:ml-[158px] ml-[43px] py-[80px] xs:py-[48px] gap-[48px] grid grid-cols-1">
            <div className="w-[328px] h-[2550px] xs:w-[1048px] xs:h-[488px] gap-[30px] grid-cols-1 xs:flex xs:grid-cols-4">
              {productData2.map((product) => (
                <div
                  key={product.id}
                  className="product-card w-[328px] h-[615px] xs:w-[239px] xs:h-[488px] bg-[#FFFFFF] justify-items-center text-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[348px] h-[427px] xs:w-[239px] xs:h-[300px] transition-transform duration-600 transform hover:scale-105"
                  />
                  <div className="w-[239px] h-[188px] pt-[25px] pb-[35px] px-[25px] gap-[10px] grid grid-cols-1 items-center text-center">
                    <h5 className="text-16px font-bold text-[#252B42]">
                      {product.name}
                    </h5>

                    <Link
                      href="/"
                      className="text-[#737373] text-[14px] font-bold"
                    >
                      {product.description}
                    </Link>

                    <div className=" w-[108px] h-[34px] pt-[5px] pb-[5px] pl-[3px] pr-[3px] flex gap-[5px] items-center xs:justify-center ml-[38px]">
                      <h5 className="price text-[#BDBDBD] text-[16px] font-bold mt-2">
                        ${product.oldprice}
                      </h5>
                      <h5 className="price text-[#23856D] text-[16px] font-bold mt-2">
                        ${product.newprice}
                      </h5>
                    </div>
                    <div className="w-[82.2px] h-[16px] gap-[6.08px] flex flex-row items-center xs:justify-center ml-[46px] xs:ml-[50px]">
                      <FaRegCircle className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full text-[#23A6F0] " />
                      <FaRegCircle className="w-[16px] h-[16px] bg-[#23856D] rounded-full text-[#23856D] " />
                      <FaRegCircle className="w-[16px] h-[16px] bg-[#E77C40] rounded-full text-[#E77C40] " />
                      <FaRegCircle className="w-[16px] h-[16px] bg-[#252B42] rounded-full text-[#252B42] " />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden xs:w-[1048px] xs:h-[488px] xs:gap-[30px] xs:flex xs:grid-cols-4">
              {productData3.map((product) => (
                <div
                  key={product.id}
                  className="product-card w-[239px] h-[488px] bg-[#FFFFFF] text-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[348px] h-[427px] xs:w-[239px] xs:h-[300px] transition-transform duration-600 transform hover:scale-105"
                  />
                  <div className="w-[239px] h-[188px] pt-[25px] pb-[35px] px-[25px] gap-[10px] grid grid-cols-1 items-center text-center">
                    <h5 className="text-16px font-bold text-[#252B42]">
                      {product.name}
                    </h5>

                    <Link
                      href="/"
                      className="text-[#737373] text-[14px] font-bold"
                    >
                      {product.description}
                    </Link>

                    <div className=" w-[108px] h-[34px] pt-[5px] pb-[5px] pl-[3px] pr-[3px] flex gap-[5px] items-center xs:justify-center ml-[38px]">
                      <h5 className="price text-[#BDBDBD] text-[16px] font-bold mt-2">
                        ${product.oldprice}
                      </h5>
                      <h5 className="price text-[#23856D] text-[16px] font-bold mt-2">
                        ${product.newprice}
                      </h5>
                    </div>
                    <div className="w-[82.2px] h-[16px] gap-[6.08px] flex flex-row items-center xs:justify-center ml-[120px] xs:ml-[50px]">
                      <FaRegCircle className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full text-[#23A6F0] " />
                      <FaRegCircle className="w-[16px] h-[16px] bg-[#23856D] rounded-full text-[#23856D] " />
                      <FaRegCircle className="w-[16px] h-[16px] bg-[#E77C40] rounded-full text-[#E77C40] " />
                      <FaRegCircle className="w-[16px] h-[16px] bg-[#252B42] rounded-full text-[#252B42] " />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden xs:w-[1048px] xs:h-[488px] xs:gap-[30px] xs:flex xs:grid-cols-4">
              {productData4.map((product) => (
                <div
                  key={product.id}
                  className="product-card w-[239px] h-[488px] bg-[#FFFFFF] text-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[348px] h-[427px] xs:w-[239px] xs:h-[300px] transition-transform duration-600 transform hover:scale-105"
                  />
                  <div className="w-[239px] h-[188px] pt-[25px] pb-[35px] px-[25px] gap-[10px] grid grid-cols-1 items-center text-center">
                    <h5 className="text-16px font-bold text-[#252B42]">
                      {product.name}
                    </h5>

                    <Link
                      href="/"
                      className="text-[#737373] text-[14px] font-bold"
                    >
                      {product.description}
                    </Link>

                    <div className=" w-[108px] h-[34px] pt-[5px] pb-[5px] pl-[3px] pr-[3px] flex gap-[5px] items-center xs:justify-center ml-[38px]">
                      <h5 className="price text-[#BDBDBD] text-[16px] font-bold mt-2">
                        ${product.oldprice}
                      </h5>
                      <h5 className="price text-[#23856D] text-[16px] font-bold mt-2">
                        ${product.newprice}
                      </h5>
                    </div>
                    <div className="w-[82.2px] h-[16px] gap-[6.08px] flex flex-row items-center xs:justify-center ml-[120px] xs:ml-[50px]">
                      <FaRegCircle className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full text-[#23A6F0] " />
                      <FaRegCircle className="w-[16px] h-[16px] bg-[#23856D] rounded-full text-[#23856D] " />
                      <FaRegCircle className="w-[16px] h-[16px] bg-[#E77C40] rounded-full text-[#E77C40] " />
                      <FaRegCircle className="w-[16px] h-[16px] bg-[#252B42] rounded-full text-[#252B42] " />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          
          <button className="w-[313px] h-[74px] border-[1.35px] rounded-[6.73px] bg-[#FFFFFF] border-[#BDBDBD] xs:ml-[368px] ml-[10px]">
            <button className="w-[84px] h-[74px] border-[1px] p-[25px] bg-[#F3F3F3] text-[#BDBDBD] text-[14px] font-bold">
              <Link href="/" className="text-[14px] font-bold">
                First
              </Link>
            </button>
            <button className="w-[46px] h-[74px] border-[1px] pt-[25px] pb-[25px] pl-[20px] pr-[20px] border-[#E9E9E9] ">
              <Link
                href="/shop"
                className="text-[14px] font-bold  text-[#23A6F0]"
              >
                1
              </Link>
            </button>
            <button className="w-[46px] h-[74px] border-[1px] pt-[25px] pb-[25px] pl-[20px] pr-[20px] bg-[#23A6F0] border-[#E9E9E9] ">
              <Link
                href="/about"
                className="text-[14px] font-bold text-[#E9E9E9]"
              >
                2
              </Link>
            </button>
            <button className="w-[46px] h-[74px] border-[1px] pt-[25px] pb-[25px] pl-[20px] pr-[20px] border-[#E9E9E9]">
              <Link
                href="/blog"
                className="text-[14px] font-bold text-[#23A6F0]"
              >
                3
              </Link>
            </button>
            <button className="w-[85px] h-[74px] border-[1px] p-[25px] bg-[#FFFFFF] border-[#E8E8E8]">
              <Link
                href="/contact"
                className="text-[14px] font-bold text-[#23A6F0]"
              >
                Next
              </Link>
            </button>
          </button>
          </div>
        </div>
      </section>
      <section>
        <div className="xs:hidden w-[414px] h-[1173px] xs:w-[1440px] xs:h-[175px] bg-[#FAFAFA]">
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

export default shop1;
