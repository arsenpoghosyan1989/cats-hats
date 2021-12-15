import React, { useState, useEffect } from 'react';
import { Layout, Button, Space, Row, Col, Image, Menu } from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';
import Header from '../../components/Header';
import SortableTable from '../../components/SortableTable';

import { useTranslation } from 'react-i18next';
import {
  Link,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../redux/store';
import { fetchCategories } from '../../redux/categories';

const { Sider, Content } = Layout;

function Home() {
  const { t } = useTranslation('common');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const dispatch = useDispatch();

  const { categories, isLoading } = useSelector(
    (state: InitialState) => state.categories
  );

  function toggle() {
    setIsCollapsed(!isCollapsed);
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[]}>
          {categories.map(({ id, name }) => (
            <Menu.Item key={id} icon={<UserOutlined />}>
              <Link to={`${id}`}>{name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header collapsed={isCollapsed} toggle={toggle} />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
         <SortableTable /> 
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
