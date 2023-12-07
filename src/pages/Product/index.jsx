import { useEffect, useState } from 'react';
import List from './ProductList';
import supabase from '../../services/supabase';
import { Container, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  function test() {
    navigate('/product/add');
  }

  useEffect(function () {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    let { data: product, error } = await supabase.from('product').select();
    setProducts(product);

    if (error) {
      alert(error);
    }
    console.log(product, error);
  }
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Edit</th>
            <th>
              <Button onClick={test} variant="success">
                +
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          <>
            {products &&
              products.map((product) => (
                <List key={product.id_product} product={product} />
              ))}
          </>
        </tbody>
      </Table>
    </Container>
  );
}
