import { createRouter, createWebHistory } from "vue-router";

//import website
import Home from "../view/home";
import Products from "../view/products";
import showProducts from "../view/product";

import Category from "../view/category";
import addCategory from "../view/category/addCategory";


const routes = [
    // Website routes
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          title: "Home",
        }
      },

      {
        path: "/products",
        name: "Products",
        component: Products,
        meta: {
          title: "Products",
        }
      },

      {
        path: "/products/:id",
        name: "showProducts",
        component: showProducts,
        meta: {
          title: "showProducts",
        }
      },

      {
        path: "/category",
        name: "Category",
        component: Category,
        meta: {
          title: "Category",
        }
      },
// category routes
      {
        path: "/add-category",
        name: "addCategory",
        component: addCategory,
        meta: {
          title: "addCategory",
        }
      },
    
]



const router = createRouter({
    routes,
    history: createWebHistory(),
    hashbang: false,
    mode: 'html5',
    linkActiveClass: "active",
    // linkExactActiveClass: "exact-active",
    scrollBehavior(to) {
      if (to.hash) {
        return {
          // x, y are replaced with left/top to define position, but when used with an element selector (el) will be used as offset
          el: to.hash,
          // offset has to be set as left and top at the top level
          left: 0,
          top: 64,
        };
      }
    },
  });
  // router.beforeEach((to, from, next) => {
  //   if (to.matched.some((record) => record.meta.requiresAuth)) {
  //     if (store.getters.isAuthenticated) {
  //       next();
  //       return;
  //     }
  //     next("/login");
  //   } else {
  //     next();
  //   }
  // });
  
  // router.beforeEach((to, from, next) => {
  //   if (to.matched.some((record) => record.meta.guest)) {
  //     if (store.getters.isAuthenticated) {
  //       next("/dashboard");
  //       return;
  //     }
  //     next();
  //   } else {
  //     next();
  //   }
  // });
  
  export default router;
  