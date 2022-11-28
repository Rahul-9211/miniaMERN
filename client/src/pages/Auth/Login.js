import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/images/logo.png"

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const [fnameError, setfnameError] = useState("");
    const [lnameError, setlnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");


    useEffect(()=>{
        // checkCache()
    },[])

    // async function checkCache(){
    //     const token = localStorage.getItem("token");
    //     console.log("server uRl" , process.env.REACT_APP_DEFAULTPATH)
    //     console.log("Token" ,token)
    //     const response = await fetch(`${process.env.REACT_APP_DEFAULTPATH}checkcache`,{
    //         method : "POST",
    //         headers : {
    //             "content-Type": "application/json"
    //         },
    //         body : JSON.stringify({
    //             token
    //         })
    //     })
    //     const data = await response.json();
    //     console.log("data", data)
    //     if(data.status){
    //         console.log("true")
    //         swal({
    //             title: data.user.FirstName,
    //             text:"hello",
    //             icon: "success",
    //             buttons : true
    //         }).then((willDelete) => {
    //             if (willDelete) {
    //                 window.location = "/dashboard"
    //             } else {
    //                 swal({
    //                     title: "switch tab to Login",
    //                     icon: "warning",
    //                     button: "OK!"
    //                 });
    //             }
    //         });
    //     }
    // }
    async function registerUser() {
        if (email != "" && pass != "" && fname != "" && lname != "") {
            const response = await fetch(`${process.env.REACT_APP_DEFAULTPATH}register`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname,
                    lname,
                    email,
                    pass
                })
            })
            const data = await response.json();
            if (data.status) {
                swal({
                    title: data.message,
                    // text: "Good job!",
                    icon: "success",
                    // button: "OK!",
                    buttons: true
                }).then((willDelete) => {
                    if (willDelete) {
                        window.location.reload(false);
                    } else {
                        swal({
                            title: "switch tab to Login",
                            icon: "warning",
                            button: "OK!"
                        });
                    }
                });
            }
            else {
                swal({
                    title: data.message,
                    icon: "warning",
                    button: "OK!",
                });
            }
        }
        else {
            swal("Emter register details");
        }
    }

    async function validateLogin() {
        if (email != "" && pass != "") {
            console.log("response data",process.env.REACT_APP_DEFAULTPATH)
            const response = await fetch(`${process.env.REACT_APP_DEFAULTPATH}login`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    pass
                })
            })
            const data = await response.json();
            if (data.status) {
                localStorage.setItem("token", data.token)
                swal({
                    title: "Hello",
                    text:data.user.FirstName,
                    icon: "success",
                    buttons : true  
                }).then((willDelete) => {
                    if (willDelete) {
                        window.location = "/dashboard"
                    } else {
                        swal({
                            title: "switch tab to Login",
                            icon: "warning",
                            button: "OK!"
                        });
                    }
                });
            }
            else {
                swal({
                    title: data.message,
                    icon: "warning",
                    button: "OK!",
                });
            }

            // console.log("response data", response.data)
        }
        else {
            swal("Emter login details properly");
        }
    }


    var name_regx = /^[A-Za-z ]{3,20}$/;
    var email_regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/;
    var pass_regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    // functions to validate regex FirstName
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
    // functions to validate regex email
    function checkEmailValidation(email_val) {
        if (email_val === " ") {
            setemailError("enter email");
        } else if (email_regx.test(email_val)) {
            setemailError("");
        } else if (email_val.length < 3) {
            setemailError("invalid email format");
        } else {
            setemailError(`invalid email format`);
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

    return (
        <>

            <a href="https://front.codes/" className="loginLogo" target="_blank">
                <img src={logo} alt="" />
            </a>

            <div className="loginSection">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Loggging In </span><span>Sign Up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        {/* Login  */}
                                        <div className="card-front ">
                                            <div className="center-wrap ">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3 text-white">Log In</h4>
                                                    <div className="form-group">
                                                        <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"

                                                            onChange={(event) => {
                                                                setEmail(event.target.value);
                                                            }}
                                                        />
                                                        <i className="input-icon uil uil-at"></i>

                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off"
                                                            onChange={(event) => {

                                                                setPass(event.target.value);
                                                            }} />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="#" className="btn mt-4"
                                                        onClick={() => {
                                                            validateLogin();
                                                        }}>submit</a>
                                                    <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* register  */}
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3 text-white">Sign Up</h4>
                                                    <div className="form-group">
                                                        <input type="text" name="Flogname" className="form-style" placeholder="First Name" id="Flogname" autocomplete="off"

                                                            onChange={(event) => {

                                                                setFname(event.target.value);
                                                                checkFnameValidation(event.target.value);
                                                            }} />
                                                        <i className="input-icon uil uil-user"></i><span className="validate-span text-danger">
                                                            {fnameError}
                                                        </span>
                                                    </div>

                                                    <div className="form-group mt-2">
                                                        <input type="text" name="Llogname" className="form-style" placeholder="Last Name" id="Llogname" autocomplete="off"

                                                            onChange={(event) => {

                                                                setLname(event.target.value);
                                                                checklnameValidation(event.target.value);
                                                            }} />
                                                        <i className="input-icon uil uil-user"></i><span className="validate-span text-danger">
                                                            {lnameError}
                                                        </span>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"
                                                            onChange={(event) => {

                                                                setEmail(event.target.value);
                                                                checkEmailValidation(event.target.value);
                                                            }}
                                                        />
                                                        <i className="input-icon uil uil-at"></i> <span className="validate-span text-danger">
                                                            {emailError}
                                                        </span>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off"
                                                            onChange={(event) => {

                                                                setPass(event.target.value);
                                                                checkPasswordValidation(event.target.value);
                                                            }}
                                                        />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                        <span className="validate-span text-danger">
                                                            {passwordError}
                                                        </span>
                                                    </div>
                                                    <a href="#" className="btn mt-4"
                                                        onClick={() => {
                                                            registerUser();
                                                        }}>submit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;