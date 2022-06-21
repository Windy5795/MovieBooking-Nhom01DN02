import React, { Fragment, useState } from "react";
import { Tabs, Radio, Space } from "antd";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;

function HomeMenu(props) {
  const [tabPosition, setTabPosition] = useState("left");

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  const renderHeThongRap = () => {
    return props.heThongRapChieu?.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <img src={heThongRap.logo} className="rounded-full" width={50} />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap.slice(0,5).map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <Fragment>
                      <div
                        style={{
                          width: "450px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img className="w-1/5" src={cumRap.hinhAnh} />
                        <div className="text-justify px-2 font-bold w-4/5 text-gray-800">
                          {cumRap.tenCumRap}
                          <p className="text-red-300 text-sm">{cumRap.diaChi}</p>
                        </div>
                      </div>
                      <hr />
                    </Fragment>
                  }
                  key={index}
                >
                  {/* {console.log(cumRap.maCumRap)} */}
                  {cumRap.danhSachPhim.slice(0,5).map((phim, index) => {
                    return (
                      <Fragment key={index}>
                        <div
                          className="mb-5"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            height: 150,
                            backgroundColor: "#F9F6EC",
                          }}
                        >
                          <img
                            style={{ width: 100 }}
                            src={phim.hinhAnh}
                            alt={phim.tenPhim}
                            onError={((e) => { 
                              {console.log(e.target.onerror)}
                              e.target.onerror = null;
                              e.target.src = 'https://picsum.photos/100/150';
                             })}
                             
                          />
                          
                          <div className="ml-2">
                            <h1 className="text-2xl text-gray-900 font-bold">
                              {phim.tenPhim}
                            </h1>
                            <div className="grid grid-cols-6 gap-6">
                              {phim.lstLichChieuTheoPhim
                                ?.slice(0, 12)
                                .map((lichChieu, index) => {
                                  return (
                                    <NavLink
                                      style={{
                                        borderRadius: 25,
                                        backgroundColor: "#fffff7",
                                        color: "#000000",
                                        padding: "5px 7px",
                                        boxShadow:'-2px -2px 6px 0 rgba(255, 255, 255, 0.1), 2px 2px 6px 0 rgba(0, 0, 0, 0.8)',
                                      }}
                                      to="/"
                                      key={index}
                                    >
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("hh:mm A")}
                                    </NavLink>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <div className="container pt-5">
      {/* {console.log(props, "props123")} */}
      <Tabs className="" tabPosition={tabPosition}>
        {renderHeThongRap()}
      </Tabs>
    </div>
  );
}

export default React.memo(HomeMenu);
