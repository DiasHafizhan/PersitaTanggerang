import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Sponsor1 from '../assets/image/sponsor1.png'
import Sponsor2 from '../assets/image/sponsor2.png'
import Sponsor3 from '../assets/image/sponsor3.png'
import Sponsor4 from '../assets/image/sponsor4.png'
import Sponsor5 from '../assets/image/sponsor5.png'
import Sponsor6 from '../assets/image/sponsor6.png'
import Partner1 from '../assets/image/partner1.png'
import Partner2 from '../assets/image/partner2.png'
import Partner3 from '../assets/image/partner3.png'
import Partner4 from '../assets/image/partner4.png'
import LogoPersita from '../assets/image/logoPersita.png'

const FooterComponent = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col>
            <h1 className='fw-bold text-center'>Official Sponsors</h1>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <img src={Sponsor1} alt="" />
            <img src={Sponsor2} alt="" />
            <img src={Sponsor3} alt="" />
            <img src={Sponsor4} alt="" />
            <div className="sponsor-bottom mt-3 align-items-center">
              <img src={Sponsor5} alt="" />
              <img src={Sponsor6} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className='text-center'>Official Partners</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="footer-partner text-center">
              <img src={Partner1} alt="" />
              <img src={Partner2} alt="" />
              <img src={Partner3} alt="" />
              <img src={Partner4} alt="" />
            </div>

            <div className="footer-logo text-center">
              <img src={LogoPersita} alt="" />
            </div>

            <div className="footer-social d-flex justify-content-between">
              <div className="footer-icon">
                <i class='bx bxl-facebook-square' ></i>
                <i class='bx bxl-instagram' ></i>
                <i class='bx bxl-twitter' ></i>
                <i class='bx bxl-youtube' ></i>
              </div>
              <div className="footer-kredit d-flex">
                <Link>Privacy Policy</Link>
                <Link>Teams and Conditions</Link>
                <Link>About Us</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent