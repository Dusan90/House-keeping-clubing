import React, { Component } from 'react'
import Night from './Night.mp4.mp4'
import Text from './Text'
import Article from './Article'
import Section from './Section'
import Review from './Review'
import Head from './Head'

export class Header extends Component {
    state= {
        VideoURL: 'https://youtu.be/fdqRaXFBT3s'
    }
    render() {
        return (
            <header className="header">
            <video className='defaultHeader' autoPlay loop muted>
            <source src={Night} type='video/mp4' />
            </video>
                <Head/>
                <Section/>
            <article className="art">
                <Text />
            </article>
                <Review/>
                <Article/>
            </header>
        )
    }
}

export default Header
