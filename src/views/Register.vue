<template>
  <div>
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth px-0">
          <div class="row w-100 mx-0">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                <div class="brand-logo text-center">
                  <!-- <img src="../../assets/images/logo.png" alt="logo" width="50%"> -->
                </div>
                <h4>New here?</h4>
                <h6 class="font-weight-light">
                  Signing up is easy. It only takes a few steps
                </h6>
                <form
                  class="pt-3"
                  id="register"
                  enctype="multipart/form-data"
                  @submit.prevent="register"
                >
                  <!-- <v-file-input truncate-length="15"></v-file-input> -->
                  <div class="form-group">
                    <input
                      type="email "
                      class="form-control form-control-lg"
                      id="email"
                      placeholder="Email "
                      required
                      v-model="user.email"
                    />
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          id="first_name"
                          placeholder="First Name "
                          required
                          v-model="user.first_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          id="middle_name"
                          placeholder="Middle Name "
                          required
                          v-model="user.middle_name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text "
                          class="form-control form-control-lg"
                          id="surname"
                          placeholder="Surname "
                          required
                          v-model="user.surname"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="number "
                          class="form-control form-control-lg"
                          id="phone"
                          placeholder="Phone "
                          required
                          v-model="user.phone"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <select
                          class="form-control form-control-lg"
                          id="sex"
                          required
                          v-model="user.sex"
                        >
                          <option>Gender</option>
                          <option>M</option>
                          <option>F</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="file"
                          accept="image/*"
                          name="uploadFile"
                          class="form-control form-control-lg"
                          id="passport"
                          placeholder="Passport "
                          required
                          ref="file"
                          v-on:change="handleFileUpload()"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="password "
                          class="form-control form-control-lg"
                          id="password"
                          placeholder="Password "
                          required
                          v-model="user.password"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="password "
                          class="form-control form-control-lg"
                          id="password2"
                          placeholder="Confirm Password "
                          required
                          v-model="user.password2"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mb-4">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input" />
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div class="mt-3">
                    <button
                      class="
                        btn btn-block btn-primary btn-lg
                        font-weight-medium
                        auth-form-btn
                      "
                      type="submit "
                    >
                      SIGN UP
                    </button>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Already have an account?
                    <a href="login.html " class="text-primary">Login</a>
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
      user: {
        email: "",
        first_name: "",
        middle_name: "",
        surname: "",
        phone: "",
        sex: "",
        passport: null,
        password: "",
        password2: "",
      },
    };
  },
  methods: {
    async register() {
      let formData = new FormData();
      formData.append("email", this.user.email);
      formData.append("first_name", this.user.first_name);
      formData.append("middle_name", this.user.middle_name);
      formData.append("surname", this.user.surname);
      formData.append("phone", this.user.phone);
      formData.append("sex", this.user.sex);
      formData.append("passport", this.user.passport);
      formData.append("password", this.user.password);
      formData.append("password2", this.user.password2);

      try {
        const response = await api.register(formData);
        console.log(response);
        console.log(formData);
      } catch (error) {
        console.log(error.response);
      }
    },

    handleFileUpload() {
      this.user.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style>
</style>