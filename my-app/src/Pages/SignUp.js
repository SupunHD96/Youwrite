import React from "react";
import {Navbar,Form,FormControl,Button,Nav} from "react-bootstrap";
import {Spring} from "react-spring/renderprops";
import Logo from "../Images/logo.jpg";
import "../Pages/styles/SignUp.css";

const SignUp = () => {
    return(
        <body>
        <div>
{/*
            <div className="barSignup">
                <img src={Logo} className="logoSignup"></img>
                <h1 className="youwriteSignup">You Write</h1>
            </div>

            <hr className="lineSignup"></hr>

*/}

      <Navbar  variant="dark" sticky='top' expand="lg" className='navbar'>
      <Navbar.Brand href="/" className='youwrite'>
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
      <a href="/signin"><Button  className="buttons1">Sign In</Button></a>
      <a href="/signup"><Button  className="buttons2">Sign up</Button></a>
      </Form>
      </Navbar.Collapse>
      </Navbar>

    <div className="bottomdiv">

    <br></br>


{/* Spring is used to Animate Sign in Box */}

<Spring   from={{opacity:0, marginTop:1000}} to={{opacity:1,  marginTop:0}}>
         {props =>(
           <div style={props}>

                  <div className="signupbox">
                      <h1 className="text">Sign Up</h1>
                      <br></br>
                      <hr className="line"></hr>
                      <Form>

                      <Form.Group controlId="formBasicFirstName">
                      <Form.Control type="text" placeholder="Enter First Name" className="input"/>
                      </Form.Group>

                      <Form.Group controlId="formBasicLastName">
                      <Form.Control type="text" placeholder="Enter Last Name" className="input"/>
                      </Form.Group>

                      <Form.Group controlId="formBasicUserName">
                      <Form.Control type="text" placeholder="Enter User Name" className="input"/>
                      </Form.Group>

                      <hr className="line"></hr>

                      <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter Your Email" className="input"/>
                      </Form.Group>

                      <Form.Group controlId="formBasicConfirmEmail">
                      <Form.Control type="email" placeholder="Confirm Email" className="input"/>
                      </Form.Group>

                      <hr className="line"></hr>

                      <Form.Group controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Enter Your Password (6 or more characters)" className="input"/>
                      </Form.Group>

                      <Form.Group controlId="formBasicConfirmPassword">
                      <Form.Control type="password" placeholder="Confirm Password" className="input"/>
                      </Form.Group>

                      <Button variant="primary" type="submit" className="buttonSignin">Sign Up</Button>

                      <a href="signin" className="links">Already have an account?</a>

                      </Form>
              </div>
           </div>
         )}
       </Spring>

{/* Animate ends */}


            </div>
        </div>
        </body>
    );
};
export default SignUp;