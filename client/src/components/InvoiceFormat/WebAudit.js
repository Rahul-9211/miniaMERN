import React from 'react'
import header from "../../assets/images/logo.png"
import { Input } from 'reactstrap'

const WebAudit = ({ handleIssueDate, handleValidDate }) => {
    return (
        <div class="mainBox">
            <div class="invoice-box">
                <div class="logo_Date">
                    <div class="logo">
                        <img src={header} alt="" />
                    </div>
                    <div class="date">
                        <div> Serial : 2020/T09916 <br />
                            <div className='d-flex'> Issuing Date :<Input type='date' className='issueDate' onChange={(e) => { handleIssueDate(e.target.value) }} /></div>
                            <div className='d-flex'> valid Date :<Input type='date' className='validDate' onChange={(e) => { handleValidDate(e.target.value) }} /></div>
                        </div>

                    </div>
                    {/* <input type="date" onChange={(e)=>{
                handleDate(e.target.value)}} /> */}
                </div>
                <p class="main-header">Certificate of Web Application Audit</p>

                <p class="subHeader">FOR : National Rural Infrastructure Development Agency, Ministry of Rural Development</p>
                <p class="content"> In Scope URL : http://10.153.15.173/Home/CitizenPage/ <br />
                    Main URL Hosting : http://omms.nic.in<br />
                    Scope of Audit : Web Application<br />
                    Auditor Name : Mr. Sanjay Kumar<br />
                    Audit Dates : 16/11/2020 to 31/12/2020
                </p>

                <p class="subHeader">CONCLUSIONS : </p>
                <p class="content">Auditing for <strong>Citizen Section of OMMAS</strong> web application of <strong>National
                    Rural Infrastructure
                    Development Agency, Ministry of Rural Development</strong> was done from <strong>16/11/2020</strong> to
                    <strong>16/11/2020</strong> <br />
                    The site is free from OWASP
                    (and any other Known) vulnerabilities and is safe for hosting.<br />
                    The clearance for the above application is given taking into consideration that the
                    OWASP (and any other Known) vulnerabilities do not exist in the application. Any
                    unapproved changes to the web application will void the certificate.<br />
                    <strong> Application Source Code Hash (MD5):</strong> 7957ca707a6294077d6de613c822f497
                </p>
                <p class="subHeader">HOSTING PERMISSION :</p>
                <p class="content">I. Site may be considered safe for hosting with Read and Script Execute permission only
                </p>
                <div class="recommendationBox">
                    <p class="sub-subHeader">RECOMMENDATIONS : </p>
                    <p class="sub-content">I. Web Server Audit certificate, web server and OS level hardening need to be in
                        place for the production server before making the
                        application live.<br />
                        II. Website audit should be done at least once a year or when there is any change in the
                        application.<br />
                        III. No new web pages are to be added without proper security audit.<br />
                        IV. Server side issue should be taken care by hosting provider.<br />
                        V. Secure Sockets Layer (SSL) should be implemented on the main hosting URL (including
                        sub-folders).<br />

                    </p>
                </div>
            </div>
        </div>

    )
}

export default WebAudit