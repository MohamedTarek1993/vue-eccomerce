import axios from "axios";

// let id = {id: this.$route.params.id};
export const catData = () => {
    return axios.get("/product/").then((response) => {
        //  console.log(response.data);
        return response;
    });
}
