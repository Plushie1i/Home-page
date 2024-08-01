import React from 'react'
import { Typography, Flex, Card, Button, Image } from 'antd';
import PlantData from '../PlantData';
const {Meta} = Card;
const Products = () => {
  return (
    <>
    <Flex>
      <Typography.Title level={3} strong className ="primary--color">
        My Listing
      </Typography.Title>
      <Button type = "link" className="gray--color" >
        View All
      </Button>
    </Flex>

  
      < Flex align = "centre" gap = "large">

        { PlantData.map((plant) => (
          <Card key = {plant.id} hoverable className = "plant-card">
            <Image src = {plant.picture} style = {{width: '130px'}} />
            <Meta title={plant.name} style={{marginTop: '1rem'}}/>
          </Card>

        ))};
    
    </Flex>
    </>
  );
};

export default Products;