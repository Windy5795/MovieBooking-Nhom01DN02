import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CarouselReducer } from "../../../../redux/reducers/CarouselReducer";
import axios from "axios"
import { LayDanhSachBanner } from "../../../../redux/actions/CarouselActions";
import "./HomeCarousel.css"


const contentStyle = {
  height: "750px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);

  // console.log("arrImg",arrImg)

  const dispatch = useDispatch();

  useEffect(() => { 

    const action = LayDanhSachBanner()

    dispatch(action);

   }, [])



  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img src={item.hinhAnh} className="w-full opacity-0" alt={item.hinhAnh} />
          </div>
        </div>
      );
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://metiz.vn/static/assets/websites/images/bg-session-movie.png')`,
      }}
    >
      <div className="container">
        <Carousel autoplay>{renderImg()}</Carousel>
      </div>
    </div>
  );
}
