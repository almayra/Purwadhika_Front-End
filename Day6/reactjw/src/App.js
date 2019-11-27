import React from 'react';
import './App.css';
import Header from './component/header'
import Homepage from './pages/homepage';
import About from './pages/about'
import {Route,Switch} from 'react-router-dom'
import Gaketemu from './pages/gaketemu'

class App extends React.Component{
  state={ }
  render(){
    return(
      <div>
        <section className='section1'>
          <Header/>
          <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/*' component={Gaketemu}></Route>
          </Switch>
        </section>
      </div>
    )
  }
}

export default App;
