import React from "react";
import { Row, Col } from "react-bootstrap";
import ListCategories from "./components/ListCategories";
import Hasil from "./components/Hasil";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Row>
        <ListCategories />
        <Col>
          <h4>Daftar Produk</h4>
          <hr />
        </Col>
        <Hasil />
      </Row>
    </div>
  );
}

export default App;
