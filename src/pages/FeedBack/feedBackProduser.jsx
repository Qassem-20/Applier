import '../../assets/css/feedback.css';
import React, { Component } from 'react'

export class feedBackProduser extends Component {
  render() {
    return (
        <Fragment>
            <Container>
              <p>My Reviews</p>
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
                <p>
                  <img src="" alt="Report Icon" />
                  <img src="" alt="Reply Icon" />
                </p>
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

export default feedBackProduser