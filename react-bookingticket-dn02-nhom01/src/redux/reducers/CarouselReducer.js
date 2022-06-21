import { LAY_DANH_SACH_BANNER } from "../types/BannerType";

const stateDefault = {
  arrImg: [],
};

export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_BANNER: {
      state.arrImg = action.arrImg;
      return { ...state };
    }

    default:
      return state;
  }
};
