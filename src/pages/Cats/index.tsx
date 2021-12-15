import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  useParams,
  Link
} from 'react-router-dom';
import {
  Table,
  Space,
  Button,
  Row,
  Typography,
  Image,
  Layout,
  Menu,
  Spin
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { fetchCats } from '../../redux/cats';
import { PAGE_SIZE } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../redux/store';
import { fetchCategories } from '../../redux/categories';
import Header from '../../components/Header';
import { fallback } from '../../utils';

const { Title } = Typography;
const { Sider, Content } = Layout;

export type Props = {
  data: any[];
  loading: boolean;
  count: number;
};

function CatsByCategory() {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const { id } = useParams();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { categories } = useSelector((state: InitialState) => state.categories);
  const { cats, isLoading } = useSelector((state: InitialState) => state.cats);

  const onLoadMore = async (page: number, pageSize: number | undefined = 0) => {
    dispatch(
      fetchCats({
        limit: pageSize,
        offset: (page - 1) * pageSize,
        id
      })
    );
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(
      fetchCats({
        limit: PAGE_SIZE,
        id
      })
    );
  }, [id]);

  useEffect(() => {
    !categories.length && dispatch(fetchCategories());
  }, [dispatch, categories]);

  function toggle() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[id]}>
          {categories.map(({ id, name }) => (
            <Menu.Item key={id} icon={<UserOutlined />}>
              <Link to={`/${id}`}>{name}</Link>
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
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={2} style={{ marginBottom: 0 }}>
              {t('cateCategory')}
            </Title>
            <Row>
              {isLoading ? (
                <Spin />
              ) : (
                cats?.map(({ id, url }) => (
                  <Image key={id} src={url} fallback={fallback} />
                ))
              )}
            </Row>
            <Button
              loading={isLoading}
              onClick={() => onLoadMore(currentPage, PAGE_SIZE)}
            >
              {t('loadMore')}
            </Button>
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
}

export default CatsByCategory;
