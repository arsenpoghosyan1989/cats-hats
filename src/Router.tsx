import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Spin, Result } from 'antd';
import { USER_TYPES } from './services/constants';
import { useTranslation } from 'react-i18next';

const Home = lazy(() => import('./pages/Home'));
const Cats = lazy(() => import('./pages/Cats'));

const ErrorPage = () => {
  const { t } = useTranslation(['common', 'application']);

  return (
    <Result
      status="404"
      title="404"
      subTitle={t('application:errorPageTitle')}
      extra={<Link to="/">{t('common:backHome')}</Link>}
    />
  );
};

function Router() {
  return (
    <Suspense fallback={<Spin/>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Cats/>}/>
        <Route path="/404" element={<ErrorPage/>}>
        </Route>I
      </Routes>
    </Suspense>
  );
}

export default Router;
