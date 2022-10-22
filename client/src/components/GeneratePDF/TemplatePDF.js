import React, { useRef, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import DropzoneEditor from '../forms/Dropzone';
import WebAudit from '../InvoiceFormat/WebAudit';
import swal from 'sweetalert';
import axios from 'axios';

const TemplatePDF = () => {

    const [GeneratePDF_modal, setGeneratePDF_modal] = useState(false)
    const [issueDate, setissueDate] = useState()
    const [validDate, setvalidDate] = useState()

    // here advance pdf dynamic data will be stored 
    const [advance_PDF_data, setAdvance_PDF_data] = useState({
        dropdown_images_count: 0,
        dropdown_images_files: []
    })
    const [dropdown_images_files, set_dropdown_images_files] = useState()

    const dropzone_ref = useRef(null)

    function handleIssueDate(date) {
        setissueDate(date)
    }
    function handleValidDate(date) {
        setvalidDate(date)
    }

    function toggle_generatePDF() {
        setGeneratePDF_modal(!GeneratePDF_modal)
    }

    async function handleGeneratePDF() {
        console.log(issueDate, validDate)
        // await axios(`${process.env.REACT_APP_DEFAULTPATH}generatePDF` , {issueDate , validDate}).then((res)=>{
        //     console.log("res", res.json())
        // })
        const response = await fetch(`${process.env.REACT_APP_DEFAULTPATH}generatePDF`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                issueDate,
                validDate
            })
        })
        const data = await response.json();
        console.log("res data", data)
        if (data.status) {
            console.log(data.message)
        }
        else {
            alert(data.message)
        }
    }

    async function handle_page_select_option(e) {
        const image_count = parseInt(e.target.value)
        if (image_count < 1) {
            swal("Please Select size more than 0");
        }
        else {
            setAdvance_PDF_data({
                ...advance_PDF_data,
                dropdown_images_count: image_count
            })
        }

    }
    const handle_dropzone_onChange = (e) => {

        // console.log("handle drpoxone onchange fired ", e.target.files)
        if (e.target.files.length > advance_PDF_data.dropdown_images_count) {
            swal(`Please Select ${advance_PDF_data.dropdown_images_count} images`);
        }
        else {
            set_dropdown_images_files(e.target.files)
            setAdvance_PDF_data({
                ...advance_PDF_data,
                dropdown_images_files: e.target.files
            })
        }
    }

    async function generate_advance_PDF() {
        let form_data = new FormData();
        let i=0;

        // reading multiple files from input tag 
        for (let file of advance_PDF_data.dropdown_images_files) {
            console.log("file", file)
            form_data.append(`image_list_${i++}`, file)
        }
        // form_data.append("advance_PDF_data", advance_PDF_data.dropdown_images_files[0])
        // console.log("advance_PDF_data", advance_PDF_data)

        // await axios(`${process.env.REACT_APP_DEFAULTPATH}generatePDF` , {issueDate , validDate}).then((res)=>{
        //     console.log("res", res.json())
        // })


        axios.post(`${process.env.REACT_APP_DEFAULTPATH}generate-advance-pdf`, form_data).then((res) => {
            console.log(res.data)
        })
    }
    return (
        <div>
            <Button color="danger" onClick={() => { toggle_generatePDF() }}>Advance  PDF </Button>
            {/* Modal to take input from use for pdf  */}
            <Modal
                isOpen={GeneratePDF_modal}
                toggle={() => { toggle_generatePDF() }}
                className="modal-xl"
            >
                <ModalHeader toggle={() => {
                    toggle_generatePDF()
                }}>Generate PDF <small>this pdf is generarted using puppetter </small></ModalHeader>
                
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        // toggle_generatePDF()
                        // handleGeneratePDF()
                        generate_advance_PDF()
                    }}>Generate PDF</Button>
                    <Button color="secondary" onClick={() => {
                        toggle_generatePDF()
                    }}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );

}

export default TemplatePDF;