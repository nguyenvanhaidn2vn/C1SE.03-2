import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import './DonHangAdmin.css'
import { Checkbox, Col, Grid, Typography } from "antd";
import LayoutAdmin from '../Layout/Admin'



const EvenCustom = () => {
  return (
    <Col className="col-even">
      <Checkbox className="col__checkbox"></Checkbox>
      <Typography style={{ width: '30%' }}>#2508 Trần Viết Sinh</Typography>
      <Typography style={{ width: '30%' }}>Th4 20, 2022</Typography>
      <Typography style={{ width: '30%' }}><p class="pending">Tạm giữ</p></Typography>
      <Typography>0 đ</Typography>
    </Col>
  );
};

const OddCustom = () => {
  return (
    <Col className="col-odd">
      <Checkbox className="col__checkbox"></Checkbox>
      <Typography style={{ width: '30%' }}>#2508 Trần Viết Sinh</Typography>
      <Typography style={{ width: '30%' }}>Th4 20, 2022</Typography>
      <Typography style={{ width: '30%' }}>
        <p class="processing">Đang xử lý</p>
      </Typography>
      <Typography>0 đ</Typography>
    </Col>
  );
};

function ShowProducts(props) {
  return (
    <LayoutAdmin>
      <Col>
        <Col className="col-even">
          <Checkbox className="col__checkbox"></Checkbox>
          <Typography style={{ width: '30%' }}>Đơn Hàng</Typography>
          <Typography style={{ width: '30%' }}>Ngày</Typography>
          <Typography style={{ width: '30%' }}>Tình Trạng</Typography>
          <Typography >Tổng</Typography>
        </Col>

        <OddCustom />
        <EvenCustom />
        <OddCustom />
        <EvenCustom />
        <OddCustom />
        <EvenCustom />
        <OddCustom />

        <Col className="col-even">
          <Checkbox className="col__checkbox"></Checkbox>
          <Typography style={{ width: '30%' }}>Đơn Hàng</Typography>
          <Typography style={{ width: '30%' }}>Ngày</Typography>
          <Typography style={{ width: '30%' }}>Tình Trạng</Typography>
          <Typography >Tổng</Typography>
        </Col>
      </Col>
    </LayoutAdmin>
  );
}

ShowProducts.propTypes = {};

export default ShowProducts;
