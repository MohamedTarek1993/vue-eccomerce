<template>
  <div class="add_category">
    <div class="container">
      <form>
        <div class="input-group">
          <label for="" class="form-label"> {{ $t("product_name") }}</label>
          <input type="text" class="form-control" required v-model="categoryName" />
        </div>

        <div class="input-group">
          <label for="" class="form-label"> {{ $t("product_image") }}</label>
          <input
            type="text"
            class="form-control"
            required
            v-model="imageUrl"
          />
        </div>

        <div class="input-group">
          <label for="" class="form-label"> {{ $t("product_desc") }}</label>
          <textarea
            type="text"
            class="form-control"
            required
            v-model="description"
          >
          </textarea>
        </div>
        <div class="input-group">
          <div class="button">
            <button @click="addCategory" type="button" class="add btn first">
              {{ $t("add") }}
            </button>
            <p>{{$t("")}}</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "add category",
  data() {
    return {
      
        categoryName: "",
        description: "",
        imageUrl: "",
    };
  },
  methods: {
    addCategory() {
      let data = {
        categoryName: this.categoryName,
        imageUrl: this.imageUrl,
        description: this.description,
       
      };
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.post("/category/create", data).then(({ data }) => {
        if (data.status == true) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: data.msg,
            timer: 1500,
          });
        }
        else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: data.message,
            timer: 1500,
          });
        }
      });
    },
  },
};
</script>

<style></style>
