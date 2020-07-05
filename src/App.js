import React from 'react';
import myImageBg from '././img/img-05.jpg';
import './App.css';
import './css/template-style.css';
import './css/icons.css';

import './css/responsee.css';
import './owl-carousel/owl.carousel.css';
import './owl-carousel/owl.theme.css';

function App() {
  return (
    <div className="App">
       
    <header role="banner" className="position-absolute">    
     
      <nav className="background-transparent background-primary-dott full-width sticky">          
        <div className="top-nav"> 
                       
          <div className="logo hide-l hide-xl hide-xxl">
             <a href="index.html" className="logo">
              <img className="logo-white" src={require('./img/logo.png')} alt="" />
              <img className="logo-dark" src={require('./img/logo-black.png')} alt="" />
            </a>
          </div>                  
          <p className="nav-text"></p>
          <div className="top-nav left-menu">
             <ul className="right top-ul chevron">
                <li><a href="index.html">Home</a></li>
                <li><a href="about-us.html">About Us</a></li>
  </ul>
          </div>
          <ul className="logo-menu">
            <a href="index.html" className="logo">
              <img className="logo-white" src={require('./img/logo-black.png')} alt="" />
              <img className="logo-dark" src={require('./img/logo-black.png')} alt="" />
            </a>
          </ul>

          <div className="top-nav right-menu">
             <ul className="top-ul chevron">
                <li><a href="gallery.html">Templates</a></li>
                <li><a href="contact.html">Contact</a></li>
  </ul> 
          </div>
        </div>
      </nav>
    </header>

    <main role="main">    
      <header className="section-top-padding background-image text-center" style={{background:"#28a5df"}}>
        <h1 className="text-extra-thin text-white text-s-size-30 text-m-size-40 text-size-50 text-line-height-1 margin-bottom-40 margin-top-130">
          Save your Time and Keep Calm
        </h1>
        <p className="text-white" style={{fontSize:"18px"}}>To stand-out from the crowd to show your creativity and demonstrate skills, Here is your own professional website in less than 7 minutes</p>
        <i className="slow icon-sli-arrow-down text-white margin-top-20 text-size-16"></i>
        
        <img className="margin-top-20 center" src={require('./img/app.png')} alt="" />
        
        
        <img className="arrow-object" src={require('./img/arrow-object-dark.svg')} alt="" />
      </header>
      
      {/*<section className="section-small-padding background-dark text-center">      
        <div className="line">
          <div className="m-10 l-6 xl-4 center">
            <div className="margin">
              <a className="s-12 m-6 margin-s-bottom" href="/">
                <img className="full-img right" src={require('./img/google-play.svg')} alt="" />
              </a>
              <a className="s-12 m-6" href="/">
                <img className="full-img" src={require('./img/app-store.svg')} alt="" />
              </a>
            </div>
          </div>                                                                                               
        </div>       
  </section>*/}
      
      <section className="section-top-padding background-white">
        <div className="line text-center">
          <i className="icon-sli-heart text-primary text-size-40"></i>
          <h2 className="text-dark text-size-50 text-m-size-40">Template <b>Features</b></h2>
          <hr className="break background-primary break-small break-center margin-bottom-50" />
        </div>
        <div className="line">
          <div className="margin2x">
            <div className="s-12 m-6 l-4 margin-bottom-60">
              <div className="float-left">
                <i className="icon-sli-equalizer text-primary text-size-40 text-line-height-1"></i>
              </div>
              <div className="margin-left-60">
                <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Unlimited Color Variants</h3>
                <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, vel illum dolore nulla facilisis</p>
                <a className="text-more-info text-primary" href="/">Read more</a>                
              </div>
            </div>
            <div className="s-12 m-6 l-4 margin-bottom-60">
              <div className="float-left">
                <i className="icon-sli-layers text-primary text-size-40 text-line-height-1"></i>
              </div>
              <div className="margin-left-60">
                <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Many Reusable Elements</h3>
                <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, vel illum dolore nulla facilisis</p>
                <a className="text-more-info text-primary" href="/">Read more</a>                
              </div>
            </div>
            <div className="s-12 m-6 l-4 margin-bottom-60">
              <div className="float-left">
                <i className="icon-sli-share text-primary text-size-40 text-line-height-1"></i>
              </div>
              <div className="margin-left-60">
                <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Clean Modern Code</h3>
                <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, vel illum dolore nulla facilisis</p>
                <a className="text-more-info text-primary" href="/">Read more</a>                 
              </div>
            </div>
            <div className="s-12 m-6 l-4 margin-m-bottom-60">
              <div className="float-left">
                <i className="icon-sli-paper-plane text-primary text-size-40 text-line-height-1"></i>
              </div>
              <div className="margin-left-60">
                <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Parallax Background</h3>
                <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, vel illum dolore nulla facilisis</p>
                <a className="text-more-info text-primary" href="/">Read more</a>                 
              </div>
            </div>
            <div className="s-12 m-6 l-4 margin-m-bottom-60">
              <div className="float-left">
                <i className="icon-sli-diamond text-primary text-size-40 text-line-height-1"></i>
              </div>
              <div className="margin-left-60">
                <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Responsive Layoute</h3>
                <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, vel illum dolore nulla facilisis</p>
                <a className="text-more-info text-primary" href="/">Read more</a>                 
              </div>
            </div>
            <div className="s-12 m-6 l-4 margin-m-bottom-60">
              <div className="float-left">
                <i className="icon-sli-rocket text-primary text-size-40 text-line-height-1"></i>
              </div>
              <div className="margin-left-60">
                <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">And many more...</h3>
                <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, vel illum dolore nulla facilisis</p>
                <a className="text-more-info text-primary" href="/">Read more</a>                 
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section className="section background-white">      
        <div className="line text-center">
          <p className="text-primary text-size-20">Lorem ipsum dolor sit amet</p>
          <h2 className="text-dark text-size-50 text-m-size-40">Responsive <b>Components</b></h2>
          <i className="icon-chevron_down text-primary margin-bottom-50 text-size-20"></i> 
        </div> 
        
        <div className="l-12 xl-7 center"> 
          <div className="margin">
           
            <div className="s-12 m-12 l-4 text-right"> 
              <div className="margin-right-50">
                <i className="icon-sli-paper-plane text-primary text-size-40 margin-bottom-20"></i>
                <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Responsive Carousel</h3>
                <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, illum nulla facilisis</p>
              </div>
              
              <div className="line"> 
                <hr className="break background-primary break-small right margin-top-bottom-40" />
              </div>
              
              <div className="margin-right-50">
                <i className="icon-sli-bulb text-primary text-size-40 margin-bottom-20"></i>
                <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Tabs with URL Hash</h3>
                <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, dolore nulla facilisis</p>
              </div> 
            </div>

            
            <div className="s-12 m-12 l-4">                                                                                        
              <div className="carousel-default owl-carousel carousel-hide-arrows margin-m-top-bottom-50">                                                                                              
                <div className="item">                                                                                                                                                                                                     
                  <img src={require('./img/responsive-01.png')}/>                                                                                                                                                              
                </div>              
                <div className="item">                                                                                                                                                                                                                 
                  <img src={require('./img/responsive-02.png')}/>                                                                                                                                                                                                                                                                                                                                                                                     
                </div>              
                <div className="item">                                                                                                                                                                                                     
                  <img src={require('./img/responsive-03.png')}/>                                                                                                                                                            
                </div>              
                <div className="item">
                  <img src={require('./img/responsive-04.png')}/>                                                                                                                                                            
                </div>                                                                                                                                      
              </div>
            </div> 
            
            
            <div className="s-12 m-12 l-4"> 
               <div className="margin-left-50">
                <i className="icon-sli-heart text-primary text-size-40 margin-bottom-20"></i>
                <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Unlimited Color Variants</h3>
                <p>Hendrerit in vulputate duis autem vel eum iriure dolor in molestie consequat, vel illum dolore nulla facilisis</p>
              </div>
              
              <div className="line"> 
                <hr className="break background-primary break-small margin-top-bottom-40" />
              </div>
              
              <div className="margin-left-50">
                <i className="icon-sli-layers text-primary text-size-40 margin-bottom-20"></i>
                <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Responsive Navigation</h3>
                <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie vel illum dolore nulla facilisis</p>
              </div> 
            </div> 
          </div>                                                                                              
        </div>       
      </section>
      
      
      <section className="background-primary full-width">        
        <div className="m-12 l-6 xl-5 xxl-4">
          <img className="full-img" src={require('./img/img-02.jpg')}/>
        </div>         
        <div className="m-12 l-6 xl-7 xxl-8">
          <div className="l-12 xl-11 xxl-8 padding-2x">
            <h2 className="text-l-size-40 text-size-50 text-white">Always <b>Nearby</b></h2>
            <p className="margin-bottom">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
            
            <img className="margin-left-20 margin-top-30 margin-bottom-60" src={require('./img/start-your-business.svg')} alt="" />
          </div>  
        </div>
      </section>
      

      <section className="section-small-padding background-grey">   
        <div className="margin2x">
          
            <a href="/"><i className="icon-facebook_circle text-size-25 text-dark"></i></a> 
            <a href="/"><i className="icon-twitter_circle text-size-25 text-dark"></i></a>
            <a href="/"><i className="icon-google_plus_circle text-size-25 text-dark"></i></a>
            <a href="/"><i className="icon-instagram_circle text-size-25 text-dark"></i></a> 
            <a href="/"><i className="icon-linked_in_circle text-size-25 text-dark"></i></a>                                                                       
        
        </div>
      </section> 
      
          
      
    </main>
    
    
    <footer>
      
      
     
      <section className="section background-dark">
        <div className="line"> 
          <div className="margin2x">
            <div className="s-12 m-6 l-3 xl-5">
               <h4 className="text-white text-strong">Our Mission</h4>
               <p>
                 <b className="text-size-20">ReluaPad</b> is for job seekers to build a professional looking resume website without any coding knowledge.
               </p>
            </div>
            <div className="s-12 m-6 l-3 xl-2">
               <h4 className="text-white text-strong margin-m-top-30">Useful Links</h4>
               <a className="text-primary-hover" href="page.html">FAQ</a><br />      
               <a className="text-primary-hover" href="contact.html">Contact Us</a><br />
               <a className="text-primary-hover" href="blog.html">Blog</a>
            </div>
            <div className="s-12 m-6 l-3 xl-2">
               <h4 className="text-white text-strong margin-m-top-30">Term of Use</h4>
               <a className="text-primary-hover" href="page.html">Terms and Conditions</a><br />
               <a className="text-primary-hover" href="page.html">Refund Policy</a><br />
               <a className="text-primary-hover" href="page.html">Disclaimer</a>
            </div>
            <div className="s-12 m-6 l-3 xl-3">
               <h4 className="text-white text-strong margin-m-top-30">Contact Us</h4>
                <p><i className="icon-sli-screen-smartphone text-primary"></i> +6583021816</p>
                <a className="text-primary-hover" href="mailto:contact@reluapad.tkm">
                  <i className="icon-sli-mouse text-primary"></i> contact@reluapad.tk</a><br />
                <a className="text-primary-hover" href="mailto:office@reluapad.tk">
                  <i className="icon-sli-mouse text-primary"></i> office@reluapad.tk</a>
            </div>
          </div>  
        </div>    
      </section>
      
      <section className="padding-2x background-dark full-width">
        <div className="line">
          <div className="s-12 l-6">
            <p className="text-size-12">Copyright 2020, ReluaPad</p>
          </div>
          
        </div>  
      </section>
    </footer>

    </div>
  );
}

export default App;
