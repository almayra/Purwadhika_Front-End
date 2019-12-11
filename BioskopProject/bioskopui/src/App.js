import React, { Component } from 'react'
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import {Switch,Route} from 'react-router-dom'
import ManageAdmin from './pages/admin'
import SlideMovies from './components/slider';
import Login from './pages/login'
import MovieDetail from './pages/moviedetail';
import {connect} from 'react-redux'
import {LoginSuccessAction} from './redux/action'
import Belitiket from './pages/belitiket';
import Axios from 'axios';
import { APIURL } from './support/ApiURL';

class App extends Component{
  state={
    loading: true
  }

  componentDidMount(){
    var id= localStorage.getItem('aya')
    Axios.get(`${APIURL}users/${id}`)
    .then(res=>{
      console.log(res.data)
      this.props.LoginSuccessAction(res.data)
    }).catch(err=>{
      console.log(err)
    })
    this.setState({loading:false})
  }
  
  render() {
  if(this.state.loading){
    return <div>loading</div>
  }else{
    
    return (
      <div className="App">
      <Header/>
      <Switch>
        <Route path={'/'} exact>
          <SlideMovies/> 
          <Home/>
        </Route>
        <Route exact path={'/admin'}>
          <ManageAdmin/>
        </Route>
        <Route path='/moviedetail/:id' component={MovieDetail} exact/>
        <Route path='/belitiket' component={Belitiket} exact />
        <Route path={'/login'} exact component={Login} />
      </Switch>
    </div>
  );
}
}
}

const MapStateToProps=(state)=>{
  return{
    Authlog:state.Auth.login
  }
}

export default connect(MapStateToProps,{LoginSuccessAction})(App);
