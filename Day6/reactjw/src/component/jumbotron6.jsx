import React, { Component } from 'react'
import imgheader4 from './img/imgheader4.png'

class Jumbotron6 extends Component {
    render() {
        return (
            <section className="bodyEnam"> 
                <div className="enamKiri">
                    <img src={imgheader4} alt="" />
                </div>
                <div className="enamKanan">
                    <h1>ENGAGE &nbsp; <span>&nbsp;</span></h1>
                    <h3>Deepen Viewer <br /> Engagement </h3>
                    <p>apture your viewers' attention and keep them watching. Our engagement products: Article Matching and Recommendations surface the most relevant content from your library to increase plays -- all in real-time.</p>
                    <button className="buttonstarted">Engage Viewer </button>
                </div>
            </section>
        )
    }
}

export default Jumbotron6
