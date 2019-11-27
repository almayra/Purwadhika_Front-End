import React, {Component} from 'react';

class Navbar extends React.Component{
    state={
        nama:'aya',
        angka: 0,
        usia: 17,
        mobil: ['camaro ss', 'mercedes benz', 'american muscle']
    }
    componentDidMount(){
        var nama=this.state.nama
        this.setState({nama})
    }
    onTambahClick=()=>{
        var angka=this.state.angka+1
        this.setState({angka})
    }
    onKurangClick=()=>{
        this.setState(({angka})=>{
            var angkanew=angka-1
            if(angkanew<0){
                return{
                    angka:0
                }   
            }
            return{
                angka:angka-1
            }
        })
    }
    render(){
        if(this.state.nama){
            return(
                <center>

                <div style={{background: 'pink' ,color: 'black'}}>
                    <h1>{this.state.nama}</h1>
                    <div>
                    <div>
                        {this.state.angka}
                    </div>
                        <button onClick={this.onTambahClick}>+</button>
                        <button onClick={this.onKurangClick}>-</button>
                    </div>
                </div>
            </center>
            );
        }else{
            return <div>Loading</div>
        }
    }
}

export default Navbar;