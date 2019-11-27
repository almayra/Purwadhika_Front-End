import React, { Component } from 'react'
import im1 from './img/logo/im1.svg'
import im2 from './img/logo/im2.svg'
import im3 from './img/logo/im3.svg'
import im4 from './img/logo/im4.svg'
import im5 from './img/logo/im5.svg'
import im6 from './img/logo/im6.svg'
import im7 from './img/logo/im7.svg'
import im8 from './img/logo/im8.svg'
import im9 from './img/logo/im9.svg'
import im10 from './img/logo/im10.svg'
import im11 from './img/logo/im11.svg'
import im12 from './img/logo/im12.svg'

class Jumbotron2 extends Component {
    render() {
        return (
            <section className='bodyDua'>
                <div className="imageLogo"><img src={im1} alt="" /></div>
                <div className="imageLogo"><img src={im2} alt="" /></div>
                <div className="imageLogo imageLogo3"><img src={im3} alt="" /></div>
                <div id="imageLogo4" className="imageLogo"><img src={im4} alt="" /></div>
                <div className="imageLogo"><img src={im5} alt="" /></div>
                <div className="imageLogo"><img src={im6} alt="" /></div>
                <div className="imageLogo"><img src={im7} alt="" /></div>
                <div className="imageLogo"><img src={im8} alt="" /></div>
                <div id="imageLogo9" className="imageLogo"><img src={im9} alt="" /></div>
                <div className="imageLogo"><img src={im10} alt="" /></div>
                <div className="imageLogo"><img src={im11} alt="" /></div>
                <div className="imageLogo"><img src={im12} alt="" /></div>
            </section>
        )
    }
}

export default Jumbotron2
