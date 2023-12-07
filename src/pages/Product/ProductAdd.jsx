<<<<<<< HEAD
=======
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import supabase from '../../services/supabase';

export default function ProductAdd() {
  const{add,handdleadd}=useForm();

  async function onAdd(formAdd) {
    let { data, error } = await supabase.auth.signUp({
      name: formAdd.name,
      Detail: formAdd.Detail,
      Decscription:formAdd.Description
    });
    console.log(formAdd);
    console.log(error, data);
  }
>>>>>>> parent of 51d9fd8 (2)

export default function Add() {
  return (
<<<<<<< HEAD
    <div>ProductAdd</div>
  )
=======
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter Name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Detail</Form.Label>
          <Form.Control type="password" placeholder="Detail" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Decscription</Form.Label>
          <Form.Control type="password" placeholder="Decscription" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Add picture</Form.Label>
          <Form.Control type="password" placeholder="URL: " />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
>>>>>>> parent of 51d9fd8 (2)
}
