import React from "react";
// import Picture from '../images/program.jfif'
import Phone from "../images/iPhone-12-front-1.png";
import "../css/Banner.css";
import Carousel from "react-grid-carousel";
import TypingEffect from "react-typing-effect";
import {Col, Row, Container,Image} from 'react-bootstrap'
import "../css/Banner.css";
const Banner = () => {
  return (
    <>
      <Row className="p-4 h-auto d-flex justify-content-between align-items-center background_Image"
      >
        <Col className="w-25 h-auto p-4 text-center" md={6}>
          <h1 className="font">ສະບາຍດີ</h1>
          <TypingEffect
            className="fs-3 fw-bold text1"
            text={[
              " Welcome to Midi Tech ",
              "ຍີນດີຕ້ອນຮັບເຂົ້າສູ່ເມດີເທັກ ",
            ]}
          />
        </Col>
        <Col className="w-auto p-3 ms-5 d-flex text-center align-items-center" md={6} >
          <Container className="ms-5">
            <Carousel
              cols={1}
              rows={1}
              gap={10}
              loop={true}
              dotColorActive="#1771BC"
              autoplay={2000}
              hideArrow={true}
              className="d-flex justify-content-center"
            >
              <Carousel.Item>
                <Image
                  src={Phone}
                  alt="iphone"
                  className=""
                  style={{ height: "300px" }}
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  src="https://www.netsetsoftware.com/images/web-_app_development_top_imag.png"
                  alt="iphone"
                  className=""
                  style={{ height: "300px" }}
                />
              </Carousel.Item>
              </Carousel>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Banner;
