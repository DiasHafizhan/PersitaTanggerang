import React from 'react'
import LogoPersita from '../assets/image/logoPersita.png'
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#">
          <img src={LogoPersita}
            alt="Persita Tanggerang"
            width="80"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='mx-auto text-center'>
            <Link>Home</Link>
            <Link>Match</Link>
            <Link>Teams</Link>
          </Nav>
          <Form className="d-flex text-center">
            <i class='bx bx-search'></i>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent