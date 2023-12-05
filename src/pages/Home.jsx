import { useEffect, useState } from 'react';

import supabase from '../services/supabase';
import DisplayCard from '../components/DisplayCard';
import { Container } from 'react-bootstrap';
export default function Home() {
  const [products, setProducts] = useState();

  useEffect(function () {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    let { data: product, error } = await supabase.from('product').select();
    setProducts(product);

    if (error) {
      alert(error);
    }
  }
  return (
    <Container className="p-4" fluid="md"style={{display:'flex',margin:'10px'}}>
      <>
        {products &&
          products.map((product) => (
            <DisplayCard key={product.id_product} product={product} />
          ))}
      </>
    </Container>
  );
}
