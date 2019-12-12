import React, { useState, Component } from 'react';
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
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'


class Header extends Component {
  // const [isOpen, setIsOpen] = useState(false);
  state = {  
    isOpen: false,
  }
  // const toggle = () => setIsOpen(!isOpen);
  
  render(){
    const {isOpen, setIsOpen} = this.state
    const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" style={{fontWeight:'bold'}}>Milo-vies🤍</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {console.log(this.props.role)}
            {this.props.role===''?
              (
                <DropdownToggle>
                  <Link to={'/login'} style={{color:'white', textDecoration:'none', fontFamily:'Lucida Sans'}}>
                  Login
                  </Link>
                </DropdownToggle>
              ):this.props.role==='admin'?
              (
                <div>
                <NavItem>
                  <NavLink href="/admin" className='mt-2 mr-3'>Manage Admin</NavLink>
                </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      {this.props.username}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem divider />
                      <DropdownItem>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              ):(
                <NavItem>
                  <NavLink href="/components/" className='mt-2 mr-3'>History</NavLink>
                  <NavLink href="https://github.com/reactstrap/reactstrap" className='mt-2 mr-3'>Payment</NavLink>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      {this.props.username}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem divider />
                      <DropdownItem>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
              )
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
}

const MapStateToProps=state=>{
  {console.log(state.Auth.role)}
  return{
    Authname: state.Auth.username,
    role: state.Auth.role,
    username: state.Auth.username,
  }
}

export default connect(MapStateToProps) (Header);