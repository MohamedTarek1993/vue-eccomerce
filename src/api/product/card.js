import axios from "axios";

export const catData = () => {
    return axios.get("/product/").then((response) => {
        //  console.log(response.data);
        return response;
    });
}
