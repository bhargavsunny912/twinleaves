import axios from "axios";

const fetchDataFromApi=async(page=1)=>{
    try{
        const res=await axios.get(
        "https://catalog-management-system-dev-ak3ogf6zeauc.a.run.app/cms/products",
        {
            headers: { "x-internal-call": "true" },
            params:{page}
        }
    );

    return res.data;
    }
    catch(err){
        console.error("Error fetching data from API:", err);
    }
}

export default fetchDataFromApi;