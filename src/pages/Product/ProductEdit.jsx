import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import supabase from '../../services/supabase';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Edit() {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function onSubmit(formData) {
    const { data, error } = await supabase
      .from('product')
      .update({
        name: formData.name,
        img: formData.img,
        price: formData.price,
        detail: formData.detail,
      })
      .eq('id_product', id)
      .select();
    console.log(data, error);
    if (error) {
      alert(error);
    } else {
      alert('Thay đổi thành công');
      navigate('/');
    }
  }
  /* eslint-disable react/prop-types */

  return (
    <Container>
      <h1>Update item Id:{id}</h1>

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
          <Form.Control
            {...register('img')}
            type="img"
            placeholder="URL"
            defaultValue="url"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            {...register('price')}
            type="price"
            placeholder="Price"
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
          Update
        </Button>
      </Form>
    </Container>
  );
}
