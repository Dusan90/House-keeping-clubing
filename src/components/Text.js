import React, { Component } from 'react'
import marsh from '../components/Slike/marsh.jpg'
import cox from '../components/Slike/cox.jpg'
import deborah from '../components/Slike/deborah.jpg'
import junior from '../components/Slike/junior.jpg'
import miss from '../components/Slike/miss.jpg'
import fabric from '../components/Slike/fabric.jpg'
import boris from '../components/Slike/boris.jpg'
import moment from 'moment'


export class Text extends Component {
    state = {
        vesti: [
        {
            Naslov: "Marshmello Dominates Nielsen Music's Mid-Year 2019 Dance/Electronic Charts",
            Vest: 'Lorem, ipsum dolor sit amet consectetur Lorem, mollitia unde vitae dolorem aspernatur possimus adipisicing elit. Temporibus rerum quisquam eum minima mollitia unde vitae dolorem aspernatur possimus autem!',
            Slika: marsh
        },
        {
            Naslov: "Boris Brejcha: “Health is the most important thing in life!”",
            Vest: 'Lorem,  rerum quisquam eum milorem aspernatur possimus autem! Lorem, mollitia unde vitae dolorem aspernatur possimus',
            Slika: boris
        },
        {
            Naslov: "Bug in the Junior Jack system",
            Vest: 'Lorem,Temporibus rerum quisquam eum minima mollitia Lorem, mollitia unde vitae dolorem aspernatur possimus unde vitae dolorem aspernatur possimus autem!',
            Slika: junior
        },
        {
            Naslov: "Carl Cox hit the pause button during a DJ set at the weekend to break up a fight.",
            Vest: 'Lorem, mollitia unde vitae dolorem aspernatur possimus autem! Lorem, mollitia unde vitae dolorem aspernatur possimus',
            Slika: cox
        },
        {
            Naslov: "Fabrik will celebrate its 11th birthday with a 15-hour techno blowout on Saturday, November 1st.",
            Vest: 'Lorem, ipsum dolor sit possimus autem! Lorem, mollitia unde vitae dolorem aspernatur possimus',
            Slika: fabric
        },
        {
            Naslov: "Miss Monique is possibly the most recognised female Progressive House DJ’s in Europe",
            Vest: 'Temporibus rerum quisquam eum minima mollitia unde vitae dolorem aspernatur possimus autem! Lorem, mollitia unde vitae dolorem aspernatur possimus',
            Slika: miss
        },
        {
            Naslov: "Track Of The Day 15/8 - Deborah De Luca",
            Vest: 'Lorem, ipsum dolor sit amet consectetur Lorem, mollitia unde vitae dolorem aspernatur possimus adipisicing elit. Temporibus rerum quisquam eum minima mollitia unde vitae dolorem aspernatur possimus autem!',
            Slika: deborah
        },

    ]
}

    render() {
        return (
            <>
            <div id="slider" >
            <div className="text">
            {this.state.vesti.map((vest, index) =>{
                  return <div className="slide" style={{ backgroundImage: `url(${vest.Slika})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: 0

                  }} key={index}>
                    <div className="news" >
                    <h3>{vest.Naslov}</h3>
                    <p>{vest.Vest}</p>
                    <p className="date">{moment().format("MMM Do YY")} </p>
                    </div>
                    <div className="slikaVesti">
                    <img className='slikaVest' alt='img' src={vest.Slika}/>
                    </div>
        </div>
            })}
      </div>
    </div>
    </>
        )
    }
}



export default Text
