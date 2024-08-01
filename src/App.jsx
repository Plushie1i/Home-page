import { useState } from 'react';
import { Layout, Button, Flex } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import React from 'react';
import Sidebar from './components/Sidebar';
import CustomHeader from './components/Header.jsx';
import SideContent from './components/SideContent.jsx';
import MainContent from './components/MainContent.jsx';
import './App.css';
const { Sider, Header, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
  <Layout>
    <Sider theme='light' trigger={null} collapsible collapsed={collapsed} className='sider'>
      <Sidebar />
      <Button type = 'text'
       icon={collapsed ? <MenuFoldOutlined /> : <MenuFoldOutlined />}
       onClick={() => setCollapsed(!collapsed)}
       className = "triger-btn" />  
     </Sider> 
    <Layout>
      <Header className='header'>
        <CustomHeader />
      </Header>
      
      <Content className='content'>
      <Flex gap='large'> 
        <MainContent />
        <SideContent />
      </Flex>

      </Content>
      
      </Layout>
      </Layout>
  );
};

export default App;