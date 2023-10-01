import axios from "axios";

const BASE_URL = "https://findgreatminds.co.in";

// const fetchFromApi = async ()=>{
//     try{
//         const { res } = await axios.get(`${BASE_URL}`);
//         return res;
//     }catch(err){
//         // console.log(err)
//         return err;
//     }
// }

const fetchFromApi = async() => {
    const {data} = await axios.get(`${BASE_URL}/monument`);
    return data;
};

export default fetchFromApi;

