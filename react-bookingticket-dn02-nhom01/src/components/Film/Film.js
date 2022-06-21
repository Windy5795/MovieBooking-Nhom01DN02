import React from "react";
import { NavLink } from "react-router-dom";
import './Film.css';

export default function Film(props) {

  const { phim } = props;
  // console.log(phim)

  return (
    <div className="mr-4 h-full border-gray-900 bg-opacity-75 px-8 pt-8 pb-8 rounded-xl overflow-hidden text-center relative">
      <div className="backGroundImg"
        style={{backgroundImage:`url(${phim.hinhAnh})`}}      
      >
        <img src={phim.hinhAnh} alt={phim.tenPhim} className='opacity-0 w-full' style={{height:'500px'}} />
      </div>
      <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-50 mb-3 h-16 mt-2">
        {phim.tenPhim}
      </h1>
      <p className="leading-relaxed text-gray-50 mb-3 h-12">{phim?.moTa?.length > 100 ? <span>{phim.moTa.slice(0,100)} ...</span> : <span>{phim.moTa}</span>}</p>
      <NavLink to={`/detail/${phim.maPhim}`} className="text-indigo-500 font-bold inline-flex items-center">
        ĐẶT VÉ
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </NavLink>
    </div>
  );
}
