<template>
  <div>
    <!--header-->
    <header id="site-header" class="fixed-top">
      <div class="container">
        <nav
          class="navbar navbar-expand-lg stroke px-0"
          style="box-shadow: none !important; webkit-box-shadow: 0px !important"
        >
          <div class="footer-logo mb-4">
            <a class="navbar-brand" href="#index.html">
              <img
                src="@/assets/logo.jpeg"
                alt="Your logo"
                title="Your logo"
                style="height: 35px"
              />
            </a>
            <span class="ml-3">STEPLIGHT BANK</span>
          </div>
          <!-- if logo is image enable this   
  <a class="navbar-brand" href="#index.html">
      <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
  </a> -->
          <button
            class="navbar-toggler collapsed bg-gradient"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span class="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item @@home__active">
                <a class="nav-link" href="index.html"
                  >Home <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item @@services__active">
                <a class="nav-link" href="services.html">Services</a>
              </li>
              <li class="nav-item @@contact__active">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
              <li class="nav-item @@contact__active">
                <a class="nav-link" href="./pages/samples/register.html"
                  >Sign Up</a
                >
              </li>
              <li class="nav-item @@contact__active">
                <a class="nav-link" href="./pages/samples/login.html">Login</a>
              </li>
              <!--/search-right-->
              <div class="search mr-3">
                <input class="search_box" type="checkbox" id="search_box" />
                <label class="fa fa-search" for="search_box"></label>
                <div class="search_form">
                  <form action="error.html" method="GET">
                    <input type="text" placeholder="Search" /><input
                      type="submit"
                      value="search"
                    />
                  </form>
                </div>
              </div>
              <!--//search-right-->
            </ul>
          </div>
          <!-- toggle switch for light and dark theme -->
          <div class="mobile-position">
            <nav class="navigation">
              <div class="theme-switch-wrapper">
                <label class="theme-switch" for="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div class="mode-container d-none d-md-block">
                    <i class="gg-sun"></i>
                    <i class="gg-moon"></i>
                  </div>
                </label>
              </div>
            </nav>
          </div>
          <!-- //toggle switch for light and dark theme -->
        </nav>
      </div>
    </header>
    <!--/header-->
    <div class="inner-banner"></div>
    <section class="w3l-breadcrumb">
      <div class="container">
        <ul class="breadcrumbs-custom-path">
          <li><a href="index.html">Home</a></li>
          <li class="active">
            <span class="fa fa-arrow-right mx-2" aria-hidden="true"></span>
            About Us
          </li>
        </ul>
      </div>
    </section>
    <!-- home page about section -->
    <section class="w3l-index3" id="about">
      <div class="midd-w3 py-5">
        <div class="container py-lg-5 py-md-3">
          <div class="row">
            <div class="col-lg-6">
              <div class="position-relative">
                <img
                  src="@/assets/images/blog2.jpg"
                  alt=""
                  class="radius-image img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-6 mt-lg-0 mt-md-5 mt-4 align-self">
              <h3 class="title-big mx-0">
                We help you to get your best Work Done.
              </h3>
              <p class="mt-md-4 mt-3">
                If you are looking for high-quality and reliable banking
                services. Our Bank card is the best option.
              </p>
              <a
                class="btn btn-style btn-primary mt-md-5 mt-4"
                href="about.html"
              >
                Learn More</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //home page about section -->
    <!-- stats -->
    <section class="w3l-stats py-5" id="stats">
      <div class="gallery-inner container py-lg-5 py-md-4">
        <div class="row stats-con">
          <div class="col-md-3 col-6 stats_info counter_grid">
            <p class="counter">1869</p>
            <h3>Finished Projects</h3>
          </div>
          <div class="col-md-3 col-6 stats_info counter_grid1">
            <p class="counter">12996</p>
            <h3>Working hours</h3>
          </div>
          <div class="col-md-3 col-6 stats_info counter_grid mt-md-0 mt-4">
            <p class="counter">1300</p>
            <h3>Happy clients</h3>
          </div>
          <div class="col-md-3 col-6 stats_info counter_grid2 mt-md-0 mt-4">
            <p class="counter">1245</p>
            <h3>Issued cards</h3>
          </div>
        </div>
      </div>
    </section>
    <!-- //stats -->
    <!-- services section -->
    <section id="services" class="w3l-servicesblock3 py-5">
      <div class="container py-lg-5 py-md-4 py-2">
        <div class="welcome-left">
          <h3 class="title-big mb-md-5 mb-4 mx-auto text-center">
            Bound to give you Prosperity & Confidence
          </h3>
          <div class="grids-area-hny main-cont-wthree-fea row pt-4">
            <div class="col-lg-6 col-md-6 grids-feature">
              <span class="fa fa-line-chart"></span>
              <div class="area-box">
                <h4>
                  <a href="#feature" class="title-head">Banking Growth</a>
                </h4>
                <p class="my-3">
                  If you are looking for high-quality and reliable banking
                  services. Our Bank card is the best option..
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 grids-feature mt-md-0 mt-4">
              <span class="fa fa-university"></span>
              <div class="area-box">
                <h4>
                  <a href="#feature" class="title-head">Major Productivity</a>
                </h4>
                <p class="my-3">
                  If you are looking for high-quality and reliable banking
                  services. Our Bank card is the best option..
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 grids-feature mt-lg-5 mt-4">
              <span class="fa fa-percent"></span>
              <div class="area-box">
                <h4><a href="#feature" class="title-head">100% Result</a></h4>
                <p class="my-3">
                  If you are looking for high-quality and reliable banking
                  services. Our Bank card is the best option..
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 grids-feature mt-lg-5 mt-4">
              <span class="fa fa-dollar"></span>
              <div class="area-box">
                <h4>
                  <a href="#feature" class="title-head">Finance investing</a>
                </h4>
                <p class="my-3">
                  If you are looking for high-quality and reliable banking
                  services. Our Bank card is the best option..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //services section -->

    <!-- testimonials -->
    <section class="w3l-clients-1" id="testimonials">
      <!-- /grids -->
      <div class="cusrtomer-layout py-5">
        <div class="container py-lg-5 py-md-4 py-2">
          <div class="heading align-self text-center">
            <h6 class="title-small">Testimonials</h6>
            <h3 class="title-big mb-4">What peoples say</h3>
          </div>
          <!-- /grids -->
          <div class="testimonial-row py-md-4">
            <div
              id="owl-demo2"
              class="owl-two owl-carousel owl-theme mb-md-3 mb-sm-5 mb-4"
            >
              <div class="item">
                <div class="testimonial-content">
                  <div class="testimonial">
                    <blockquote>
                      <q
                        >Steplight Bank is the leading financial establishment
                        providing high-quality international banking services.
                        Our success is attributed to our loyal customers. We
                        provide reliable services for you..</q
                      >
                    </blockquote>
                    <div class="testi-des">
                      <a href="#url" class="testi-img">
                        <img
                          src="@/assets/images/team1.jpg"
                          alt=""
                          class="radius-image img-fluid"
                        />
                      </a>
                      <div class="peopl align-self">
                        <h3>Dennis wilson</h3>
                        <p class="identity">Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-content">
                  <div class="testimonial">
                    <blockquote>
                      <q
                        >Steplight Bank is the leading financial establishment
                        providing high-quality international banking services.
                        Our success is attributed to our loyal customers. We
                        provide reliable services for you.</q
                      >
                    </blockquote>
                    <div class="testi-des">
                      <a href="#url" class="testi-img">
                        <img
                          src="@/assets/images/team2.jpg"
                          alt=""
                          class="radius-image img-fluid"
                        />
                      </a>
                      <div class="peopl align-self">
                        <h3>Tommy sakura</h3>
                        <p class="identity">Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-content">
                  <div class="testimonial">
                    <blockquote>
                      <q
                        >Steplight Bank is the leading financial establishment
                        providing high-quality international banking services.
                        Our success is attributed to our loyal customers. We
                        provide reliable services for you.</q
                      >
                    </blockquote>
                    <div class="testi-des">
                      <a href="#url" class="testi-img">
                        <img
                          src="@/assets/images/team3.jpg"
                          alt=""
                          class="radius-image img-fluid"
                        />
                      </a>
                      <div class="peopl align-self">
                        <h3>Roy Linderson</h3>
                        <p class="identity">Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-content">
                  <div class="testimonial">
                    <blockquote>
                      <q
                        >Steplight Bank is the leading financial establishment
                        providing high-quality international banking services.
                        Our success is attributed to our loyal customers. We
                        provide reliable services for you.</q
                      >
                    </blockquote>
                    <div class="testi-des">
                      <a href="#url" class="testi-img">
                        <img
                          src="@/assets/images/team4.jpg"
                          alt=""
                          class="radius-image img-fluid"
                        />
                      </a>
                      <div class="peopl align-self">
                        <h3>Mike Thyson</h3>
                        <p class="identity">Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /grids -->
      </div>
      <!-- //grids -->
    </section>
    <!-- //testimonials -->
    <!-- footer -->
    <section class="w3l-footer-29-main">
      <div class="footer-29 py-5">
        <div class="container py-lg-4">
          <div class="row footer-top-29">
            <div class="col-lg-4 col-md-6 footer-list-29 footer-1 pr-lg-5">
              <div class="footer-logo mb-4">
                <a class="navbar-brand" href="#index.html">
                  <img
                    src=""
                    alt="Your logo"
                    title="Your logo"
                    style="height: 35px"
                  />
                </a>
                <span class="ml-3">STEPLIGHT BANK</span>
              </div>
              <p>
                Steplight Bank is the leading financial establishment providing
                high-quality international banking services. Our success is
                attributed to our loyal customers. We provide reliable services
                for you.
              </p>
            </div>
            <div
              class="
                col-lg-2 col-md-6 col-sm-5 col-5
                footer-list-29 footer-2
                mt-md-0 mt-5
              "
            >
              <ul>
                <h6 class="footer-title-29">Quick Links</h6>
                <li><a href="about.html">About Us</a></li>
                <li><a href="#blog"> Blog posts</a></li>
                <li><a href="#pricing"> Pricing plans</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact us</a></li>
              </ul>
            </div>
            <div
              class="
                col-lg-3 col-md-6 col-sm-7 col-7
                footer-list-29 footer-3
                mt-lg-0 mt-5
              "
            >
              <h6 class="footer-title-29">Head Office</h6>
              <p class="mb-3">
                3040 Davis Rd #45 Fairbanks, Alaska (AK), 99709
              </p>
              <p class="mb-2">
                <span class="fa fa-phone"></span>
                <a href="tel:+1(21) 234 4567">xxx-xx- </a>
              </p>
              <p class="mb-2">
                <span class="fa fa-envelope-o"></span>
                <a href="mailto:steplightbank@mail.com">sb@mail.com</a>
              </p>
              <p>
                <span class="fa fa-support"></span>
                <a href="mailto:info@support.com">info@support.com</a>
              </p>
            </div>
            <div class="col-lg-3 col-md-6 footer-list-29 footer-4 mt-lg-0 mt-5">
              <h6 class="footer-title-29">Latest posts</h6>
              <div class="post1">
                <a href="#url" class="post-title"
                  >7 Banking Services That Can Save Retirees Money</a
                >
                <p class="small">September 28, 2020</p>
              </div>
              <div class="post1 mt-4">
                <a href="#url" class="post-title"
                  >Stocks Could Surge 10% between Now And 2020</a
                >
                <p class="small">September 28, 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- copyright -->
      <section class="w3l-copyright text-center">
        <div class="container">
          <p class="copy-footer-29">
            © 2020 Steplight Bank . All rights reserved.
          </p>
        </div>

        <!-- move top -->
        <button onclick="topFunction()" id="movetop" title="Go to top">
          &#10548;
        </button>

        <!-- /move top -->
      </section>
      <!-- //copyright -->
    </section>
    <!-- //footer -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import appheader from "@/components/appHeader.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    appheader,
  },
};
</script>

<style>
</style>