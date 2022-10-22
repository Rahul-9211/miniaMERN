import React, { useRef } from 'react'
import BreadCrumb from '../breadCrumb/BreadCrumb'
import { Card, CardBody, CardHeader, CardFooter,  Col, Row, Input } from "reactstrap";
import ValidatedForm from './ValidatedForm';
import FormEditor from './FormEditor';
import DropzoneEditor from './Dropzone';
import MultiselectForm from './MultiselectForm';
// import ReactDraftEditor from './ReactDraftEditor';
// import CkEditor from './CkEditor';

const AdvanceForm = () => {

    const send_dropZone_files_function_Call_ref = useRef(null)
    return (
        <div>
            <BreadCrumb
                title="Modern Dashboard"
                page="Dashboard"
                section="advance-form" />

            {/* // main form  */}
            <Row>
                {/* Form having all validation */}
                <Col md={6}>

                    <Card className='card_shadow'>
                        <CardHeader className='bg-white p-4'>
                            <h3 className='heading_secondary'>Validated Form</h3>
                            {/* <p>Provide valuable, actionable feedback to your users with HTML5 form validation–available in all our supported browsers.</p> */}
                        </CardHeader>
                        <CardBody>
                            <ValidatedForm />
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className='card_shadow h-100'>

                        <CardHeader className='bg-white p-4'>
                            <h3 className='heading_secondary'>React Dropzone</h3>
                            {/* <p>Provide valuable, actionable feedback to your users with HTML5 form validation–available in all our supported browsers.</p> */}
                        </CardHeader>
                        <CardBody className=''>
                            <DropzoneEditor ref={send_dropZone_files_function_Call_ref} />
                        </CardBody>
                        <CardFooter className='bg-white'>

                            <div className="text-center mt-1">
                                <button onClick={() => {
                                    send_dropZone_files_function_Call_ref.current.handle_dropzone_onSubmit()
                                }}
                                    type="button"
                                    className="btn btn-primary "
                                >
                                    Send Files
                                </button>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col md={12}>
                    <FormEditor />
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col md={12}>
                    <MultiselectForm />
                </Col>
            </Row>

        </div >
    )

}

export default AdvanceForm