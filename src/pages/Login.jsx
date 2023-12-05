import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useForm } from 'react-hook-form';
import supabase from '../services/supabase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  //   const onSubmit = (data) => console.log(data);

  async function onSubmit(formData) {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    console.log(formData);
    console.log(error, data);
    // localStorage.setItem('session',JSON.stringify(data));
    if (error) {
      alert(error);
    } else {
      alert('Đăng nhập thành công');
      navigate('/');

    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>LOGIN</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register('email')}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register('password')}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //     <input {...register("firstName")} />
    //     <select {...register("gender")}>
    //       <option value="female">female</option>
    //       <option value="male">male</option>
    //       <option value="other">other</option>
    //     </select>
    //     <input type="submit" />
    //   </form>
  );
}
