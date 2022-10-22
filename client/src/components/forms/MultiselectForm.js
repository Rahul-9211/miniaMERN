import React, { useState } from 'react'
import { Row, Col, Card, CardBody, TabContent, TabPane, NavItem, NavLink, Progress, Button, CardHeader, Input } from "reactstrap";
import classnames from 'classnames'; // here className is use to set dynamic active class
import { AiOutlineUnorderedList, AiFillBank } from "react-icons/ai"
import { BsBookmarks } from "react-icons/bs"


const MultiselectForm = () => {
    const [activeTabProgress, setactiveTabProgress] = useState(1);
    const [progressValue, setprogressValue] = useState(33)


    const toggleTabProgress = (tab) => {
        if (activeTabProgress !== tab) {
            if (tab >= 1 && tab <= 3) {
                setactiveTabProgress(tab)

                if (tab === 1) { setprogressValue(33) }
                if (tab === 2) { setprogressValue(66) }
                if (tab === 3) { setprogressValue(100) }
            }
        }
    }

    const [form_data, set_form_data] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",

        pan_no: "",
        vat_no: "",
        cst_no: "",
        service_tax: "",
        company_uin: "",
        declaration: "",

        name_on_card: "",
        card_type: "",
        credit_card_no: "",
        card_verification_no: "",
        expiration_date: "",
    })
    // handle form data on each change of input box 
    const handle_OnChange = (e) => {
        set_form_data(prev_data => ({
            ...prev_data,
            [e.target.name]: e.target.value
        }))
    }
    return (

        <Card className='card_shadow'>
            <CardHeader className='bg-white p-4'>
                <h3 className='heading_secondary'>Multiselect Form</h3>
            </CardHeader>

            <CardBody>
                {/* <h4 className="card-title mb-4">Wizard with progressbar</h4>s */}

                <div id="progrss-wizard" className="twitter-bs-wizard">
                    <ul className="twitter-bs-wizard-nav nav-justified nav nav-pills">
                        <NavItem>
                            <NavLink className={classnames({ active: activeTabProgress === 1 })} onClick={() => { toggleTabProgress(1) }} >
                                <div className="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Seller Details">
                                    <AiOutlineUnorderedList />
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: activeTabProgress === 2 })} onClick={() => { toggleTabProgress(2); }} >
                                <div className="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Company Document">
                                    <BsBookmarks />
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: activeTabProgress === 3 })} onClick={() => { toggleTabProgress(3); }} >
                                <div className="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Bank Details">
                                    <AiFillBank />
                                </div>
                            </NavLink>
                        </NavItem>
                    </ul>

                    {/* <div id="bar" className="mt-4">
                        <Progress color="success" striped animated value={progressValue} />
                    </div> */}
                    <TabContent activeTab={activeTabProgress} className="twitter-bs-wizard-tab-content">
                        <TabPane tabId={1}>
                            <div className="text-center mb-4 mt-5">
                                <h5>Seller Details</h5>
                                <p className="card-title-desc">Fill all information below</p>
                            </div>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label htmlFor="fname"
                                                className='text-secondary text-sm heading_sub_secondary'
                                            >First Name</label>
                                            <Input
                                                name="firstName"
                                                className="form-control heading_sub_secondary"
                                                placeholder="Enter First Name"
                                                type="name"
                                                required
                                                value={form_data.firstName}
                                                id="firstName"
                                                onChange={(e) => {
                                                    handle_OnChange(e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">

                                            <label htmlFor="lname" className='text-secondary heading_sub_secondary text-sm'>Last Name</label>
                                            <Input
                                                name="lastName"
                                                className="form-control heading_sub_secondary"
                                                placeholder="Enter Last Name"
                                                type="name"
                                                required
                                                value={form_data.lastName}
                                                id="lastName"
                                                onChange={(e) => {
                                                    handle_OnChange(e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label htmlFor="mobile" className='text-secondary heading_sub_secondary text-sm'>Mobile</label>
                                            <Input
                                                name="phone"
                                                label="mobile"
                                                className="form-control heading_sub_secondary"
                                                placeholder="Enter mobile"
                                                type="phone"
                                                value={form_data.phone}
                                                required
                                                id="phone"
                                                onChange={(e) => {
                                                    handle_OnChange(e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label htmlFor="email" className='text-secondary heading_sub_secondary text-sm'>Email</label>
                                            <Input
                                                name="email"
                                                label="Email"
                                                className="form-control heading_sub_secondary"
                                                placeholder="Enter email"
                                                type="email"
                                                value={form_data.email}
                                                required
                                                id="email"
                                                onChange={(event) => {
                                                    handle_OnChange(event)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label htmlFor="address" className='text-secondary heading_sub_secondary text-sm'>Address</label>
                                            <Input
                                                name="address"
                                                label="address"
                                                className="form-control heading_sub_secondary"
                                                placeholder="Enter Address"
                                                type="address"
                                                value={form_data.address}
                                                required
                                                id="address"
                                                onChange={(event) => {
                                                    handle_OnChange(event)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </TabPane>
                        <TabPane tabId={2}>
                            <div>
                                <div className="text-center mb-4 mt-5">
                                    <h5>Company Document</h5>
                                    <p className="card-title-desc">Fill all information below</p>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="pan_no" className='text-secondary heading_sub_secondary text-sm'>PAN  Card</label>
                                                <Input
                                                    name="pan_no"
                                                    label="pan_no"
                                                    className="form-control heading_sub_secondary"
                                                    placeholder="Enter pan_no"
                                                    type="pan_no"
                                                    value={form_data.pan_no}
                                                    required
                                                    id="pan_no"
                                                    onChange={(event) => {
                                                        handle_OnChange(event)
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="vat_no" className='text-secondary heading_sub_secondary text-sm'>VAT/TIN NO </label>
                                                <Input
                                                    name="vat_no"
                                                    label="vat_no"
                                                    className="form-control heading_sub_secondary"
                                                    placeholder="Enter vat_no"
                                                    type="vat_no"
                                                    value={form_data.vat_no}
                                                    required
                                                    id="vat_no"
                                                    onChange={(event) => {
                                                        handle_OnChange(event)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="cst_no" className='text-secondary heading_sub_secondary text-sm'>CST NO </label>
                                                <Input
                                                    name="cst_no"
                                                    label="cst_no"
                                                    className="form-control heading_sub_secondary"
                                                    placeholder="Enter cst_no"
                                                    type="cst_no"
                                                    value={form_data.cst_no}
                                                    required
                                                    id="cst_no"
                                                    onChange={(event) => {
                                                        handle_OnChange(event)
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="service_tax" className='text-secondary heading_sub_secondary text-sm'>Service Tax NO </label>
                                                <Input
                                                    name="service_tax"
                                                    label="service_tax"
                                                    className="form-control heading_sub_secondary"
                                                    placeholder="Enter service_tax"
                                                    type="service_tax"
                                                    value={form_data.service_tax}
                                                    required
                                                    id="service_tax"
                                                    onChange={(event) => {
                                                        handle_OnChange(event)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="company_uin" className='text-secondary heading_sub_secondary text-sm'>Company UIN </label>
                                                <Input
                                                    name="company_uin"
                                                    label="company_uin"
                                                    className="form-control heading_sub_secondary"
                                                    placeholder="Enter company_uin"
                                                    type="company_uin"
                                                    value={form_data.company_uin}
                                                    required
                                                    id="company_uin"
                                                    onChange={(event) => {
                                                        handle_OnChange(event)
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="declaration" className='text-secondary heading_sub_secondary text-sm'>Declaration </label>
                                                <Input
                                                    name="declaration"
                                                    label="declaration"
                                                    className="form-control heading_sub_secondary"
                                                    placeholder="Enter declaration"
                                                    type="declaration"
                                                    value={form_data.declaration}
                                                    required
                                                    id="declaration"
                                                    onChange={(event) => {
                                                        handle_OnChange(event)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </TabPane>
                        <TabPane tabId={3}>
                            <div>
                                <div className="text-center mb-4 mt-5">
                                    <h5>Bank Details</h5>
                                    <p className="card-title-desc">Fill all information below</p>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="name_on_card" className='text-secondary heading_sub_secondary text-sm'>Name on Card </label>
                                                <Input
                                                    name="name_on_card"
                                                    label="name_on_card"
                                                    className="form-control heading_sub_secondary"
                                                    placeholder="Enter name_on_card"
                                                    type="name_on_card"
                                                    value={form_data.name_on_card}
                                                    required
                                                    id="name_on_card"
                                                    onChange={(event) => {
                                                        handle_OnChange(event)
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mb-3">

                                                <label className="text-secondary heading_sub_secondary text-sm">Credit Card Type</label>
                                                <select className="form-select selectpicker" name='card_type' id='card_type'
                                                    onChange={(event) => {
                                                        handle_OnChange(event)
                                                    }}>
                                                    <option>Select Card Type</option>
                                                    <option defaultValue="AE">American Express</option>
                                                    <option value="VI">Visa</option>
                                                    <option value="MC">MasterCard</option>
                                                    <option value="DI">Discover</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="credit_card_no" className='text-secondary heading_sub_secondary text-sm'>Credit Card Number</label>
                                                <Input
                                                    name="credit_card_no"
                                                    label="credit_card_no"
                                                    className="form-control heading_sub_secondary"
                                                    placeholder="Enter credit_card_no"
                                                    type="credit_card_no"
                                                    value={form_data.credit_card_no}
                                                    required
                                                    id="credit_card_no"
                                                    onChange={(event) => {
                                                        handle_OnChange(event)
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="card_verification_no" className='text-secondary heading_sub_secondary text-sm'>Card Verification Number</label>
                                                <Input
                                                    name="card_verification_no"
                                                    label="card_verification_no"
                                                    className="form-control heading_sub_secondary"
                                                    placeholder="Enter card_verification_no"
                                                    type="card_verification_no"
                                                    value={form_data.card_verification_no}
                                                    required
                                                    id="card_verification_no"
                                                    onChange={(event) => {
                                                        handle_OnChange(event)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="expiration_date" className='text-secondary heading_sub_secondary text-sm'>Expiration Date</label>
                                                <Input
                                                    name="expiration_date"
                                                    label="expiration_date"
                                                    className="form-control heading_sub_secondary"
                                                    placeholder="Enter expiration_date"
                                                    type="expiration_date"
                                                    value={form_data.expiration_date}
                                                    required
                                                    id="expiration_date"
                                                    onChange={(event) => {
                                                        handle_OnChange(event)
                                                    }}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </TabPane>
                    </TabContent>
                    <div className='d-flex justify-content-space-between align-items-center'>
                        <Button
                            to="#"
                            disabled={activeTabProgress === 1 ? true : false}
                            className="btn btn-success"
                            onClick={() => {
                                toggleTabProgress(activeTabProgress - 1);
                            }}
                        >
                            <i className="bx bx-chevron-left me-1"></i> Previous
                        </Button>

                        <Button
                            to="#"
                            disabled={activeTabProgress === 3 ? true : false}
                            className="btn btn-danger"
                            onClick={() => {
                                toggleTabProgress(activeTabProgress + 1);
                            }}
                        >
                            Next <i className="bx bx-chevron-right ms-1"></i>
                        </Button>
                    </div>
                    <ul className="pager wizard twitter-bs-wizard-pager-link">

                    </ul>
                </div>
            </CardBody>
        </Card>
    )
}

export default MultiselectForm