import React, { Component } from 'react'
import Axios from 'axios'
import { APIURL } from '../support/ApiURL'
import { fontFamily } from '@material-ui/system'
import { Modal,ModalBody,ModalFooter } from 'reactstrap'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class MovieDetail extends Component {
    state={ 
        datadetailfim:{},
        traileropen:false,
        notloginyet:false,
        kelogin:false,
        belitiket:false
    }

    componentDidMount(){
        Axios.get(`${APIURL}movies/${this.props.match.params.id}`)
        .then(res=>{
            this.setState({datadetailfim:res.data})
        }).catch(err=>{
            console.log(err)
        })
    }

    onBeliTicketClick=()=>{
        if(this.props.Authlog){
            this.setState({belitiket:true})
        }else{
            this.setState({notloginyet:true})
        }
    }

    render() {
        if(this.state.kelogin){
            return <Redirect to={'/login'}/>
        }
        if(this.state.belitiket){
            return <Redirect to={{pathname:'/belitiket',state:this.state.datadetailfim}}/>
        }
        return (
            <div>
                <Modal isOpen={this.state.traileropen} size='lg' toggle={()=>this.setState({traileropen:false})} className='trailer' wrapClassname='trailer'>
                    <ModalBody className='p-0 bg-transparent trailer'>
                    <iframe width="100%" height="100%" title={this.state.datadetailfim.title} src={this.state.datadetailfim.trailer}
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.notloginyet} centered toggle={()=>this.setState({notloginyet:false})}>
                    <ModalBody style={{fontFamily:'Lucida Sans', fontWeight:'bold', fontSize:'20px'}}>
                        You have not login
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={()=>this.setState({kelogin:true})} className='btn btn-primary'>Okay</button>
                    </ModalFooter>
                </Modal>
                <div className="row p-3 mx-3 my-6">
                    <div className="col-md-5">
                        <img src={this.state.datadetailfim.image} height='500' alt='film' />
                        <div className='mt-3' style={{fontSize:'30px', fontFamily}}>
                            {this.state.datadetailfim.title}
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className='mt-1'>
                            title: &nbsp;
                        </div>
                    </div>
                    <div className='mt-1'>
                        sinopsis &nbsp;
                    </div>
                    <div className="col-md-5">
                        <div className="mt-1">
                            {this.state.datadetailfim.title}
                        </div>
                        <div className="mt-1">
                            {this.state.datadetailfim.sinopsis}
                        </div>
                        <div className="mt-3">
                            <button className='mt-3 mr-4 btn btn-primary' onClick={this.onBeliTicketClick} >Get Ticket</button>
                            <button className='mt-3 btn btn-dark' onClick={()=>this.setState({traileropen:true})} >Trailer</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const MapStateToProps=(state)=>{
    return{
        Authlog:state.Auth.login 
    }
}

export default connect(MapStateToProps) (MovieDetail)
