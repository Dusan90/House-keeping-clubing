import React from 'react'
import guetta from './Slike/guetta.jpg'
import bilbord from './Slike/bilbord.jpg'
import bilbord2 from './Slike/bilbord2.jpg'
import bmw from './Slike/bmw.jpg'

function Commerc() {
    return (
        <div className='mainCommerc'>
            <a href="https://davidguetta.com/"><img src={guetta} alt="guetta"/></a>
            <a href="https://www.djsfrommars.com"><img src={bilbord} alt="bilbord"/></a>
            <a href="https://radiodjs.com"><img src={bilbord2} alt="bilbord2"/></a>
            <a href="https://www.bmw.com/en/index.html"><img src={bmw} alt="bmw.jpg"/></a>
        </div>
    )
}

export default Commerc
