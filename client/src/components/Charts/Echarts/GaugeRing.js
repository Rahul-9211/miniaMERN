import React, { useEffect, useMemo, useState } from "react";
import ReactEcharts from "echarts-for-react";
import { Col } from "react-bootstrap";

const GaugeRing = ({ }) => {
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
          text: 'Guage Ring'
        },
        series: [
            {
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                pointer: {
                    show: false
                },
                progress: {
                    show: true,
                    overlap: false,
                    roundCap: true,
                    clip: false,
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: '#464646'
                    }
                },
                axisLine: {
                    lineStyle: {
                        width: 40
                    }
                },
                splitLine: {
                    show: false,
                    distance: 0,
                    length: 10
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    distance: 50
                },
                data:gaugeData,
                title: {
                    fontSize: 14
                },
                detail: {
                    width: 50,
                    height: 14,
                    fontSize: 14,
                    color: 'auto',
                    borderColor: 'auto',
                    borderRadius: 20,
                    borderWidth: 1,
                    formatter: '{value}%'
                }
            }
        ]
    });

    function set_guage_ring_chart() {
        let tempdata = [] 
        tempdata[0] = +(Math.random() * 100).toFixed(2);
        tempdata[1] = +(Math.random() * 100).toFixed(2);
        tempdata[2] = +(Math.random() * 100).toFixed(2);
        // console.log("this is me ")
        setgaugeData([
            {
              value:  tempdata[0],
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
              value:  tempdata[1],
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
              value:  tempdata[2],
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

          setoptions({
            series: [
                {
                    type: 'gauge',
                    startAngle: 90,
                    endAngle: -270,
                    pointer: {
                        show: false
                    },
                    progress: {
                        show: true,
                        overlap: false,
                        roundCap: true,
                        clip: false,
                        itemStyle: {
                            borderWidth: 1,
                            borderColor: '#464646'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: 40
                        }
                    },
                    splitLine: {
                        show: false,
                        distance: 0,
                        length: 10
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        distance: 50
                    },
                    data:gaugeData,
                    title: {
                        fontSize: 14
                    },
                    detail: {
                        width: 50,
                        height: 14,
                        fontSize: 14,
                        color: 'auto',
                        borderColor: 'auto',
                        borderRadius: 20,
                        borderWidth: 1,
                        formatter: '{value}%'
                    }
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
export default GaugeRing;
