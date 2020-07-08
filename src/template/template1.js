import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import {profileProperties } from "../profileproperties";
import myImage from '../img/header-bg.jpg';

const profile = profileProperties;
export default class template1 extends Component {
    render() {
        return (
          <HashRouter basename='/template1'>
            <div className="template1" data-spy="scroll" data-offset="64" data-target="#section-topbar">
            <div id="section-topbar">
            <div id="topbar-inner">
              <div className="container">
                <div className="row">
                  <div className="dropdown">
                    <ul id="nav" className="nav">
                      <li className="menu-item">
                          <a className="smothscroll" href="#about" title="About">
                              <i className="fa fa-user"></i></a></li>
                      <li className="menu-item">
                          <a className="smothscroll" href="#resume" title="Resume">
                              <i className="fa fa-file-text-o"></i>
                            </a>
                        </li>
                      <li className="menu-item"><a className="smothscroll" href="#skills" title="Skills"><i className="fa fa-briefcase"></i></a></li>
                      <li className="menu-item"><a className="smothscroll" href="#contact" title="Contact"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                    
                  </div>
                  
        
                  <div className="clear"></div>
                </div>
                
              </div>
              
        
              <div className="clear"></div>
            </div>
            
          </div>
         
        
          <div id="headerwrap" style={{background: `url(${myImage}) right center no-repeat`}}>
            <div className="container">
              <div className="row centered">
                <div className="col-lg-12" style={{paddingRight:"350px"}}>
                  <h1>{profile.ppName}</h1>
                  <h3>{profile.ppRole} | {profile.ppEmail}</h3>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        
        
          <section id="about" name="about">
            <div id="intro">
              <div className="container">
                <div className="row">
        
                  <div className="col-lg-2 col-lg-offset-1">
                    <h5>ABOUT</h5>
                  </div>
                  <div className="col-lg-6">
                    <p>
                    <div dangerouslySetInnerHTML={ {__html: profile.ppAbout} } /> 
                    </p>
                  </div>
                  <div className="col-lg-3">
                    <p><a href="#"><i className="icon-file"></i></a>
                      
                    </p>
                  </div>
        
                </div>
               
              </div>
             
            </div>
           
          </section>
        
        
          <section id="resume" name="resume">
            
            <div className="container desc">
              <div className="row">
        
                <div className="col-lg-2 col-lg-offset-1">
                  <h5>EDUCATION</h5>
                </div>
                <div className="col-lg-6">
                  <p>
                    <span>{profile.ppDegreePG}</span><br/>{profile.ppCollegePG} <br/>
                    <i>{profile.ppCourseYearPG}</i>
                  </p>
                </div>
                <div className="col-lg-3">
                  <p>
                    <span>GRADUATED IN {profile.ppYearPG}</span><br/>
                  </p>
                </div>
        
                <div className="col-lg-6 col-lg-offset-3">
                  <p>
                    <span>{profile.ppDegreeUG} </span><br/> {profile.ppCollegeUG} <br/>
                    <i>{profile.ppCourseYearUG}</i>
                  </p>
                </div>
                <div className="col-lg-3">
                  <p>
                    <span>GRADUATED IN {profile.ppYearUG}</span>
                  </p>
                </div>
        
              </div>
             
              <br />
              <hr />
            </div>
            
          </section>
        
        
          
          <div className="container desc">
            <div className="row">
        
              <div className="col-lg-2 col-lg-offset-1">
                <h5>WORK</h5>
              </div>
              <div className="col-lg-6">
                <p>
                  <span>{profile.ppExpOneRole}</span><br/> {profile.ppExpOneCompany} <br/>
                </p>
                <p>
                  <more><div dangerouslySetInnerHTML={ {__html: profile.ppExpOneResponsibility} } /> </more>
                </p>
              </div>
              <div className="col-lg-3">
                <p>
                  <span>{profile.ppExpOneTime}</span>
                </p>
              </div>
        
              <div className="col-lg-6 col-lg-offset-3">
              <p>
                  <span>{profile.ppExpTwoRole}</span><br/> {profile.ppExpTwoCompany} <br/>
                </p>
                <p>
                  <more><div dangerouslySetInnerHTML={ {__html: profile.ppExpTwoResponsibility} } /> </more>
                </p>
              </div>
              <div className="col-lg-3">
                <p>
                  <span>{profile.ppExpTwoTime}</span>
                </p>
              </div>
              <div className="col-lg-6 col-lg-offset-3">
              <p>
                  <span>{profile.ppExpThreeRole}</span><br/> {profile.ppExpThreeCompany} <br/>
                </p>
                <p>
                  <more><div dangerouslySetInnerHTML={ {__html: profile.ppExpThreeResponsibility} } /> </more>
                </p>
              </div>
              <div className="col-lg-3">
                <p>
                  <span>{profile.ppExpThreeTime}</span>
                </p>
              </div>
            </div>
            
            <br />
            <hr />
          </div>
          <div className="container desc">
    <div className="row">
      <div className="col-lg-2 col-lg-offset-1">
        <h5>CERTIFICATIONS</h5>
      </div>
      <div className="col-lg-6">
        <p>
          <span>Certified ScrumMaster- CSM</span><br /> 
        </p>
      </div>
    

      <div className="col-lg-6 col-lg-offset-3">
        <p>
          <span>Project Management Foundations- PMI</span><br /> 
        </p>
        
      </div>

    </div>
  
    </div>
          
          <section id="skills" name="skills">
          <div id="skillswrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-lg-offset-1">
                  <h5>SKILLS</h5>
                </div>
                <div className="col-lg-3 centered">
                  
                  <p>Agile Development Process</p>
                  <br />
                </div>
                <div className="col-lg-3 centered">
                  
                  <p>Facilitation</p>
                  <br />
                </div>
                <div className="col-lg-3 centered">
                  
                  <p>Servant Leadership</p>
                  <br />
                </div>
        
                <div className="col-lg-3 col-lg-offset-3 centered">
                 
                  <p>Conflict Resolution & Continuous improvement</p>
                  <br />
                </div>
                <div className="col-lg-3 centered">
                  
                  <p>Relationship Skills & Problem Solving </p>
                  <br />
                </div>
                <div className="col-lg-3 centered">
                  
                  <p>Organisational Skills, Communication & Decision Making</p>
                  <br />
                </div>
        
              </div>
              
              <br />
            </div>
            
          </div>
         
        
        
         </section>
        
          <section id="contact" name="contact">
           
            <div id="footwrap">
              <div className="container">
                <div className="row">
        
                  <div className="col-lg-2">
                    <h5>CONTACT</h5>
                  </div>
                  <div className="col-lg-4">
                    <p>
                      <span>Email</span><br/> {profile.ppEmail} <br/>
                    </p>
                    <p>
                      <span>Phone</span><br/> {profile.ppPhone} <br/>
                    </p>
                    <p>
                      <span>Social Links</span><br/>
                      <a href="#"><i className="fa fa-dribbble"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                      <a href="#"><i className="fa fa-apple"></i></a>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      <span>CONTACT FORM</span>
                    </p>
                    <form className="contact-form php-mail-form" role="form" action="contactform/contactform.php" method="POST">
        
                      <div className="form-group">
                        <label for="contact-name">Your Name</label>
                        <input type="name" name="name" className="form-control" 
                        id="contact-name" placeholder="Your Name" data-rule="minlen:4" 
                        data-msg="Please enter at least 4 chars" />
                        <div className="validate"></div>
                      </div>
                      <div className="form-group">
                        <label for="contact-email">Your Email</label>
                        <input type="email" name="email" className="form-control" id="contact-email"
                         placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                        <div className="validate"></div>
                      </div>
                      <div className="form-group">
                        <label for="contact-subject">Subject</label>
                        <input type="text" name="subject" className="form-control" id="contact-subject" 
                        placeholder="Subject" data-rule="minlen:4" 
                        data-msg="Please enter at least 8 chars of subject" />
                        <div className="validate"></div>
                      </div>
        
                      <div className="form-group">
                        <label for="contact-message">Your Message</label>
                        <textarea className="form-control" name="message" id="contact-message" 
                        placeholder="Your Message" rows="5" data-rule="required" 
                        data-msg="Please write something for us"></textarea>
                        <div className="validate"></div>
                      </div>
        
                      <div className="loading"></div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
        
                      <div className="form-send">
                        <button type="submit" className="btn btn-large">Send Message</button>
                      </div>
        
                    </form>
        
                  </div>
                </div>
                
              </div>
             
            </div>
            
          </section>
        
          <div id="copyrights">
            <div className="container">
              <p>
                &copy; Copyrights <strong>Reluapad</strong>. All Rights Reserved
              </p>
             
            </div>
          </div>
        </div>
        </HashRouter>
        )
    }
}