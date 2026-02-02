import { Layout, Menu, Typography } from 'antd';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ApiTestPage from './pages/ApiTestPage';

const { Header, Content, Sider } = Layout;

const menuItems = [
  { key: '/login', label: <Link to="/login">登录</Link> },
  { key: '/dashboard', label: <Link to="/dashboard">仪表盘</Link> },
  { key: '/api-test', label: <Link to="/api-test">API 测试</Link> }
];

export default function App() {
  const location = useLocation();

  return (
    <Layout className="app-shell">
      <Sider width={220} className="app-sider">
        <div className="logo">养老管理系统</div>
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]} items={menuItems} />
      </Sider>
      <Layout>
        <Header className="app-header">
          <Typography.Text className="header-title">运营工作台</Typography.Text>
        </Header>
        <Content className="app-content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/api-test" element={<ApiTestPage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
