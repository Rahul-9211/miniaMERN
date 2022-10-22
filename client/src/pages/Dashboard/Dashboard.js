import React from 'react';
import '../../styles/App.scss';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import SalesCard from '../../components/salesCards/SalesCard';
import { Col, Row } from 'react-bootstrap';
import AreaChart from '../../components/Charts/Echarts/AreaChart';
import NightTaglePieChart from '../../components/Charts/Echarts/NightTaglePieChart';
import BarRace from '../../components/Charts/Echarts/BarRace';
import { AreaChartData, NightTaglePieChartData } from '../../common/data';

function Dashboard() {
  return (
    <div className=''>
      {/* BreadCrumb */}
      <BreadCrumb
        title="Modern Dashboard"
        page="Dashboard"
        section="dashboard" />
      {/* daily cards or sales cards  */}
      <Row>
        <Col md={3}>
          <SalesCard
            title="Daily Sales"
            revenue="120"
            revenueTitle="Today's Income"
            progress="80"
            color="success"
          />
        </Col>
        <Col md={3}>
          <SalesCard
            title="Daily Sales"
            revenue="8000"
            revenueTitle="Today's Income"
            progress="10"
            color="danger"
          />
        </Col>
        <Col md={3}>
          <SalesCard
            title="Daily Sales"
            revenue="787"
            revenueTitle="Today's Income"
            progress="45"
            color="warning"
          />
        </Col>
        <Col md={3}>
          <SalesCard
            title="Daily Sales"
            revenue="1230"
            revenueTitle="Today's Income"
            progress="76"
            color="info"
          />
        </Col>
      </Row>

      {/* Echart of Gradient Area Chart  */}
      <Row>
        <Col md={12} className="mt-5">
          <AreaChart AreaChartData={AreaChartData} />
        </Col>
      </Row>

      {/* Echarts Pie-charts and radial charts  */}
      <Row>
        <Col md={6} className="mt-5">
          <NightTaglePieChart NightTaglePieChartData={NightTaglePieChartData} />
        </Col>
        <Col md={6} className="mt-5">
          <BarRace />
        </Col>
      </Row>
      <Row>

      </Row>
      <Col md={12} className="mt-5 sales_card">
        {/* <PigeonMap /> */}
      </Col>
    </div>
  );
}

export default Dashboard;
