import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { useState } from 'react';

const ReactCkEditor = () => {
  // const [ckEditor_data, setckEditor_data] = useState("");
  return (
    <CKEditor
      editor={ClassicEditor}
      data=""
      
      onReady={editor => {
        // You can store the "editor" and use when it is needed.
        // console.log('Editor is ready to use!', editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData(); // assign variable to data variable 
        console.log({ event, editor, data });
        // setckEditor_data(data)
      }}
      onBlur={(event, editor) => {
        // console.log('Blur.', editor);
      }}
      onFocus={(event, editor) => {
        // console.log('Focus.', editor);
      }}
    />
  )
}

export default ReactCkEditor