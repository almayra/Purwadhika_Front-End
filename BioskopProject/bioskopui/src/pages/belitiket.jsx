import React, { Component } from 'react'
import Axios from 'axios'
import { APIURL } from '../support/ApiURL'
import {connect} from 'react-redux'

export class Belitiket extends Component {
    state={ 
        datamovies:{},
        seats:260,
        baris:0,
        booked:[],
        loading:true,
        jam:12,
        pilihan:[]
    }

    componentDidMount(){
        this.onJamChange()
    }

    onJamChange=()=>{
        console.log(this.props.location.studioId)
        var studioId=this.props.location.state.studioId
        var movieId=this.props.location.state.id
        Axios.get(`${APIURL}studios/${studioId}`)
        .then((res1)=>{
            Axios.get(`${APIURL}orders?movieId=${movieId}&jadwal=${this.state.jam}`)
            .then((res2)=>{
                var arrAxios=[]
                res2.data.forEach(val => {
                    arrAxios.push(
                        Axios.get(`${APIURL}ordersdetails?orderId=${val.id}`)
                    )
                });
                var arrAxios2 = []
                Axios.all(arrAxios)
                .then((res3)=>{
                    console.log(res3)
                    res3.forEach((val)=>{
                        arrAxios2.push(...val.data)
                    })
                    console.log(arrAxios2)
                    this.setState({
                        datamovies:this.props.location.state,
                        seats:res1.data.jumlahKursi,
                        baris:res1.data.jumlahKursi/20,
                        booked:arrAxios2,
                        loading:false
                    })
                }).catch((err)=>{
                    console.log(err)
                })
            }).catch((err2)=>{
                console.log(err2)
            })
        }).catch((err1)=>{
            console.log(err1)
        })
    }

    onButtonJamClick=(val)=>{
        this.setState({jam:val,pilihan:[]})
        this.onJamChange()
    }

    onPilihSeatClick=(row,seat)=>{
        var pilihan=this.state.pilihan
        pilihan.push({row,seat})
        this.setState({pilihan})
    }
    
    onCancelSeatClick=(row,seat)=>{
        var pilihan=this.state.pilihan
        var rows=row;
        var seats=seat;
        var arr=[]
        for(var i=0;i<pilihan.length;i++){
            if(pilihan[i].row !== rows || pilihan[i].seat !== seats){
                arr.push(pilihan[i])
            }
        }
        this.setState({pilihan:arr})
    }

    renderseat=()=>{
        var arr=[]
        for(let i=0;i<this.state.baris;i++){
            arr.push([])
            for(let j=0;j<this.state.seats/this.state.baris;j++){
                arr[i].push(1)
            }
        }
        console.log('booked',this.state.booked)
        for(let j=0;j<this.state.booked.length;j++){
            arr[this.state.booked[j].row][this.state.booked[j].seat]=3
        }
        for(let a=0;a<this.state.pilihan.length;a++){
            arr[this.state.pilihan[a].row][this.state.pilihan[a].seat]=2
        }
        var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var jsx=arr.map((val,index)=>{
            return(
                <div key={index}>
                    {
                        val.map((val1,i)=>{
                            if(val1===3){
                                return(
                                <button key={i} disabled className='rounded btn-disable mr-2 mt-2 bg-danger text-center'>
                                    {alphabet[index]+(i+1)}
                                </button>
                                )
                            }else if(val1===2){
                                return(
                                    <button key={i} onClick={()=>this.onCancelSeatClick(index,i)} className='rounded btn-order mr-2 mt-2 btn-pilih text-center'>
                                        {alphabet[index]+(i+1)}
                                    </button>
                                )
                            }
                            return(
                                <button key={i} onClick={()=>this.onPilihSeatClick(index,i)} className='rounded btn-order mr-2 mt-2 text-center'>
                                    {alphabet[index]+(i+1)}
                                </button>
                            )
                        })
                    }

                </div>
            )
        })
        return jsx
    }

    renderbutton=()=>{
        return this.state.datamovies.jadwal.map((val,index)=>{
            if(this.state.jam===val){
                return(
                    <button className='mx-2 btn btn-dark' disabled>{val}.00</button>
                )
            }
            return(
                <button className='mx-2 btn btn-dark' onClick={()=>this.onButtonJamClick(val)} >{val}.00</button>
            )
        })
    }

    render() {
        if(this.props.location.state&&this.props.AuthLog){

            return (
                <div>
                <center className='mt-1'>
                    {this.state.loading?null:this.renderbutton()}
                <div>
                    {this.state.pilihan.length?(
                        <button className='btn btn-dark mt-3'>Order</button>
                        ):null}
                    </div>
                </center>
                <div className='d-flex justify-content-center mt-4'>
                    <div>
                        {this.state.loading?null:this.renderseat()}
                        <center>
                            <div className='layar mt-4'>Layar</div>
                        </center>
                    </div>
                </div>
            </div>
            )
        }
        return <div>404 not found</div>
    }
}

const MapStateToProps=state=>{
    return{
        AuthLog:state.Auth.login
    }
}

export default connect(MapStateToProps)(Belitiket)
