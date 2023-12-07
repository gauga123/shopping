import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function ProductList(props) {
  const navigate = useNavigate();
  function test() {
    navigate('/product/edit');
  }

  /* eslint-disable react/prop-types */
  const { product } = props;
  return (
    <tr>
      <td>{product.id_product}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <Button variant="danger">Delete</Button>
        <Button onClick={test} variant="warning">
          Edit
        </Button>
      </td>
    </tr>
  );
}
