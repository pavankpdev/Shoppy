// Libraries
import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  Button,
  Spinner,
  Card,
  Row,
  Col,
  CardBody,
  CardHeader,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { useDispatch } from "react-redux";
import moment from "moment";

// components
import CustomRadioInput from "../../components/InputFields/radioFiled.component";

// Redux Actions
import { GetReports } from "../../redux/reducer/Admin/Admin.action";

const Analytics = () => {
  const [analytics, setAnalytics] = useState({
    orderReports: {
      Total: [],
      "Electricals & Electronics": [],
      Sports: [],
      "Home Appliances": [],
      Furniture: [],
    },
    productSalesReport: [],
  });
  const [filter, setFilter] = useState("Total");

  const dispatch = useDispatch();

  useEffect(() => {
    const GetReportsAction = async () => {
      const Reports = await dispatch(GetReports());
      setAnalytics(Reports.payload);
    };

    GetReportsAction();
  }, []);
  return (
    <>
      <Container className="mt-3">
        <Row className="mb-4 justify-content-between border-bottom border-primary">
          <h1 className="text-primary">Reports</h1>
        </Row>
        <Row>
          <Col lg="6">
            <Card className="shadow">
              <CardHeader>
                <div className="d-flex justify-content-between">
                  <h3>Order Report</h3>
                  <UncontrolledDropdown>
                    <DropdownToggle nav>
                      <i className="fas fa-sliders-h mr-2"></i>
                      <span className="mr-2 text-default font-weight-700">
                        Filter
                      </span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <Col>
                        <p className="text-gray text-sm">Filter By:</p>
                      </Col>
                      {[
                        "Total",
                        "Electricals & Electronics",
                        "Home Appliances",
                        "Furniture",
                        "Sports",
                      ].map((elem) => (
                        <>
                          <CustomRadioInput
                            id={elem}
                            radioName={elem}
                            click={() => setFilter(elem)}
                            active={filter === elem ? true : false}
                          />
                        </>
                      ))}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead
                    className="text-white"
                    style={{ backgroundColor: "#ee7781" }}
                  >
                    <tr>
                      <th>Date</th>
                      <th>Customer Name</th>
                      <th>Total Products</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analytics.orderReports[filter].map(
                      ({ Date, CustomerName, TotalProducts, TotalPrice }) => (
                        <tr>
                          <th scope="row">{moment(Date).format("DD MMM")}</th>
                          <td>{CustomerName}</td>
                          <td>{TotalProducts}</td>
                          <td>{TotalPrice}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="shadow">
              <CardHeader>
                <h3>Product Sales</h3>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead
                    className="text-white"
                    style={{ backgroundColor: "#ee7781" }}
                  >
                    <tr>
                      <th>Date</th>
                      <th>Product Id</th>
                      <th>Product Name</th>
                      <th>Units Sold</th>
                      <th>Unit Price</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analytics.productSalesReport.map(
                      ({
                        Date,
                        product_id,
                        product_name,
                        unitsSold,
                        unitPrice,
                        TotalPrice,
                      }) => (
                        <tr>
                          <th scope="row">{moment(Date).format("DD MMM")}</th>
                          <td>{product_id}</td>
                          <td>{product_name}</td>
                          <td>{unitsSold}</td>
                          <td>{unitPrice}</td>
                          <td>{TotalPrice}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Analytics;
