import React from 'react'
import {FaCocktail, FaShuttleVan, FaBeer} from 'react-icons/fa'


function Section() {
    return (
        <section className='section'>
            <div>
                <p className='word'>Reserve</p> 
                <div className='word2'> 
                <span className='popUp' style={{color: '#605D5D', textShadow: "2px 2px black"}}>with us! Treat yourself.</span>
                </div>
                <div className='icons'>
                <FaCocktail/><FaBeer/><FaShuttleVan/>
                </div>
                <hr className='hr'/>
                <p className='offer'>Reserve on this website and get free coctails and beers on your choice, and a ride home!</p>
                <p className='offer2'>Don't believe us?</p>
                <p className='offer3'>Well, you will have to see for yourself!</p>
            </div>
            <div>
                <div className="smoki">
                    <h1>time for<br/>clubing</h1>
                </div>
                <p className='note'>Any time is the best time for having fun!</p>
                <div className='test'>
                    <p className='word'>Chose</p> 
                    <div className='word2'> 
                    <span className='popUp' style={{color: '#605D5D', textShadow: "2px 2px black"}}>your adored house/club.</span>
                    </div>
                </div>
            </div>
        </section>
        )
    }

export default Section
