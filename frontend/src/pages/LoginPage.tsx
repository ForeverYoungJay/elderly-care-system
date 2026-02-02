import { useState } from 'react';
import { Card, Form, Input, Button, Alert } from 'antd';
import { apiFetch, setAccessToken } from '../api';

interface LoginResponse {
  accessToken: string;
  refreshToken?: string;
  user?: { id: string; name?: string; roles?: string[] };
}

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onFinish = async (values: { username: string; password: string }) => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const res = await apiFetch<LoginResponse>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(values)
      });
      if (res.accessToken) {
        setAccessToken(res.accessToken);
        setSuccess('登录成功，已保存访问令牌。');
      } else {
        setError('未返回 accessToken');
      }
    } catch (e) {
      setError((e as Error).message || '登录失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <Card title="登录" className="card">
        {error && <Alert type="error" message={error} showIcon className="mb" />}
        {success && <Alert type="success" message={success} showIcon className="mb" />}
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="用户名" name="username" rules={[{ required: true }]}
          >
            <Input placeholder="admin" />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={[{ required: true }]}
          >
            <Input.Password placeholder="admin123" />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            登录
          </Button>
        </Form>
      </Card>
    </div>
  );
}
