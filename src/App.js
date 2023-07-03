import { FaLinkedinIn } from 'react-icons/fa';
import {FaTwitter } from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';
import {FaPinterestP } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import epic from './images/ebbok.png';
import cpic from './images/client.png';
import gpic from './images/growth.jpg';
import rpic from './images/results.png';
import './App.css';

function App() {
  return (
    <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


       <div class="p-4  text-black text-center div1 " >
      <p id="mmm">MMM</p>
      <h1 id="ebook">Instagram Growth and Monetization Ebook</h1>
      <p>Knowledge is powerful.</p> 
    </div>
  
    {/* <!-- carousal  --> */}
    <div class="wrapper  pt-5"  >
      <div class="leftside">
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={epic}
          alt="First slide"
        />
        
         
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={epic}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={epic}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
        </div>
        {/* <!-- instagrm info  --> */}
      <div class="main">
       <h1 id="guide">The Ultimate Guide to Instagram Growth and Monetization: 100+ Tactics for Reaching more Potential followers and Turning Them into paying clients</h1>
       <p >The bad news is there are no definitive “growth hacks” for increasing your number of followers on Instagram. No step-by-step guide can guarantee success. The good news? There are still things you can do to build your Instagram growth strategy.</p>
       <h1 >Price: <del>$99</del> <span style={{fontWeight:"bold",color:"black"}}>$49</span> </h1>
       <a href='' target='_self' >BUY NOW</a>
      </div>
    </div>

{/* <!-- customers results  --> */}

    <div id="demo">
    <div  class="res">
            <h1   >RESULTS OF OUR CLIENTS</h1>
          </div>  
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block "
          src={cpic}
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={gpic}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={rpic}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={gpic}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={cpic}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src={rpic}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={cpic}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={rpic}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={cpic}
          alt="Third slide"
        />
      </Carousel.Item>


    </Carousel>
     
    
     
    </div>
    
           {/* <!-- customers reviews  --> */}
    <div class="wra" >
         <div type="text" class="btn btn-dark clientsatis" style={{fontWeight:"bold"}}>
            <Button variant="dark" style={{fontWeight:"bold"}}>
            Client Satisfactions <Badge bg="secondary">100+</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
           </div>
           <div id="group">
             <div id="revi">
                <p>Ms, Laura gained 200,000+ in one year by applying the proven steps in this ebook. He gave 4.5 out 5.</p>
             </div> 
             <div id="revi">
              <p>Ms, Sri gained 100,000+ in one year by applying the proven steps in this ebook. He gave 5 out 5.</p>
           </div> 
           <div id="revi">
            <p>Mr, Sanjay gained 80,000+ in one year by applying the proven steps in this ebook. He gave 4.9 out 5.</p>
         </div> 
         <div id="revi">
          <p>Ms, Laura gained 200,000+ in one year by applying the proven steps in this ebook. He gave 5 out 5.</p>
       </div> 
       <div id="revi">
        <p>Ms, Laura gained 200,000+ in one year by applying the proven steps in this ebook. He gave 4.5 out 5.</p>
     </div>            
           </div>
    </div>
    
 {/* <!-- Footer --> */}
<footer class="bg-dark text-center text-white"  id="foot">

<div class="container p-4" id='ppp'>
      {/* <!-- Section: Text --> */}
      <section class="mb-4">
        <p id='year' style={{color:"white"}}>We have 5+ years of experience working with Instagram groiwth strategies. we have grown over 100,000+ based businesses and sold them. 
          Moreover we taught 5000+ small business owners how to utilise the Instagram to earn passiove income. We first failed at lot of strategies 
          when applying the strategies for the first time. and most importantly, we laerned from our failures. That is how we are where we are at. 
          If you have a dream, dont stop trying unitl you achieve it. </p>
      </section>
      {/* <!-- Section: Text --> */}
  
      <div class="text-center p-3" id='year3' style={{color:"white"}}>
        Lets Connect
      </div>
  {/* <!-- Section: Social media --> */}
  <section class="mb-4">
    {/* <!-- Facebook --> */}
    <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/meetmymotto/" role="button">
      <i><FaInstagram /></i>      </a>

    {/* <!-- Twitter --> */}
    <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/meetmymotto/" role="button"
      ><i class="bi bi-facebook"><FaLinkedinIn /></i></a>

    {/* <!-- Google --> */}
    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
      <i class="bi bi-twitter"><FaTwitter /></i>
 </a>

    {/* <!-- Instagram --> */}
    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i class="bi bi-pinterest"><FaPinterestP /></i
    ></a>

    {/* <!-- Linkedin --> */}
    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
      <i class="bi bi-whatsapp"><FaWhatsapp /></i>
    </a>

  </section>
  {/* <!-- Section: Social media --> */}
  
  <div class="text-center p-3" id='year1' style={{color:"white"}}>
  © 2022 Copyright:
  <a class="text-white" href="https://meetmymotto.com/" id='year2'>MeetmyMotto.com</a>
</div>
</div>

</footer>
    </>
  );
}

export default App;
