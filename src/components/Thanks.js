import React, { Component } from 'react'

export class Thanks extends Component {

    getThanksStyle=()=>{
        return{
            display: this.props.reserved ? 'block': 'none'
        }
    }
    render() {
        return (
            
            <section className='thanksSection' style={this.getThanksStyle()}>
            <div className="thanks">
                    <h3>Your reservation has been placed! Our agent will contact you via phone or email, so we can have final confirmation. Have a nice night! :)</h3>
                </div>
            </section>
        )
    }
}

export default Thanks
