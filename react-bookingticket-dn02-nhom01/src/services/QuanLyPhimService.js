import { GROUPID } from "../util/setting/config";
import { baseService } from "./baseService";




export class QuanLyPhimService extends baseService{

    constructor(){
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
    }

    layDanhSachPhim = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
    
}

const QLPhimService = new QuanLyPhimService();

export const {layDanhSachBanner, layDanhSachPhim} = QLPhimService;