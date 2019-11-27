import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Content from './components/content'
import Loading from './components/loading'

class App extends Component {
  state = { 
    stnk:[],
    loading:false,
    angka:0
  }

  componentDidMount(){
    this.setState({stnk:
      [
      {nama:'Bobi', kendaraan:'ambulan', warna:'hotpink'},
      {nama:'dzaky', kendaraan:'MRT', warna:'orange shopee'},
      {nama:'anya', kendaraan:'busway', warna:'ungu'}
    ]
    // loading:false
    })
  }

  tambahOnClick=()=>{
    this.setState((prevstate)=>{
      return{
        angka:prevstate.angka+1
      }
    })
  }
  kurangOnClick=()=>{
    this.setState((prevstate)=>{
      return{
        angka:prevstate.angka-1
      }
    })
  }
  

  render() {
    const {loading,stnk}=this.state
    if(loading){
      return(
        <center>
          <div>
            <Loading/>
          </div>
        </center>
        ) 
    }
    return (
      <div>
        <Header namauser={'aya'}/>
        <div>{this.state.angka}</div>
        <Content stnk={stnk} tambah={this.tambahOnClick} kurang={this.kurangOnClick}>

        </Content>
      </div>
    );
  }
}

export default App;