import React, { Component } from 'react'
import Jumbotron1 from '../component/jumbotron1'
import Jumbotron2 from '../component/jumbotron2'
import Jumbotron3 from '../component/jumbotron3'
import Jumbotron4 from '../component/jumbotron4'
import Jumbotron5 from '../component/jumbotron5'
import Jumbotron6 from '../component/jumbotron6'
import Footer from '../component/footer'

class Homepage extends Component {
    render() {
        return (
            <div>
                <Jumbotron1/>
                <Jumbotron2/>
                <Jumbotron3/>
                <Jumbotron4/>
                <Jumbotron5/>
                <Jumbotron6/>
                <Footer/>
            </div>
        )
    }
}

export default Homepage
