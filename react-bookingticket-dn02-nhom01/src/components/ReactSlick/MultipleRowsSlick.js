import React, { Component, useState } from "react";
import Slider from "react-slick";
import "./MultipleRowsSlick.css";
import { LeftOutline, RightOutLine } from "@ant-design/icons";
import Film from "../Film/Film";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../../redux/types/FilmType";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      {...props}
      className="slick-next"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      {...props}
      className="slick-prev"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const MultipleRows = (props) => {
  // const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const dispatch = useDispatch();

  const renderFilm = () => {
    return props.arrFilm.map((item, index) => {
      return (
        <div className="width-item" key={index}>
          <Film phim={item} />
        </div>
      );
    });
  };

  let activeClassDangChieu = dangChieu === true ? 'active-Film' : 'non-active-Film';
  let activeClassSapChieu = sapChieu === true ? 'active-Film' : 'non-active-Film';

  

  // const [btnAvtive, setBtnActive] = useState('non-active-btn')

  // const [active, setActive] = useState("");

  // const handleClick = (event) => {
  //   setActive(event.target.id);
  //   console.log("event.target.id",event.target.id)
  // };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <button
        type="button"
        className={`${activeClassDangChieu} px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100 mr-2`}
        onClick={() => {
          const action = { type: SET_PHIM_DANG_CHIEU };
          dispatch(action);
          // {handleClick()}
        }}
      >
        PHIM ĐANG CHIẾU
      </button>
      <button
        type="button"
        className={`${activeClassSapChieu} px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100`}
        onClick={() => {
          const action = { type: SET_PHIM_SAP_CHIEU };
          dispatch(action);
          
        }}
      >
        PHIM SẮP CHIẾU
      </button>
      <Slider {...settings}>{renderFilm()}</Slider>
    </div>
  );
};

export default MultipleRows;
