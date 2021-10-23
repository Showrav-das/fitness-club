
import { Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/UseAuth';
import authentication from '../Firebase/firebase.init';



authentication();

const Login = () => {
  const { handleRegistration,changeEmailEvent,changePasswordEvent,signInGoogle,error,toggleLogin,isLogIn} = useAuth();
    return (
        <div id="login">
            <h2>Please {isLogIn? 'register': 'login'}</h2>
            <Form onSubmit={handleRegistration}>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" required onBlur={changeEmailEvent} placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
            </Form.Label>
            {/* <Form.Label htmlFor=""> */}
            
    <Col sm={10}>
              <Form.Control type="password" required onBlur={changePasswordEvent} placeholder="Password" />
              <p className="text-danger">{error} </p>
            </Col>
            <label htmlFor="">
          <input type="checkbox" onChange={toggleLogin} name="" id=""/>Already register
          </label>
  </Form.Group>
    <Form.Group as={Row} className="mb-3">
    <Col>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
            --------------------------------------- <br />
            <Button  variant="secondary" onClick={signInGoogle}>Google</Button>
        </div>
    );
};

export default Login;