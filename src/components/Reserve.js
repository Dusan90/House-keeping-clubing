import React, { Component } from 'react'


export class Reserve extends Component {
    getStyle = () =>{
        return {
            display: this.props.reserve ? 'block' : 'none'
        }
    }
    render() {
        return (
            <section className="webdesigntuts-workshop" style={this.getStyle()}>
            <form onSubmit={this.props.handleSubmit}>		    
		        <input type="text" name='firstname' className='resin' placeholder="First Name..." onChange={this.props.handleChange}/>
		        <input type="text" name='lastname' className='resin' placeholder="Last Name..." onChange={this.props.handleChange}/>
		        <input type="email" name='email' className='resin' placeholder="Email..." onChange={this.props.handleChange}/>
		        <input type="datetime-local" name='datetime' className='resin'/>
		        <input type="text" className='resin' name='phone' placeholder="Phone number..." onChange={this.props.handleChange}/>
                <div className='resinbtn' style={{display: 'flex',width: '60%'}}>
                    <input style={{marginRight:'7px'}} onClick={this.props.handleReserve} type="submit" className='resin' value='RESERVE!'/>
		            <input style={{marginLeft:'7px'}} onClick={this.props.handleCancel} type="submit" className='resin' value="CANCEL"/>
                </div>
                
	        </form>
            </section>
            

        )
    }
}

export default Reserve
