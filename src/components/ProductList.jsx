import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabase';

/* eslint-disable react/prop-types */

export default function ProductList(props) {
  const navigate = useNavigate();
  const { product } = props;

  function handleEdit(id) {
    navigate(`/product/edit/${id}`);
  }

  async function handleDelete(id) {
    const { error } = await supabase
      .from('product')
      .delete('')
      .eq('id_product', id);

    console.log(error, id);
  }

  return (
    <tr>
      <td>{product.id_product}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <Button
          variant="danger"
          type="id"
          onClick={() => handleDelete(product.id_product)}
        >
          Delete
        </Button>
        <Button
          onClick={() => handleEdit(product.id_product)}
          variant="warning"
        >
          Edit
        </Button>
      </td>
    </tr>
  );
}
