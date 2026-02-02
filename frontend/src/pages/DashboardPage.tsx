import { Card, Col, Row, Statistic } from 'antd';

export default function DashboardPage() {
  return (
    <div className="page">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={6}>
          <Card>
            <Statistic title="在院老人" value={128} />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic title="待处理事件" value={5} />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic title="今日护理任务" value={42} />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic title="本月体检完成率" value={92} suffix="%" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
