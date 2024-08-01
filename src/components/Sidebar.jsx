import {Flex, Menu} from 'antd';

import React from 'react'
import {FaLeaf} from 'react-icons/fa6';
import { UserOutlined, LoginOutlined, LogoutOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined, ProfileOutlined } from '@ant-design/icons';
const Sidebar = () => {
   return (
    <div>
        <Flex align= "center" justify = "center">
            <div className="logo">
                <FaLeaf />
            </div>
        </Flex>
        <Menu mode = 'inline' defaultSelectedKeys = {['1']} className = 'menu-bar' items={[{
            key : '1',
            icon: < UserOutlined />,
            label: 'Dashboard',

        },
        {
            key : '2',
            icon: <CarryOutOutlined />,
            label: 'My Orders',

        },
        {
            key : '3',
            icon: < OrderedListOutlined />,
            label: 'To DO',

        },
        {
            key : '4',
            icon: < ProfileOutlined />,
            label: 'Profile',

        },
        {
            key : '5',
            icon: <  SettingOutlined />,
            label: 'Setting',

        },
        {
            key : '6',
            icon: < LogoutOutlined />,
            label: 'Logout',

        },
       
        ]} />
    </div>
   ) 
}
export default Sidebar;