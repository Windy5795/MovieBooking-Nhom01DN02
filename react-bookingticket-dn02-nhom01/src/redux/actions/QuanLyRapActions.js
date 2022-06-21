import {
  layDanhSachHeThongRap,
  layThongTinLichChieuPhim,
} from "../../services/QuanLyRapService";
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";

export const layDanhSachHeThongRapAction = () => {
  return (dispatch2) => {
    let promise = layDanhSachHeThongRap();

    promise.then((result) => {
      if (result.status === 200) {
        // console.log('result',result.data.content)
        dispatch2({
          type: SET_HE_THONG_RAP_CHIEU,
          heThongRapChieu: result.data.content,
        });
      }
    });
    promise.catch((errors) => {
      console.log(errors.response?.data);
    });
  };
};

export const layThongTinChiTietPhimAction = (id) => {
  return (dispatch2) => {
    let promise = layThongTinLichChieuPhim(id);

    promise.then((result) => {
      dispatch2({
        type: SET_CHI_TIET_PHIM,
        filmDetail: result.data.content
      })
    });
    promise.catch((errors) => {
      console.log(errors);
    });
  };
};
