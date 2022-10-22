import React, { useRef, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Col, Label } from 'reactstrap';
// import DropzoneEditor from '../forms/Dropzone';
import WebAudit from '../InvoiceFormat/WebAudit';
import swal from 'sweetalert';
import axios from 'axios';

const Puppeteer_PDF = () => {

    const send_dropZone_files_function_Call_ref = useRef(null) // ref for dropzone editir
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

    async function handle_OnChange_image_number(e) {
        const image_count = e.target.value
        if (image_count < 1) {
            swal("Please Select size more than 0");
            return;
        }
        else {
            setAdvance_PDF_data({
                ...advance_PDF_data,
                dropdown_images_count: image_count
            })
            return;
        }

    }

    const handle_dropzone_onChange = (e) => {
        // console.log("handle drpoxone onchange fired ", e.target.files)
        // if (advance_PDF_data.dropdown_images_count === 0) {
        //     swal(`Please Select images number from above `);
        //     return;
        // }
        // if (e.target.files.length != advance_PDF_data.dropdown_images_count) {
        //     swal(`Please Select equal images as per above selected count `);
        //     return;
        // }
        // else {
        //     set_dropdown_images_files(e.target.files)
        //     setAdvance_PDF_data({
        //         ...advance_PDF_data,
        //         dropdown_images_files: e.target.files
        //     })
        //     return;
        // }

        console.log("data",e.target.files )
        set_dropdown_images_files(e.target.files)
    }

    function handle_discription_onChange(e){
        console.log("ain e", e.target.value)
    }

    async function generate_advance_PDF() {
        
        // const imgList = await send_dropZone_files_function_Call_ref.current.handle_dropzone_onSubmit()

        // console.log("img_list", imgList)
        let form_data = new FormData();
        form_data.append("data", dropdown_images_files[0])
        // let i = 0;


        // if (advance_PDF_data.dropdown_images_files.length != advance_PDF_data.dropdown_images_count) {
        //     swal(`Please check images count and images `);
        //     return;
        // }


        // reading multiple files from input tag 
        // for (let file of advance_PDF_data.dropdown_images_files) {
        //     console.log("file", file)
        //     form_data.append(`image_list_${i++}`, file)
        // }

        axios.post(`${process.env.REACT_APP_DEFAULTPATH}generate-pdf-using-client`, form_data).then((res) => {
            console.log(res.data)
        })
    }

    return (
        <div>
            <Button color="danger" onClick={() => { toggle_generatePDF() }}>Advance using CLient data  PDF </Button>
            {/* Modal to take input from use for pdf  */}
            <Modal
                isOpen={GeneratePDF_modal}
                toggle={() => { toggle_generatePDF() }}
                className="modal-xl"
            >
                <ModalHeader toggle={() => {
                    toggle_generatePDF()
                }}>Generate PDF <small className='fs-6'>&nbsp;&nbsp;&nbsp;this pdf is generarted using puppetter </small></ModalHeader>
                <ModalBody className=''>
                    <Col md={12}>
                        {/* <DropzoneEditor ref={send_dropZone_files_function_Call_ref} /> */}
                        <Input className='' type='file' multiple onChange={handle_dropzone_onChange}/>
                    <Label htmlFor='desc' className='px-3'>Description : </Label>
                    <Input type='test' name='desc' className='px-3' onChange={handle_discription_onChange} multiple />
                    </Col>
                </ModalBody>
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

export default Puppeteer_PDF;