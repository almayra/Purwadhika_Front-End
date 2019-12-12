import React, { Component } from "react";
import {Link,Redirect} from 'react-router-dom'
import Axios from 'axios'
import {APIURL} from '../support/ApiURL'
import {connect} from 'react-redux'
import {LoginSuccessAction,Loginthunk,Login_error} from './../redux/action'
import Loader from 'react-loader-spinner'

class Login extends Component{
    state={
        error:'',
        loading:false
    }

    onLoginClick=()=>{
        var username=this.refs.username.value 
        var password=this.refs.password.value
        this.props.Loginthunk(username,password)
        // Axios.get(`${APIURL}users?username=${username}&password=${password}`)
        // .then(res=>{
        //     if(res.data.length){
        //         localStorage.setItem('aya',res.data[0].id)
        //         this.props.LoginSuccessAction(res.data[0])
        //     }else{
        //         this.setState({error:'Password is incorrect'})
        //     }
        //     this.setState({loading:false})
        // }).catch((err)=>{
        //     console.log(err)
        //     this.setState({loading:true})
        // })
    }
    
    render() {
        console.log(this.props.Authlog)
        console.log(this.props.AuthId)
        
        if(this.props.Authlog){
            return <Redirect to={'/'}/>
        }
        return (
            // <form>
                <center className='center'>
                <h3 style={{color:'white'}} className='mt-5'>Sign In</h3>

                <div className="form-group" style={{width:'20%'}}>
                    <input type="text" ref='username' className="form-control mt-4" placeholder="Enter username" />
                </div>

                <div className="form-group" style={{width:'20%'}}>
                    <input type="password" ref='password' className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group" style={{width:'50%'}}>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    </div>
                </div>
                {this.props.Auth.error===''?
                    null
                    :
                    <div className='alert alert-danger mt-2'>
                        {this.props.Auth.error}<span onClick={this.props.Login_error} className='float-right font-weight-bold' >X</span>
                    </div>
                }
                <div className='mt-4'>
                    {this.props.Auth.loading?
                    <Loader
                        type="hearts"
                        color="black"
                        height={100}
                        width={100}
                        timeout={9000}
                    />
                    :
                    <button className='btn btn-primary' onClick={this.onLoginClick}>Login</button>
                    }
                </div>
                <label className="custom-control-label mt-3" htmlFor="customCheck1" style={{color:'white'}}>Remember me</label>
                <p className="register mt-5" style={{color:'white'}}>
                    Doesn't have an account? <Link style={{color:'pink'}} to=''>Register now.</Link>
                </p>
                </center>
            // </form>
        );
    }
}

const MapStateToProps=(state)=>{
    return{
        Authlog:state.Auth.login,
        AuthId:state.Auth.id,
        Auth:state.Auth
    }
}

export default connect(MapStateToProps,{LoginSuccessAction,Loginthunk,Login_error})(Login)