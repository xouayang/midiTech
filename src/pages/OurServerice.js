import React from "react";
import "../css/Banner.css";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import { GrPersonalComputer } from "react-icons/gr";
import { FaRegHandshake, FaMobileAlt } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import Picture from "../images/congra.jpeg";
import Picture1 from '../images/web6.jpeg'
import Picture3 from '../images/web9.jpeg'
import Picture4 from '../images/web8.jpeg'
import Picture5 from '../images/web10.jpeg'
const OurServerice = () => {
  return (
    <>
      <Container className="mt-3 mb-5 " id="Service">
        <h2 className="fw-bold text-center mb-3 " style={{ color: "#1771BC" }}>
          ບໍລິການຂອງພວກເຮົາ
        </h2>
        <h2 className="fw-bold text-center mb-3 font1">Our Service</h2>
        <Row className="p-2 d-flex justify-content-center">
          <Col
             id="hover"
            className=" text-center me-2 rounded-4 mt-2 hover"
            md={6}
            style={{
              width: "500px",
            }}
          >
            <Image
            src={Picture5}
              alt="ict solution"
              style={{ height: "130px" }}
              className="p-1"
            />
            <h3 className="font1 mt-5">Training</h3>
            <GiTeacher size={50} className="mt-4 mb-3" />
          </Col>
          <Col
          id="hover"
            className=" text-center rounded-4 mt-2"
            md={6}
            style={{
              width: "500px",
            }}
          >
            <Image
              src={Picture1}
              alt="website development"
              style={{ height: "130px" }}
              className="p-1"
            />
            <h3 className="font1 mt-5">WEB Development</h3>
            <GrPersonalComputer size={50} className="mt-4 mb-3" />
          </Col>
        </Row>
        <Row className=" d-flex justify-content-center mb-5">
          <Col
          id="hover"
            className="text-center me-2 rounded-4 mt-2"
            md={6}
            style={{
              width: "500px",
            }}
          >
            <Image
              src={Picture3}
              alt="ict solution"
              style={{ height: "130px" }}
              className="p-1"
            />
            <h3 className=" font1 mt-5">Mobile Application</h3>
            <FaMobileAlt size={50} className="mt-4 mb-3" />
          </Col>

          <Col
          id="hover"
            className=" text-center rounded-4 mt-2"
            md={6}
            style={{
              width: "500px",
            }}
          >
            <Image
              src={Picture4}
              alt="ict solution"
              style={{ height: "130px" }}
              className="p-1"
            />
            <h3 className="font1 mt-5">Consulting</h3>
            <FaRegHandshake size={50} className="mt-4 mb-3" />
          </Col>
        </Row>
      </Container>

      <div
        style={{ marginTop: "80px" }}
        className="mb-5"
      >
        <Container style={{backgroundColor: "#10ac84"}} className='p-5 rounded-5'>
          <Row >
            <Col md={6}>
              <h3 className="fw-bold text-white text-center">
                ເຂົ້າມາເປັນສ່ວນໜື່ງຂອງພວກເຮົາ
              </h3>
              <p className="fw-bold fs-5 text-white ms-5 mt-4">
                ສະໝັກເຂົ້າມາເປັນຄອບຄົວດຽວກັນກັບພວກເຮົາທີ່ພ້ອມພັດທະນາໄປນຳກັນ
                ດ້ວຍວິໄສທັດການເຮັດວຽກທີ່ທັນສະໄໝ ແລະ ຕອບໂຈດ Life style
                ຄົນໃນປັດຈຸບັນ
              </p>
            </Col>

            <Col className="text-center" md={6}>
              <Image
                className="rounded-5 w-auto"
                src={Picture}
                alt="about picture"
                style={{ height: "200px", padding: "0px"}}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurServerice;
