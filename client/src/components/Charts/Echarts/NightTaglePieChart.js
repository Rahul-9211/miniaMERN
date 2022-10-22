import React, { useEffect, useMemo, useState } from "react";
import ReactEcharts from "echarts-for-react";
import { Col } from "react-bootstrap";

const NightTaglePieChart = ({ NightTaglePieChartData }) => {
    const [options, setoptions] = useState({
        title: {
          text: 'Pie Rose Chart'
        },
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 40, name: 'rose 1' },
                    { value: 38, name: 'rose 2' },
                    { value: 32, name: 'rose 3' },
                    { value: 30, name: 'rose 4' },
                    { value: 28, name: 'rose 5' },
                    { value: 26, name: 'rose 6' },
                    { value: 22, name: 'rose 7' },
                    { value: 18, name: 'rose 8' }
                ]
            }
        ]

    });
    const changeUseMemo = new useMemo(() => {
        setoptions({
            title: {
              text: 'Pie Rose Chart'
            },
            legend: {
                top: 'bottom'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [50, 250],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: NightTaglePieChartData
                }
            ]
        })
    }, [NightTaglePieChartData])
    useEffect(() => {
    }, [changeUseMemo]);
    return (
        <Col className="bg-white sales_card p-4 h-100">
            <ReactEcharts style={{ height: "100%" , minHeight:"500px"}} option={options} />
        </Col>
    );
};
export default NightTaglePieChart;
