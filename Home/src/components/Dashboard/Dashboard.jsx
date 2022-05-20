import React from "react";
import { Card, Row, Col } from "antd";
import {
    AuditOutlined,
    BookOutlined,
    FileSearchOutlined,
    HomeOutlined,
    RiseOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Line } from "@ant-design/charts";
import { Typography } from "antd";
import LayoutAdmin from '../Layout/Admin'

const { Title } = Typography;

function dashboard() {
    //Chart
    const data = [
        { Date: "01", year: "2022", value: 20 },
        { Date: "02", year: "2022", value: 40 },
        { Date: "03", year: "2022", value: 45 },
        { Date: "04", year: "2022", value: 25 },
        { Date: "05", year: "2022", value: 65 },
        { Date: "06", year: "2022", value: 48 },
        { Date: "07", year: "2022", value: 79 },
        { Date: "08", year: "2022", value: 30 },
        { Date: "09", year: "2022", value: 35 },
        { Date: "10", year: "2022", value: 38 },
        { Date: "11", year: "2022", value: 22 },
        { Date: "12", year: "2022", value: 72 },
    ];
    const config = {
        data,
        padding: "auto",
        color: "#4e36e2",
        xField: "Date",
        yField: "value",
        seriesField: "year",
    };
    //Jobs
    const jobs = [
        { job: "Nhựa abc", amount: "40" },
        { job: "Nhựa abc", amount: "40" },
        { job: "Nhựa abc", amount: "40" },
        { job: "Nhựa abc", amount: "40" },
        { job: "Nhựa abc", amount: "40" },
        { job: "Nhựa abc", amount: "40" },
        { job: "Nhựa abc", amount: "40" },
        { job: "Nhựa abc", amount: "40" },
    ];
    //
    //Trending

    const trending = [
        "Nhua nhai",
        "Nhua trung quoc",
        "Nhua trung quoc",
        "Nhua trung quoc",
        "Nhua VN",
    ];
    //
    //
    const cardValue = [
        {
            title: "Tổng sản phẩm",
            amount: "45",
            icon: <FileSearchOutlined />,
            color: "#4e36e2",
        },
        {
            title: "Tổng số danh mục",
            amount: "10",
            icon: <UserOutlined />,
            color: "#1acf85",
        },
        {
            title: "Tổng số tài khoản",
            amount: "300",
            icon: <HomeOutlined />,
            color: "#48a9f8",
        },
        {
            title: "Tổng doanh thu",
            amount: "5000$",
            icon: <AuditOutlined />,
            color: "#8bc741",
        },
    ];
    //
    const CardComponent = ({ props }) => {
        return (
            <Col span={6}>
                <Card
                    style={{
                        backgroundColor: props.color,
                        color: "white",
                        fontSize: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 5px 10px rgb(0 0 0 / 10%)",
                    }}
                >
                    <Row>
                        <Col span={8}>
                            <div
                                style={{
                                    borderRadius: "10px",
                                    border: " solid 1px #fff",
                                    height: "60px",
                                    width: "60px",
                                    fontSize: "27px",
                                    textAlign: "center",
                                    transform: "translate(14px,15px)",
                                }}
                            >
                                {props.icon}
                            </div>
                        </Col>
                        <Col span={16}>
                            <Row gutter={[24, 8]}>
                                <Col
                                    span={24}
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        marginRight: "16px",
                                    }}
                                >
                                    {props.title}
                                </Col>
                                <Col
                                    span={24}
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        marginRight: "16px",
                                        fontWeight: "bold",
                                        fontSize: "36px",
                                    }}
                                >
                                    {props.amount}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>
        );
    };
    return (
        <LayoutAdmin>
            <Row gutter={[48, 24]}>
                {cardValue.map((element, i) => {
                    return <CardComponent key={i} props={element} />;
                })}
            </Row>
            <Row gutter={[48, 48]} style={{ marginTop: "60px" }}>
                <Col span={6}>
                    <Card style={{ backgroundColor: "white", borderRadius: "10px" }}>
                        <Row
                            style={{
                                justifyContent: "center",
                                margin: "0 0 16px",
                                fontWeight: "bold",
                                fontSize: "24px",
                            }}
                        >
                            <BookOutlined
                                style={{
                                    color: "blue",
                                    marginRight: "10px",
                                    transform: "translateY(9px)",
                                }}
                            />{" "}
                            Tên sản phẩm
                        </Row>
                        {jobs.map((element, i) => {
                            return (
                                <Row
                                    key={i}
                                    style={{
                                        margin: " 16px",
                                        fontSize: "16px",
                                    }}
                                >
                                    <Col span={12}>{element.job}</Col>
                                    <Col
                                        span={12}
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            fontWeight: "bold",
                                            fontSize: "20px",
                                            transform: "translateY(-3px)",
                                            color: "#4e36e2",
                                        }}
                                    >
                                        {element.amount}
                                    </Col>
                                </Row>
                            );
                        })}
                    </Card>
                </Col>
                {/* chart  */}
                <Col span={12}>
                    <Card style={{ backgroundColor: "white", borderRadius: "10px" }}>
                        <Title
                            level={3}
                            style={{
                                fontWeight: "bold",
                                textAlight: "center",
                            }}
                        >
                            Chart
                        </Title>
                        <Line {...config} />
                    </Card>
                </Col>
                {/* trending */}
                <Col span={6}>
                    <Card style={{ backgroundColor: "white", borderRadius: "10px" }}>
                        <Row
                            style={{
                                justifyContent: "center",
                                margin: "0 0 16px",
                                fontWeight: "bold",
                                fontSize: "24px",
                            }}
                        >
                            <RiseOutlined
                                style={{
                                    color: "blue",
                                    marginRight: "10px",
                                    transform: "translateY(9px)",
                                }}
                            />
                            Sản phẩm bán chạy
                        </Row>
                        {trending.map((job, i) => {
                            return (
                                <Row
                                    key={i}
                                    style={{
                                        margin: " 16px",
                                        fontSize: "16px",
                                    }}
                                >
                                    <Col
                                        span={12}
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "20px",
                                            color: "blue",
                                        }}
                                    >
                                        {i + 1}
                                    </Col>
                                    <Col
                                        span={12}
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            transform: "translateY(-3px)",
                                        }}
                                    >
                                        {job}
                                    </Col>
                                </Row>
                            );
                        })}
                    </Card>
                </Col>
            </Row>
        </LayoutAdmin>
    );
}

export default dashboard;
