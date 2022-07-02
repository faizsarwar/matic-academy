<template>
  <div style="min-height:100vh; display:flex; flex-direction:column; 
            justify-content:space-between;" class="p-0 m-0">


<nav class="navbar navbar-expand-lg navbar-light mt-0 mb-0" id="navbar_top" style="background-color:white; color:#0b0970">
            <a href="/">
            <img
              src="./assets/img/icon2.png"
              alt=""
              srcset=""
              style="height: 90px"
              class="m-3 header-img mr-5"
          /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse ml-5 " id="navbarNavDropdown" style="color:#0b0970">
    <ul class="navbar-nav">
      <li class="nav-item ml-2 mr-3 dropdown" >
        <a class="" style="color:#0b0970;" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Subjects
        </a>
        <div class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/coding"><strong>Coding </strong>  <p> 7 CS Languages, Robotics , AI, Google Interview, And More</p></a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/investing"><strong>Investing And Entreprenuership </strong><p>Finance, Entreprenuership, Crypto, and more</p> </a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/math"><strong>Math</strong> <p>Earlt Elementary Math Through AP Calculus</p> </a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/science"><strong>Science</strong> <p>Physics , Chemistry , Biology and More</p> </a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/communication"><strong>Communications</strong> <p>Reading , Writing , Public Speaking, Video Editing and More</p> </a>
        </div>
      </li>
      <li class="nav-item mr-3 ml-3  dropdown" >
        <a class=" " style="color:#0b0970; " href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Class Formats
        </a>
        <div class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/private-1-on-1"><strong>Private 1:1</strong>  <p> Personilized Learnings With Hand macthed Instructors  </p></a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/self-study"><strong>On Demand</strong><p>Unlimited Access To All our self-guided Courses</p>  </a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/bootcamps"><strong>Bootcamp</strong> <p>small groups short courses with live instructions</p> </a>
        </div>
      </li>
      <li class="nav-item mr-3 ml-3  dropdown" >
        <a class=" " style="color:#0b0970; " href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          For Schools
        </a>
        <div class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/Learnosteam"><strong>Learnosteam</strong>  </a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/makerspace"><strong>Makerspace</strong>  </a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/steam-camp"><strong>STEAM CAMPS</strong> </a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/diy-kits"><strong>Diy Kits</strong>  </a>
          <a class="dropdown-item  mb-4 ml-2 mr-2" href="/coding-for-kids"><strong>CODING FOR KIDS</strong> </a>
        </div>
      </li>
      <li class="nav-item mr-3 ml-3 mr-2 ">
        <a class="" style="color:#0b0970" href="/how-it-works">How It Works</a>
      </li>
      <li class="nav-item mr-3 ml-3 mr-2 ">
        <a class="" style="color:#0b0970" href="/instructors">Instructors</a>
      </li>
      <li class="nav-item ml-3 mr-3 dropdown">
        <a class=" ml-4" style="color:#0b0970" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item mt-4 mb-4 ml-2 mr-2" href="/review"> <strong>Reviews</strong> </a>
          <a class="dropdown-item mb-4 ml-2 mr-2" href="/projects"><strong>Student Projects</strong> </a>
          <a class="dropdown-item mb-4 ml-2 mr-2" href="/gift"><strong>Gift Cards</strong> </a>
          <!-- <a class="dropdown-item mb-4 ml-2 mr-2" href="#"><strong> Homeschool</strong></a> -->
          <a class="dropdown-item mb-4 ml-2 mr-2" href="/employeers"><strong>Careers at Matic</strong> </a>
          <a class="dropdown-item mb-4 ml-2 mr-2" href="/blogs"><strong>Blogs</strong> </a>          
          <a class="dropdown-item mb-4 ml-2 mr-2" href="/help"><strong> Help Center & FAQ</strong></a>          
          <a class="dropdown-item mb-4 ml-2 mr-2" href="/contact"><strong> Contact Us</strong></a>          
        </div>
      </li>
    </ul>
    <!-- icon -->
    <div class="ml-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
    </div>

  <!--button  -->
    <div class="ml-auto mr-0">
      <a href="#" style="color:#0b0970"> Login</a>
      <button type="" class="btn btn btn-lg ml-4" style="height:65px; color: white;  background-color:#4CBD94; width : 190px; border-radius: 12px;font-size:16px">Try A Free class</button>
    </div>

  </div>
</nav>


    <section style="overflow-x:hidden" class="body-tag">
      <router-view />
    </section>

    <!-- Footer -->
    <footer class="font-small footer " style="background-color:#231F20">
      <!-- Footer Links -->
      <div class=" text-center text-md-left pt-5 pb-5" style="color: white">
        <!-- Grid row -->
        <div class="row m-4">
          <!-- Grid column -->
          <div class="col-md-2 ">
            <!-- Links -->
            <h5
              class="font-weight-bold text-uppercase mt-3 mb-4 ml-4"
              style="color: white"
            >
              Courses
            </h5>

            <ul class="">
              <li>
                <a href="/" >All Courses</a>
              </li>
              <li>
                <a href="/private-1-on-1" >Private 1:1</a>
              </li>
              <li>
                <a href="/self-study" >On Demand</a>
              </li>
              <li>
                <a href="/bootcamps" >Bootcamps</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2 ">
            <!-- Links -->
            <h5 class="mt-3 mb-4 ml-4">Subjects</h5>

            <ul class="">
              <li>
                <a href="/coding" >Coding</a>
              </li>
              <li>
                <a href="/investing" >Investing & Enterprenuership</a>
              </li>
              <li>
                <a href="/math" >Math</a>
              </li>
              <li>
                <a href="/science" >Science</a>
              </li>
              <li>
                <a href="/communication" >Communications</a>
              </li>
            </ul>
          </div>

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2 ">
            <!-- Links -->
            <h5 class="mt-3 mb-4 ml-4">Resources</h5>

            <ul class="ml-0">
              <li>
                <a href="/projects" >Student Projects </a>
              </li>
              <li>
                <a href="/gift" >Gift Cards</a>
              </li>
              <li>
                <a href="/blogs" >Blogs</a>
              </li>
              <li>
                <a href="#" >Homeschool</a>
              </li>
              <li>
                <a href="/employeers" >matic For Employeers</a>
              </li>
            </ul>
          </div>

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2 ">
            <!-- Links -->
            <h5 class="mt-3 mb-4 ml-4">About matic</h5>

            <ul class="ml-0">
              <li>
                <a href="/how-it-works" >How It Works </a>
              </li>
              <li>
                <a href="/instructors" >Instructors</a>
              </li>
              <li>
                <a href="/review" >Reviews</a>
              </li>
              <li>
                <a href="/about-us" >Founders Story </a>
              </li>
              <li>
                <a href="/" >Careers</a>
              </li>
              <li>
                <a href="/" >Instructor Jobs</a>
              </li>
              <li>
                <a href="/terms" >Our Policies</a>
              </li>
              <li>
                <a href="/contact" >Contact Us</a>
              </li>
            </ul>
          </div>

                    <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-4 ">
            <!-- Links -->
            <h5 class="mt-3 mb-4 ml-4">Subscribe to our newsletter</h5>

            <h5 class="mt-3 mb-4 ml-4 pr-4">Learn about our latest events, resources,
            programs, and more!</h5>

            <form action="">        
              <div class="row ml-4">
                  <div class="form-group col-md-6">
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                  </div>
                <button type="submit" class="btn btn-danger ml-4" style="height:40px">Submit</button>
                            <sub>By subscribing you agree with our Terms of Use & Privacy Policy.</sub>
              </div>
            </form>

            <p class="mt-4 mb-4 ml-4 pr-4" style="color:white"> 116 Bullevard, Prenceton <br>
                hello@learnwithmatic.com <br>
                 +1 (609) 375-0046</p>

          </div>

          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
      <!-- Footer Links -->

      <!-- <hr
        style="background-color: rgb(252, 222, 222); width: 90%"
        class="ml-5"
      /> -->
      <!-- Copyright -->
      <div class="footer-copyright pl-5 pt-3" style="color: white; background-color: black">
        Copyright © 2022 matic Learning. All rights reserved.
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
// import axios from 'axios'
export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: []
      }
    }
  },

}


document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
});

</script>






<style lang="scss">
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .navbar{
    display:none;
  }  
}
@media only screen and (max-width: 550px) {
  .product-img{
    height:250px; 
    width: 200px;
  }
}
/* max 1250 or less */
@media only screen and (max-width: 1250px) {
  // .card-text{
  //   display:none;
  // }
}
@media only screen and (max-width: 770px) {
  .product-img{
    height:300px; 
    width: 250px;
  }
}
/* max 800px or less */
@media only screen and (max-width: 800px) {
  .no-overflow{
    display:none;
  }
  .cards-heading{
    display:none;
  }
}
// header-img
/* max 1150px or less */
@media only screen and (max-width: 1250px) {
  .header-img{
    display:none;
  }
  .product-img{
    height:400px; 
    width: 350px;
  }
}
@media only screen and (min-width:1250px){
  .product-img{
    height:600px; 
    width: 550px;
  }
}
////
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 999px) {

.card-img-top{
  height: 260px !important;
}
}
.body-tag{
  overflow-x:hidden
}
.product-img{
  overflow-y:hidden;
  overflow-x:hidden
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
.heading {
    font-weight: 300;
    display: inline-block;
    padding-bottom: 5px;
    position: relative;
}
.heading:before{
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    bottom: 0;
    left: 25%;
    border-bottom: 3px solid #0b0970;
}
.center_elements{
    display: flex; justify-content: center; text-align: center;
}
.swal2-icon{
  overflow-y: hidden;
}
.navigation {
    position: fixed;
    width: 100%;
    overflow: hidden;
    left: 0;
    top: 0;
    bottom: 0;
    border-top: 0;
    transition: 0.3s;
}
.swal2-icon .swal2-success .swal2-icon-show{
  overflow-y: hidden;
  overflow-x:hidden
}
li a{
    color: white;
    text-decoration:none;
}
.no-underline{
      text-decoration:none !important;
}
.categories li a {
    color: #466D1d;
    text-decoration:none;
    font-weight: bolder;
}
.card-image{
    height: 300px;
}
.cards{
    height: 280px;
}
      .card{
        overflow-y:hidden;
      }
      .cards{
        overflow-y:hidden;
      }
      .card-body{
        overflow-y:hidden;
      }
      .no-overflow{
        overflow-y:hidden;
      }
.card{
    border-radius: 4px;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    cursor: pointer;
    background-color: white;
}

.navbar strong {
  color:#0b0970
}

.navbar p {
  color:#A2469A
}


.col-md-4 {
    overflow-y: hidden;
}
.card:hover{
    transform: scale(1.05);
 box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
   text-decoration: none;
}
@media(max-width: 990px){
    .card{
      margin: 20px;
    }
  } 
#app {
  font-family: Minion;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h2,h3,h4,h5,h6{
    font-family: Bellomatch;
}

h1{
  font-family: Minion;
}

a {
  text-decoration: none !important;
}
a:hover {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.a-exact-active {
      color: #42b983;
    }
  }
}

// adding responsive tags
      @media (max-width: 992px) {
        .section-title {
          font-size: 3rem;
        }
      }
      @media (max-width: 561px) {
        .section-title {
          font-size: 2rem;
        }
        .card-img-top{
          height: 200px
        }
      }
      @media (max-width: 270px) {
        .flexDirectionColAt270 {
          flex-direction: column;
        }
        .card-img-top{
          height: 150px
        }
      }
      .icon {
        font-size: 30px;
        margin-right: 20px;
      }
      @media (max-width: 1326px) {
        html {
          font-size: 100%;
        }
      }
      @media (max-width: 1200px) {
        html {
          font-size: 95%;
        }
      }
      @media (max-width: 1100px) {
        html {
          font-size: 90%;
        }
      }
      #footer {
            position: fixed;
            padding: 10px 10px 0px 10px;
            bottom: 0;
            width: 100%;
            /* Height of the footer*/ 
            /* height: 40px;
            background: grey; */
        }
      @media (max-width: 1000px) {
        html {
          font-size: 85%;
        }
        .card-img-top{
          height: 300px
        }
      }
      @media (max-width: 900px) {
        html {
          font-size: 80%;
        }
        .card-img-top{
          height: 300px
        }
      }
      @media (max-width: 770px) {
        html {
          font-size: 75%;
        }
        .card-img-top{
          height: 270px
        }
      }
      @media (max-width: 680px) {
        html {
          font-size: 70%;
        }
        .card-img-top{
          height: 200px
        }
      }
      @media (max-width: 600px) {
        html {
          font-size: 65%;
        }
        .card-img-top{
          height: 200px
        }
        .protocol-img{
          height:50%
        }
      }

      h1 b,h2 b,h3 b,h4 b{
        color:#261159;
      }

      p,strong,b {
        color: #261159;
      }
      
      @media (max-width: 530px) {
        html {
          font-size: 60%;
        }
        .card-img-top{
          height: 180px
        }
        .protocol-img{
          height:50%
        }
      }
      @media (max-width: 350px) {
        html {
          font-size: 55%;
        }
        .card-img-top{
          height: 150px
        }
        .protocol-img{
          height:50%
        }
      }
      @media (max-width: 250px) {
        html {
          font-size: 50%;
        }
        .card-img-top{
          height: 150px
        }
        
        .protocol-img{
          height:50%
        }
      }
      @media (max-width: 230px) {
        html {
          font-size: 45%;
        }
        .protocol-img{
          height:50%
        }
      }
      @media (max-width: 210px) {
        html {
          font-size: 40%;
        }
        .card-img-top{
          height: 150px
        }
        .protocol-img{
          height:50%
        }
      }

.set-color{
  color:#0b0970
}

.text{
  text-align: justify;
  text-justify: inter-word;
  }

    @media (min-width: 768px) { 
    .dropdown:hover .dropdown-menu {
        display: block;
        margin-top: 0; 
    }
    }
    @media (max-width: 767px) { 
    .dropdown:hover .dropdown-menu{
        display: none;
        margin-top: auto; 
    }
    }


.navbar li {
   font-family: "Times New Roman", Times, serif;
    position: relative;
    text-decoration: none;
    font-weight: 100;
    color: #0b0970;
    transition: all .25s ease;

    &::before {
        content: ""; 
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #0b0970;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s; 
        transition: all 0.3s ease-in-out 0s; 
    }   

    &:hover {
        color: #0b0970;

        &::before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }   
    }   
}

      @media (max-width: 190px) {
        html {
          font-size: 35%;
        }
        .card-img-top{
          height: 100px
        }
        .protocol-img{
          height:50%
        }
      }
      
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  h1,h2,h3,h4,h5 {
    font-size: 15px;
  }
  //   .card-img-top, .card-body, .seller-Card{
  //   height: 200px
  // }
}
</style>