import { Typography } from 'antd'
import React from 'react'

const Sellers = () => {
  return (
    <>
    <Flex align = 'centre' justify = 'space-between' gap='large'>

        <Flex gap='small' calssName = 'top-seller'>
            <Flex  vertical="row" align = "centre" justify="space-between">
                <Typography.Title level={5} strong calssName = 'primary--color'>
                     Top seller
                </Typography.Title>
                <Button type = 'link' className="gray--color">
                    View All
                </Button>

            </Flex>
        </Flex>

    </Flex>

<Flex align = 'centre' justify = 'space-between' gap='large'>

<Flex gap='small' calssName = 'top-seller'>
    <Flex  vertical="row" align = "centre" justify="space-between">
        <Typography.Title level={5} strong calssName = 'primary--color'>
             Top seller
        </Typography.Title>
        <Button type = 'link' className="gray--color">
            View All
        </Button>

    </Flex>
</Flex>

</Flex>
</>
  );
};

export default Sellers