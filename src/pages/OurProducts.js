import React from "react";
import Picture from '../images/p.jpeg'
import Picture1 from '../images/p1.jpeg'
import Picture2 from '../images/p2.jpeg'
import Picture3 from '../images/p3.jpeg'
import { Row, Col, Container,Card,Image } from "react-bootstrap";
import Carousel from 'react-grid-carousel'
const OurProducts = () => {
  const handleDragStart = (e) => e.preventDefault();
  return (
    <div className="h-auto mt-5 mb-5" id="Product">
      <Container>
        <Row className="p-5">
          <h3
            className=" text-center fw-bold fs-2"
            style={{ color: "#1771BC" }}
          >
            ຜົນງານຂອງ <span className="font1">Midi Tech </span>
          </h3>
          <h4 className="font1 text-center fs-3 mb-5 ">Our Products</h4>
          <Col
            className="text-center pt-4 w-50 rounded-5"
          >
       <Carousel
  cols={2}
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
    <Card style={{border:'none', backgroundColor:'white'}}>
    <Image src={Picture} style={{height:'300px'}} className='rounded-5 '/>
    </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card style={{border:'none', backgroundColor:'white'}}>
    <Image src={Picture1} style={{height:'300px'}} className='rounded-5 '/>
    </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card style={{border:'none', backgroundColor:'white'}}>
    <Image src={Picture2} style={{height:'300px'}} className='rounded-5 '/>
    </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card style={{border:'none', backgroundColor:'white'}}>
    <Image src={Picture3} style={{height:'300px'}} className='rounded-5 '/>
    </Card>
    </Carousel.Item>
</Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurProducts;
