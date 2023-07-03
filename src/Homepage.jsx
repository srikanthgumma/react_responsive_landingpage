import './Homepage.css'
import { FaLinkedinIn } from 'react-icons/fa';
import {FaTwitter } from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';
import {FaPinterestP } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
let Homepage =()=>{
// document.getElementById("newlink").value="Profile"
  // window.history.forward(false)
  let buying =()=>{
    window.location.assign('/buynow')

  }

    return(
      <>
      <div class="p-4  text-black text-center div1 " >
      <p id="mmm">MMM</p>
      <h1 id="ebook">Instagram Growth and Monetization Ebook</h1>
      <p>Knowledge is powerful.</p> 
    </div>
  
    {/* <!-- carousal  --> */}
    <div class="wrapper  pt-5"  >
      <div class="leftside">
        <div id="demo" class="carousel slide" data-bs-ride="carousel">

          {/* <!-- Indicators/dots --> */}
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>
          
          <div class="carousel-inner ">
            <div class="carousel-item active" >
              <img src="../images/ebbok.png" alt="Los Angeles" class="d-block"    />
            </div>
            <div class="carousel-item" >
              <img src="../images/ebbok.png" alt="Los Angeles" class="d-block"    />
            </div>
            <div class="carousel-item">
              <img src="../images/ebbok.png" alt="Chicago" class="d-block"   />
            </div>
            <div class="carousel-item">
              <img src="../images/ebbok.png" alt="New York" class="d-block"   />
            </div>
          </div>
          
          {/* <!-- Left and right controls/icons --> */}
          <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon "></span>
          </button>
          <button class="carousel-control-next " type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon "></span>
          </button>
        </div>
        </div>
        {/* <!-- instagrm info  --> */}
      <div class="main">
       <h1 id="guide">The Ultimate Guide to Instagram Growth and Monetization: 100+ Tactics for Reaching more Potential followers and Turning Them into paying clients</h1>
       <p >The bad news is there are no definitive “growth hacks” for increasing your number of followers on Instagram. No step-by-step guide can guarantee success. The good news? There are still things you can do to build your Instagram growth strategy.</p>
       <h1 >Price: <del>$99</del> <span >$49</span> </h1>
       <button  class="bg-dark text-white addtocart" onClick={buying}>Buy Now</button>
      </div>
    </div>
{/* <!-- customers results  --> */}
    <div id="demo" class="carousel slide" data-bs-ride="carousel" >
      <div class="carousel-indicators"> 
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="7"></button>
        
      </div>
          <div  class="res">
            <h1   >RESULTS OF OUR CLIENTS</h1>
          </div>  

      <div class="carousel-inner space "  >
        <div class="carousel-item active "  >
          <img src="../images/client.png" alt="Los Angeles" class="d-block"   />
        </div>
        <div class="carousel-item" >
          <img src="../images/growth.jpg" alt="Los Angeles" class="d-block"   />
        </div>
        <div class="carousel-item">
          <img src="../images/results.png" alt="Chicago" class="d-block"    />
        </div>
        <div class="carousel-item" >
          <img src="../images/growth.jpg" alt="Los Angeles" class="d-block"   />
        </div>
        <div class="carousel-item">
          <img src="../images/results.png" alt="Chicago" class="d-block"  />
        </div>
        <div class="carousel-item" >
          <img src="../images/growth.jpg" alt="Los Angeles" class="d-block"   />
        </div>
        <div class="carousel-item">
          <img src="../images/results.png" alt="Chicago" class="d-block" />
        </div>
       
      </div>
    
      <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon "></span>
      </button>
      <button class="carousel-control-next " type="button" data-bs-target="#demo" data-bs-slide="next">
        <span class="carousel-control-next-icon "></span>
      </button>
    </div>
    
           {/* <!-- customers reviews  --> */}
    <div class="wra" >
         <div type="text" class="btn btn-dark clientsatis">
          Client Satisfactions <span class="badge bg-danger">1000+</span>
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
{/* <!-- Grid container --> */}
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

    )
}
export default Homepage;