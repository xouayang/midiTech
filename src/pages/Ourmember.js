import React from "react";
import { Row, Container,Image, Card } from "react-bootstrap";
import "../css/Banner.css";
import Carousel from 'react-grid-carousel'
import Picture from "../images/m1.jpeg";
import Member1 from "../images/m2.jpeg";
import Member2 from "../images/m3.jpeg";
import Member3 from "../images/m4.jpeg";
import Member4 from "../images/m5.jpeg";
import Member5 from "../images/m6.jpeg";
import Member6 from "../images/m7.jpeg";
const Ourmember = () => {
 
  return (
    <div
      style={{ marginTop: "100px" }}
      className="text-center mb-5 mt-5"
      id="Member"
    >
      <Container className="mt-5">
        <h3 className="font1" style={{ color: "#1771BC" }}>
          Our Member
        </h3>
        <h3 className="fw-bold mb-5">ທີມງານທີ່ມີປະສົບການ</h3>
        <Row className="p-5">
<Carousel
  cols={4}
  rows={1}
  gap={11}
  responsiveLayout={[
    {
      breakpoint: 1200,
      cols: 3
    },
    {
      breakpoint: 990,
      cols: 2
    }
  ]}
  mobileBreakpoint={670}
>
    <Carousel.Item>
    <Card className="shadow-lg " style={{border:'none', backgroundColor:'white'}}>
                <Card.Header style={{border:'none'}}>
                     <Image src={Picture} style={{height:'130px', borderRadius:'100px'}}/>
                </Card.Header>
                <Card.Body>
                <p className="fw-bold fs-5">ຊາຍວຸດ</p>
                 <Card.Title className="font1"> CEO</Card.Title>
                </Card.Body>
               </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card style={{border:'none'}} className="shadow-lg">
                      <Card.Header style={{border:'none'}}>
                      <Image src={Member1} style={{height:'130px', borderRadius:'100px'}}/>
                      </Card.Header>
                     <Card.Body >
                      <p className="fw-bold fs-5">ທອງມົວ</p>
                      <Card.Title className="font1">CTO</Card.Title>
                     </Card.Body>
               </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card style={{border:'none'}} className="shadow-lg">
                <Card.Header style={{border:'none'}}>
                     <Image src={Member6} style={{height:'130px', width:'130px', borderRadius:'100px'}}/>
                </Card.Header>
                <Card.Body>
                <p className="fw-bold fs-5">ເອ</p>
                  <Card.Title className="font1">
                   Project Management
                  </Card.Title>
                </Card.Body>
               </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card style={{border:'none'}} className="shadow-lg">
                <Card.Header style={{border:'none'}}>
                     <Image src={Member3} style={{height:'130px', width:'130px', borderRadius:'100px'}}/>
                </Card.Header>
                <Card.Body>
                <p className="fw-bold fs-5">..............</p>
                  <Card.Title className="font1">
                   ...............
                  </Card.Title>
                </Card.Body>
               </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card style={{border:'none'}} className="shadow-lg">
                <Card.Header style={{border:'none'}}>
                     <Image src={Member4} style={{height:'130px', width:'130px', borderRadius:'100px'}}/>
                </Card.Header>
                <Card.Body>
                <p className="fw-bold fs-5">..........</p>
                  <Card.Title className="font1">
                   ...............
                  </Card.Title>
                </Card.Body>
               </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card style={{border:'none'}} className="shadow-lg">
                <Card.Header style={{border:'none'}}>
                     <Image src={Member5} style={{height:'130px', width:'130px', borderRadius:'100px'}}/>
                </Card.Header>
                <Card.Body>
                <p className="fw-bold fs-5">.............</p>
                  <Card.Title className="font1">
                   .............
                  </Card.Title>
                </Card.Body>
               </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card style={{border:'none'}} className="shadow-lg">
                <Card.Header style={{border:'none'}}>
                     <Image src={Member2} style={{height:'130px', width:'130px', borderRadius:'100px'}}/>
                </Card.Header>
                <Card.Body>
                <p className="fw-bold fs-5">...............</p>
                  <Card.Title className="font1">
                  ................
                  </Card.Title>
                </Card.Body>
               </Card>
    </Carousel.Item>
</Carousel>








        </Row>
      </Container>
    </div>
  );
};

export default Ourmember;
