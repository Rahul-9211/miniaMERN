import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import WebAudit from '../InvoiceFormat/WebAudit';
import axios from "axios"

const HTML_PDF = () => {

    const [GeneratePDF_modal, setGeneratePDF_modal] = useState(false)
    const [issueDate , setissueDate ] = useState()
    const [validDate , setvalidDate ] = useState()
    const [ updated_blob, set_updated_blob] = useState()

    function handleIssueDate (date){
        setissueDate(date)
    }
    function handleValidDate (date){
        setvalidDate(date)
    }

    function toggle_generatePDF() {
        setGeneratePDF_modal(!GeneratePDF_modal)
    }

    async function handleGeneratePDF(){
        console.log(issueDate, validDate)
        // await axios(`${process.env.REACT_APP_DEFAULTPATH}generatePDF` , {issueDate , validDate}).then((res)=>{
        //     console.log("res", res.json())
        // })
        await fetch(`${process.env.REACT_APP_DEFAULTPATH}generatePDF`, {
            method : "POST",
            headers : {
                "content-Type" : "application/json",
                'Accept': 'application/pdf'
            },
            body: JSON.stringify({
                issueDate ,
                validDate
            })
        }).then((res)=>{

            res.blob().then((my_blob)=>{

            var link_href = URL.createObjectURL(my_blob)
            set_updated_blob(link_href)
            window.open(link_href , "_blank");
            })
            // set_generate_pdf_loader(false)
            console.log(res.data)

            // const blob = new Blob([res.data], { type: 'application/pdf' })
            // const link = document.createElement('a')
            // var link_href = URL.createObjectURL(blob)
            // set_updated_blob(link_href)
            // window.open(link_href , "_blank");
        })
        // const data = await response.json();
        // console.log("res data", data)
        // if(data.status){
        //     console.log(data.message)
        // }
        // else{
        //     alert(data.message)
        // }
    }
    return (
        <div>
            <Button color="danger" onClick={() => { toggle_generatePDF() }}>Generate PDF </Button>
            <Modal
             isOpen={GeneratePDF_modal} 
            toggle={() => { toggle_generatePDF() }} 
            className="modal-xl"
            >
                <ModalHeader toggle={() => {
                    toggle_generatePDF()
                }}>Generate PDF</ModalHeader>
                <ModalBody>
                    {/* Web appplication audit format  */}
                    <WebAudit handleIssueDate={handleIssueDate}  handleValidDate={handleValidDate} handleGeneratePDF={handleGeneratePDF}/>
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        // toggle_generatePDF()
                        handleGeneratePDF()
                    }}>Generate PDF</Button>
                    <Button color="secondary" onClick={() => {
                        toggle_generatePDF()
                    }}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );

}

export default HTML_PDF;