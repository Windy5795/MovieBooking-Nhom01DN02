import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Film from "../../components/Film/Film";
import MultipleRows from "../../components/ReactSlick/MultipleRowsSlick";
import { LayDanhSachPhim } from "../../redux/actions/QuanLyPhimActions";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapActions";
import { QuanLyPhimReducer } from "../../redux/reducers/QuanLyPhimReducer";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import HomeMenu from "./HomeMenu/HomeMenu";

export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)

  const dispatch = useDispatch();

  useEffect(() => { 
    const action = LayDanhSachPhim();

    dispatch(action);

    dispatch(layDanhSachHeThongRapAction());

   }, [])

  return (
    <div>
      <HomeCarousel/>
      <section style={{backgroundImage:`url(https://metiz.vn/static/assets/websites/images/bg-session-movie.png)`,backgroundSize:'cover'}} className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRows arrFilm={arrFilm} />
          {/* <MultipleRows/> */}
          {/* <div className="flex flex-wrap -m-4">
            {renderFilm()}
          </div> */}
        </div>
      </section>

      <HomeMenu heThongRapChieu={heThongRapChieu} />
    </div>
  );
}
