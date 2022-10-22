import React from 'react'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import HtmlPDF from '../../components/GeneratePDF/HTML_PDF'
import PuppeteerPDF from '../../components/GeneratePDF/Puppeteer_PDF'
import TemplatePDF from '../../components/GeneratePDF/TemplatePDF'

const Invoice =  () =>{
    return (
        <>
        <BreadCrumb
        title="Modern Dashboard"
        page="Dashboard"
        section="invoice" />
        <HtmlPDF/>
        <PuppeteerPDF/>
        <TemplatePDF/>
        </>
    )
  
}

export default Invoice