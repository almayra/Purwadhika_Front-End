import React, { Component } from 'react'
import Jumbotron1 from '../component/jumbotron1'
import Jumbotron2 from '../component/jumbotron2'

class Homepage extends Component {
    render() {
        return (
            <div>
                <Jumbotron1/>
                <Jumbotron2/>
            </div>
        )
    }
}

export default Homepage
