import React from "react";
import Carousel  from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Nav1.css";
const Nav = () => {
  const responsive = {
    
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1200, min: 993 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 993, min: 768 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 768, min:600 },
      items: 2
    },
    extraSmall: {
      breakpoint: { max: 600, min:0 },
      items: 1
    }
  };
  
  return (
    <>
    <>
    <div>
          <nav className="navbar navbar-expand-lg  navbar-dark">
            <div className="container-fluid fs-4">
              <a className="" href="#">
                <img  className="main-logo" src="./images/main-logo.jpg"></img>
              </a>

              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav  ms-auto me-auto mb-2 mb-lg-0  ">
                  <li className="nav-item">
                    <a className="nav-link home" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                   
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link  "
                      href="#"
                      role="button"
                      
                    >
                      About
                    </a>
                  
                  </li>
                </ul>
              </div>

              <span className="search-div">
                <input type="text" placeholder="Search" className="main-search" />
              </span>
                <i class="bi bi-search magnifineGlass" ></i>


              <button4
           
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button4>

            </div>
          </nav>
          <div className="main-banner ">
            <div className="main-left">
              <p className="mbmh">Chase the new flavour</p>
              <p className="mbsh">The Key To Fine Dining</p>
              <p className="mbd">Sit tellus lobortis sed senectus vivamus molestie.<br /> Condimentum volutpat morbi facilisis quam scelerisque <br /> sapien. Et, penatibus aliquam amet tellus</p>
              <button className="mbb btn">Explore Menu</button>
            </div>
        <video  className="bg-video" loop playsInline muted autoPlay type="video/mp4" src="./images/pro-video.mp4"></video>
            </div>
          </div>
          <div className="second-banner ">
            <div className="second-banner-left ">
              <p className="sblmh">About Us</p>
              <p className="sbld"  >Step into our inviting space and experience a blend of contemporary design that creates an atmosphere of relaxed sophistication. Our knowledgeable and friendly staff is here to make your visit memorable, ensuring your every need is met. we always care about your customer , its our first priorty to check clients comfort</p>
              <button className="sblb btn">Explore Menu</button>
            </div>
            <div className="second-banner-right">
              <p className="sbrmh">Our History</p>
              <p className="sbrd" >At Grill-Mate we believe that food is an art form. Our culinary team meticulously selects the finest ingredients and combines them with creativity and passion to craft dishes that tantalize your taste buds. We're committed to sustainability, sourcing locally whenever possible, and minimizing our environmental footprint.</p>
              <button className="sbrb btn" >Explore Menu</button>
            </div>
            <div className="second-banner-mid"><img className="mid-img" src="./images/knives.png"></img></div>
          </div>


          <div className="third-banner" >
          <div className="tbe">
            <p className="tbmh">Make a Reservation</p>
            <div className="dtp">
                <p className=" date" selected>Date:</p>
                <p className=" time" selected>Time:</p>
                <p className=" people" selected>People:</p>
            </div>
            <div className="tbif">
                <input className="if1 input-group-text" type="date"></input>
                <input className="if2 input-group-text" type="time"></input>
              <select class=" if3 input-group-text" aria-label="Default select example">
                <option selected>1 Person</option>
                <option value="1">2 person</option>
                <option value="2">3 person</option>
                <option value="3">more+</option>
              </select>
              <div className="tbb">
              <button className="tbbs btn">Find A Table</button>
              </div>
              </div>
              </div>
          </div>
         
          
          <div className="fourth-banner">
            <div className="fourth-banner-right">
              <p className="frbmh">Chef's word</p>
              <h4 className="frbsh">What We Believe In</h4>
              <p className="frbd" ><img src="./images/vector6.svg" className="coma"></img> Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
              <h4 className="frbth">Kevin Luo</h4>
              <p className="frbfh">Chef & Founder</p>
              <img className="sign" src="./images/kevin-luo.png"></img>
            </div>
            <div className="fourth-banner-left"><img  src='./images/image.png'></img></div>
          </div>
          


      <div className="fifth-banner">
  <div className="fifth-banner-top">
      <p className="fbmh">Blogs</p>
      <p className="fbsh">Grillmate Updates</p>
    </div>
    <><Carousel 
  draggable={true}
  responsive={responsive}
  keyBoardControl={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px">
     
        <div className="card">
          <img src="./images/1.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="fbch">The Guide On Food Restaurant To Help You Get Rich</h5>
            <p className="fbd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="fbb btn">Read More</button>
          </div>
        </div>
      

      <div>
        <div className="card "  >
          <img     src="./images/pastery.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="fbch">The Sweet Feel That Relax Your Mind and pleasure yuor heart</h5>
            <p className="fbd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="fbb btn">Read More</button>
          </div>
        </div>
      </div>
      <div>
        <div className="card"   >
          <img src="./images/3.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="fbch">15 Things You Need To Know About Food Restaurant</h5>
            <p className="fbd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="fbb btn">Read More</button>
          </div>
        </div>
      </div>
      <div>
        <div className="card"  >
          <img src="./images/bar.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="fbch">Summer Cocktails And <br></br> Mocktials</h5>
            <p className="fbd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="fbb btn">Read More</button>
          </div>
        </div>
      </div>
      <div>
        <div className="card"   >
          <img src="./images/5.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="fbch">5 Secrect Of Food Restaurant You Don't Know</h5>
            <p className="fbd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="fbb btn">Read More</button>
          </div>
        </div>
      </div>
      <div>
        <div className="card"   >
          <img src="./images/6.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="fbch">How To Make Your Food Photographs Look Asthetic</h5>
            <p className="fbd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="fbb btn">Read More</button>
          </div>
        </div>
      </div>
      <div>
        <div className="card"  >
          <img src="./images/7.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="fbch">Five Easy Way's To Facilitate Food Related Restaurant</h5>
            <p className="fbd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="fbb btn">Read More</button>
          </div>
        </div>
      </div>
      <div>
        <div className="card"  >
          <img  src="./images/eggs.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="fbch">Co-Ordination & Teamwork Tips From A south Chef</h5>
            <p className="fbd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="fbb btn">Read More</button>
          </div>
        </div>
      </div>
      
    </Carousel></>
          </div>


          <div className="sixth-banner">
          <div className="sbu">
            <p className="sbmh">Newsletter</p>
            <p className="sbsh">Subscribe to our Newsletter</p>
            <p className="sbth">And Never Miss An Update</p>
            </div>
            <div className="sbl">
              <button className="sbb btn">Subscribe</button>
              <input className="email input-group-text" type="email" placeholder="Email Address"></input>
            </div>
          </div>





          <div className="footer">
            <div className="footer-right">
              <h4 className="frmh">Contact Us</h4>
              <p className="para">9 W 53rd St, New York, NY 10019, USA</p>
              <p className="para">+1 212-344-1230</p>
              <p className="para">+1 212-344-1230</p>
            </div>
            <div className="footer-left ">
              <h4 className="flmh">Working Hours</h4>
              <p className="para">Monday-Friday:</p>
              <p className="para">08:00 am -12:00 am</p>
              <p className="para">Saturday-Sunday:</p>
              <p className="para">07:00am -11:00 pm</p>
            </div>
            <div className="footer-mid ">
              <h4 className="fmmh">Gillmate</h4>
              <p className="fmd">“The best way to find yourself is to lose yourself in the service of others.”</p>
              <div className="icon">
                <i className="bi bi1 bi-facebook mx-2 "></i>
                <i className="bi bi1 bi-instagram mx-2 "></i>
                <i className="bi bi1 bi-twitter mx-2 "></i>
                </div>
            </div>
            
          </div>
      </></>




  );
};

export default Nav;
