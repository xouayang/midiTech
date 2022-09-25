import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap'
import Logo from '../images/logo1.jpeg'
import {FiCheck} from 'react-icons/fi'
import {BsTelephoneInbound} from 'react-icons/bs'
import {MdOutlineAttachEmail} from 'react-icons/md'
import {TbAddressBook} from 'react-icons/tb'
const Footer = () => {
  return (
    <div className=' mt-5 pb-5' style={{backgroundColor:'#10ac84'}} id="footer">
      <Container>
        <Row className=''>
            <Col className='mt-5  ' md={4}>
            <h3 className='fw-bold text-white mb-4 ms-4' >ກຽ່ວກັບພວກເຮົາ</h3>
            <Image className='rounded-5' src={Logo} alt="footerLogo" style={{height:'200px',width:'250px'}}/>
            </Col>
            <Col className="mt-5 " md={4}>
            <h3 className='fw-bold text-white'> ບໍລິການທັງຫມົດ</h3>
            <Col className="d-flex text-white justify-content-start">
                 <FiCheck className='mt-1 fs-5' size={25}/>
                  <p className='fs-5'>ທີ່ປືກສາ</p>
              </Col>

              <Col className="d-flex text-white justify-content-start">
                 <FiCheck className='mt-1 fs-5' size={25}/>
                  <p className='fs-5'>ICT ຄົບວົງຈອນ</p>
              </Col>

              <Col className="d-flex text-white">
                 <FiCheck className='mt-1 fs-5' size={25}/>
                  <p className='fs-5'>ພັດທະນາເວັບໄຊ</p>
              </Col>
              <Col className="d-flex text-white">
                 <FiCheck className='mt-1 fs-5' size={25}/>
                  <p className='fs-5'>ພັດທະນາລະບົບ</p>
              </Col>

              <Col className="d-flex text-white">
                 <FiCheck className='mt-1 fs-5' size={25}/>
                  <p className='fs-5'>ພັດທະນາເເອັບພຣີເຄເຊີນ</p>
              </Col>

                <Col className="d-flex text-white">
                 <FiCheck className='mt-1 fs-5' size={25}/>
                  <p className='fs-5'>ດູເເລຮັກສາລະບົບ</p>
                 </Col>
            </Col>
            <Col className="mt-3 d-flex flex-column justify-content-center" md={4}>
            <h3 className='fw-bold text-white'>ຕິດຕໍ່</h3>
              <Col className='d-flex text-white '>
                 <BsTelephoneInbound size={25} className='mt-1'/>
                  <h4 className='ms-2'>ເບີໂທລະສັບ / What's App</h4>
              </Col>
              <p className='text-white ms-3 fs-5'>+85620-55019551</p>

              <Col className='d-flex text-white '>
                 <MdOutlineAttachEmail size={25} className='mt-1'/>
                  <h4 className='ms-2'>ອີເມວ / Email</h4>
              </Col>
              <p className='text-white ms-3 fs-5'>midi tech12@gmail.com</p>

              <Col className='d-flex text-white '>
                 <TbAddressBook size={25} className='mt-1'/>
                  <h4 className='ms-2'> ທີ່ຢູ່ / Address </h4>
              </Col>
              <p className='text-white ms-3 fs-5'>
                  ....................
              </p>


            </Col>
           
        </Row>
        </Container>
    </div>
  )
}

export default Footer
