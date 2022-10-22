import React from 'react'
import { useState } from "react";
import { Col, Form, Input, Row } from "reactstrap";
import Select from "react-select";

const ValidatedForm = () => {

    const [selectedOptions, setselectedOptions] = useState(null);
    const optionGroup = [
        { label: "Active", value: "Active" },
        { label: "InActive", value: "InActive" }
    ];

    // values stored of form

    const [form_data, set_form_data] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        status: "",
        jobTitle: "",
        password: "",
        checkbox: ""
    })

    // handle form data on each change of input box 
    const handle_OnChange = (e) => {
        set_form_data(prev_data => ({
            ...prev_data,
            [e.target.name]: e.target.value
        }))
    }

    const handle_select_tag = (e) => {
        set_form_data(prev_data => ({
            ...prev_data,
            status: e.value
        }))
    }

    // validation state error
    const [fnameError, setfnameError] = useState("");
    const [lnameError, setlnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [phoneError, setphoneError] = useState("");
    const [jobTiteError, setjobTiteError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [detailBtn, setdetailBtn] = useState(true); // to disable the button on inital

    var name_regx = /^[A-Za-z ]{3,20}$/;
    var phone_regx = /^\d{9,20}$/;

    var email_regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/; //eslint-disable-line
    var pass_regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;




    // Onchange functions ------------------------------------->>>>>>>>
    // functions to validate regex firstName
    function checkFnameValidation(fname_val) {
        if (fname_val === " ") {
            setfnameError("enter first name");
        } else if (name_regx.test(fname_val)) {
            setfnameError("");
        } else if (fname_val.length < 3) {
            setfnameError("name must contain 3 characters");
        } else {
            setfnameError(`name doesn't contain "0-9  , & @ "`);
        }
    }

    // functions to validate regex LastName
    function checklnameValidation(lname_val) {
        if (lname_val === " ") {
            setlnameError("enter first name");
        } else if (name_regx.test(lname_val)) {
            setlnameError("");
        } else if (lname_val.length < 3) {
            setlnameError("name must contain 3 characters");
        } else {
            setlnameError(`name doesn't contain "0-9  , & @ "`);
        }
    }

    // functions to validate regex Phone
    function checkphoneValidation(phone_val) {
        // console.log("phone val", phone_val)
        if (phone_val === " ") {
            setphoneError("enter first name");
        } else if (phone_regx.test(phone_val)) {
            setphoneError("");
        } else if (phone_val.length < 9) {
            setphoneError("minimum length 8 digit");
        } else {
            setphoneError("Invalid credentials - doesn't contain 'a-z , A-Z , @'");
        }
    }

    // functions to validate regex email
    function checkEmailValidation(email_val) {
        if (email_val === " ") {
            setemailError("enter email");
        } else if (email_regx.test(email_val)) {
            setemailError("");
        } else if (email_val.length < 3) {
            setemailError("invalid email");
        } else {
            setemailError(`invalid email`);
        }
    }
    // functions to validate regex password
    function checkPasswordValidation(password_val) {
        if (password_val === " ") {
            setpasswordError("enter password");
        } else if (pass_regx.test(password_val)) {
            setpasswordError("");
        } else if (password_val.length < 3) {
            setpasswordError(" Invalid Passwors");
        } else {
            setpasswordError(`Invalid Password must contain "0-9  , & @ "`);
        }
    }
    // functions to validate regex Jobtitle
    function checkjobTitleValidation(jobTitle_val) {
        if (jobTitle_val === " ") {
            setjobTiteError("enter first name");
        } else if (name_regx.test(jobTitle_val)) {
            setjobTiteError("");
        } else if (jobTitle_val.length < 3) {
            setjobTiteError(" must contain 3 characters");
        } else {
            setjobTiteError(`job title doesn't contain "0-9  , & @ "`);
        }
    }

    // form validatioon checkuo end ------------->

    // function to handle change in status dropdown
    function handleSelectOptions(selectedOptions) {
        setselectedOptions(selectedOptions);
        setdetailBtn(false);
    }

    //  function to handle check status
    const checkBtnStatus = (checkBoxStatus) => {
        if (checkBoxStatus === "on") {
            setdetailBtn(!detailBtn);
        }
    };

    // function on submit
    const registerUser = () => {
        console.table("table ", form_data)
    };


    return (
                <div className=' bg-white '>
                    <Form onSubmit={(e) => { e.preventDefault() }}>

                        {/* // main form  */}

                        <Row className='mb-4'>
                            <Col md={6}>

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
                                        checkFnameValidation(e.target.value);
                                    }}
                                />
                                <span className="validate-span text-danger">
                                    {fnameError}
                                </span>
                            </Col>
                            <Col md={6}>

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
                                        checklnameValidation(e.target.value);
                                    }}
                                />
                                <span className="validate-span text-danger">
                                    {lnameError}
                                </span>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col md={6}>
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
                                        checkEmailValidation(event.target.value);
                                    }}
                                />
                                <span className="validate-span text-danger">
                                    {emailError}
                                </span>
                            </Col>
                            <Col md={6}>

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
                                        checkphoneValidation(e.target.value);
                                    }}
                                />
                                <span className="validate-span text-danger">
                                    {phoneError}
                                </span>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col md={6}>
                                <label
                                    htmlFor="choices-single-default"
                                    className='text-secondary heading_sub_secondary text-sm'
                                >
                                    Status
                                </label>
                                <Select
                                    name='status'
                                    id='status'
                                    value={selectedOptions}
                                    onChange={(e) => {
                                        handle_select_tag(e)
                                        handleSelectOptions();
                                    }}
                                    options={optionGroup}
                                    classNamePrefix="select2-selection"
                                />
                            </Col>
                            <Col md={6}>


                                <label htmlFor="jobTitle" className='text-secondary heading_sub_secondary text-sm'>Job Title</label>
                                <Input
                                    name="jobTitle"
                                    label="jobTitle"
                                    className="form-control heading_sub_secondary"
                                    type="name"
                                    value={form_data.jobTitle}
                                    required
                                    placeholder="Enter Job Title : Software Developer , CTO ...."
                                    id="jobTitle"
                                    onChange={(e) => {
                                        handle_OnChange(e)
                                        checkjobTitleValidation(e.target.value);
                                    }}
                                />
                                <span className="validate-span text-danger">
                                    {jobTiteError}
                                </span>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col >
                                <label htmlFor="pass" className='text-secondary heading_sub_secondary text-sm'>Password</label>
                                <Input
                                    name="password"
                                    label="Password"
                                    className="form-control heading_sub_secondary"
                                    type="password"
                                    required
                                    placeholder="Enter Password"
                                    autoComplete='on'
                                    id="password"
                                    onChange={(event) => {
                                        handle_OnChange(event)
                                        checkPasswordValidation(event.target.value);
                                    }}
                                />
                                <span className="validate-span text-danger">
                                    {passwordError}
                                </span>
                            </Col>
                        </Row>


                        <Row className='mb-4'>
                            <Col >
                                <Input
                                    id="checkbox"
                                    name="checkbox"
                                    label="check"
                                    type="radio"
                                    onChange={(event) => {
                                        handle_OnChange(event)
                                        checkBtnStatus(event.target.value);
                                    }}
                                    required
                                />
                                <label htmlFor="check">
                                    <p className="mb-0">
                                        I confirm that I have read and that I agree to the
                                    </p>
                                </label>
                            </Col>
                        </Row>
                        <div className="mb-3 w-100">
                            <button
                                className="btn btn-primary w-100 waves-effect waves-light "
                                type="submit"
                                // disabled={detailBtn}
                                onClick={() => registerUser()}
                            >
                                Save Details
                                {/* <FeatherIcon icon="arrow-right" size={18} className="ms-2" /> */}
                            </button>

                        </div>
                    </Form>
                </div>
    )

}

export default ValidatedForm