<template>
  <div>
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth px-0">
          <div class="row w-100 mx-0">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                <div class="brand-logo text-center">
                  <!-- <h6> STEPLIGHT BANK</h6> -->
                  <img src="@/assets/images/logo.png" alt="logo" width="50%" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 class="font-weight-light">Sign in to continue.</h6>
                <form class="pt-3" id="login" @submit="login">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      id="email"
                      placeholder="Username"
                      required
                      v-model="credentials.email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      id="password"
                      placeholder="Password"
                      required
                      v-model="credentials.password"
                    />
                  </div>
                  <div class="mt-3">
                    <button
                      class="
                        btn btn-block btn-primary btn-lg
                        font-weight-medium
                        auth-form-btn
                      "
                      type="submit"
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div
                    class="
                      my-2
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input" />
                        Keep me signed in
                      </label>
                    </div>
                    <a href="#" class="auth-link text-black"
                      >Forgot password?</a
                    >
                  </div>
                  <!-- <div class="mb-2">
                                    <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                    <i class="ti-facebook mr-2"></i>Connect using facebook
                  </button>
                                </div> -->
                  <div class="text-center mt-4 font-weight-light">
                    Don't have an account?
                    <a href="register.html" class="text-primary">Create</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </div>
</template>

<script>
import api from "@/helpers/api.js";
export default {
  data() {
    return {
      credentials: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async login(e) {
      e.preventDefault();

      try {
        const response = await api.login(this.credentials);
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.non_field_errors[0]);
      }
    },
  },
};
</script>

<style>
</style>