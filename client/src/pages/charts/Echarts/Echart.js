
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import BreadCrumb from '../../../components/breadCrumb/BreadCrumb';
import AreaChart from '../../../components/Charts/Echarts/AreaChart';
import NightTaglePieChart from '../../../components/Charts/Echarts/NightTaglePieChart';
import BarRace from '../../../components/Charts/Echarts/BarRace';
import {AreaChartData , NightTaglePieChartData} from "../../../common/data"
import CandleChart from '../../../components/Charts/Echarts/CandleChart';
import GaugeRing from '../../../components/Charts/Echarts/GaugeRing';
import GaugeRadar from '../../../components/Charts/Echarts/GaugeRadar';

const  ECharts = () =>{
      
    return (
        <div className='custom_dashboard'>
          {/* BreadCrumb */}
          <BreadCrumb
            title="Modern ECharts"
            page="Charts"
            section="Echarts" />
    
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
              <BarRace/>
            </Col>
    
    
          </Row>
          {/* Stock candle chart  */}
          <Row>
            <Col md={12} className="mt-5">
            <CandleChart/>
            </Col>
          </Row>
          <Row>

          <Col md={12} className="mt-5 sales_card">
            {/* <PigeonMap /> */}
          </Col>
          </Row>
          <Row>
            <Col md={6}>
              <GaugeRing/>
            </Col>
            <Col md={6}>
              <GaugeRadar/>
            </Col>
          </Row>
        </div>

    )
  
}

export default ECharts