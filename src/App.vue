<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/layout/navbar.vue";
import Footer from "@/components/layout/footer.vue";

require("./assets/scss/style.min.css");
require("./assets/scss/style-ltr.min.css");
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");

:root {
  --color-primary: #a6702e;
  --color-secondary: #c60382;
  --color-text: #260801;
  --color-parg: #777777;
  --color-dark: #130c04;
}

@font-face {
  font-family: "light";
  src: url("assets/fonts/alfont_com_Somar-Light.otf");
}

@font-face {
  font-family: "regular";
  src: url("assets/fonts/alfont_com_Somar-Regular.otf");
}

@font-face {
  font-family: "medium";
  src: url("assets/fonts/alfont_com_Somar-Medium.otf");
}

@font-face {
  font-family: "bold";
  src: url("assets/fonts/alfont_com_Somar-Bold.otf");
}

body {
  overflow-x: hidden;
  direction: rtl;
}

ul {
  padding: 0;
  list-style: none;
}

h1 {
  display: block;
  font-size: 2em;
  margin-left: 0;
  margin-right: 0;
  font-family: "bold";
  color: var(--color-dark);
}

h2 {
  display: block;
  font-size: 1.5em;

  margin-left: 0;
  margin-right: 0;
  font-family: "bold";
  color: var(--color-dark);
}

h3 {
  display: block;
  font-size: 1.17em;
  margin-left: 0;
  margin-right: 0;
  font-family: "bold";
  color: var(--color-dark);
}

h4 {
  display: block;
  font-size: 1em;

  margin-left: 0;
  margin-right: 0;
  font-family: "bold";
  color: var(--color-dark);
}

h5 {
  display: block;
  font-size: 0.83em;

  margin-left: 0;
  margin-right: 0;
  font-family: "bold";
  color: var(--color-dark);
}

h6 {
  display: block;
  font-size: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-family: "bold";
  color: var(--color-dark);
}

p {
  margin-bottom: 0;
  font-size: 0.875em;
  font-family: "regular";
  color: var(--color-parg);
}

a {
  text-decoration: none !important;
  color: var(--color-parg);
  font-family: "regular";
}

img {
  height: auto;
  width: 100%;
}

.heade_blog {
  background-color: rgba(166, 112, 46, 0.2);
  padding: 1.2rem 0;
  padding-inline-start: 2.2rem;
  margin: 3.5rem 0 1.25rem;

  h4 {
    font-family: "regular";
    color: var(--color-text);
    font-size: 1.1rem;
    margin-bottom: 0;
  }
}

.btn:focus,
.form-check-input:focus,
.form-check :focus,
.btn-check:focus + .btn,
.btn-close:focus,
.accordion-button:focus {
  box-shadow: none;
}

.swal2-title {
  font-family: "semibold";
}

.main_title {
  font-size: 1.5rem;
  color: var(--color-text);
  font-family: "bold";
  margin-bottom: 4%;
}

.form-control:focus,
.form-select:focus {
  box-shadow: none !important;
  border-color: #ced4da !important;
}

.rates {
  padding: 2% 0;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;

  svg {
    font-size: 1rem;
    margin-inline-end: 1%;
    stroke: #d18927;
    color: transparent;
    stroke-width: 50px;

    &.active {
      color: #d18927;
    }
  }

  span {
    font-family: "regular";
    font-size: 0.8rem;
    color: var(--color-parg);
  }
}

.input-group {
  margin-bottom: 1.2rem;
  position: relative;

  .form-check {
    width: 100%;
    margin-bottom: 1rem;

    .form-check-input {
      background-color: transparent;
      border-color: var(--color-parg);
      border-radius: 2px;
      float: right;
      margin-right: 0em;
      margin-left: 10px;
    }

    input[type="checkbox"] {
      accent-color: red;
    }

    .form-check-label {
      color: var(--color-parg);
      font-size: 1rem;
      font-family: "regular";
    }
  }

  .icon_form {
    position: absolute;
    right: 2%;
    top: 56%;
    z-index: 999;

    i {
      font-size: 1rem;
      color: var(--color-parg);
    }
  }

  .form-label,
  h4 {
    color: var(--color-text);
    font-size: 1rem;
    font-family: "regular";
    display: block;
    width: 100%;
  }

  .form-control,
  .form-select {
    background: #f7f7f7;
    border-radius: 7px !important;
    border: 1px solid transparent !important;
    font-weight: 400;
    font-size: 16px;
    color: #b8b8b8;
    font-family: "light";
    width: 100%;
    padding-inline-start: 6%;

    &::placeholder {
      font-size: 16px;
      color: #b8b8b8;
    }
  }

  textarea {
    height: 180px;
  }

  .button {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 1.25rem;

    .btn {
      background-color: var(--color-primary);
      color: white;
      font-size: 1rem;
      font-family: "light";
      width: 150px;
      height: 39px;
      border-radius: 10px;
      transition: 0.25s all ease-in-out;

      &:hover {
        background-color: white;
        color: var(--color-primary);
        border-color: var(--color-primary);
      }
    }
  }
}

.text {
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    width: 37.5rem;
    line-height: 52px;
    font-size: 2.5rem;
    font-family: "bold";
    text-align: right;
  }

  p {
    width: 35.813rem;
    font-family: "light";
    font-size: clamp(0.9rem, 1.25rem, 2rem);
    line-height: 31.2px;
    text-align: right;
    padding-top: 1.5rem;
  }

  .first {
    background-color: var(--color-primary);
    color: white;
    font-size: 1.2rem;
    font-family: "light";
    width: 200px;
    height: 44px;
    border-radius: 10px;
    transition: 0.25s all ease-in-out;

    &:hover {
      background-color: white;
      color: var(--color-primary);
      border-color: var(--color-primary);
    }
  }
}

.main_header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    width: 37.5rem;
    line-height: 52px;
    font-size: 2.5rem;
    font-family: "bold";
    text-align: center;
  }

  p {
    width: 43.75rem;
    font-family: "regular";
    font-size: clamp(0.9rem, 1.25rem, 2rem);
    line-height: 31.2px;
    text-align: center;
    padding-top: 1.5rem;
  }
}
</style>
