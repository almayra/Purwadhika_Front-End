import React, { Component } from 'react'
import imgheader1 from '../component/img/imgheader1.png'

class Jumbotron3 extends Component {
    render() {
        return (
            <section className="bodyTiga">
                <div className="tigaKiri">
                    <h1>PLAY &nbsp; <span>&nbsp;</span></h1>
                    <h3>Beautiful <br /> experiences on <br/> every screen.</h3>
                    <p>High quality, consistent playback, so that you can reach viewers everywhere. Whether across websites, mobile apps, or connected TV, our player delivers a beautiful experience and increases your ad revenue.</p>
                    <button className="buttonstarted">Play Everywhere </button>
                </div>
                <div className="tigaKanan">
                    <img src={imgheader1} alt="" />
                </div>
            </section>
        )
    }
}

export default Jumbotron3
