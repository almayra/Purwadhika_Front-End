import React, { Component } from 'react'
import imgheader3 from './img/imgheader3.png'

class Jumbotron5 extends Component {
    render() {
        return (
            <section className="bodyLima">
                <div className="limaKiri">
                    <h1>MONETIZE &nbsp; <span>&nbsp;</span></h1>
                    <h3>Maximize  Ad <br /> Revenue</h3>
                    <p>Industry leading ad support to maximize your fill rate and CPMs across platforms and screens. Our experts will guide you through best practices and how to take advantage of our innovative technology such as Video Player Bidding.</p>
                    <button className="buttonstarted">Delivery Instantly </button>
                </div>
                <div className="limaKanan">
                    <img src={imgheader3} alt="" />
                </div>
            </section>
        )
    }
}

export default Jumbotron5
