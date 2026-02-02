import { useState } from 'react';
import { Card, Button, Input, Space, Alert } from 'antd';
import { apiFetch } from '../api';

export default function ApiTestPage() {
  const [path, setPath] = useState('/admin/roles');
  const [response, setResponse] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGet = async () => {
    setLoading(true);
    setError(null);
    setResponse('');
    try {
      const res = await apiFetch<any>(path, { method: 'GET' });
      setResponse(JSON.stringify(res, null, 2));
    } catch (e) {
      setError((e as Error).message || '请求失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <Card title="API 测试" className="card">
        {error && <Alert type="error" message={error} showIcon className="mb" />}
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input value={path} onChange={(e) => setPath(e.target.value)} />
          <Button type="primary" onClick={handleGet} loading={loading}>
            GET
          </Button>
          <pre className="code-block">{response || '无响应'}</pre>
        </Space>
      </Card>
    </div>
  );
}
