import React, { Component } from 'react'
import {tarifMobil,tarifMotor,lamaParkir} from '../redux/actions'
import {connect} from 'react-redux'


class Homepage extends Component {
    state = { 
        showindex : 0
    }

    btnMobil=()=>{
        this.props.tarifMobil(0)
        this.props.lamaParkir(0)
        this.setState({showindex:1})
    }

    btnMotor=()=>{
        this.props.tarifMotor(0)
        this.props.lamaParkir(0)
        this.setState({showindex:2})
    }

    byrMobil=()=>{
        var inputDurasi = this.refs.inputDurasi.value 
        this.props.tarifMobil(inputDurasi)
        this.props.lamaParkir(inputDurasi)
        this.refs.inputDurasi.value=''
    }

    byrMotor=()=>{
        var inputDurasi = this.refs.inputDurasi.value 
        this.props.tarifMotor(inputDurasi)
        this.props.lamaParkir(inputDurasi)
        this.refs.inputDurasi.value=''
    }

    showparkir=()=>{
        const {showindex}=this.state //buat diambil
        if(showindex===1){
            this.refs.parkirawal.innerHTML=null
            return(
                <div>
                    <h3>Aplikasi Parkir Mobil</h3>
                    <button onClick={this.btnMobil} className='btn btn-outline-primary mr-3'>Mobil</button>
                    <button onClick={this.btnMotor} className='btn btn-outline-primary ml-3'>Motor</button><br/><br/>
                    <input ref='inputDurasi' className='form-control mx-auto' style={{width:'15%'}} type="number"/>
                    <br/><h6>{this.props.bebas1} Jam</h6>
                    <h4>Total Bayar Rp.{this.props.bebas},00</h4>
                    <br/><button onClick={this.byrMobil} className='btn btn-success'>Bayar</button>
                    <br/><br/><br/><h6>Catatan = 2.000/Jam</h6>
                </div>
            )
        }else if(showindex===2){
            this.refs.parkirawal.innerHTML=null
            return(
                <div>
                    <h3>Aplikasi Parkir Motor</h3>
                    <button onClick={this.btnMobil} className='btn btn-outline-primary mr-3'>Mobil</button>
                    <button onClick={this.btnMotor} className='btn btn-outline-primary ml-3'>Motor</button><br/><br/>
                    <input ref='inputDurasi' className='form-control mx-auto' style={{width:'15%'}} type="number"/>
                    <br/><h6>{this.props.bebas1} Jam</h6>
                    <h4>Total Bayar Rp.{this.props.bebas},00</h4>
                    <br/><button onClick={this.byrMotor} className='btn btn-success'>Bayar</button>
                    <br/><br/><br/><h6>Catatan = 1.000/Jam</h6>
                </div>
            )
        }

    }

    render() {
        return (
            <div>
                <div ref='parkirawal'>
                    <h3>Aplikasi Parkir </h3>
                    <button onClick={this.btnMobil} className='btn btn-outline-primary mr-3'>Mobil</button>
                    <button onClick={this.btnMotor} className='btn btn-outline-primary ml-3'>Motor</button>
                </div>
                <div>
                    {this.showparkir()}
                </div>
            </div>
        )
    }
    
}

const MapStateToProps=state=>{
    return{
        bebas: state.bebas,
        bebas1: state.bebas1
    }
}


export default connect(MapStateToProps,{tarifMobil,tarifMotor,lamaParkir})(Homepage)