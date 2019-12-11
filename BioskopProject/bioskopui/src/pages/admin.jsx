import React, { Component } from 'react'
import Axios from 'axios'
import {Table,TableBody,TableHead,TableCell,TableRow} from '@material-ui/core'
import { APIURL } from '../support/ApiURL'
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Spinner } from 'reactstrap';

const MySwal=withReactContent(Swal)

class Admin extends Component {
    state={ 
        datafilm:[],
        readmoreselected:-1,
        modaladd: false,
        modaledit:false,
        indexedit:0,
        jadwal:[12,16,18,20,22]
    }
    componentDidMount(){
        Axios.get(`${APIURL}movies`).then(res=>{
            this.setState({datafilm:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    onUpdateDataClick=()=>{
        var jadwaltemplate=this.state.jadwal
        var jadwal=[]
        var id=this.state.datafilm[this.state.indexedit].id
        for(var i=0;i<jadwaltemplate.length;i++){
            if(this.refs[`editjadwal${i}`].checked){
                jadwal.push(jadwaltemplate[i])
            }
        }
        var iniref=this.refs
        var title=iniref.edittitle.value 
        var image=iniref.editimage.value
        var sinopsis=iniref.editsinopsis.value
        var sutradara=iniref.editsutradara.value
        var genre=iniref.editgenre.value
        var durasi=iniref.editdurasi.value
        var trailer=iniref.edittrailer.value
        var studioId=iniref.editstudio.value
        var data={
            title,
            image,
            sinopsis,
            sutradara,
            genre,
            durasi,
            trailer,
            studioId,
            jadwal
        }
        Axios.put(`${APIURL}movies/${id}`,data)
        .then(()=>{
            Axios.get(`${APIURL}movies`)
            .then((res)=>{
                this.setState({datafilm:res.data,modaledit:false})
            })
            .catch((err)=>{
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    onSaveAddDataClick=()=>{
        var jadwaltemplate=[12,13,14,15,16]
        var jadwal=[]
        for(var i=0; i<jadwaltemplate.length;i++){
            if (this.refs[`jadwal${i}`].checked){
                jadwal.push(jadwaltemplate.length[i])
            }
        }
        var iniref=this.refs
        var title=iniref.title.value 
        var image=iniref.image.value
        var sinopsis=iniref.sinopsis.value
        var sutradara=iniref.sutradara.value
        var genre=iniref.genre.value
        var durasi=iniref.durasi.value
        var trailer=iniref.trailer.value
        var studioId=iniref.trailer.value
        var data={
            title,
            image,
            sinopsis,
            sutradara,
            genre,
            durasi,
            trailer,
            studioId,
            jadwal
        }

        if (title===''||image===''||sinopsis===''||genre===''||jadwal===''){
            MySwal.fire('Failed','You have to enter all data', 'error')
        }else{
            MySwal.fire('Succeed','Your data has been saved','success')
        

        Axios.post(`${APIURL}movies`,data)
        .then((res)=>{
            Axios.get(`${APIURL}movies`).then(res=>{
                this.setState({datafilm:res.data, modaladd:false})
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    }

    onDeleteDataClick=(index)=>{
        var data=this.state.datafilm
        MySwal.fire({
            title: `Delete ${this.state.datafilm[index].title}?`,
            text: 'You will not be able to revert this!',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText:'Yes, I dont care',
            cancelButtonText:'No, cancel!',
            reverseButtons:true
        }).then((result)=>{
            if(result.value){
                Axios.delete(`${APIURL}movies/${index+1}`,data)
                .then((res)=>{
                    Axios.get(`${APIURL}/movies`)
                    .then((res)=>{
                        this.setState({datafilm:res.data})
                    })
                }).catch((err)=>{
                    console.log(err)
                })
                MySwal.fire(
                    'Deleted!',
                    'Your file has been deleted',
                    'success'
                )
            }else if(
                result.dismiss===Swal.DismissReason.cancel
            ){
                MySwal.fire(
                    'Cancelled',
                    '',
                    'error'
                )
            }
        })
    }       


    renderMovies=()=>{
        // console.log(this.state.datafilm)
        return this.state.datafilm.map((val,index)=>{
            return(
                <TableRow key={index}>
                    <TableCell style={{color:'white'}}>{index+1}</TableCell>
                    <TableCell style={{color:'white'}}>{val.title}</TableCell>
                    <TableCell style={{color:'white'}}><img src={val.image} alt={'gambar'} height='200px'/></TableCell>

                    {val.sinopsis.split('').length<=50?
                    <TableCell style={{color:'white'}}>
                        {val.sinopsis}
                    </TableCell>
                    :
                    this.state.readmoreselected===index?
                    <TableCell style={{color:'white'}}>
                        {val.sinopsis}
                    <span style={{color:'grey'}} onClick={()=>this.setState({readmoreselected:-1})}><br/>
                        Read less
                    </span>
                    </TableCell>
                    :
                    <TableCell style={{color:'white'}}>
                        {val.sinopsis.split('').filter((val,index)=>index<=50)}
                    <span style={{color:'pink'}} onClick={()=>this.setState({readmoreselected:index})}><br/>
                         Read more
                    </span>
                    </TableCell>
                    }

                    <TableCell style={{color:'white'}}>{val.jadwal}</TableCell>
                    <TableCell style={{color:'white'}}>{val.sutradara}</TableCell>
                    <TableCell style={{color:'white'}}>{val.genre}</TableCell>
                    <TableCell style={{color:'white'}}>{val.durasi}</TableCell>
                    {/* <TableCell>{val.produksi}</TableCell> */}
                    <TableCell>
                        <button className='btn btn-primary mr-3' onClick={()=>this.setState({modaledit:true,indexedit:index})}>Edit</button>
                        <button onClick={()=>this.onDeleteDataClick(index)} className='btn btn-danger'>Delete</button>
                    </TableCell>
                </TableRow>
            )
        })
    }

    renderAddCheckBox=()=>{
        return this.state.jadwal.map((val,index)=>{
            return(
                <div key={index}>
                    <input type='checkbox' ref={`jadwal${index}`}/>
                    <span className='mr-5'>{val}.00</span>
                </div>
            )
        })
    }

    renderEditCheckbox=(indexedit)=>{
        console.log('indexedit', indexedit)
        var indexarr=[]
        var datafilmedit=this.state.datafilm[indexedit].jadwal
        console.log(datafilmedit)
        console.log('datafilmedit', this.state.datafilm[indexedit])
        // datafilmedit.forEach((val)=>{
        //     indexarr.push({jam:val,tampiledit:false})
        // })
        for(var i=0;i<datafilmedit.length;i++){
            for(var j=0;j<this.state.jadwal.length;j++){
                if(datafilmedit[i]===this.state.jadwal[j]){
                    indexarr.push(j);
                }
            }
        }
        var checkbox=this.state.jadwal
        var checkboxnew=[]
        checkbox.forEach((val)=>{
            checkboxnew.push({jam:val,tampiledit:false})
        })
        indexarr.forEach((val)=>{
            checkboxnew[val].tampiledit=true
        })
        return checkboxnew.map((val,index)=>{
            if(val.tampiledit){
                return(
                    <div key={index}>
                        <input type='checkbox' defaultChecked ref={`editjadwal${index}`} value={val.jam}/>
                        <span className='mr-5'>{val.jam}.00</span>
                    </div>
                )
            }else{
                return(
                    <div key={index}>
                        <input type='checkbox' ref={`editjadwal${index}`} value={val.jam}/>
                        <span className='mr-5'>{val.jam}.00</span>
                    </div>
                )
            }
        })
    }

    render() {
        const{datafilm,indexedit}=this.state
        const{length}=datafilm
        if(length===0){
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
            <div className='mx-3' >
                <Modal isOpen={this.state.modaledit} toggle={()=>this.setState({modaledit:false})}>
                <ModalHeader>
                    Edit {datafilm[indexedit].title}
                </ModalHeader>
                <ModalBody>
                <input type='text' defaultValue={datafilm[indexedit].title} ref='edittitle' placeholder='enter a title' className='form-control mb-3'/>
                    <input type='text' defaultValue={datafilm[indexedit].image} ref='editimage' placeholder='enter an url image' className='form-control mb-3'/>
                    <textarea rows='5' defaultValue={datafilm[indexedit].sinopsis} ref='editsinopsis' placeholder='enter a synopsys' className='form-control mb-3'/>
                    <div className='d-flex'>
                        {this.renderEditCheckbox(indexedit)}
                    </div>
                    <input type="text" defaultValue={datafilm[indexedit].trailer} ref='edittrailer' placeholder='enter some trailer' className='form-control mt-3'/>
                    <select ref='editstudio' className='form-control mt-3'>
                        <option value='1'>Studio One</option>
                        <option value='2'>Studio Two</option>
                        <option value='3'>Studio Three</option>
                    </select>
                    <input type='text' defaultValue={datafilm[indexedit].sutradara} ref='editsutradara' placeholder='enter name of the director' className='form-control mt-3'/>
                    <input type='number' defaultValue={datafilm[indexedit].durasi} ref='editdurasi' placeholder='enter a duration' className='form-control mt-3'/>
                    {/* <input type='text' ref='produksi' placeholder='enter the production' className='form-control'/><br/> */}
                    <input type='text' defaultValue={datafilm[indexedit].genre} ref='editgenre' placeholder='enter the genre' className='form-control mt-3'/>         
                </ModalBody>
                <ModalFooter>
                    <button onClick={this.onUpdateDataClick}className='btn btn-success mr-3'>Save</button>
                    <button onClick={()=>this.setState({modaledit:false})} className='btn btn-danger'>Cancel</button>
                </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modaladd} toggle={()=>this.setState({modaladd:false})}>
                <ModalHeader>Add Data</ModalHeader>
                <ModalBody>
                    <input type='text' ref='title' placeholder='enter a title' className='form-control mb-3'/>
                    <input type='text' ref='image' placeholder='enter an url image' className='form-control mb-3'/>
                    <textarea rows='5' ref='sinopsis' placeholder='enter a synopsys' className='form-control mb-3'/>
                    <div className='d-flex'>
                        {this.renderAddCheckBox()}
                    </div>
                    <input type="text" ref='trailer' placeholder='enter some trailer' className='form-control mt-3'/>
                    <select ref='studio' className='form-control mt-3'>
                        <option value='1'>Studio One</option>
                        <option value='2'>Studio Two</option>
                        <option value='3'>Studio Three</option>
                    </select>
                    <input type='text' ref='sutradara' placeholder='enter name of the director' className='form-control mt-3'/>
                    <input type='number' ref='durasi' placeholder='enter a duration' className='form-control mt-3'/>
                    {/* <input type='text' ref='produksi' placeholder='enter the production' className='form-control'/><br/> */}
                    <input type='text' ref='genre' placeholder='enter the genre' className='form-control mt-3'/>         
                </ModalBody>
                <ModalFooter>
                    <button onClick={this.onSaveAddDataClick} className='btn btn-success mr-3'>Save</button>
                    <button onClick={()=>this.setState({modaladd:false})} className='btn btn-danger'>Cancel</button>
                </ModalFooter>
                </Modal>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Sinopsis</TableCell>
                                <TableCell>Schedule</TableCell>
                                <TableCell>Director</TableCell>
                                <TableCell>Genre</TableCell>
                                <TableCell>Duration</TableCell>
                                {/* <TableCell>Produksi</TableCell> */}
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderMovies()}
                        </TableBody>
                    </Table>
                    <button style={{alignContent:'start'}} className='btn btn-success mt-5 mb-5' onClick={()=>{
                        this.setState({modaladd:true})
                    }}
                    >Add Data
                    </button>
                </div>
        )
    }
}

export default Admin
