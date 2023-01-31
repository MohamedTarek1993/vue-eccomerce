import axios from "axios";

// export const catData = () => {
//     let id = window.location.pathname.split("/")[2] ;
//      let product_id = {key:id}
//     return axios.get("/product/" , product_id).then((response) => {
//         //  console.log(response.data);
//         return response;
//     });
// }

export const catData = () => {
    let id = window.location.pathname.split("/")[2] ;
    // console.log(id)
    //  let product_id = {key:id}
    return axios.post("/product/update/"+id).then((response) => {
          console.log(response.data);
        return response;
    });
}

