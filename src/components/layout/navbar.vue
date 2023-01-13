<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="../../assets/image/logo.png"
          class="logo"
          alt="logo"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">{{
              $t("home")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">{{$t("products")}}</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/category">{{$t("Category")}}</router-link>
          </li> 
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/service">{{$t("service")}}</router-link>
          </li> -->
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/blogs">{{$t("blog")}}</router-link>
          </li> -->
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/contact">{{$t("contact")}}</router-link>
          </li> -->
          <!-- <router-link class="btn signup" to="sign">{{$t("ask_help")}}</router-link> -->
        </ul>
      </div>
    </div>
  </nav>
  </template>
  
  <script>
  export default {
  name: "navbar",
  data() {
  return {
    languages: [
      { flag: "us", language: "en", title: this.$i18n.t("english") },
      { flag: "eg", language: "ar", title: this.$i18n.t("arabic") },
    ],
  };
  },
  methods: {
  changeLocale(locale) {
    this.$i18n.locale = locale;
    const html = document.documentElement; // returns the html tag
    html.setAttribute("lang", locale);
    localStorage.setItem("lang", locale);
    location.reload();
    // console.log(locale);
  },
  },
  created() {
  // changeLocale(locale)
  const html = document.documentElement; // returns the html tag
  html.setAttribute("lang", this.$i18n.locale);
  // console.log(i18n.locale);
  },
  };
  </script>


<style lang="scss" scoped>
//start navbar
.navbar {
    background-color: var(--color-dark);
    height: 80px;

    .navbar-brand {
      width: clamp(1rem, 4.688rem, 6.688rem);
      height: 61.06px;

      img {
        height: 100%;
        width: 100%;

      }
    }

    .navbar-collapse {
      justify-content: flex-end;
    }

    .navbar-nav {
      width: 100%;
      justify-content: center;

      .signup.btn {
        background-color: var(--color-primary);
        color: white;
        border-radius: 10px;
        width: 8.625rem;
        font-size: 1rem;
        font-family: 'regular';
        padding: 0.75rem 0.375rem;
        transition: .25s all ease-in-out;

        &:hover {
          background-color: white;
          color: var(--color-primary);
          border-color: var(--color-primary);
        }
      }

      li {
        padding-inline-end: 3rem;

        .nav-link {
          color: #fff;
          font-size: clamp(.9rem, 1.125rem, 2rem);
          line-height: 29px;
          font-weight: 400;
          font-family: 'regular';
          transition: .25s all ease-in-out;

          &:hover {
            color: var(--color-primary);
          }
        }

        .active {
          font-weight: 400;
          font-family: 'medium';
        }

      }
    }
  }

  //finish mavbar
</style>