import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import { news, newsBottom, video, shirt, match, hero } from '../data/index'



const HomePage = () => {
  return (
    <div>
      <div className='homepage'>
        <Carousel>
          {hero.map((data) => {
            return (
              <Carousel.Item key={data.id}>
                <img src={data.image} alt="" className='w-100' />
                <Carousel.Caption>
                  <h3>{data.title}</h3>
                  <p>{data.desc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>

      <div className="match">
        <Container>
          <Row>
            {match.map((data) => {
              return (
                <Col lg="6" key={data.id}>
                  <div className="match-results">
                    <h3>{data.title}</h3>
                    <div className="liga">
                      <img src={data.bri} alt="" />
                      <span>{data.text}</span>
                    </div>

                    <div className="match-skor d-flex justify-content-center align-items-center">
                      <div className="club align-items-center text-center">
                        <img src={data.logoHome} alt="" className='ps-1' />
                        <p className=''>{data.nameHome}</p>
                      </div>
                      <div className="skor">
                        <span className='pe-2'>{data.skorHome}</span>
                        <span className='pe-2'>-</span>
                        <span className='pe-2'>{data.skorAway}</span>
                      </div>
                      <div className="club align-items-center text-center">
                        <img src={data.logoAway} alt="" className='ps-1' />
                        <p className=''>{data.nameAway}</p>
                      </div>
                    </div>
                    <div className='btn d-flex justify-content-center align-items-center mx-auto'>
                      <i class='bx bx-football'></i>
                      <span>Match Report</span>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>

      <div className="news">
        <Container>
          <Row>
            <Col className='d-flex justify-content-between align-items-center mb-4'>
              <h1 className='fw-bold'>News</h1>
              <Link>Selengkapnya</Link>
            </Col>
          </Row>
          <Row className='mb-4'>
            {news.map((data) => {
              return (
                <Col lg="6" key={data.id}>
                  <div className="news-card">
                    <img src={data.image} alt="" className='w-100' />
                    <div className="news-wrapper">
                      <div className="news-text">
                        <h5 className='fw-bold'>{data.title}</h5>
                        <p>
                          {data.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>

          <Row >
            {newsBottom.map((data) => {
              return (
                <Col lg='4' key={data.id}>
                  <div className="news-card-bottom">
                    <img src={data.image} alt="" className='w-100' />
                    <div className="news-main">
                      <h5>{data.title}</h5>
                      <div className="time d-flex align-items-center">
                        <i class='bx bx-time-five'></i>
                        <span>1 hari yang lalu</span>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>

      <div className="video">
        <Container>
          <Row className='mb-4'>
            <Col>
              <h1 className='fw-bold mt-3'>Videos</h1>
            </Col>
          </Row>
          <Row>
            {video.map((data) => {
              return (
                <Col lg='6' key={data.id}>
                  <div className="video-card">
                    <img src={data.image} alt="" className='w-100' />
                    <div className="video-wrapper">
                      <i class='bx bx-play-circle' ></i>
                    </div>
                    <div className="video-text">
                      <h5>{data.title}</h5>
                      <div className="time d-flex align-items-center">
                        <i class='bx bx-time-five'></i>
                        <span>1 hari yang lalu</span>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            <Col>
              <div className="btn-view d-flex justify-content-center mt-5 mb-5">
                <Link>View All Videos</Link>
              </div>
              <div className="video-chanel d-flex justify-content-between align-items-center mb-2">
                <div>
                  <h2 className='fw-bold'>Persita Tv</h2>
                  <p>reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
                <div className="video-btn">
                  <Link>Subscribe</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="shirt">
        <Container>
          <Row>
            {shirt.map((data) => {
              return (
                <Col lg='4' key={data.id}>
                  <div className="shirt-card">
                    <img src={data.image} alt="" className='w-100' />
                    <div className="shirt-wrapper text-center pt-3">
                      <h6>{data.title}</h6>
                      <div className="shirt-icon d-flex align-items-center justify-content-center">
                        <i class='bx bxs-t-shirt'></i>
                        <span><Link>Pre-Order Oniline</Link></span>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </div >
  )
}

export default HomePage