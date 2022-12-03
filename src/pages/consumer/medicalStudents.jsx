import '../../assets/css/consumer.css';
import React, { Component, Fragment } from 'react'
import { Card,Button,Row,Col, Container } from 'react-bootstrap';

export class medicalStudents extends Component {
  render() {
    return (
      <Fragment>
        <Container>
        <h1>Medical Students</h1>
        <input type="" name="" value="" />
        <input type="" name="" value="" />
        <input type="" name="" value="" />
        <input type="" name="" value="" />
        <input type="" name="" value="" />
        </Container>
        <Container>
        <Row>
          <Col sm={6} xs={12}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xs={12}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          </Col>
        </Row>  
        </Container>

        <Container>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </Container>
      </Fragment>
    )
  }
}

export default medicalStudents