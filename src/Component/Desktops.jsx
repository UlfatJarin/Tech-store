import React from 'react';
import { Tabs } from 'antd';
import MSIDesktops from './MSIDesktops';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'MSI Infinute Series',
    children: <MSIDesktops/>,
  },
  {
    key: '2',
    label: 'MSI Triden',
    children: <MSIDesktops/>,
  },
  {
    key: '3',
    label: 'MSI GL Series',
    children:<MSIDesktops/>,
  },
  {
    key: '4',
    label: 'MSI Nightblade',
    children: <MSIDesktops/>,
  },
];
const Desktops = () => <Tabs className='max-w-[1398px] mx-auto' defaultActiveKey="1" items={items} onChange={onChange} />;
export default Desktops;