import { Button, Container, Form } from 'react-bootstrap';
import { signUpThunk } from 'redux/user/userThunk';
import styles from './Pages.module.css';
const { useDispatch } = require('react-redux');
const { useState } = require('react');

const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  };
  const handleOnSubmit = evt => {
    evt.preventDefault();
    dispatch(signUpThunk({ email, password, name }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(() => alert('Please enter all input'));
  };
  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            placeholder="Enter your  name"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
          />
        </Form.Group>
        <Button className={styles.Button} type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
