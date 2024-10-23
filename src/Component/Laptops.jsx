import React from 'react';
import { Tabs } from 'antd';
import MSILaptop from './MSILaptop';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'MSI Infinute Series',
    children: <MSILaptop/>,
  },
  {
    key: '2',
    label: 'MSI Triden',
    children: <MSILaptop/>,
  },
  {
    key: '3',
    label: 'MSI GL Series',
    children: <MSILaptop/>,
  },
  {
    key: '4',
    label: 'MSI Nightblade',
    children: <MSILaptop/>,
  },
];
const Laptops = () => <Tabs className='max-w-[1398px] mx-auto' defaultActiveKey="1" items={items} onChange={onChange} />;
export default Laptops;