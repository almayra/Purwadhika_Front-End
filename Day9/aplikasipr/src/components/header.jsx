import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {connect} from 'react-redux'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className='pr-5'>
        <NavbarBrand><h4>APLIKASI PARKIR</h4></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>{props.bebas1} Jam </NavLink>
              <NavLink><h3>Rp.{props.bebas},00 </h3></NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const MapStateToProps=state=>{
    return{
        bebas: state.bebas,
        bebas1: state.bebas1
    }
}

export default connect(MapStateToProps) (Header);