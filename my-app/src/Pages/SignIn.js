import React from "react";
import {Navbar,Form,FormControl,Button,Nav} from "react-bootstrap";
import {Spring} from "react-spring/renderprops";
import Logo from "../Images/logo.jpg";
import "../Pages/styles/SignIn.css";

const SignIn = () => {
  return (
    <body>
   <div>

{/*}
     <div className="barSignin">
       <img src={Logo} className="logoSignin"></img>
       <h1 className="youwriteSignin">You Write</h1>
     </div>

     <hr className="lineSignin"></hr>

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
      <a href="/home"><Button  className="buttons1">Home</Button></a>
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

                  <div className="signinbox">
                      <h1 className="text">Sign in</h1>
                      <hr className="line"></hr>
                      <Form>

                      <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" className="input"/>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" className="input"/>
                      </Form.Group>

                      <Button variant="primary" type="submit" className="buttonSignin">Sign In</Button>

                      <a href="#" className="links">Forgot Password ?</a>
                      </Form>
              </div>
           </div>
         )}
       </Spring>

{/* Animate ends */}

       <p>New to You Write ? <a href="signup">Create Account.</a></p>
     </div>
     </div>
   </body>
  );
};
export default SignIn;