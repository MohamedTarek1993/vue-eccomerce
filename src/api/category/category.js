import axios from "axios";

export const categoryData = () => {
    return axios.get("/category/").then((response) => {
        //  console.log(response.data);
        return response;
    });
}
