import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Input, Label, Row } from 'reactstrap'
import BreadCrumb from '../breadCrumb/BreadCrumb'
import { ImCross } from 'react-icons/im';

const BasicElements = () => {
    const [text_tag_state, set_text_tag_state] = useState({
        text: "",
        email: "",
        url: "",
        tel: "",
        search: "",
        number: "",
        range: "",
        datetime_local: "",
        month: "",
        time: "",
        week: "",
        date_min_max: "",
        color: "",
        select: ""
    })
    const [preview_image, set_preview_image] = useState([]);
    const [files, set_files] = useState([]);
    // const [show_image, set_show_image] = useState(false)

    // handle chnags for complete from 
    const handle_OnChange = (e) => {
        set_text_tag_state(prev_data => ({
            ...prev_data,
            [e.target.name]: e.target.value
        }))
    }

    const handle_OnSubmit = () => {
        console.log("text_tag_state -", text_tag_state)
        console.log("files -", files)
        console.log("preview_image -", preview_image)
    }
    const handle_file_upload = async (e) => {
        const files = e.target.files;
        set_files([]) // removing array elements before assigning new values 
        set_preview_image([])
        Object.keys(files).forEach(function (key) {
            // here object.assign(target, source) concat array in target 
            Object.assign(files[key], {
                preview: URL.createObjectURL(files[key])
            })
            set_files(prev_data => [...prev_data, files[key]]) // saving images for backend 
            // const image = URL.createObjectURL(files[key])
            // set_preview_image(prev_data => [...prev_data, image]) // setting images for preview 
        });
        // set_show_image(true)

    }
    // handle changes to delete images 
    const handle_image_delete = (element, index) => {
        // console.log(element, index)
        // removing image from an preview array 
        set_preview_image(prev_data =>
            prev_data.filter(data => {
                return data !== element;
            })
        )

        // revoing from an server data serving arrra
        var temp_arr = files;
        temp_arr.splice(index, 1);
        set_files(temp_arr)
        // console.log(files)
    }


    // const return_data = () => {
    //     console.log("called", files)
    //     files.map((data, index) => {
    //         return (
    //             <Col md={3} className="image_preview_col " key={index}
    //             >
    //                 <div class="overlay d-flex justify-content-center align-items-center">
    //                     <div className='icon_div d-flex justify-content-center align-items-center' >
    //                         <ImCross className='icon' onClick={() => { handle_image_delete(data, index) }} />
    //                     </div>
    //                 </div>
    //                 <div className='view_image d-flex justify-content-center align-items-center'>
    //                     <div className="image_preview">
    //                         <img src={data} />
    //                     </div>
    //                 </div>
    //             </Col>
    //         )
    //     }
    //     )
    // }
    // const test = useMemo(() => return_data(), [files])
    useEffect(()=>{
        // console.log("effecr triggered")
    },[])
    return (
        <>
            <BreadCrumb
                title="Modern Dashboard"
                page="Dashboard"
                section="basic-element" />

            <Row>
                <Col>
                    <Card className='card_shadow pb-4'>
                        <CardHeader className='bg-white p-4'><h3 className='heading_secondary'>Text tag inputs</h3></CardHeader>
                        <CardBody className='bg-white px-4'>
                            <Row>

                                <Col md={6}>
                                    <Label htmlFor='text' className='text-secondary text-sm heading_sub_secondary'>Text</Label>
                                    <Input type="text" name='text' className='heading_sub_secondary mb-4'
                                        onChange={handle_OnChange} /> </Col>
                                <Col md={6}>
                                    <Label htmlFor='email' className='text-secondary text-sm heading_sub_secondary'>Email</Label>
                                    <Input type="email" name='email' className='heading_sub_secondary mb-4' onChange={handle_OnChange} /> </Col>
                                <Col md={6}>
                                    <Label htmlFor='url' className='text-secondary text-sm heading_sub_secondary'>URL</Label>
                                    <Input type="url" name='url' className='heading_sub_secondary mb-4' onChange={handle_OnChange} /> </Col>
                                <Col md={6}>
                                    <Label htmlFor='tel' className='text-secondary text-sm heading_sub_secondary'>tel</Label>
                                    <Input type="tel" name='tel' className='heading_sub_secondary mb-4' onChange={handle_OnChange} /> </Col>
                                <Col md={6}>
                                    <Label htmlFor='search' className='text-secondary text-sm heading_sub_secondary'>Search</Label>
                                    <Input type="search" name='search' className='heading_sub_secondary mb-4' onChange={handle_OnChange} /> </Col>
                                <Col md={6}>
                                    <Label htmlFor='number' className='text-secondary text-sm heading_sub_secondary'>Number</Label>
                                    <Input type="number" name='number' className='heading_sub_secondary mb-4' onChange={handle_OnChange}
                                        min="0" max="1" step="0.01" /> </Col>
                                <Col md={6}>
                                    <Label htmlFor='range' className='text-secondary text-sm heading_sub_secondary'>Range</Label>
                                    <Input
                                        type="range"
                                        name="range"
                                        id="range"
                                        min="50000"
                                        max="500000"
                                        step="100"
                                        // value="250000" 
                                        className='heading_sub_secondary mb-4' onChange={handle_OnChange} /> </Col>
                                <Col md={6}>
                                    <Label htmlFor='datetime-local' className='text-secondary text-sm heading_sub_secondary'>Datetime-local</Label>
                                    <Input type="datetime-local" name='datetime_local' className='heading_sub_secondary mb-4' onChange={handle_OnChange} /> </Col>
                                <Col md={6}>
                                    <Label htmlFor='month' className='text-secondary text-sm heading_sub_secondary'>Month</Label>
                                    <Input type="month" name='month' className='heading_sub_secondary mb-4' onChange={handle_OnChange} /> </Col>
                                <Col md={6}>
                                    <Label htmlFor='time' className='text-secondary text-sm heading_sub_secondary'>Time</Label>
                                    <Input type="time" name='time' className='heading_sub_secondary mb-4' onChange={handle_OnChange} /> </Col>
                                <Col md={6}>
                                    <Label htmlFor='week' className='text-secondary text-sm heading_sub_secondary'>Week</Label>
                                    <Input type="week" name='week' className='heading_sub_secondary mb-4' onChange={handle_OnChange} /> </Col>
                                <Col md={6}>
                                    <Label htmlFor='date' className='text-secondary text-sm heading_sub_secondary'>Date - with min and max </Label>
                                    <Input type="date" name='date_min_max' className='heading_sub_secondary mb-4' onChange={handle_OnChange} min="2013-06-01" max="2022-09-12" /> </Col>
                                <Col md={6}>
                                    <Label htmlFor='color' className='text-secondary text-sm heading_sub_secondary'>Color</Label>
                                    <Input type="color" name='color' className='heading_sub_secondary mb-4' onChange={handle_OnChange} /> </Col>

                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="select" className='text-secondary text-sm heading_sub_secondary'>Choose a car:</label>
                                        <select name="select" id="select" form="carform" className="form-select" aria-label="Default select example" onChange={handle_OnChange}>
                                            <option defaultValue="volvo" >Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col>
                                    <div className=''>
                                        <Button onClick={handle_OnSubmit}>submit</Button>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Card className='card_shadow pb-4 mt-5'>
                        <CardHeader className='bg-white p-4'><h3 className='heading_secondary'>Extra Input type </h3></CardHeader>
                        <CardBody className='bg-white px-4'>
                            <Row>
                                <Col md={6}>
                                    <Label htmlFor='radio' className='text-secondary text-sm heading_sub_secondary'>Radio Button&nbsp; &nbsp;&nbsp;</Label>
                                    <Input type="radio" name='radio' className='heading_sub_secondary mb-4'
                                    /> </Col>

                                <Col md={6}>
                                    <Label htmlFor='file' className='text-secondary text-sm heading_sub_secondary'>file Upload &nbsp; &nbsp;&nbsp;</Label>
                                    <Input type="file" name='file' className='heading_sub_secondary mb-4' multiple placeholder={files.length}
                                        onChange={handle_file_upload}
                                    /> </Col>
                                {/* <Col md={6}>
                                    <Label htmlFor='file' className='text-secondary text-sm heading_sub_secondary'>file Upload &nbsp; &nbsp;&nbsp;</Label>
                                    <Input type="file" name='file' className='heading_sub_secondary mb-4'
                                    /> </Col> */}
                                <Row>
                                    {files.map((data, index) => {
                                        return (
                                            <Col md={2} className="image_preview_col " key={index}
                                            >
                                                <div className="overlay d-flex justify-content-center align-items-center">
                                                    <div className='icon_div d-flex justify-content-center align-items-center' >
                                                        <ImCross className='icon' onClick={() => { handle_image_delete(data, index) }} />
                                                    </div>
                                                </div>
                                                <div className='view_image d-flex justify-content-center align-items-center'>
                                                    <div className="image_preview">
                                                        <img src={data.preview} alt="not loaded" />
                                                    </div>
                                                </div>
                                                <div className="overlay d-flex justify-content-center align-items-center">
                                                    <div className='icon_div d-flex justify-content-center align-items-center fw-bold' >
                                                        {data.name}
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                    )}
                                </Row>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default BasicElements