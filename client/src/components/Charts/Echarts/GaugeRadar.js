import React, { useEffect, useMemo, useState } from "react";
import ReactEcharts from "echarts-for-react";
import { Col } from "react-bootstrap";

const GaugeRadar = ({ }) => {
    const [gaugeData, setgaugeData] = useState( [
        {
          value: 20,
          name: 'Perfect',
          title: {
            offsetCenter: ['0%', '-30%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-20%']
          }
        },
        {
          value: 40,
          name: 'Good',
          title: {
            offsetCenter: ['0%', '0%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '10%']
          }
        },
        {
          value: 60,
          name: 'Commonly',
          title: {
            offsetCenter: ['0%', '30%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '40%']
          }
        }
      ])
    const [options, setoptions] = useState({
        title: {
          text: 'Guage Radar'
        },
        series: [
            {
              type: 'gauge',
              center: ['50%', '60%'],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 60,
              splitNumber: 12,
              itemStyle: {
                color: '#FFAB91'
              },
              progress: {
                show: true,
                width: 30
              },
              pointer: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  width: 30
                }
              },
              axisTick: {
                distance: -45,
                splitNumber: 5,
                lineStyle: {
                  width: 2,
                  color: '#999'
                }
              },
              splitLine: {
                distance: -52,
                length: 14,
                lineStyle: {
                  width: 3,
                  color: '#999'
                }
              },
              axisLabel: {
                distance: -20,
                color: '#999',
                fontSize: 20
              },
              anchor: {
                show: false
              },
              title: {
                show: false
              },
              detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: [0, '-15%'],
                fontSize: 60,
                fontWeight: 'bolder',
                formatter: '{value} °C',
                color: 'auto'
              },
              data: [
                {
                  value: 20
                }
              ]
            },
            {
              type: 'gauge',
              center: ['50%', '60%'],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 60,
              itemStyle: {
                color: '#FD7347'
              },
              progress: {
                show: true,
                width: 8
              },
              pointer: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              detail: {
                show: false
              },
              data: [
                {
                  value: 20
                }
              ]
            }
          ]
    });

    function set_guage_ring_chart() {
        let  random = +(Math.random() * 60).toFixed(2);

          setoptions({
            series: [
                {
                  type: 'gauge',
                  center: ['50%', '60%'],
                  startAngle: 200,
                  endAngle: -20,
                  min: 0,
                  max: 60,
                  splitNumber: 12,
                  itemStyle: {
                    color: '#FFAB91'
                  },
                  progress: {
                    show: true,
                    width: 30
                  },
                  pointer: {
                    show: false
                  },
                  axisLine: {
                    lineStyle: {
                      width: 30
                    }
                  },
                  axisTick: {
                    distance: -45,
                    splitNumber: 5,
                    lineStyle: {
                      width: 2,
                      color: '#999'
                    }
                  },
                  splitLine: {
                    distance: -52,
                    length: 14,
                    lineStyle: {
                      width: 3,
                      color: '#999'
                    }
                  },
                  axisLabel: {
                    distance: -20,
                    color: '#999',
                    fontSize: 20
                  },
                  anchor: {
                    show: false
                  },
                  title: {
                    show: false
                  },
                  detail: {
                    valueAnimation: true,
                    width: '60%',
                    lineHeight: 40,
                    borderRadius: 8,
                    offsetCenter: [0, '-15%'],
                    fontSize: 60,
                    fontWeight: 'bolder',
                    formatter: '{value} °C',
                    color: 'auto'
                  },
                  data: [
                    {
                      value: random
                    }
                  ]
                },
                {
                  type: 'gauge',
                  center: ['50%', '60%'],
                  startAngle: 200,
                  endAngle: -20,
                  min: 0,
                  max: 60,
                  itemStyle: {
                    color: '#FD7347'
                  },
                  progress: {
                    show: true,
                    width: 8
                  },
                  pointer: {
                    show: false
                  },
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  splitLine: {
                    show: false
                  },
                  axisLabel: {
                    show: false
                  },
                  detail: {
                    show: false
                  },
                  data: [
                    {
                      value: random
                    }
                  ]
                }
              ]
        })
    }

    useEffect(() => {
        setInterval(() => {
            set_guage_ring_chart()
        }, 7000);
    }, [options])


    return (
        <Col className="bg-white sales_card p-4 h-100">
            <ReactEcharts style={{ height: "100%", minHeight: "500px" }} option={options} />
        </Col>
    );
};
export default GaugeRadar;
