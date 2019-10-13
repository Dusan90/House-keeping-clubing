import React, {Component} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg4 from './Slike/background4.jpg'
import bg5 from './Slike/background5.jpg'
import person1 from './Slike/person1.jpg'
import person2 from './Slike/person2.jpg'
import person3 from './Slike/person3.jpg'
AOS.init();



class AboutUs extends Component {

    

render(){
    return (
            <div className='aboutpage'>
                <div className="aboutside">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, libero.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quo cumque exercitationem ea excepturi dolorum officia veniam obcaecati odit voluptatum?</p>
                </div>
                <div className="aboutUs">
                    <div className="divh1">
                        <h1 data-aos="zoom-in">WHAT IS THAT WE DO THAT MAKES US PERFECT?</h1>
                    </div>
                    <div className="linebreak"></div>
                    <h4 data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0">
                        <img src={bg4} alt="bg4" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"></img>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odio necessitatibus esse quas laboriosam ad laudantium impedit laborum rem. Repellat excepturi reiciendis architecto ex perspiciatis eaque cumque, labore modi laudantium?</h4>
                    <div className="linebreak"></div>
                    <h3 data-aos="zoom-in">Lorem ipsum dolor sit amet consectetur.</h3>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque optio deleniti ducimus! Saepe voluptas repellat explicabo? Veniam, quisquam asperiores quos temporibus magnam voluptatem illum quam non veritatis recusandae dolore qui. Fuga eveniet impedit at alias harum et repudiandae nam odio animi amet obcaecati est adipisci quos rem, facilis illo assumenda veritatis aliquid pariatur ipsa? Magni maxime consectetur, consequatur necessitatibus nisi aut aliquid porro velit rerum distinctio. Quaerat eligendi numquam fugiat repellendus commodi aut, temporibus doloribus quia at, aperiam suscipit debitis reprehenderit nesciunt eveniet blanditiis reiciendis dolor, quidem sunt nobis cumque eos nisi ipsam! Hic magnam temporibus impedit beatae nesciunt!</p>
                    <img src={bg5} alt="bg5" data-aos="zoom-out-down"/>
                    <div className="employeesmain">
                        <h2>Team Leaders</h2>
                        <div className="employees">
                            <div>
                                <img data-aos="flip-up" src={person1} alt="person"/>
                                <h4>Dave Ed</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ipsa.</p>
                            </div>
                            <div>
                                <img data-aos="flip-left" src={person2} alt="person"/>
                                <h4>Brad Traversy</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, odit?</p>
                            </div>
                            <div>
                                <img data-aos="flip-up" src={person3} alt="person"/>
                                <h4>Nina Ortiz</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, ipsa.</p>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        )
}
}
export default AboutUs
