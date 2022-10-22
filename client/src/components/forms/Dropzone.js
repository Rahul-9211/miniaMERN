import React, { forwardRef, useImperativeHandle, useState } from 'react'
import Dropzone from 'react-dropzone'
import { Link } from 'react-router-dom'
import { Col, Form, Row } from 'reactstrap'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import axios from 'axios'

const DropzoneEditor = forwardRef((props, ref) => {


    const [selectedFiles, setselectedFiles] = useState([])

    function handleAcceptedFiles(files) {
        // here files is an array having object of each image 
        // props.handle_dropzone_onChange(files)
        console.log("files", files) 
        axios.post(`${process.env.REACT_APP_DEFAULTPATH}generate-pdf-using-client`, files).then((res) => {
            console.log(res.data)
        })
        const temp_files = files;
        // temp_files.map(file =>
        //     Object.assign(file, {  // here object.assign(target, source) concat array in target 
        //         preview: URL.createObjectURL(file),
        //         formattedSize: formatBytes(file.size),
        //     })
        // )
        console.log("temp_files", temp_files)
        setselectedFiles(temp_files)
    }

    /**
     * Formats the size
     */
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    }

    useImperativeHandle(ref, () => ({
        handle_dropzone_onSubmit() {
            console.log("selectedFiles", selectedFiles)
            return selectedFiles;
        }
    }))


    return (
        <Form>
            <Dropzone
                onDrop={acceptedFiles => {
                    console.log("acceptedFiles",acceptedFiles)
                    handleAcceptedFiles(acceptedFiles)
                }}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()} className="react_dropzone">
                            <input {...getInputProps()} />
                            <AiOutlineCloudUpload className='text-center fs-1' />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>

            <div className=" mt-3" id="file-previews">
                {selectedFiles.map((f, i) => {
                    return (
                        <div
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                        >
                            <div className="p-2">
                                <Row className="align-items-center">
                                    <Col className="col-auto">
                                        <img
                                            data-dz-thumbnail=""
                                            height="80"
                                            className="avatar-sm rounded bg-light"
                                            alt={f.name}
                                            src={f.preview}
                                        />
                                    </Col>
                                    <Col>
                                        <Link
                                            to="#"
                                            className="text-muted font-weight-bold"
                                        >
                                            {f.name}
                                        </Link>
                                        <p className="mb-0">
                                            <strong>{f.formattedSize}</strong>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Form>



    )
})

export default DropzoneEditor