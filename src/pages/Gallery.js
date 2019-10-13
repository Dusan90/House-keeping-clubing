import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Data} from '../components/data'



export class Gallery extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            club: this.props.match.params.club,
            reserve: false,
            reserved: false,
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    static contextType = Data
    render() {
        const {getClub} = this.context;
        const club = getClub(this.state.club)
         
        const {name, slika1, slika2,slika3,slika4,slika5,slika6,slika7,slika8,slika9,slika10,slika11,slika12,slika13,slika14,slika15,slika16 } = club
        if(!club){
            return <div className="error">
                <h3>NO CAN DO...CAN'T FIND THAT GALLERY!</h3>
                <Link to='/' className="BackBtn">Back to Home</Link>
            </div>
        }
        return (
            <div className='mainGalleryClub'>
                <div className="container">
                    <p>{name} Gallery</p>
	                <div className="top">
    	<ul>
        	<li><a href="#img_1"><img alt='Gallery' src={slika1}/></a></li>
            <li><a href="#img_2"><img alt='Gallery' src={slika2}/></a></li>
            <li><a href="#img_3"><img alt='Gallery' src={slika3}/></a></li>
            <li><a href="#img_4"><img alt='Gallery' src={slika4}/></a></li>
            <li><a href="#img_5"><img alt='Gallery' src={slika5}/></a></li>
            <li><a href="#img_6"><img alt='Gallery' src={slika6}/></a></li>
            <li><a href="#img_7"><img alt='Gallery' src={slika7}/></a></li>
            <li><a href="#img_8"><img alt='Gallery' src={slika8}/></a></li>
            <li><a href="#img_9"><img alt='Gallery' src={slika9}/></a></li>
            <li><a href="#img_10"><img alt='Gallery' src={slika10}/></a></li>
            <li><a href="#img_11"><img alt='Gallery' src={slika11}/></a></li>
            <li><a href="#img_12"><img alt='Gallery' src={slika12}/></a></li>
            <li><a href="#img_13"><img alt='Gallery' src={slika13}/></a></li>
            <li><a href="#img_14"><img alt='Gallery' src={slika14}/></a></li>
            <li><a href="#img_15"><img alt='Gallery' src={slika15}/></a></li>
            <li><a href="#img_16"><img alt='Gallery' src={slika16}/></a></li>
        </ul>
        <a href="#_1" className="lightbox trans" id="img_1"><img alt='Gallery' src={slika1}/></a>
        <a href="#_2" className="lightbox trans" id="img_2"><img alt='Gallery' src={slika2}/></a>
        <a href="#_3" className="lightbox trans" id="img_3"><img alt='Gallery' src={slika3}/></a>
        <a href="#_4" className="lightbox trans" id="img_4"><img alt='Gallery' src={slika4}/></a>
        <a href="#_5" className="lightbox trans" id="img_5"><img alt='Gallery' src={slika5}/></a>
        <a href="#_6" className="lightbox trans" id="img_6"><img alt='Gallery' src={slika6}/></a>
        <a href="#_7" className="lightbox trans" id="img_7"><img alt='Gallery' src={slika7}/></a>
        <a href="#_8" className="lightbox trans" id="img_8"><img alt='Gallery' src={slika8}/></a>
        <a href="#_9" className="lightbox trans" id="img_9"><img alt='Gallery' src={slika9}/></a>
        <a href="#_10" className="lightbox trans" id="img_10"><img alt='Gallery' src={slika10}/></a>
        <a href="#_11" className="lightbox trans" id="img_11"><img alt='Gallery' src={slika11}/></a>
        <a href="#_12" className="lightbox trans" id="img_12"><img alt='Gallery' src={slika12}/></a>
        <a href="#_13" className="lightbox trans" id="img_13"><img alt='Gallery' src={slika13}/></a>
        <a href="#_14" className="lightbox trans" id="img_14"><img alt='Gallery' src={slika14}/></a>
        <a href="#_15" className="lightbox trans" id="img_15"><img alt='Gallery' src={slika15}/></a>
        <a href="#_16" className="lightbox trans" id="img_16"><img alt='Gallery' src={slika16}/></a>
    </div>
<h1>THE BEST NIGHTS ARE WHEN YOU'RE HAVING TOO MUCH FUN AND YOU SHARE IT!</h1>
</div>
            </div>
        )            
    }
}

export default Gallery
