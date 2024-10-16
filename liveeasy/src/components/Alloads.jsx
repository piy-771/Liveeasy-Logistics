import { useEffect, useState } from "react";
// import Load from "./Load";
import baseUrl from '../api/bootapi';
import axios from 'axios';
import { message } from "antd";
import edit from "../images/edit1.png";
import del from "../images/delete.jpeg";


const Allloads=()=>{
    useEffect(()=>{
       document.title = "All Loads";
    },[]);


    const[loads,setLoads] = useState([])


    //function to call server
 const getAllLoadsFromServer=()=>{
    axios.get(`${baseUrl}/load`).then(
      (response)=>{
        //console.log(response);
        console.log(response.data);
        message.success("Loads loaded");
        setLoads(response.data);
      },
      (error)=>{
        console.log(error);
        message.error("something went wrong");
      }
    )
   }
  
   useEffect(()=>{
    getAllLoadsFromServer();
   },[])

   const myDel=(id)=>{
    axios.delete(`${baseUrl}/load/${id}`).then((res)=>{
      message.success("Load deleted");
      getAllLoadsFromServer();
    }),
    error=>{
      message.error("something went wwrong")
    }

   };
  

    

    const ans = loads.map((key)=>{
        return(
            <>
            <tr>
              <td>{key.id}</td>
              <td>{key.loadingPoint}</td>
              <td>{key.unloadingPoint}</td>
              <td>{key.truckType}</td>
              <td>{key.weight}</td>
              <td>{key.shipperId}</td>
              <td>

                <a href="#" onClick={()=>{myEdit(key.id)}}>
                  <img src={edit} width={"30"} height={30}/>
                </a>
                <a href="#" onClick={()=>{myDel(key.id)}}>
                  <img src={del} width={"30px"} height={"30"} />
                </a>
              </td>
            </tr>
            </>
            
        )
         
    })

    return(
        <>
        <h1>List of Loads</h1>
        <table  width="100%" border={"1px solid blue"}>
          <tr >
            <th >Id</th>
            <th>Loading Point </th>
            <th>Unloading Point</th>
            <th>Truck Type</th>
            <th>Weight</th>
            <th>Shipperr Id</th>
          </tr>
          {ans}
        </table>
        </>
    )
}


export default Allloads;