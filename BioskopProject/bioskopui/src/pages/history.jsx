import React, { Component } from 'react'
import {Table} from 'reactstrap'
import Axios from 'axios'
import { APIURL } from '../support/ApiURL'

class History extends Component {
    state={
        datacart:null
    }

    // componentDidMount(){
    //     Axios.put(`${APIURL}transactions`)
    //     .then((res)=>{
    //         var datacart=res.data
    //         var htrarr=[]
    //         res.data.forEach(element=>{
    //             htrarr.push(Axios.get())
    //         })
    //     })
    // }

    render() {
        return (
            <div>
                <center className='center'>
                    <Table className='mt-3' style={{width:600,color:'white'}}>
                        <thead>
                            <tr>
                                <th style={{width:100,color:'white'}}>Date</th>
                                <th style={{width:300,color:'white'}}>Title</th>
                                <th style={{width:100,color:'white'}}>Schedule</th>
                                <th style={{width:100,color:'white'}}>Seat</th>
                                <th style={{width:100,color:'white'}}>Detail</th>
                            </tr>
                        </thead>
                    </Table>
                </center>
            </div>
        )
    }
}

export default History
