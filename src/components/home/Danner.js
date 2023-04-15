import React from "react";
import Slider from "react-slick";
import { bannerImgOne,bannerImgTwo,bannerImgThree,bannerImgFour,bannerImgFive } from "../../assets";
const Banner = () => {
    const settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
        <div className="">
          <ul className="w-full flex items-center justify-center absolute bottom-9 cursor-pointer"> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div className="text-white w-6 h-6 mx-1 bg-amazon_blue flex items-center justify-center rounded-full">
          {i + 1}
        </div>
      )
    };
    return(
        <div className="relative h-full -z-1">
            <Slider {...settings}>
          <div>
            <img src={bannerImgOne} alt="banner"/>
          </div>
          <div>
            <img src={bannerImgTwo} alt="banner"/>
          </div>
          <div>
            <img src={bannerImgThree} alt="banner"/>
          </div>
          <div>
            <img src={bannerImgFour} alt="banner"/>
          </div>
          <div>
            <img src={bannerImgFive} alt="banner"/>
          </div>
        </Slider>
        </div>
    )
}

export default Banner;