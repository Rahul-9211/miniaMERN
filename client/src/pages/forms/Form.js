import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'

const Form = () => {
    return (
        <div>
            <BreadCrumb
                title="Modern Dashboard"
                page="Dashboard"
                section="form" />

                <Link to="/form/advance-form">
                    advance form
                </Link> <br/>
                
                <Link to="/form/basic-elements">
                    basic element
                </Link>

        </div>
    )

}

export default Form