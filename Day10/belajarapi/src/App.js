import React, { Component } from 'react';
import Header from './components/header';
import './App.css';
import Home from './pages/home';
import Axios from 'axios';
import { APIURL } from './support/APIurl';
import { TokenActions } from './redux/actions';
import {connect} from 'react-redux'
import { Spinner } from 'reactstrap';


class App extends Component {
  state = { 
    loading:true
  }

  componentDidMount(){
    Axios.get(`${APIURL}poe`)
    .then((res)=>{
      this.props.TokenActions(res.data.token)
      this.setState({loading:false})
    }).catch((err)=>{
      console.log(err)
    })
  }

  render() {
    if(this.state.loading){
      return(
        <div>
          <center className='mt-5 pt-5'>
            <Spinner type="grow" color="dark" style={{ width: '5rem', height: '5rem' }}/>
            <Spinner type="grow" color="light" style={{ width: '5rem', height: '5rem' }}/>
            <Spinner type="grow" color="dark" style={{ width: '5rem', height: '5rem' }}/><br></br>
            <Spinner type="grow" color="dark" style={{ width: '5rem', height: '5rem' }}/>
            <Spinner type="grow" color="light" style={{ width: '5rem', height: '5rem' }}/>
            <Spinner type="grow" color="light" style={{ width: '5rem', height: '5rem' }}/>
            <Spinner type="grow" color="dark" style={{ width: '5rem', height: '5rem' }}/>
          </center>
        </div>
      )
    }
    return (
      <div>
        <Header/>
        <Home/>
      </div>
    )
  }
}

export default connect(null,{TokenActions}) (App);
