/* eslint-disable react-hooks/set-state-in-effect */
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from "../Data/DummyData.js";
import Error from "./Error.jsx";
import fetchDataFromApi from '../Api/fetchDataFromApi.js';

const ProductTable = () => {

  const [rows, setRows] = useState([]);
  const [rowCount, setRowCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('');
  const [sort,setSort]=useState("");
  const [error,setError]=useState(false);
  const [debounce,setdebounce]=useState("");
  const [pagination,setPagination]=useState({
    page:0,
    pageSize:5
  });

  const navigate=useNavigate();

  //fetch data

  const fetchData=async()=>{
    try{
      setLoading(true);

      let fetchedProducts;
      try{
        const data=await fetchDataFromApi(pagination.page+1);
        fetchedProducts=data?.data && data.data.length>0 ?
        data.data : [...products];
      }
      catch{
        fetchedProducts=[...products];
      }

      let Allproducts=[...fetchedProducts];

      // apply filters

      if(category){
        Allproducts=Allproducts.filter((pro)=>pro.category===category)
      }

      //apply sort filter

      if(sort==="asc"){
        Allproducts.sort((a,b)=>a.price-b.price);
      }
      else if(sort==="desc"){
        Allproducts.sort((a,b)=>b.price-a.price);
      }

      //apply search filter

      if(debounce){
        Allproducts=Allproducts.filter((pro)=>
          pro?.name?.toLowerCase().includes(debounce.toLowerCase())
        )
      }


      //Paginate

      const start=pagination.page * pagination.pageSize;
      const end=start+pagination.pageSize;
      const paginationData=Allproducts.slice(start,end);

      setRows(paginationData);
      setRowCount(Allproducts.length);

    }
    catch(err){
      console.log("error in getting the data",err);
      setError(true);
    }
    finally{
      setLoading(false);
    }
  }

  
  // debounce search for 500ms

  useEffect(()=>{
    let timer;

    timer=setTimeout(() => {
      setdebounce(searchText);
    },500);

    return ()=>clearTimeout(timer);
  },[searchText]);

  // reset pagination on every change

  useEffect(()=>{
    setPagination((pre)=>({...pre,page:0}));
  },[debounce,category,sort]);


  // get data from api

  useEffect(()=>{
    fetchData()
  },[category,sort,debounce,pagination]);

  //specify the columns with the required feilds and specifications for the datagrid header
  const columns=[
    {
      field:"image",
      headerName:"Image",
      flex:1,
      sortable:false,
      disableColumnMenu:true,
      renderCell:(params)=>{
        return <img src={params.value} alt="Product" className='w-16 h-16 rounded' />
      }
    },
    {
      field:"name",
      headerName:"Product Name",
      flex:1,
      sortable:false,
      disableColumnMenu:true,
    },
    {
      field:"category",
      headerName:"Category",
      flex:1,
      sortable:false,
      disableColumnMenu:true, 
    },
    {
      field:"price",
      headerName:"Price",
      flex:1,
      sortable:false,
      disableColumnMenu:true, 
    },
    {
      field:"description",
      headerName:"Description",
      flex:2,
      sortable:false,
      disableColumnMenu:true, 
    }
  ];

  if(error) return <Error />


  return (
    <div className='flex flex-col h-screen gap-4 p-4'>
    {/* search , filter by category and sort by price  */}

    <div className='flex flex-col sm:flex-row sm:gap-20 gap-5 w-full items-center sm:items-center justify-center px-8'>
      
      {/* input search tag */}
      <input type="text" 
      className='border rounded w-full sm:w-1/5 p-2' 
      placeholder='Search ....'
      onChange={(e)=>setSearchText(e.target.value)}
      />

      {/* filter by category */}

      <select 
      onChange={(e)=>setCategory(e.target.value)}
      className="border p-2 rounded w-full sm:w-1/5">

        <option value="">All Products</option>
        {["Fruits","Vegetables"].map((pro,index)=>{
          return <option value={pro} key={index}>{pro}</option>
        })}

      </select>

      {/* sort by price */}

      <select
      onChange={(e)=>setSort(e.target.value)}
      className='border p-2 rounded w-full sm:w-1/5'
      >

        <option value="">Sort By Price</option>
        <option value="asc">Low-to-high</option>
        <option value="desc">High-to-low</option>

      </select>

    </div>

    {/*  Data grid section */}
    <div className='flex-1 w-[90%] mx-auto'> 
      <DataGrid
        rows={rows}   //no of rows
        columns={columns} //columns section head
        paginationMode="server"  //pagination from server
        rowCount={rowCount}   
        pageSizeOptions={[5]}
        rowHeight={80}
        paginationModel={pagination}
        onPaginationModelChange={(page)=>setPagination(page)}
        loading={loading}
        disableColumnMenu
        disableColumnSelector
        disableDensitySelector

        autoHeight={false}
        sx={{height:"80%"}}
        onRowClick={(params)=>{
          navigate(`/product/${params.id}`,{state:params.row});
        }}
      />
    </div>
    </div>
  )
}       
export default ProductTable;