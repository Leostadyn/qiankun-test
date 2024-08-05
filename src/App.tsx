import React, {useEffect, useState} from "react";
import "./App.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { NavLink } from "react-router-dom";
import {start} from "qiankun";
const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="App">
      <Layout className="layout-container">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <NavLink to="/app-vue">vue应用</NavLink>,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <NavLink to="/app-react">react应用</NavLink>,
              },
            ]}
          />
        </Sider>
        <Layout className="layout-main">
          <Header className="header">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="collapse-btn"
            />
          </Header>
          <Content id="container" className="layout-content">
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
