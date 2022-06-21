import { layDanhSachPhim } from "../../services/QuanLyPhimService";
import { LAY_DANH_SACH_PHIM } from "../types/FilmType";

export const LayDanhSachPhim = () => {
    return (dispatch2) => {
      let promise = layDanhSachPhim();
  
      promise.then((result) => {
        //   console.log(result)
        dispatch2({
          type: LAY_DANH_SACH_PHIM,
          arrFilm: result.data.content,
        });
      });
      promise.catch((errors) => {
        console.log(errors);
      });
    };
  };