import React, { useEffect, useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ReactDraftEditor = () => {
    const [editorState, seteditorState] = useState()
    useEffect(() => {
        // console.log("editorstet", editorState)
    }, [editorState])
    return (
    <Editor
        editorState={editorState}
        editorStyle={{minHeight : "250px"}}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName w-50"
        onEditorStateChange={(e) => { seteditorState(e) }}
    />
    )
}

export default ReactDraftEditor