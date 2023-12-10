import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function DisplayCard(props) {
  /* eslint-disable react/prop-types */
  const { product } = props;

  console.log(product);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.detail}</Card.Text>
        <Card.Text>{product.price}đ</Card.Text>
        <Button variant="primary">Cart</Button>
      </Card.Body>
    </Card>
  );
}
