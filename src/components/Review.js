import React, { Component } from 'react'
import {Data} from './data'
import {Link} from 'react-router-dom'
import Commerc from './Commerc'

export class Review extends Component {
    static contextType = Data
    render() {
        const value = this.context
        return (
            <div className="reviewMain" >
            <div className="sexy_line2"></div>
            <h1>Club Overview</h1>
            <hr/>
            <div className="review">
                <div className="clubs">
                    {value.clubs.map((club) =>{
                        const {name, id, slika, nameAbove} = club
                    return <div className="club" style={{ backgroundImage: `url(${slika})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'

                    }} key={id}>
                        <div className="clubName" >
                        <h3>{name}</h3>
                        </div>
                        <div >
                        <Link to={`/club/${nameAbove}`} className="btnInfo"><button type="submit">info</button></Link>
                        </div>
                    </div>
                })}
                </div>
                <div className="commercials">
                    <Commerc/>
                </div>
            </div>
        </div>
        )
    }
}

export default Review
