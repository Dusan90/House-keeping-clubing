import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Data} from '../components/data'
import Reserve from '../components/Reserve'
import Thanks from '../components/Thanks'
import SingleClubInfo from '../components/SingleClubInfo'



export class SingleClub extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            club: this.props.match.params.club,
            reserve: false,
            reserved: false,
            firstname: '',
            lastname: '',
            email: '',
            phone: ''
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleClick=(e)=>{
        e.preventDefault()
        return this.setState({reserve: !this.state.reserve})
    }

    handleReserve = (e) =>{
        const{firstname, lastname, email, phone}= this.state
        
        e.preventDefault()
        if((firstname === '') || (lastname === '') || (email === '') || (phone === '')){
            alert('There are some empty fields...')              
        }else{
            this.setState({
                reserve: !this.state.reserve,
                reserved: true,
                firstname: '',
                lastname: '',
                email: '',
                phone: ''
                
            }, this.backToFalse()
            ) 
        } 
    }

    backToFalse=()=>{
        setTimeout(() => {
            this.setState({reserved: false})
        }, 5000);
    }

    handleSubmit=(e)=>{
        e.preventDefault()
    }


    handleCancel = ()=>{
        this.setState({reserve: false})
    }

    handleChange =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    static contextType = Data
    render() {
        const {getClub} = this.context;
        const club = getClub(this.state.club)
        
        if(!club){
            return <div className="error">
                <h3>NO CAN DO...CAN'T FIND THAT CLUB!</h3>
                <Link to='/' className="BackBtn">Back to Home</Link>
            </div>
        }
        return (
            <div className='maindivclub'>
	            <Reserve handleReserve={this.handleReserve} handleSubmit={this.handleSubmit} handleCancel={this.handleCancel} handleChange={this.handleChange} reserve={this.state.reserve}/>
                <Thanks reserved={this.state.reserved}/>
                <SingleClubInfo {...this.props} handleClick={this.handleClick}/>
                
            </div>
        )
    }
}

export default SingleClub

