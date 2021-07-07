import React from 'react'
import CardWidget from '../cardWidgetComponent/CardWidget'
import * as ReactBootStrap from 'react-bootstrap'
const Navbar = ({count}) => {
  return (

<>

<ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">Logo</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Items</ReactBootStrap.Nav.Link>
      <div><CardWidget cart={2}/></div>
      
      {/* <ReactBootStrap.NavDropdown  id="collasible-ReactBootStrap.Nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown> */}
    </ReactBootStrap.Nav>

    {/* Icono cart */}
    {/* <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#deets">
        <CardWidget />
      </ReactBootStrap.Nav.Link>  
    </ReactBootStrap.Nav> */}


  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>




</>
  )
}

export default Navbar
