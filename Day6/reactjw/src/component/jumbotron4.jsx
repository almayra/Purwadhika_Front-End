import React, { Component } from 'react'
import imgheader2 from './img/imgheader2.png'

class Jumbotron4 extends Component {
    render() {
        return (
            <section className="bodyEmpat"> 
                <div className="empatKiri">
                    <img src={imgheader2} alt="" />
                </div>
                <div className="empatKanan">
                    <h1>STREAM &nbsp; <span>&nbsp;</span></h1>
                    <h3>Deliver <br /> Compelling Video <br /> Anywhere</h3>
                    <p>Our streaming services process and deliver high-quality video faster and at a smaller size to your audience on every device.</p>
                    <button className="buttonstarted">Delivery Instantly </button>
                </div>
            </section>
        )
    }
}

export default Jumbotron4
