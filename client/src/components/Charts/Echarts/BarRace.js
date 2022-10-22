import React, { Component, useEffect, useMemo, useState } from 'react'
import ReactEcharts from "echarts-for-react";
import { Col } from "react-bootstrap";

const BarRace = () => {
    let data = []
    const [option, setoption] = useState({
        title: {
          text: 'Bar Race'
        },
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 0,
          max: 200,
          text: ['High ', 'Low '],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ['#fac858', '#FFCE34', '#fc8452']
          }
        },
        xAxis: {
            max: 'dataMax'
        },
        yAxis: {
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'h', 'e', 'f', 'g', 'h', 'i'],
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 9// only the largest 3 bars will be displayed
        },
        series: [
            {
                realtimeSort: true,
                name: 'X',
                type: 'bar',
                data: [123, 123, 125, 134],
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true
                }
            }
        ],
        legend: {
            show: true
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    })
     function run() {
        // console.log("cha", data)
        // for (var i = 0; i < 5; ++i) {
        //     data[i] += Math.round(Math.random() * 200);
        // }
        data = []
        for (let i = 0; i < 10; ++i) {
            data.push(Math.round(Math.random() * 200));
        }
        // console.log("data inside", data)
         setoption({
            xAxis: {
                max: 'dataMax'
            },
            graph: {
                color: ["#ffffff"]
            },
            title: {
              text: 'Bar Race'
            },
            visualMap: {
              orient: 'horizontal',
              left: 'center',
              min: 10,
              max: 1000,
              text: ['High Score', 'Low Score'],
              // Map the score column to color
              dimension: 0,
              inRange: {
                color: ['#fac858', '#FFCE34', '#fc8452']
              }
            },
            yAxis: {
                type: 'category',
                data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
                inverse: true,
                animationDuration: 300,
                animationDurationUpdate: 300,
                max: 9 // only the largest 3 bars will be displayed
            },
            series: [
                {
                    realtimeSort: true,
                    name: 'X',
                    type: 'bar',
                    data: data,
                    label: {
                        show: true,
                        position: 'right',
                        valueAnimation: true
                    }
                }
            ],
            legend: {
                show: true
            },
            animationDuration: 0,
            animationDurationUpdate: 3000,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear'
        });
    }
    function timer() {
        setTimeout(function () {
            run();
        }, 0);
        setInterval(function () {
            run();
        }, 4000);
    }
    useEffect(() => {
        // for (let i = 0; i < 5; ++i) {
        //     data.push(Math.round(Math.random() * 200));
        // }
        // console.log("data sueefee", data)
        timer();
    }, [])
    return (
        <Col className="bg-white sales_card p-4 h-100">
            <ReactEcharts style={{ height: "100%", minHeight: "450px" }} option={option} />
        </Col>
    )

}

export default BarRace;