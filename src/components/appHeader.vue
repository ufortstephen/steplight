<template>
  <div>
    <header id="site-header" class="fixed-top">
      <div class="container">
        <nav
          class="navbar navbar-expand-lg stroke px-0"
          style="box-shadow: none !important; webkit-box-shadow: 0px !important"
        >
          <a
            class="navbar-brand"
            href="javascript:void(0)"
            @click="routeLinksNavigate('')"
          >
            <img
              src="@/assets/logo.jpeg"
              alt="Your logo"
              title="Your logo"
              style="height: 35px"
            />
            STEPLIGHT BANK
          </a>
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
              <li class="nav-item active" @click="routeLinksNavigate('')">
                <a class="nav-link" href="javascript:void(0)"
                  >Home <span class="sr-only">(current)</span></a
                >
              </li>
              <li
                class="nav-item @@about__active"
                @click="routeLinksNavigate('about')"
              >
                <a class="nav-link" href="javascript:void(0)">About</a>
              </li>
              <li
                class="nav-item @@services__active"
                @click="routeLinksNavigate('services')"
              >
                <a class="nav-link" href="javascript:void(0)">Services</a>
              </li>
              <li
                class="nav-item @@contact__active"
                @click="routeLinksNavigate('contact')"
              >
                <a class="nav-link" href="javascript:void(0)">Contact</a>
              </li>
              <li
                class="nav-item @@contact__active"
                @click="routeLinksNavigate('register')"
              >
                <a class="nav-link" href="javascript:void(0)">Sign Up</a>
              </li>
              <li
                class="nav-item @@contact__active"
                @click="routeLinksNavigate('login')"
              >
                <a class="nav-link" href="javascript:void(0)">Login</a>
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    routeLinksNavigate(routeName) {
      this.$router.push(`/${routeName}`);
    },
  },
};
</script>

<style>
</style>