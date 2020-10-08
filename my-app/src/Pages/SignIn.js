import React from "react";
import {Form,Button} from "react-bootstrap";
import {Spring} from "react-spring/renderprops";
import Logo from "../Images/logo.jpg";
import "../Pages/styles/SignIn.css";

const SignIn = () => {
  return (
    <body>
   <div>

     <div className="barSignin">
       <img src={Logo} className="logoSignin"></img>
       <h1 className="youwriteSignin">You Write</h1>
     </div>

     <hr className="lineSignin"></hr>

     <div className="bottomdiv">

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

       <p>New to You Write ? <a href="#">Create Account.</a></p>
     </div>
     </div>
   </body>
  );
};
export default SignIn;