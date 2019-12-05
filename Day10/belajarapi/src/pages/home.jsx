import React, { Component } from 'react'
import Axios from 'axios'
import { APIURL} from '../support/APIurl'
import { Spinner } from 'reactstrap';
import {connect} from 'react-redux'

class Home extends Component {
    state={ 
        dataProvinsi:[],
        dataKabupaten:[],
        dataKecamatan:[],
        dataKelurahan:[]
    }

    componentDidMount(){
        Axios.get(`${APIURL}MeP7c5ne${this.props.Token}/m/wilayah/provinsi`)
        .then((res)=>{
            this.setState({dataProvinsi:res.data.data})
        }).catch((err)=>{
            console.log(err)
        })
    }

    onProvinsiChange=(a)=>{
        var idProvinsi= a.target.value
        Axios.get(`${APIURL}MeP7c5ne${this.props.Token}/m/wilayah/kabupaten?idpropinsi=${idProvinsi}`)
        .then((res)=>{
            this.setState({dataKabupaten:res.data.data})
        }).catch((err)=>{
            console.log(err)
        })
    }

    onKabupatenChange=(i)=>{
        var idKabupaten= i.target.value
        Axios.get(`${APIURL}MeP7c5ne${this.props.Token}/m/wilayah/kecamatan?idkabupaten=${idKabupaten}`)
        .then((res)=>{
            this.setState({dataKecamatan:res.data.data})
        }).catch((err)=>{
            console.log(err)
        })
    }

    onKecamatanChange=(u)=>{
        var idKecamatan= u.target.value
        Axios.get(`${APIURL}MeP7c5ne${this.props.Token}/m/wilayah/kelurahan?idkecamatan=${idKecamatan}`)
        .then((res)=>{
            this.setState({dataKelurahan:res.data.data})
        }).catch((err)=>{
            console.log(err)
        })
    }

    renderProvinsi = () => {
        return this.state.dataProvinsi.map((val, index) => {
            return (
                <option value={val.id} key={index}>{val.name}</option>
            )

        })
    }

    renderKabupaten=()=>{
        if(this.state.dataKabupaten.length===0){
            return <option selected hidden>Select a District</option>
        }
        return this.state.dataKabupaten.map((val,index)=>{
            return(
                <option value={val.id} key={index}>{val.name}</option>
            )
        })
    }

    renderKecamatan=()=>{
        if(this.state.dataKecamatan.length===0){
            return <option selected hidden>Select a Sub-district</option>
        }
        return this.state.dataKecamatan.map((val,index)=>{
            return(
                <option value={val.id} key={index}>{val.name}</option>
            )
        })
    }

    renderKelurahan=()=>{
        if(this.state.dataKelurahan.length===0){
            return <option selected hidden>Select the Urban Village</option>
        }
        return this.state.dataKelurahan.map((val,index)=>{
            return(
                <option value={val.id} key={index}>{val.name}</option>
            )
        })
    }

    render() {
        if(this.state.dataProvinsi.length===0){
            return(
                <center className='mt-5 pt-5'>
                    <div>
                        <Spinner type="grow" color="dark" style={{ width: '5rem', height: '5rem' }}/>
                        <Spinner type="grow" color="light" style={{ width: '5rem', height: '5rem' }}/>
                        <Spinner type="grow" color="dark" style={{ width: '5rem', height: '5rem' }}/><br></br>
                        <Spinner type="grow" color="dark" style={{ width: '5rem', height: '5rem' }}/>
                        <Spinner type="grow" color="light" style={{ width: '5rem', height: '5rem' }}/>
                        <Spinner type="grow" color="light" style={{ width: '5rem', height: '5rem' }}/>
                        <Spinner type="grow" color="dark" style={{ width: '5rem', height: '5rem' }}/>
                    </div>
                </center>
            )
        }
        return (
            <center>
                <div className='mt-4'>
                    <select className='form-control' style={{width:'30%'}} onChange={this.onProvinsiChange}>
                        <option selected hidden>Select a Province</option>
                        {this.renderProvinsi()}
                    </select><br></br>
                    <select className='form-control' style={{width:'30%'}} onChange={this.onKabupatenChange}>
                        {this.renderKabupaten()}
                    </select><br></br>
                    <select className='form-control' style={{width:'30%'}} onChange={this.onKecamatanChange}>
                        {this.renderKecamatan()}
                    </select><br></br>
                    <select className='form-control' style={{width:'30%'}}>
                        {this.renderKelurahan()}
                    </select>
                </div>
            </center>
        )
    }
}
const MapStateToProps=({Token})=>{
    return{
        Token
    }
}

export default connect(MapStateToProps) (Home);
