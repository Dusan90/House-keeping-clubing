import React, { Component } from 'react'
import guetta from './Slike/guetta.jpg'
import bilbord from './Slike/bilbord.jpg'
import bilbord2 from './Slike/bilbord2.jpg'
import bmw from './Slike/bmw.jpg'


export class Mapnres extends Component {


    
    render() {
        const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181140.1199788969!2d20.282513414404647!3d44.815159728413235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2z0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1570206432464!5m2!1ssr!2srs" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
        function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
          }
        return (
            <div className='infomap'> 
                <Iframe iframe={iframe} /> 
                <div className='mainCommerc2'>
                    <a href="https://davidguetta.com/"><img src={guetta} alt="guetta"/></a>
                    <a href="https://www.djsfrommars.com"><img src={bilbord} alt="bilbord"/></a>
                    <a href="https://radiodjs.com"><img src={bilbord2} alt="bilbord2"/></a>
                    <a href="https://www.bmw.com/en/index.html"><img src={bmw} alt="bmw.jpg"/></a>
                </div> 

            </div>
        )
    }
}

export default Mapnres
