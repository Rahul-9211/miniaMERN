import React from 'react'
import { Card, CardBody, CardHeader} from "reactstrap";
import ReactCkEditor from './ReactCkEditor';
import ReactDraftEditor from './ReactDraftEditor';

const FormEditor = () => {
  return (
    <>
      <Card className='card_shadow'>
        <CardHeader className='bg-white p-4'>
          <h3 className='heading_secondary'>React Draft Wysiwyg</h3>
        </CardHeader>
        <CardBody>
          <ReactDraftEditor />
        </CardBody>
      </Card>

      <Card className='card_shadow mt-4'>
        <CardHeader className='bg-white p-4'>
          <h3 className='heading_secondary'>React CK Editor</h3>
        </CardHeader>
        <CardBody>
          <ReactCkEditor />
        </CardBody>
      </Card>
    </>
  )
}

export default FormEditor