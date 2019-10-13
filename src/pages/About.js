import React, {Component} from 'react'
import AboutUs from '../components/AboutUs'


class About extends Component {
    constructor(){
        super()
        this.state={
            isLoading: true
        }
    }

    componentWillMount() {
        this.setState({isLoading: false})
    }
    render() {
        return(
            this.state.isLoading ? "Loading" : <AboutUs/>
        )
    }
}

export default About

