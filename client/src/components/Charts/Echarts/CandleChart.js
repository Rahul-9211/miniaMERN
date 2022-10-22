import React, { useEffect, useMemo, useState } from "react";
import ReactEcharts from "echarts-for-react";
import { Col } from "react-bootstrap";

const CandleChart = ({  }) => {
    const [options, setoptions] = useState({
        xAxis: {
            data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27', '2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
        },
        yAxis: {},
        series: [
            {
                type: 'candlestick',
                data: [
                    [50, 34, 10, 38],
                    [40, 35, 30, 50],
                    [31, 38, 33, 44],
                    [20, 34, 10, 38],
                    [40, 35, 30, 50],
                    [31, 38, 33, 44],
                    [20, 34, 10, 38],
                    [40, 35, 30, 50],
                    [31, 38, 33, 44],
                ]
            }
        ]
    });
    useEffect(() => {
        fetch("http://api.marketstack.com/v1/intraday?access_key=efa648305253e2293bf549b0b6a48edd&symbols=AAPL")
            .then(response => response.json())
            .then(data => {
                // console.log("data", data.data)
                let dateData = []
                let seriesData = []
                for (let i = 0; i < data.data.length; i++) {
                    dateData.push(data.data[i].date);
                    let tempArr = [];
                    tempArr[0] = data.data[i].open;
                    tempArr[1] = data.data[i].low;
                    tempArr[2] = data.data[i].high;
                    tempArr[3] = data.data[i].close === null ? data.data[i].open +1 : data.data[i].close;
                    seriesData.push(tempArr);
                }
                setoptions({
                    title: {
                        text: 'Candle Stick',
                        left: 0
                    },
                    xAxis: {
                        data: dateData,
                    },
                    dataZoom: [
                        {
                          type: 'inside',
                          xAxisIndex: [0, 1],
                          start: 10,
                          end: 100
                        },
                        {
                          show: true,
                          xAxisIndex: [0, 1],
                          type: 'slider',
                          bottom: 10,
                          start: 10,
                          end: 100
                        }
                      ],
                    yAxis:  [
                        {
                          scale: true,
                          splitArea: {
                            // show: true
                          }
                        },
                        {
                        //   scale: true,
                        //   gridIndex: 1,
                        //   splitNumber: 2,
                        //   axisLabel: { show: false },
                        //   axisLine: { show: false },
                        //   axisTick: { show: false },
                          splitLine: { show: false }
                        }
                      ],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    // dataZoom: [
                    //   {
                    //     type: 'inside',
                    //     start: 50,
                    //     end: 150
                    //   },
                    //   {
                    //     show: true,
                    //     type: 'slider',
                    //     top: '90%',
                    //     start: 50,
                    //     end: 100
                    //   }
                    // ],
                    series: [
                        {
                            type: 'candlestick',
                            data: seriesData,
                        }
                    ]
                })
            })
    }, [])
    return (
        <Col className="bg-white sales_card p-4 h-100">
            <ReactEcharts style={{ height: "100%", minHeight: "500px" }} option={options} />
        </Col>
    );
};
export default CandleChart;
