<template>
  <div>
    <appheader />

     <div class="inner-banner">
    </div>
    <section class="w3l-breadcrumb">
        <div class="container">
            <ul class="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li class="active"><span class="fa fa-arrow-right mx-2" aria-hidden="true"></span> Contact Us</li>
            </ul>
        </div>
    </section>
    <div class="w3l-contact-info py-5" id="contact" style="background: #f7f7f7">
        <div class="container py-lg-5 py-md-4">
            <div class="title text-center">
                <h3 class="title-big">Get in touch with us</h3>
                <p class="mt-2 mx-lg-5">You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</p>
            </div>
            <div class="row px-2 px-md-0">
                <div class="col-lg-6">
                </div>
                <div class="align-self mt-lg-0 mt-md-5 mt-4">
                    <div class="contact-infos">
                        <div class="single-contact-infos">
                            <div class="icon-box"> <span class="fa fa-map-marker"></span></div>
                            <div class="text-box">
                                <h3 class="mb-1">Address info</h3>
                                <p>3040 Davis Rd #45 Fairbanks, Alaska (AK), 99709.</p>
                            </div>
                        </div>
                        <div class="single-contact-infos">
                            <div class="icon-box"> <span class="fa fa-phone"></span></div>
                            <div class="text-box">
                                <h3 class="mb-1">Call us on</h3>
                                <p><a href="tel:+1(xx) 234 4567">+234 xx xxx xxx</a></p>
                            </div>
                        </div>
                        <div class="single-contact-infos">
                            <div class="icon-box"> <span class="fa fa-envelope"></span></div>
                            <div class="text-box">
                                <h3 class="mb-1">Email us</h3>
                                <p> <a href="mailto:steplightbank@support.com">steplightbank@support.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <!-- <div class="col-lg-6 map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001161.424489281!2d-78.01909140705047!3d42.72866436845163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1570786994395!5m2!1sen!2sin"
                        frameborder="0" allowfullscreen=""></iframe>
                </div> -->
                <div class="col-lg-6 form-inner-cont mt-lg-0 mt-sm-5 mt-4">
                    <form class="signin-form" @submit.prevent="sendContactMsg()">
                        <div class="form-input">
                            <input type="text" name="w3lName" id="w3lName" placeholder="Your name" v-model="message.name">
                        </div>
                        <div class="form-input">
                            <input type="email" name="w3lSender" id="w3lSender" placeholder="Your email address" required v-model="message.email">
                        </div>
                        <div class="form-input">
                            <textarea name="w3lMessage" id="w3lMessage" placeholder="Your message" required v-model="message.query"></textarea>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="btn btn-style btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- footer -->
    <section class="w3l-footer-29-main">
        <div class="footer-29 py-5">
            <div class="container py-lg-4">
                <div class="row footer-top-29">
                    <div class="col-lg-4 col-md-6 footer-list-29 footer-1 pr-lg-5">
                        <div class="footer-logo mb-4">
                            <a class="navbar-brand" href="#index.html">
                                <img src="@/assets/images/logo.png" alt="Your logo" title="Your logo" style="height:35px;" />
                            </a> <span class="ml-3">STEPLIGHT BANK</span>
                        </div>
                        <p>StepLight Bank is the leading financial establishment providing high-quality international banking services. Our success is attributed to our loyal customers. We provide reliable services for you.
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-5 col-5 footer-list-29 footer-2 mt-md-0 mt-5">

                        <ul>
                            <h6 class="footer-title-29">Quick Links</h6>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="#blog"> Blog posts</a></li>
                            <li><a href="#pricing"> Pricing plans</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="contact.html">Contact us</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-7 col-7 footer-list-29 footer-3 mt-lg-0 mt-5">
                        <h6 class="footer-title-29">Head Office</h6>
                        <p class="mb-3"> 3040 Davis Rd #45 Fairbanks, Alaska (AK), 99709.</p>
                        <p class="mb-2"> <span class="fa fa-phone"></span> <a href="tel:+1(21) 234 4567">xxx-xx-
                            </a></p>
                        <p class="mb-2"><span class="fa fa-envelope-o"></span> <a href="mailto:steplightbank@mail.com">sb@mail.com</a></p>
                        <p><span class="fa fa-support"></span> <a href="mailto:info@support.com">info@support.com</a>
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-list-29 footer-4 mt-lg-0 mt-5">
                        <h6 class="footer-title-29">Latest posts</h6>
                        <div class="post1">
                            <a href="#url" class="post-title">7 Banking Services That Can Save Retirees Money</a>
                            <p class="small">September 28, 2020</p>
                        </div>
                        <div class="post1 mt-4">
                            <a href="#url" class="post-title">Stocks Could Surge 10% between Now And 2020</a>
                            <p class="small">September 28, 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- copyright -->
        <section class="w3l-copyright text-center">
            <div class="container">
                <p class="copy-footer-29">© 2020 Steplight Bank . All rights reserved.</p>
            </div>

            <!-- move top -->
            <button onclick="topFunction()" id="movetop" title="Go to top">
                &#10548;
            </button>
            <!-- <script>
                // When the user scrolls down 20px from the top of the document, show the button
                window.onscroll = function() {
                    scrollFunction()
                };

                function scrollFunction() {
                    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                        document.getElementById("movetop").style.display = "block";
                    } else {
                        document.getElementById("movetop").style.display = "none";
                    }
                }

                // When the user clicks on the button, scroll to the top of the document
                function topFunction() {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }
            </script> -->
            <!-- /move top -->
        </section>
        <!-- //copyright -->
    </section>
    <!-- //footer -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/helpers/api";
import HelloWorld from "@/components/HelloWorld.vue";
import appheader from "@/components/appHeader.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    appheader,
  },

  data() {
      return {
          message: {
              name: "",
              email: "",
              query: ""
          }
      }
  },


  methods: {
      async sendContactMsg() {
          try {
              const response = await api.sendContactMessage(this.message)
                this.$message({
                    showClose: true,
                    message: 'Congrats, message sent.',
                    type: 'success'
                 });      
          } catch (error) {
          }
      }
  }
};
</script>

<style>
</style>