import React from "react";
import { Container, Row, Col, Table } from "reactstrap";

const Cart = () => {
  return (
    <>
      <Container>
        <div className="mt-3 border-bottom border-primary">
          <h1 className="text-primary">Your Cart</h1>
        </div>
        <Row>
          <Col>
            {/* <div style={{ maxWidth: "100px" }}>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/61B7e9pNOPL.jpg"
                alt="mother board"
                className="img-fluid"
              />
            </div> */}
            <Table responsive borderless>
              <tbody>
                <tr>
                  <th scope="row">
                    <div style={{ maxWidth: "100px" }}>
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/I/61B7e9pNOPL.jpg"
                        alt="mother board"
                        className="img-fluid"
                      />
                    </div>
                  </th>
                  <td>ASUS EX-A320M Gaming AMD Motherboard</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
