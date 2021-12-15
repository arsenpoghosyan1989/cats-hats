import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

type Props = {
  collapsed: boolean;
  toggle: () => void;
};

function Header({ collapsed, toggle }: Props) {
  return (
    <Layout.Header style={{ padding: 0, backgroundColor: '#fff' }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        onClick: toggle
      })}
    </Layout.Header>
  );
}

export default Header;
