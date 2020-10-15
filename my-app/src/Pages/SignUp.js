import React from "react";
import {Form,Button} from "react-bootstrap";
import {Spring} from "react-spring/renderprops";
import Logo from "../Images/logo.jpg";
import "../Pages/styles/SignUp.css";

const SignUp = () => {
    return(
        <body>
        <div>

            <div className="barSignup">
                <img src={Logo} className="logoSignup"></img>
                <h1 className="youwriteSignup">You Write</h1>
            </div>

            <hr className="lineSignup"></hr>

            <div className="bottomdiv">

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