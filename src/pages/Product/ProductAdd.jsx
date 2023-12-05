import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import supabase from '../../services/supabase';
import { useForm } from 'react-hook-form';

export default function ProductAdd() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(formData) {
    const { data, error } = await supabase
      .from('product')
      .insert([
        {
          name: formData.name,
          img: formData.img,
          detail: formData.detail,
          price: formData.price,
        },
      ])
      .select();

    console.log(data, error);
    if (error) {
      alert(error);
    } else {
      alert('Thêm hàng thành công');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            {...register('name')}
            type="name"
            placeholder="Enter Name"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control {...register('img')} type="img" placeholder="URL" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            {...register('price')}
            type="price"
            placeholder="Detail"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Decscription</Form.Label>
          <Form.Control
            {...register('detail')}
            type="detail"
            placeholder="Detail"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
}
