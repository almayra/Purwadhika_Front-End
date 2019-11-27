import React, { Component } from 'react';

class Content extends Component{
    state={ }

    renderStnk=()=>{
        return this.props.stnk.map((val,index)=>{
            return(
                <div key={index} className='col-md-4 px-5 py-5' style={{border:'2px solid black'}}>
                    <div>{val.nama}</div>
                    <div>{val.kendaraan}</div>
                    <div>{val.warna}</div>
                </div>
            )
        })
    }

    render(){
        return (
            <div className='row px-5'>
               {this.renderStnk()}
               <div className='d-flex'>
                   <button onClick={this.props.tambah}>+</button>
                   <button onClick={this.props.kurang}>-</button>
               </div>
            </div>
        )
    }
}

export default Content