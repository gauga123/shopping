import { useForm } from 'react-hook-form';
import supabase from '../../services/supabase';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export default function Add() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(formData) {
    const { data, error } = await supabase
      .from('product')
      .insert([
        {
          name: formData.name,
          img: formData.img,
          price: formData.price,
          detail: formData.detail,
        },
      ])    
      .select();
    console.log(formData);
    console.log(error, data);
    if (error) {
      alert(error);
    } else {
      alert('thêm thành công');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group></Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control {...register('name')} type="name" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control {...register('img')} type="img" placeholder="Url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Detail</Form.Label>
          <Form.Control
            {...register('detail')}
            type="detail"
            placeholder="Detail"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            {...register('price')}
            type="Price"
            placeholder="Price"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
