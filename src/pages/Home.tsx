import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import item from '../routers/router'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons"
import {useNavigate,Outlet} from 'react-router-dom'
const { Header, Sider, Content } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()
  const onMenuClick = (e: any) => {
    navigate(e.key)
  }
  return (
    <Layout style={{height:'100vh'}}>
        
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='text-white m-5 text-bold'>管理系统</div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={item}
          onClick={onMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;