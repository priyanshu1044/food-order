import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import './adminnav.css'
function Adminnav() {
  return (
    <div className='navv'> <Navbar  variant="dark">
    <Container>
      
      <Navbar.Brand href="home"><h2>FOODEE</h2></Navbar.Brand>
      <Nav className="d-flex">
      <Nav.Link href="addcategory"><h4>ADD CATEGORY</h4></Nav.Link>
        <Nav.Link href="additem"><h4>ADD PRODUCTS</h4></Nav.Link>
        {/* <Nav.Link href="#pricing"><h4>SHOW FEEDBACK</h4></Nav.Link> */}
      </Nav>
    </Container>
    </Navbar></div>
  )
}

export default Adminnav