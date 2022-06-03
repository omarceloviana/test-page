import React, { Component } from "react"
import logoImg from './assets/logoImg.svg'
import arrowLeft from './assets/arrow-left.svg'
import points from './assets/points.svg'
import arrowRight from './assets/arrow-right.svg'
import arrowCard from './assets/arrow-card.svg'
import jackTeam from './assets/jack-team.png'
import thomasTeam from './assets/thomas-team.png'
import sophiaTeam from './assets/sophia-team.png'
import arrowSet from './assets/arrow-set-black.svg'
import arrowLeftTopics from './assets/arrow-left-topics.svg'
import arrowRightTopics from './assets/arrow-right-topics.svg'
import card1 from './assets/card-1.png'
import card2 from './assets/card-2.png'
import card3 from './assets/card-3.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './App.css'
  
export default class InteriorsCC extends Component {

    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
  
  return (
    <>
    {/* HOME */}
    <div className='header'>
        <div className='home-page'>
            <img className='logo' src={logoImg} alt="Logo" />
        </div>
        <ul className='menu'>
            <li className='topBar'>HOME</li>
            <li className='topBar'>TEAM</li>
            <li className='topBar'>TOPICS</li>
            <li className='topBar'>CONTACT</li>
        </ul>
        <div className='selector'>
            <img src={arrowLeft} alt="Arrow-Left" />
            <img src={points} alt="Points" />
            <img src={arrowRight} alt="Arrow-Right" />
        </div>
    </div>
        <div>
        <div className='card'>
          <div className='text-card'>
                <h2 className='title'> CHECK THE TOP 10 INTERIORS OF THE WEEK.</h2>
                <p className='text'>our team of architects  and designers has put together a selection 
                    of the best interiors of the week.</p>
            <img id='arrow-card' src={arrowCard} alt="Arrow-Card" />
        </div>
        </div>   
    </div>
  {/* FINAL HOME */}

  {/* TEAM */}
  <div className='container-team'>
    <div>
      <h1 className='title-card'>MEET OUR TEAM</h1>
    </div>
    <div className='team'>
      <div className='team-person'>
        <img src={jackTeam} alt="Jack" />
          <div className='identification'>
              <h4>Jack Gosling</h4>
              <p className='office'>Senior Designer</p>
              <p className='bt'>See Profile</p>
          </div>
      </div>
      <div className='team-person'>
        <img src={thomasTeam} alt="Thomas" />
          <div className='identification'>
                <h4>Thomas Carlson</h4>
                <p className='office'>Interior Expert</p>
                <p className='bt'>See Profile</p>
          </div>
      </div>
      <div className='team-person'>
        <img src={sophiaTeam} alt="Sophia" />
          <div className='identification'>
              <h4>Sophia Dellphine</h4>
              <p className='office'>Midia Expert</p>
              <p className='bt'>See Profile</p>
          </div>
      </div>
    </div>
  </div>
  {/* FINAL TEAM */}

  {/* TOPICS */}
  <div className='container-topics-flex'>

  <div className='container-topics'> 
    <h4 className='topics'>TOPICS</h4>
    <div>
    <Slider ref={c => (this.slider = c)} {...settings} style={{ width:"1200px", background:"#fff"}}>
          <div key={1}>
            <div className='container-cards'>
                <div className='card-img'>
                    <img className='img-topics' src={card1} alt="Card" />
                </div>
                <div className='card-topics'>
                    <div className='title-topics'>
                    <h5>HOW TO ORGANIZE YOUR KITCHEN</h5>
                    </div>
                    <div className='content-topics'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                    <img className='arrow-set-topics' src={arrowSet} alt="Arrow" />
                </div>
                </div>
          </div>
          <div key={2}>
            <div className='container-cards'>
                <div className='card-img'>
                    <img className='img-topics' src={card2} alt="Card" />
                </div>
                <div className='card-topics'>
                    <div className='title-topics'>
                    <h5>TOP 10 INTERIORS.</h5>
                    </div>
                    <div className='content-topics'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                    <img className='arrow-set-topics' src={arrowSet} alt="Arrow" />
                </div>
            </div>
          </div>
          <div key={3}>
          <div className='container-cards'>
                <div className='card-img'>
                    <img className='img-topics' src={card3} alt="Card" />
                </div>
                <div className='card-topics'>
                    <div className='title-topics'>
                    <h5>HOW TO USE GREY COLOR IN WALLS:</h5>
                    </div>
                    <div className='content-topics'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                    <img className='arrow-set-topics' src={arrowSet} alt="Arrow" />
                </div>
                </div>
          </div>
        </Slider>
        <div className="seletor-topics" >
          <button className="button-left-topics" onClick={this.previous}>
            <img src={arrowLeftTopics} alt="" />
          </button>
          <button className="button-right-topics" onClick={this.next}>
            <img src={arrowRightTopics} alt="" />
          </button>
        </div>
    </div>
        
      {/* <div className='seletor-topics'>
        <button className='button-left-topics' > 
          <img className='arrow-topics'  src={arrowLeftTopics} alt="Arrow-Left" />
        </button>
        
        <button className='button-right-topics' >
          <img className='arrow-topics' src={arrowRightTopics} alt="Arrow-Right" />
        </button>
      </div> */}
  </div>
  </div>
  {/* FIM TOPICS */}

  {/* CONTACT */}
  <div className='container'>
            <div className='container-contact'>
            <div className='container-content'>
                <div className='title-contact'>
                    <h4>CONTACT OUR TEAM FOR MORE INFORMATION ABOUT INTERIOR DESIGN.</h4>
                </div>
                    <div className='data-contact'>
                        <input type="text" className='input' placeholder='Your name'/>
                        <input type="text" className='input' placeholder='Your best Email'/>
                        <textarea type="text" className='textarea' placeholder='How can we help you :) ?'/>
                        <button className='button'>Send</button>
                    </div>
            </div>
            </div>
            <footer className='footer'>
                <div className='text-footer'>
                    <p>interiors.cc - 2021</p>
                    <p>All rights reserved</p>
                </div>
            </footer>
        </div>
  </>
  )
  }
}

