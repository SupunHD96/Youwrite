import React from 'react';
import {Navbar,Carousel,Button,Form,FormControl, Nav,Card} from 'react-bootstrap';
import './Home.css';
import CarouselImage1 from "../Images/description.jpg"
import CarouselImage2 from "../Images/description2.jpg"
import CarouselImage3 from "../Images/description3.jpg"
import Logo from "../Images/logo.jpg"

//To delete
import Post1image from "../Images/post1.jpg"

export const NavigationBar= () =>(
    <div>
      <div>


      <Navbar  variant="dark" sticky='top' expand="lg" className='navbar'>
      <Navbar.Brand href="#home" className='youwrite'>
         <img alt="" src={Logo}
         width="30" height="30" className="logo"
         />{' '}You Write
       </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      </Nav>

      <Form inline>
      <FormControl type="text" placeholder="Search" className="search" />
      <Button  className="buttons3">Search</Button>
      <Button  className="buttons1">Sign In</Button>
      <Button  className="buttons2">Sign up</Button>
      </Form>
      </Navbar.Collapse>
      </Navbar>

      <Carousel>
       
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselImage1}
            alt="First slide"
          />
        <Carousel.Caption>
        <h3>Are you good at Writing ?</h3>
        <p>Join with YouWrite and show your skills.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselImage2}
            alt="Third slide"
          />
        <Carousel.Caption>
        <h3>Are you good at Reading ?</h3>
        <p>Join with YouWrite to read Best Articles.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselImage3}
            alt="Third slide"
          />
        <Carousel.Caption>
        <h3>Write, Read , Post</h3>
        <p>Earn more and more Brains</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

       </div>



       <div className='post' >
       <Card className='cards' >
        <Card.Img variant="top" src={Post1image} />
        <Card.Body>
        <Card.Title>World History</Card.Title>
        <Card.Text>
        World history or global history as a field of historical study examines history from a global perspective. ... It is not to be confused with comparative history, which, like world history, deals with the history of multiple cultures and nations, but does not do so on a global scale.
        </Card.Text>
        <Button variant="primary">Read more</Button>
        </Card.Body>
        </Card>

        <Card className='cards' >
        <Card.Img variant="top" src={Post1image} />
        <Card.Body>
        <Card.Title>World History</Card.Title>
        <Card.Text>
        World history or global history as a field of historical study examines history from a global perspective. ... It is not to be confused with comparative history, which, like world history, deals with the history of multiple cultures and nations, but does not do so on a global scale.
        </Card.Text>
        <Button variant="primary">Read more</Button>
        </Card.Body>
        </Card>
       </div>
       
    </div>
  
)
