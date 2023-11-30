import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Product from './pages/Product/index.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Edit from './pages/Product/ProductEdit.jsx';
import List from './pages/Product/ProductList.jsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import supabase from './services/supabase.js';

function App() {
  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem('sb-jgkaivyorxtcmtzwazrb-auth-token'))
  );

  async function handleLogout() {
    let { error } = await supabase.auth.signOut();
    setIsLogin('');
    console.log(error);
  }

  return (
    <BrowserRouter>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container  >
          <Navbar.Brand to="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="p-2" to="/">
              Home
            </NavLink>
            <NavLink className="p-2" to="/about">
              About
            </NavLink>
            <NavLink className="p-2" to="/product">
              Product
            </NavLink>
            <NavLink className="p-2" to="/cart">
              Cart
            </NavLink>

            {!isLogin && (
              <NavLink className="p-2" to="/register">
                Register
              </NavLink>
            )}
            {isLogin ? (
              <NavLink className="p-2" onClick={handleLogout}>
                Log out
              </NavLink>
            ) : (
              <NavLink className="p-2" to="/login">
                Login
              </NavLink>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/product/edit" element={<Edit />}></Route>
        <Route path="/product/list" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
