import React, { Component } from 'react'
import { connect } from 'react-redux';
import { add, minus, reset } from './../redux/actions'

export class Homepage extends Component {
    state = { }

    add=()=>{
        this.props.add();
    }
    minus=()=>{
        this.props.minus();
    }
    reset=()=>{
        this.props.reset();
    }

    render() {
        return (
            <div className='d-flex justify-content-center'>
                <button onClick={this.minus} className='btn btn-primary mr-3'>-</button>
                {this.props.number}
                <button onClick={this.add} className='btn btn-primary ml-3'>+</button>
                <button onClick={this.reset} className='btn btn-info ml-3'>Reset</button>
            </div>
        )
    }
}

const MapStatetoProps=state=>{
    return{
        number:state.bebas
    }
}
export default connect(MapStatetoProps,{add,minus,reset})(Homepage);
