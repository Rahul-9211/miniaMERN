// import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  Modal,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledDropdown,
  Button
} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
// import { AvForm } from "availity-reactstrap-validation";
import React, { useState, useEffect } from "react";


const DataTable = ()  => {
  const { SearchBar } = Search;
  const [productData, setProductData] = useState([]); // main array to show port scan Data
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response = await fetch(
      "https://akabab.github.io/superhero-api/api/all.json"
    );
    const data = await response.json();
    setProductData(data);
  }
  const columns = [
    {
      dataField: "name",
      text: "name",
      sort: true
    },
    {
      dataField: "slug",
      text: "slug",
      sort: true
    },
    {
      dataField: "More",
      text: "View Details",
      sort: true,
      formatter: (cellContent, productData) => (
        <>
          {/* <AvForm> */}
            {/* {console.log("without cliecekd", productData.Ports)} */}
            <Button
              color="primary"
              onClick={() => {
                tog_standard4();
                setmodalPopupData(productData.powerstats);
              }}
            >
              View More
            </Button>
          {/* </AvForm> */}
        </>
      )
    }
  ];
  const defaultSorted = [
    {
      dataField: "id",
      order: "asc"
    }
  ];

  const [modal_standard4, setmodal_standard4] = useState(false); // modal to show view more data
  const [modalPopupData, setmodalPopupData] = useState({}); // array to store data inside modal
  const pageOptions = {
    sizePerPage: 10,
    totalSize: productData.length, // replace later with size(customers
    custom: true
  };

  function tog_standard4() {
    setmodal_standard4(!modal_standard4);
    // removeBodyCss()
  }
  return (
    <div className="">
      <h1>Bootstrap DataTable</h1>

      <Row>
        <Modal
          isOpen={modal_standard4}
          toggle={() => {
            tog_standard4();
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="myModalLabel">
              Ports Details
            </h5>
            <button
              type="button"
              onClick={() => {
                setmodal_standard4(false);
              }}
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">intelligence</th>
                  <th scope="col">strength</th>
                  <th scope="col">speed</th>
                  <th scope="col">durability</th>
                  <th scope="col">power</th>
                  <th scope="col">combat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{modalPopupData.intelligence}</td>
                  <td>{modalPopupData.strength}</td>
                  <td>{modalPopupData.speed}</td>
                  <td>{modalPopupData.durability}</td>
                  <td>{modalPopupData.power}</td>
                  <td>{modalPopupData.powcombater}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={() => {
                tog_standard4();
                setmodal_standard4(false);
              }}
              className="btn btn-warning "
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </Modal>
        <Row className="content">
          <Col className="col-xxl-9 userData credentialData">
            <div className="auth-full-page-content d-flex p-sm-5 p-4">
              <div className="w-100">
                <div className="d-flex flex-column">
                  <div className="  text-center"></div>
                  <div className="auth-content my-auto">
                    <div className="mainTable">
                      <CardBody>
                        <PaginationProvider
                          pagination={paginationFactory(pageOptions)}
                          // keyField="id"
                          // columns={columns}
                          // data={productData}
                        >
                          {({ paginationProps, paginationTableProps }) => (
                            <ToolkitProvider
                              keyField="id"
                              columns={columns}
                              data={productData}
                              search
                            >
                              {(toolkitProps) => (
                                <React.Fragment>
                                  <Row className="mb-2">
                                    <Col>
                                      <div className="search-box me-2 mb-2 d-flex justify-content-between">
                                        <div className="d-inline">
                                          <SizePerPageDropdownStandalone
                                            {...paginationProps}
                                          />
                                        </div>
                                        <div className="position-relative">
                                          <SearchBar
                                            {...toolkitProps.searchProps}
                                          />
                                          <i className="bx bx-search-alt search-icon" />
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>

                                  <Row>
                                    <Col xl="12">
                                      <div className="table-responsive">
                                        <BootstrapTable
                                          keyField={"id"}
                                          responsive
                                          bordered={false}
                                          striped={false}
                                          defaultSorted={defaultSorted}
                                          classes={
                                            "table align-middle table-nowrap"
                                          }
                                          headerWrapperClasses={"thead-light"}
                                          {...toolkitProps.baseProps}
                                          {...paginationTableProps}
                                        />
                                      </div>
                                    </Col>
                                  </Row>

                                  <Row className="align-items-md-center mt-30">
                                    <Col className="pagination pagination-rounded justify-content-end mb-2">
                                      <PaginationListStandalone
                                        {...paginationProps}
                                      />
                                    </Col>
                                  </Row>
                                </React.Fragment>
                              )}
                            </ToolkitProvider>
                          )}
                        </PaginationProvider>
                      </CardBody>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
}


export default DataTable;
