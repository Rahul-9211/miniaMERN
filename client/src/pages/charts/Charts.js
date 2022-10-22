
import React  from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'

const Charts = () => {
    return (
        <div className='custom_dashboard'>
            {/* BreadCrumb */}
            <BreadCrumb
                title="Modern Charts"
                page="Dashboard"
                section="Charts" />

            <Link to="/charts/echarts">
                Echarts
            </Link><br />
            <Link to="/charts/apecxCharts">
                Apex Charts
            </Link>
        </div>

    )

}

export default Charts