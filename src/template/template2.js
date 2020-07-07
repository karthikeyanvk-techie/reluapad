import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import {profileProperties } from "../profileproperties";
import '../css/template2-style.css';
import '../css/aos.css';
import '../css/bootstrap.min.css';
import myImage from '../img/header-bg.jpg';
import myImg_1 from '../images/cc-bg-1.jpg';
import myImg_2 from '../images/staticmap.png';

const profile = profileProperties;
export default class template2 extends Component {
    render() {
        return (
          <HashRouter basename='/template2'>
              <div className="topTemplate2">
                  <header>
      <div className="profile-page sidebar-collapse">
        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary" color-on-scroll="400">
          <div className="container">
            <div className="navbar-translate"><a className="navbar-brand" href="#" rel="tooltip">Reluapad</a>
              <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-bar bar1"></span><span className="navbar-toggler-bar bar2"></span><span className="navbar-toggler-bar bar3"></span></button>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navigation">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link smooth-scroll" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link smooth-scroll" href="#skill">Skills</a></li>
                <li className="nav-item"><a className="nav-link smooth-scroll" href="#experience">Experience</a></li>
                <li className="nav-item"><a className="nav-link smooth-scroll" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <div className="page-content">
      <div>
<div className="profile-page">
  <div className="wrapper">
    <div className="page-header page-header-small" filter-color="green">
      <div className="page-header-image" data-parallax="true" style={{backgroundImage: `url(${myImg_1})`, transform:"translate3d(0px, 0px, 0px)"}}></div>
      <div className="container">
        <div className="content-center">
          <div className="cc-profile-image"><a href="#"><img src={myImage} alt="Image"/></a></div>
          <div className="h2 title">{profile.ppName}</div>
        <p className="category text-white">{profile.ppRole}</p>
        <a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="button-container"><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Facebook"><i className="fa fa-facebook"></i></a><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Twitter"><i className="fa fa-twitter"></i></a><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Google+"><i className="fa fa-google-plus"></i></a><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Instagram"><i className="fa fa-instagram"></i></a></div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="section" id="about">
  <div className="container">
    <div className="card" data-aos="fade-up" data-aos-offset="10">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="card-body">
            <div className="h4 mt-0 title">About</div>
                    <p>
                        <div dangerouslySetInnerHTML={ {__html: profile.ppAbout} } /> 
                    </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="card-body">
            <div className="h4 mt-0 title">Basic Information</div>
            <div className="row">
              <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                <div className="col-sm-8">{profile.ppAge}</div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                <div className="col-sm-8">{profile.ppEmail}</div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
              <div className="col-sm-8">{profile.ppPhone}</div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
              <div className="col-sm-8">{profile.ppLanguagesKnown}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="section" id="skill">
  <div className="container">
    <div className="h4 text-center mb-4 title">Professional Skills</div>
    <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="progress-container progress-primary"><span className="progress-badge">HTML</span>
              <div className="progress">
                <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div><span className="progress-value">80%</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="progress-container progress-primary"><span className="progress-badge">CSS</span>
              <div className="progress">
                <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div><span className="progress-value">75%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="progress-container progress-primary"><span className="progress-badge">JavaScript</span>
              <div className="progress">
                <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}></div><span className="progress-value">60%</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="progress-container progress-primary"><span className="progress-badge">SASS</span>
              <div className="progress">
                <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}></div><span className="progress-value">60%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="progress-container progress-primary"><span className="progress-badge">Bootstrap</span>
              <div className="progress">
                <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div><span className="progress-value">75%</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="progress-container progress-primary"><span className="progress-badge">Photoshop</span>
              <div className="progress">
                <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}></div><span className="progress-value">70%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*
<div className="section" id="portfolio">
  <div className="container">
    <div className="row">
      <div className="col-md-6 ml-auto mr-auto">
        <div className="h4 text-center mb-4 title">Portfolio</div>
        <div className="nav-align-center">
          <ul className="nav nav-pills nav-pills-primary" role="tablist">
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#web-development" role="tablist"><i className="fa fa-laptop" aria-hidden="true"></i></a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#graphic-design" role="tablist"><i className="fa fa-picture-o" aria-hidden="true"></i></a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Photography" role="tablist"><i className="fa fa-camera" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="tab-content gallery mt-5">
      <div className="tab-pane active" id="web-development">
        <div className="ml-auto mr-auto">
          <div className="row">
            <div className="col-md-6">
              <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#web-development">
                  <figure className="cc-effect"><img src="images/project-1.jpg" alt="Image"/>
                    <figcaption>
                      <div className="h4">Recent Project</div>
                      <p>Web Development</p>
                    </figcaption>
                  </figure></a></div>
              <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#web-development">
                  <figure className="cc-effect"><img src="images/project-2.jpg" alt="Image"/>
                    <figcaption>
                      <div className="h4">Startup Project</div>
                      <p>Web Development</p>
                    </figcaption>
                  </figure></a></div>
            </div>
            <div className="col-md-6">
              <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#web-development">
                  <figure className="cc-effect"><img src="images/project-3.jpg" alt="Image"/>
                    <figcaption>
                      <div className="h4">Food Order Project</div>
                      <p>Web Development</p>
                    </figcaption>
                  </figure></a></div>
              <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#web-development">
                  <figure className="cc-effect"><img src="images/project-4.jpg" alt="Image"/>
                    <figcaption>
                      <div className="h4">Web Advertising Project</div>
                      <p>Web Development</p>
                    </figcaption>
                  </figure></a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane" id="graphic-design" role="tabpanel">
        <div className="ml-auto mr-auto">
          <div className="row">
            <div className="col-md-6">
              <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                  <figure className="cc-effect"><img src="images/graphic-design-1.jpg" alt="Image"/>
                    <figcaption>
                      <div className="h4">Triangle Pattern</div>
                      <p>Graphic Design</p>
                    </figcaption>
                  </figure></a></div>
              <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                  <figure className="cc-effect"><img src="images/graphic-design-2.jpg" alt="Image"/>
                    <figcaption>
                      <div className="h4">Abstract Umbrella</div>
                      <p>Graphic Design</p>
                    </figcaption>
                  </figure></a></div>
            </div>
            <div className="col-md-6">
              <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                  <figure className="cc-effect"><img src="images/graphic-design-3.jpg" alt="Image"/>
                    <figcaption>
                      <div className="h4">Cube Surface Texture</div>
                      <p>Graphic Design</p>
                    </figcaption>
                  </figure></a></div>
              <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                  <figure className="cc-effect"><img src="images/graphic-design-4.jpg" alt="Image"/>
                    <figcaption>
                      <div className="h4">Abstract Line</div>
                      <p>Graphic Design</p>
                    </figcaption>
                  </figure></a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane" id="Photography" role="tabpanel">
        <div className="ml-auto mr-auto">
          <div className="row">
            <div className="col-md-6">
              <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#Photography">
                  <figure className="cc-effect"><img src="images/photography-1.jpg" alt="Image"/>
                    <figcaption>
                      <div className="h4">Photoshoot</div>
                      <p>Photography</p>
                    </figcaption>
                  </figure></a></div>
              <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#Photography">
                  <figure className="cc-effect"><img src="images/photography-3.jpg" alt="Image"/>
                    <figcaption>
                      <div className="h4">Wedding Photoshoot</div>
                      <p>Photography</p>
                    </figcaption>
                  </figure></a></div>
            </div>
            <div className="col-md-6">
              <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#Photography">
                  <figure className="cc-effect"><img src="images/photography-2.jpg" alt="Image"/>
                    <figcaption>
                      <div className="h4">Beach Photoshoot</div>
                      <p>Photography</p>
                    </figcaption>
                  </figure></a></div>
              <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#Photography">
                  <figure className="cc-effect"><img src="images/photography-4.jpg" alt="Image"/>
                    <figcaption>
                      <div className="h4">Nature Photoshoot</div>
                      <p>Photography</p>
                    </figcaption>
                  </figure></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>*/}
<div className="section" id="experience">
  <div className="container cc-experience">
    <div className="h4 text-center mb-4 title">Work Experience</div>
    <div className="card">
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body cc-experience-header">
            <p>{profile.ppExpOneTime}</p>
            <div className="h5">{profile.ppExpOneCompany}</div>
          </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div className="card-body">
                <div className="h5">{profile.ppExpOneRole}</div>
                    <p>
                        <div dangerouslySetInnerHTML={ {__html: profile.ppExpOneResponsibility} } /> 
                    </p>
            </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
            <div className="card-body cc-experience-header">
                <p>{profile.ppExpTwoTime}</p>
                <div className="h5">{profile.ppExpTwoCompany}</div>
            </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                    <div className="h5">{profile.ppExpTwoRole}</div>
                        <p>
                            <div dangerouslySetInnerHTML={ {__html: profile.ppExpTwoResponsibility} } /> 
                        </p>
                </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
            <div className="card-body cc-experience-header">
                <p>{profile.ppExpThreeTime}</p>
                <div className="h5">{profile.ppExpThreeCompany}</div>
            </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                    <div className="h5">{profile.ppExpThreeRole}</div>
                        <p>
                            <div dangerouslySetInnerHTML={ {__html: profile.ppExpThreeResponsibility} } /> 
                        </p>
                </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="section">
  <div className="container cc-education">
    <div className="h4 text-center mb-4 title">Education</div>
    <div className="card">
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body cc-education-header">
            <p>GRADUATED IN  {profile.ppYearPG}</p>
            <div className="h5">Master's Degree</div>
          </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body">
            <div className="h5">{profile.ppDegreePG}</div>
            <p className="category">{profile.ppCollegePG}</p>
            <p>{profile.ppCourseYearPG}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body cc-education-header">
            <p>GRADUATED IN  {profile.ppYearUG}</p>
            <div className="h5">Bachelor's Degree</div>
          </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body">
            <div className="h5">{profile.ppDegreeUG}</div>
            <p className="category">{profile.ppCollegeUG}</p>
            <p>{profile.ppCourseYearUG}</p>
          </div>
        </div>
      </div>
    </div>
    {/*<div className="card">
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body cc-education-header">
            <p>2007 - 2009</p>
            <div className="h5">High School</div>
          </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body">
            <div className="h5">Science and Mathematics</div>
            <p className="category">School of Secondary board</p>
            <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
          </div>
        </div>
      </div>
    </div>*/}
  </div>
</div>
{/*
<div className="section" id="reference">
  <div className="container cc-reference">
    <div className="h4 mb-4 text-center title">References</div>
    <div className="card" data-aos="zoom-in">
      <div className="carousel slide" id="cc-Indicators" data-ride="carousel">
        <ol className="carousel-indicators">
          <li className="active" data-target="#cc-Indicators" data-slide-to="0"></li>
          <li data-target="#cc-Indicators" data-slide-to="1"></li>
          <li data-target="#cc-Indicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-1.jpg" alt="Image"/>
                <div className="h5 pt-2">Aiyana</div>
                <p className="category">CEO / TalentKraft</p>
              </div>
              <div className="col-lg-10 col-md-9">
                <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-2.jpg" alt="Image"/>
                <div className="h5 pt-2">Braiden</div>
                <p className="category">CEO / Flex</p>
              </div>
              <div className="col-lg-10 col-md-9">
                <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-3.jpg" alt="Image"/>
                <div className="h5 pt-2">Karthikeyan</div>
                <p className="category">CEO / Reluapad</p>
              </div>
              <div className="col-lg-10 col-md-9">
                <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
*/}
<div className="section" id="contact">
  <div className="cc-contact-information" style={{backgroundImage: `url(${myImg_2})`}}>
    <div className="container">
      <div className="cc-contact">
        <div className="row">
          <div className="col-md-9">
            <div className="card mb-0" data-aos="zoom-in">
              <div className="h4 text-center title">Contact Me</div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card-body">
                    <form action="https://formspree.io/your@email.com" method="POST">
                      <div className="p pb-3"><strong>Feel free to contact me </strong></div>
                      <div className="row mb-3">
                        <div className="col">
                          <div className="input-group"><span className="input-group-addon"><i className="fa fa-user-circle"></i></span>
                            <input className="form-control" type="text" name="name" placeholder="Name" required="required"/>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <div className="input-group"><span className="input-group-addon"><i className="fa fa-file-text"></i></span>
                            <input className="form-control" type="text" name="Subject" placeholder="Subject" required="required"/>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <div className="input-group"><span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                            <input className="form-control" type="email" name="_replyto" placeholder="E-mail" required="required"/>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <div className="form-group">
                            <textarea className="form-control" name="message" placeholder="Your Message" required="required"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <button className="btn btn-primary" type="submit">Send</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <p className="mb-0"><strong>Phone</strong></p>
                    <p className="pb-2">{profile.ppPhone}</p>
                    <p className="mb-0"><strong>Email</strong></p>
                    <p>{profile.ppEmail}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div></div>
    </div>
    <footer className="footer">
      <div className="container text-center"><a className="cc-facebook btn btn-link" href="#"><i className="fa fa-facebook fa-2x " aria-hidden="true"></i></a><a className="cc-twitter btn btn-link " href="#"><i className="fa fa-twitter fa-2x " aria-hidden="true"></i></a><a className="cc-google-plus btn btn-link" href="#"><i className="fa fa-google-plus fa-2x" aria-hidden="true"></i></a><a className="cc-instagram btn btn-link" href="#"><i className="fa fa-instagram fa-2x " aria-hidden="true"></i></a></div>
      <div className="text-center text-muted">
        <p>&copy; Reluapad. All rights reserved. </p>
      </div>
    </footer>
    </div>
          </HashRouter>
        )
    }
}