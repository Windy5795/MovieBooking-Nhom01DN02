import { LAY_DANH_SACH_PHIM, SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../types/FilmType";
import { SET_CHI_TIET_PHIM } from "../types/QuanLyRapType";

const stateDefault = {
  arrFilm: [{}],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
  filmDetail: {}
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;
      return { ...state };
    }

    case SET_PHIM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;

      state.arrFilm = state.arrFilmDefault?.filter(phim => phim.dangChieu === state.dangChieu);
      return {...state}
    }

    case SET_PHIM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;

      state.arrFilm = state.arrFilmDefault?.filter(phim => phim.sapChieu === state.sapChieu);
      return {...state}
    }

    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail;

      return {...state}
    }

    default:
      return state;
  }
};
