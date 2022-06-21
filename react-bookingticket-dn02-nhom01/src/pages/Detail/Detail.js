import React, { Fragment } from "react";
import styled from "styled-components";
import "./DetailCard.css";
import "./DetailBox.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { layThongTinChiTietPhimAction } from "../../redux/actions/QuanLyRapActions";
import moment from "moment";
import { Radio, Space, Tabs } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);

  console.log({ filmDetail });

  const { TabPane } = Tabs;

  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;

    dispatch(layThongTinChiTietPhimAction(id));
  }, []);

  const renderStar = () => {
    let star = [],
      i = 0,
      len = filmDetail.danhGia;

    while ((i++, i <= len)) star.push(i);
    return star.map((i, index) => {
      return (
        <Fragment key={index}>
          <input id={"star " + i} name="rating" type="radio" defaultValue={i} />
          <label className="full" htmlFor={"star" + i} />
        </Fragment>
      );
    });
  };

  return (
    <BackGround style={{ backgroundImage: `url(${filmDetail.hinhAnh})` }}>
      <MainContainer>
        <div className="card">
          <div className="card_left">
            <img src={filmDetail.hinhAnh} />
          </div>
          <div className="card_right">
            <h1>{filmDetail.tenPhim}</h1>
            <div className="card_right__details">
              <ul>
                <li>2003</li>
                <li>111 min</li>
                <li>Action</li>
              </ul>
            </div>
            <div className="card_right__details">
              <div className="card_day">
                Ngày chiếu:
                {' '+moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
              </div>
              <div className="card_right__rating">
                <div className="card_right__rating__stars">
                  <h3>Đánh giá:</h3>
                  <fieldset className="rating">{renderStar()}</fieldset>
                </div>
              </div>
              <div className="card_right__button">
                <a href={filmDetail.trailer} target="_blank">
                  WATCH TRAILER
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="detailTab container"
          style={{
            position: "absolute",
            bottom: 0,
            background: "rgba(0, 0, 0, 0.55)",
            boxShadow: "0px 20px 30px 3px rgba(0, 0, 0, 0.55)",
            borderRadius: "10px 10px 0 0",
          }}
        >
          <Tabs defaultActiveKey="1" centered>
            <TabPane
              tab="Lịch Chiếu"
              key="1"
              style={{ minHeight: 320, color: "white" }}
            >
              <Tabs className="Tabs" tabPosition={"left"}>
                {filmDetail.heThongRapChieu?.map((htr, index) => {
                  return (
                    <TabPane
                      tab={
                        <img
                          src={htr.logo}
                          className="rounded-full"
                          width={50}
                        />
                      }
                      key={index}
                    >
                      {htr.cumRapChieu?.map((cumRap, index) => {
                        return (
                          <div className="flex items-center mb-5" key={index}>
                            <div className="flex flex-row">
                              <img
                                src={cumRap.hinhAnh}
                                style={{ width: 60, height: 60 }}
                                alt={cumRap.tenCumRap}
                              />
                              <div className="ml-2">
                                <p
                                  style={{
                                    minWidth:500,
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    lineHeight: 1,
                                    color: "white",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  {cumRap.tenCumRap}
                                </p>
                                <p
                                  style={{
                                    color: "rgb(255,255,0,0.6)",
                                    margin: 0,
                                  }}
                                >
                                  {cumRap.tenCumRap}
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-6 gap-6 ml-5">
                              {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                return (
                                  <NavLink
                                    style={{
                                      borderRadius: 25,
                                      backgroundColor: "rgba(192,192,192,0.5)",
                                      color: "#000000",
                                      padding: "5px 10px",
                                      margin: "20px 0 20px 0",
                                      boxShadow:
                                        "-2px -2px 6px 0 rgba(255, 255, 255, 0.1), 2px 2px 6px 0 rgba(0, 0, 0, 0.8)",
                                    }}
                                    to="/"
                                    key={index}
                                  >
                                    {moment(lichChieu.ngayChieuGioChieu).format(
                                      "hh:MMA"
                                    )}
                                  </NavLink>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </TabPane>
                  );
                })}
              </Tabs>
            </TabPane>
            <TabPane
              tab="Thông Tin"
              key="2"
              style={{ minHeight: 320 }}
            >
              {filmDetail.moTa}
            </TabPane>
            <TabPane
              tab="Đánh Giá"
              key="3"
              style={{ minHeight: 320 }}
            ></TabPane>
          </Tabs>
        </div>
      </MainContainer>
    </BackGround>
  );
}

const BackGround = styled.div`
  background-size: 100%;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 1200px;
  width: 100%;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8.5px);
`;
