import React from 'react';
import {Flex} from 'antd';
import Banner from './Banner';

const MainContent = () => {
  return (
    <div>
        <div style={ { flex: 1}}>
            <Flex vertical gap="2.3ream">
                <Banner />
                
                
            </Flex>
        </div>
    </div>
  )
}

export default MainContent;