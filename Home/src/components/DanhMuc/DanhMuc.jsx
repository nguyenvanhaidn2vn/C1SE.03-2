import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Col, Grid, Button, Select, Typography } from "antd";
import "antd/dist/antd.css";
import "./DanhMuc.css";
import Layout from "../Layout/Admin";
import { AiFillPlusCircle, AiFillDelete, AiFillFileAdd } from "react-icons/ai";


const { Option } = Select;

function Danhmuc(props) {
  return (
    <Layout>
    <Col className="admin__content">
      <Button className="button__category">
        <AiFillPlusCircle style={{ marginRight: "6px" }} />
        Thêm mới Danh Mục
      </Button>
      <Col style={{ marginTop: "12px", display: "flex" }}>
        <Col className="content__left">
          <Typography className="content__header">Tên Danh Mục</Typography>
          <Typography
            className="content__body">
            Danh mục 1
          </Typography>
          <Typography className="content__body-1"> 
          Danh mục 2
          </Typography>
          <Typography
            className="content__body">
             Danh mục 3
          </Typography>
          <Typography className="content__body-1"> 
          Danh mục 4
          </Typography>
        </Col>
        <Col className="content__right">
          <Typography className="content__header">Chức Năng</Typography>
          <Col className="content__body"
          >
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}} >
              <AiFillDelete />
            </Button>
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillFileAdd />
            </Button>
          </Col >
          <Col className="content__body-1">
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillDelete />
            </Button>
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillFileAdd />
            </Button>
          </Col>
          <Col
           className="content__body"
          >
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}} >
              <AiFillDelete />
            </Button>
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillFileAdd />
            </Button>
          </Col>
          <Col className="content__body-1">
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillDelete />
            </Button>
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillFileAdd />
            </Button>
          </Col>
          <Col
            className="content__body"
          >
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}} >
              <AiFillDelete />
            </Button>
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillFileAdd />
            </Button>
          </Col>
        </Col>
      </Col>
    </Col>
    </Layout>
  );
}

Danhmuc.propTypes = {};

export default Danhmuc;