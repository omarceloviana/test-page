// import logoImg from './assets/logoImg.svg'
// import arrowLeft from './assets/arrow-left.svg'
// import points from './assets/points.svg'
// import arrowRight from './assets/arrow-right.svg'
// import arrowCard from './assets/arrow-card.svg'
// import jackTeam from './assets/jack-team.png'
// import thomasTeam from './assets/thomas-team.png'
// import sophiaTeam from './assets/sophia-team.png'
// import arrowSet from './assets/arrow-set-black.svg'
// import arrowLeftTopics from './assets/arrow-left-topics.svg'
// import arrowRightTopics from './assets/arrow-right-topics.svg'
// import elipseSlide from './assets/elipse-slide.svg'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import Slider from 'react-slick'
// import './App.css'

// function App() {
  

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   console.log(style)
//   return (
//       <div
//           className={className}
//           style={{ ...style, display: "block", background: "#404040"}}
//           onClick={onClick}
//       />
//   );
// }

// function SamplePrevArrow(props) {
//   console.log(props)
//   const { className, style, onClick } = props;
//   return (
//       <div
//           className={className}
//           style={{ ...style, display: "flex", background: "#404040" }}
//           onClick={onClick}
//       />
//   );
// }

//   const settingsSlick = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />
// }

// // const Item = (props) => {
// //     return (      
// //       <div className='container-cards'>
// //           <div className='card-img'>
// //             <img className='img-topics' src={props.item.imagem} alt="Card" />
// //           </div>
// //           <div className='card-topics'>
// //             <div className='title-topics'>
// //               <h5>{props.item.title}</h5>
// //             </div>
// //             <div className='content-topics'>
// //               <p>{props.item.description}</p>
// //             </div>
// //             <img src={arrowSet} alt="Arrow" />
// //           </div>
// //       </div>
// //     )
// // }

// var items = [
//     {
//         id: 1,
//         title: "HOW TO ORGANIZE YOUR KITCHEN",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
//         imagem: '/src/assets/card-1.png',
//     },
//     {
//         id: 2,
//         title: "TOP 10 INTERIORS.",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
//         imagem: '/src/assets/card-2.png',
//     },
//     {
//         id: 3,
//         title: "HOW TO USE GREY COLOR IN WALLS:",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
//         imagem: '/src/assets/card-3.png',

//     }
// ]
  
//   return (
//     <>
//     {/* HOME */}
//     <div className='header'>
//         <div className='home-page'>
//             <img className='logo' src={logoImg} alt="Logo" />
//         </div>
//         <ul className='menu'>
//             <li className='topBar'>HOME</li>
//             <li className='topBar'>TEAM</li>
//             <li className='topBar'>TOPICS</li>
//             <li className='topBar'>CONTACT</li>
//         </ul>
//         <div className='selector'>
//             <img src={arrowLeft} alt="Arrow-Left" />
//             <img src={points} alt="Points" />
//             <img src={arrowRight} alt="Arrow-Right" />
//         </div>
//     </div>
//         <div>
//         <div className='card'>
//           <div className='text-card'>
//                 <h2 className='title'> CHECK THE TOP 10 INTERIORS OF THE WEEK.</h2>
//                 <p className='text'>our team of architects  and designers has put together a selection 
//                     of the best interiors of the week.</p>
//             <img id='arrow-card' src={arrowCard} alt="Arrow-Card" />
//         </div>
//         </div>   
//     </div>
//   {/* FINAL HOME */}

//   {/* TEAM */}
//   <div className='container-team'>
//     <div>
//       <h1 className='title-card'>MEET OUR TEAM</h1>
//     </div>
//     <div className='team'>
//       <div className='team-person'>
//         <img src={jackTeam} alt="Jack" />
//           <div className='identification'>
//               <h4>Jack Gosling</h4>
//               <p className='office'>Senior Designer</p>
//               <p className='bt'>See Profile</p>
//           </div>
//       </div>
//       <div className='team-person'>
//         <img src={thomasTeam} alt="Thomas" />
//           <div className='identification'>
//                 <h4>Thomas Carlson</h4>
//                 <p className='office'>Interior Expert</p>
//                 <p className='bt'>See Profile</p>
//           </div>
//       </div>
//       <div className='team-person'>
//         <img src={sophiaTeam} alt="Sophia" />
//           <div className='identification'>
//               <h4>Sophia Dellphine</h4>
//               <p className='office'>Midia Expert</p>
//               <p className='bt'>See Profile</p>
//           </div>
//       </div>
//     </div>
//   </div>
//   {/* FINAL TEAM */}

//   {/* TOPICS */}
//   <div className='container-topics-flex'>

//   <div className='container-topics'> 
//     <h4 className='topics'>TOPICS</h4>
//     <div
      
//       style={{
//         // width: '100%',
//         // maxWidth: 600,
//         // margin: '40px auto',
//         // padding: '0 60px',
        
//       }}
//       >
//     <Slider {...settingsSlick}>
//       {items.map((item) => (
//         <div key={item.id} 
//         style={{
//           height: 0,
//           width: 0
//         }}>
//           {/* <Item item={item} /> */}
//           <div className='container-cards'>
//           <div className='card-img'>
//             <img className='img-topics' src={item.imagem} alt="Card" />
//           </div>
//           <div className='card-topics'>
//             <div className='title-topics'>
//               <h5>{item.title}</h5>
//             </div>
//             <div className='content-topics'>
//               <p>{item.description}</p>
//             </div>
//             <img className='arrow-set-topics' src={arrowSet} alt="Arrow" />
//           </div>
//       </div>

//         </div>
//       ))}
//     </Slider>
//     </div>
        
//       <div className='seletor-topics'>
//         <button className='button-left-topics' > 
//           <img className='arrow-topics'  src={arrowLeftTopics} alt="Arrow-Left" />
//         </button>
//         {/* <img className='elipse-slide' src={elipseSlide} alt="Elipse-Slide" />
//         <img className='elipse-slide' src={elipseSlide} alt="Elipse-Slide" />
//       <img className='elipse-slide' src={elipseSlide} alt="Elipse-Slide" />  */}
//         <button className='button-right-topics' >
//           <img className='arrow-topics' src={arrowRightTopics} alt="Arrow-Right" />
//         </button>
//       </div>
//   </div>
//       </div>
//   {/* FIM TOPICS */}

//   {/* CONTACT */}
//   <div className='container'>
//             <div className='container-contact'>
//             <div className='container-content'>
//                 <div className='title-contact'>
//                     <h4>CONTACT OUR TEAM FOR MORE INFORMATION ABOUT INTERIOR DESIGN.</h4>
//                 </div>
//                     <div className='data-contact'>
//                         <input type="text" className='input' placeholder='Your name'/>
//                         <input type="text" className='input' placeholder='Your best Email'/>
//                         <textarea type="text" className='textarea' placeholder='How can we help you :) ?'/>
//                         <button className='button'>Send</button>
//                     </div>
//             </div>
//             </div>
//             <footer className='footer'>
//                 <div className='text-footer'>
//                     <p>interiors.cc - 2021</p>
//                     <p>All rights reserved</p>
//                 </div>
//             </footer>
//         </div>
//   </>
//   )
// }

// export default App
