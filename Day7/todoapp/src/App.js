import React, {Component} from 'react';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Homepage from './pages/homepage'

class App extends Component {
  state = { }
  render (){
    return(
      <div style={{color:'black'}}>
        <Header/>
        <Homepage/>
      </div>
    )
  }
}
  

export default App;
