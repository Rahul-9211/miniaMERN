import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'

const Datatable = ({ }) => {
    return (
        <div>
            {/* BreadCrumb */}
            <BreadCrumb
                title="Modern Dashboard"
                page="DataTables"
                section="view" />

            <Link to="/datatables/bootstarpbasics">
                Bootstarp basic
            </Link>
            <br />
            <Link to="/datatables/bootstarpDatatable">
                Bootstarp Data Table
            </Link>

            {/* <Row>
                    <Col md={12} className="bg-white">
                        
            <BootStrapDataTables />
                    </Col>
                </Row> */}

        </div>
    )

}

export default Datatable