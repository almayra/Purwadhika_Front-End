import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" style={{fontWeight:'bold'}}>Milo-vies🤍</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/" className='mt-2 mr-3'>History</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" className='mt-2 mr-3'>Payment</NavLink>
            </NavItem>
            <UncontrolledDropdown className='mt-2' nav inNavbar>
              {props.Authname===''?(
                <DropdownToggle>
                <Link to={'/login'} style={{color:'white', textDecoration:'none', fontFamily:'Lucida Sans'}}>
                Login
                </Link>
              </DropdownToggle>
              ):null}
              {props.Authname===''?null : <DropdownToggle>{props.Authname}</DropdownToggle> }

              {/* <DropdownToggle>
                <Link to={'/login'} style={{color:'white', textDecoration:'none', fontFamily:'Lucida Sans'}}>
                Login
                </Link>
              </DropdownToggle> */}
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const MapStateToProps=state=>{
  return{
    Authname: state.Auth.username
  }
}

export default connect(MapStateToProps) (Header);