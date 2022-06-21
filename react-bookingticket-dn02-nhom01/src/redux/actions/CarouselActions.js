import axios from "axios";
import { layDanhSachBanner, QLPhimService } from "../../services/QuanLyPhimService";
import { DOMAIN, TOKEN_CYBER } from "../../util/setting/config";
import { LAY_DANH_SACH_BANNER } from "../types/BannerType";


export const LayDanhSachBanner = () => {
  return (dispatch2) => {
    let promise = layDanhSachBanner();

    promise.then((result) => {
      //   console.log(result)
      dispatch2({
        type: LAY_DANH_SACH_BANNER,
        arrImg: result.data.content,
      });
    });
    promise.catch((errors) => {
      console.log(errors);
    });
  };
};
