import React, { Component } from 'react'
import {
    Table,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

class Home extends Component {
    state = {
        data : [],
        isopen: false,
        isedit: false,
        indexedit:-1
     }

    componentDidMount(){
        this.setState({
            data : [
                {activity:'Breakfast', status:true,date:'2019-11-27'},
                {activity:'Take a Bath', status:false,date:'2019-11-28'},
                {activity:'Chill', status:false,date:'2019-11-28'},
            ]
        })
    }

    onAddClickData=()=>{
        var activity = this.refs.activity.value
        var date = this.refs.date.value
        var obj={
            activity,
            status:false,
            date
        }
        if(activity===''&&date===''){
            MySwal.fire(
                'Cancelled',
                'You have not add any data',
                'error'
            )
        }else if(date===''){
            MySwal.fire(
                'Warning',
                'You have not add the date',
                'warning'
            )
        }else if(activity===''){
            MySwal.fire(
                'Warning',
                'You have not add any activity',
                'warning'
            )
        }else{
            var newdata=[...this.state.data,obj]
            this.setState({data:newdata,isopen:false})
            MySwal.fire(
                'Success',
                'Your data have been added'
            )
        }
    }

    onEditClickData=()=>{
        var newactivity=this.refs.newactivity.value
        var newstatus=this.refs.newstatus.value
        var newdate=this.refs.newdate.value
        var data=this.state.data
        var {indexedit}=this.state
        var editstatus=0

        if(this.refs.newstatus.value==='true'){
            newstatus=true
        }else{
            newstatus=false
        }

        
        if(newactivity&&newdate){
            data[indexedit].activity=newactivity
            data[indexedit].status=newstatus
            data[indexedit].date=newdate

            this.setState({data:data,isedit:false})
            MySwal.fire(
                'Success',
                'Your data have been changed',
                'success'
            )
        }else if (newactivity===''&&newstatus===''&&newdate===''){
            MySwal.fire(
                'Cancelled',
                'You have not change any data',
                'error'
            )
        }else if(newactivity===''){
            MySwal.fire(
                'Warning',
                'You have not enter the new activity',
                'warning'
            )
        }else if(newstatus===''){
            MySwal.fire(
                'Warning',
                'You have not chosen the status',
                'warning'
            )
        }else if(newdate===''){
            MySwal.fire(
                'Warning',
                'You have not enter new date',
                'warning'
            )
        }
    }
    onDeleteClickData=(index)=>{
        MySwal.fire({
            title: 'Delete '+this.state.data[index].activity+'?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, I dont care',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.value) {
                var data=this.state.data
                data.splice(index,1)
                this.setState({
                    data:data
                })
              MySwal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              MySwal.fire(
                'Cancelled',
                'Your file is safe :)',
                'error'
              )
            }
          })
    }

    // onEditClickData=(index)=>{
    //     MySwal.fire({
    //         title: 'Enter your new activity',
    //         input: 'text',
    //     }).then((result)=>{
    //         console.log(result)
    //     })
    // }

    renderTodo=()=>{
        return this.state.data.map((val,index)=>{
            return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{val.activity}</td>
                  <td>{val.status?'Done':'Not yet'}</td>
                  <td>{val.date}</td>
                  <td>
                    <button onClick={()=>this.setState({isedit:true,indexedit:index})} className='btn btn-primary mr-1'>Edit</button>
                    <button onClick={()=>this.onDeleteClickData(index)} className='btn btn-danger'>Delete</button>
                </td>
            </tr>
            )
        })
    }

    
    render() {
        return (
            <div>
                <Modal isOpen={this.state.isopen} toggle={()=>this.setState({isopen:false})}>
                    <ModalHeader>
                        Hello There!
                    </ModalHeader>
                    <ModalBody>
                        <input className='form-control' placeholder='What do you want to do? :)' type="text" ref='activity'/>
                        <br></br><input className='form-control' placeholder='What Time?' type="date" ref='date'/>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.onAddClickData} className='btn btn-success'>Add!</button>
                        <button className='btn btn-danger' onClick={()=>this.setState({isopen:false})}>Cancel</button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.isedit} toggle={()=>this.setState({isedit:false})}>
                    <ModalHeader>
                        Update your activity, Fellas!
                    </ModalHeader>
                    <ModalBody>
                        <input className='form-control' placeholder='Enter new activity' type='text' ref='newactivity'/>
                        <br></br><select className='form-control' ref='newstatus'>
                            <option value='true'>Done</option>
                            <option value='false'>Not yet</option>
                        </select>
                        <br></br><input className='form-control' type="date" ref='newdate'/>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.onEditClickData} className='btn btn-success'>Save</button>
                        <button className='btn btn-danger' onClick={()=>this.setState({isedit:false})}>Cancel</button>
                    </ModalFooter>
                </Modal>
                <div className="p-5 align-self-center">
                    <Table striped>
                        <thead>
                            <tr>
                                <th> No. </th>
                                <th> Activity </th>
                                <th> Status </th>
                                <th> Date </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTodo()}
                        </tbody>
                    </Table>
                    <div>
                        <button onClick={()=>this.setState({isopen:true})} className='btn btn-success rounded-pill'>Add Data</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
