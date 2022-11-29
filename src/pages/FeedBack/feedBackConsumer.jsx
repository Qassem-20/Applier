import '../../assets/css/feedback.css';
import React, { Component, Fragment } from 'react'

export class feedBackConsumer extends Component {
  render() {
    return (
      <Fragment>
      <Container>
        <Row>
          <Col>
          <img src='' />
          </Col>

          <Col>
          <p>University Name</p>
          <p>Major</p>
          <p>City</p>
          </Col>

          <Col>
          <p>Rate</p>
          <p>Phone Number</p>
          <p>WhatsApp URL</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <h1>Review</h1>
        <p>Rate</p>
        <div class="Rating" aria-label="Rating of this item is 3 out of 5">
          <img src="" class="Rating--Star Rating--Star__active" />
          <img src="" class="Rating--Star Rating--Star__active" />
          <img src="" class="Rating--Star Rating--Star__active" />
          <img src="" class="Rating--Star" />
          <img src="" class="Rating--Star" />
        </div>          
        
        <p>Review</p>
        <input type="text" name="" value="" />
      </Container>

      <Container>
      <h1>Rate of the medical student</h1>
      <Container>
        <Row>
        <Col>
        <img src="" alt="" />
        <p>Name of the person who wrote the feedback</p>
        </Col>
        
        <Col>
        <p>The Feedback</p>
        </Col>

        <Col>
        <span>Rate</span>
        <img src="" alt="" />
        </Col>
        </Row>
      </Container>
      </Container>
    </Fragment>   
    )
  }
}

export default feedBackConsumer