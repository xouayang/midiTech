import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import Picture from "../images/congra1.jpeg";
const About = () => {
  return (
    <Container className="mt-5 mb-5 p-5" id="about">
      <Row className="align-items-center">
        <Col md={6} className='text-end rounded-4 align-items-center'>
          <Image
            className="rounded"
            src={Picture}
            alt="about picture"
            style={{ height: "250px",padding:'0px' }}
          />
        </Col>
        <Col md={6} className="mt-2">
        <h3 className="text-center fw-bold " style={{color:'#1771BC'}}>ກຽ່ວກັບ ເມດີເທັກ </h3>
          <p className="fs-4 ms-5">
            ພວກເຮົາໃຫ້ບໍລິການດ້ານການພັດທະນາໂປແກຼມມືຖືທີ່ດີທີ່ສຸດ,
            ການພັດທະນາເວບໄຊທ໌ແລະຊອບແວເພື່ອເລີ່ມຕົ້ນໃຫ້ບໍລິສັດລະດັບວິສາຫະກິດ.
            ນັກພັດທະນາເວບໄຊທ໌ ທີ່ມີຄວາມຊຳນິຊຳນານງານຂອງພວກເຮົາ ໃນການນຳ
            ໃຊ້ເຕັກໂນໂລຢີເວັບ ເຊັ່ນ: React JS, Angular JS, Node JS,
            .net, Flutter, Java, Python, Golang ແລະອື່ນໆ.
          </p>
        </Col>
      </Row>
      <hr className="mt-5" /> 
    </Container>
  );
};

export default About;
