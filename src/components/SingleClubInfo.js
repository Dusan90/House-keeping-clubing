import React, { Component } from 'react'
import {Data} from '../components/data'
import Mapnres from '../components/Mapnres'
import {Link} from 'react-router-dom'

export class SingleClubInfo extends Component {
    constructor(props){
        super(props)
            this.state= {
                club: this.props.match.params.club
            }
    }
    static contextType = Data    
    render() {
        const {getClub} = this.context;
        const club = getClub(this.state.club)
        const {slika1, slika2, slika3, slika4, name, music, adress, slika, info, nameAbove}= club
        return (
            <>
            <div className="pic-wrapper">
            <figure className="pic-1" style={{background: `url(${slika1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></figure>
            <figure className="pic-2" style={{background: `url(${slika2}`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></figure>
            <figure className="pic-3" style={{background: `url(${slika3})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></figure>
            <figure className="pic-4" style={{background: `url(${slika4})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></figure>
            </div>
             <div className="maindivinfo">
             <h1>{name}</h1>
             <div className="maindivbtn">
                 <button className="glow-on-hover" onClick={this.props.handleClick} type="button">RESERVE ONLINE!</button>
                 <a href="#Info"><button className="glow-on-hover glow" type="button">DETAILS</button></a>
             </div>

         </div>
         <div className="sexy_line2"></div>
                    <div className="divinfo" id='Info'>
                        <div className="infoip">
                             <p> <img src={slika} alt={name} /> {info}</p>
                        </div>
                        <div className="p2">
                            <p>Type of Music: {music} | Adress: {adress}.</p>
                        </div>
                        <div className="p1">
                            <p>{name}'s Location on map:</p>
                        </div>
                        <Mapnres/>
                        <div className="gallery">
                            <h2>Gallery:</h2>
                            <div className="mainGlry">
                                <Link to={`/gallery/${nameAbove}`} className='imag1'><img  src={slika1} alt="gallery" /></Link>
                                <Link to={`/gallery/${nameAbove}`} className='imag2'><img  src={slika2} alt="gallery" /></Link>
                                <Link to={`/gallery/${nameAbove}`} className='imag3'><img  src={slika3} alt="gallery" /></Link>
                            </div>
                        </div>
                        <div className="p3">
                            <p>You can call us for more info about {name}, or you can reserve. Tell: 434-434-434; 454-3432-333.</p>
                        </div>
                    </div>
            </>
        )
    }
}

export default SingleClubInfo
