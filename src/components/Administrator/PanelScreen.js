import React, { useState } from "react";
import { Layout, Menu, Button, Row, Col, Badge } from "antd";
import {
  UserOutlined,
  FileTextOutlined,
  BankOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./panel.css";
import "./admin.scss";
import { AdminRoutes } from "../../routes/Admin/admin.routes";
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const { Header, Sider, Content } = Layout;

const PanelScreen = () => {
  const { pendingCount } = useSelector((state) => state.request);
  const currentItem = localStorage.getItem("currentItem") ?? "1";
  const [collapsed, setCollapsed] = useState(false);
  const [currentITem, setCurrentITem] = useState([currentItem]);
  const menuClick = ({ item, key, keypath, domEvent }) => {
    setCurrentITem([key]);
    localStorage.setItem("currentItem", key);
  };

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className="layout">
      {/* Menú lateral de panel de administrador */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">LOGO</div>
        <Menu theme="dark" selectedKeys={currentITem} onClick={menuClick}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/admin/users" />
            <span>Usuarios</span>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>
            <Link to="/admin/requests" />
            <span>Solicitudes</span>
            <Badge
              className="site-badge-count-109"
              count={pendingCount}
              style={{ backgroundColor: "#52c41a" }}
            />
          </Menu.Item>
          <Menu.Item key="3" icon={<BankOutlined />}>
            <Link to="/admin/business" />
            <span>Negocios</span>
          </Menu.Item>
        </Menu>
      </Sider> {/*Fin menú lateral */}
      <Layout>
        <Header className="menu-header">
          <Row>
            <Col span={2}>
              <div className="menu-top">
                <Button type="link" onClick={toggle}>
                  {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
              </div>
            </Col>
            <Col span={20}>
              <h2>Panel de administrador</h2>
            </Col>
            <Col span={2} className="a-r">
              <Button type="link">
                Salir
                <CloseOutlined />
              </Button>
            </Col>
          </Row>
        </Header>
        <Content>
          <AdminRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(PanelScreen);
