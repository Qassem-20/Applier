import { Container,Row,Col } from 'react-bootstrap'
import '../../assets/css/welcoming.css'
import Service1 from '../../assets/images/Services1.jpeg'
import Service2 from '../../assets/images/Services2.png'
import Service3 from '../../assets/images/Services3.png'
import Service4 from '../../assets/images/Services4.jpeg'
import React, { Component, Fragment } from 'react'

export class services extends Component {
  render() {
    return (
      <Fragment>
      <Container className='container-services' id='Services'>
        <h1 className='centerAlignment'>Our Services</h1>
          <Row> 
              <Col xl={3} md={6} sm={12}>
                <div className='card' id='card1'>
                <img src={Service1} alt="Service4" className='ServicesImgs' />
                <div class="card-body">
                <p>Get the right trainee</p>
                </div>
                </div>
              </Col>
              <Col xl={3} md={6} sm={12}>
                <div className='card'id='card2'>
                <img src={Service3} alt="Service4" className='ServicesImgs' />
                  <div class="card-body">
                    <p>promoting a training opportunity</p>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6} sm={12}>
                <div className='card'id='card3'>
                <img src={Service2} alt="Service4" className='ServicesImgs' />
                <div class="card-body">
                <p>Obtain an interview for you</p>
                </div>
                </div>
              </Col>
              <Col xl={3} md={6} sm={12}>
                <div className='card'id='card4'>
                <img src={Service4} alt="Service4" className='ServicesImgs' />
                  <div class="card-body">
                    <p>Share your CV</p>
                  </div>
                </div>
              </Col>
        </Row>
      </Container>
    </Fragment>
    )
  }
}

export default services