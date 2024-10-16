import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
//import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import axios from 'axios';
import baseUrl from "../api/bootapi";
import { message } from 'antd';

const Addload =()=>{
  useEffect(()=>{
    document.title = "Add Load";
 },[]);

 const[load,setLoad]=useState({
  id: '',
  loadingPoint: '',
  unloadingPoint: '',
  truckType: '',
  weight: '',
  shipperId: ''
 });
 const handleInput=(e)=>{
  let name = e.target.name;
  let value = e.target.value;
  console.log(name);
  console.log(value);
  setLoad(values=>({...values,[name]:value}));
  console.log(load);
 }


//         const[selectedCity, setSelectedCity] = useState("");
//         const[selectanotherCity,setanotherCity] = useState("");
//         const[selectTruckType,setTruckType] = useState("");

//         const handleTruck=(event)=>{
//             setTruckType(event.target.value);
//             setLoad((preLoad)=>{
//               const newLoad={...preLoad,truckType:event.target.value};
//               console.log(newLoad);
//               return newLoad;
//         });
//         };

//         const handleShipperId=(e)=>{
//           setLoad((preLoad)=>{
//             const newLoad={...preLoad,shipperId:e.target.value};
//             console.log(newLoad);
//             return newLoad;
//       });
//         }

//         const handleWeight=(e)=>{
//           setLoad((preLoad)=>{
//             const newLoad={...preLoad,weight:e.target.value};
//             console.log(newLoad);
//             return newLoad;
//       });
//         }
    

//     const handleCityChange = (event) => {
      
//               setSelectedCity(event.target.value);
//               setLoad((preLoad)=>{
//                 const newLoad={...preLoad,loadingPoint:event.target.value};
//                 console.log(newLoad);
//                 return newLoad;
//           });
//               //console.log(event.target.value);
              
//     };

//     const handleId = (event) => {
      
     
//       setLoad((preLoad)=>{
//         const newLoad={...preLoad,id:event.target.value};
//         console.log(newLoad);
//         return newLoad;
//   });

// };
//     const handleCityChange1 = (event) => {
      
//         setanotherCity(event.target.value);
//         setLoad((preLoad)=>{
//           const newLoad={...preLoad,unloadingPoint:event.target.value};
//           console.log(newLoad);
//           return newLoad;
//     });

// };


//form handler function
// const handleForm=(e)=>{
//   e.prevetDefault();
//   postDataToServer(load)
//   alert("submit working")
//   console.log(load);
  
// }

//creating function to post data on server
// const postDataToServer=(data)=>{
//   axios.post(`${baseUrl}/load`,data).then(
//     (response)=>{
//       console.log(response);
//       message.success("Load add successfully");
//     },
//     (error)=>{
//       console.log(error);
//       message.error("Something went wrong");
//     }
//   )
// }
const handleSubmit =()=>{
 
  axios.post(`${baseUrl}/load`,load).then((res)=>{
    console.log(res);
    message.success("Load Successfully  add !!")
  },
  (error)=>{
          console.log(error);
          message.error("Something went wrong");
        })
}
    return(
        <>
       
  
            <Form >
                <Form.Group className='mb-3' controlId='exampleForm.ControInput1'>
                    <Form.Label>Enter id </Form.Label>
                    <Form.Control  type='text' onChange={handleInput}  name="id" value={load.id}/>

                </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Enter Loading Point</Form.Label>
        <Form.Control as="select"  onChange={handleInput}  name="loadingPoint" value={load.loadingPoint}>
        <option value="">-- Select a city --</option>
          <option value="Amaravati">Amaravati</option>
          <option value="Itanagar">Itanagar</option>
          <option value="Dispur">Dispur</option>
          <option value="Patna">Patna</option>
          <option value="Raipur">Raipur</option>
          <option value="Panaji">Panaji</option>
          <option value="Gandhinagar">Gandhinagar</option>
          <option value="Chandinagar">Chandinagar</option>
          <option value="Shimla">Shimla</option>
          <option value="Ranchi">Ranchi</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Thiruvananthapuram">Thiruvananthapuram</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Imphal">Imphal</option>
          <option value="Shillong">Shillong</option>
          <option value="Aizawl">Aizawl</option>
          <option value="Kohima">Kohima</option>
          <option value="Bhubaneswar">Bhubaneswar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Gangtok">Gangtok</option>
          <option value="Chennai">Shillong</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Agartala">Agartala</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Dehradun">Dehradun</option>
          <option value="Kolkata">Kolkata</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Enter Unloading Point</Form.Label>
        <Form.Control as="select" onChange={handleInput} name="unloadingPoint" value={load.unloadingPoint} >
        <option value="">-- Select a city --</option>
          <option value="Amaravati">Amaravati</option>
          <option value="Itanagar">Itanagar</option>
          <option value="Dispur">Dispur</option>
          <option value="Patna">Patna</option>
          <option value="Raipur">Raipur</option>
          <option value="Panaji">Panaji</option>
          <option value="Gandhinagar">Gandhinagar</option>
          <option value="Chandinagar">Chandinagar</option>
          <option value="Shimla">Shimla</option>
          <option value="Ranchi">Ranchi</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Thiruvananthapuram">Thiruvananthapuram</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Imphal">Imphal</option>
          <option value="Shillong">Shillong</option>
          <option value="Aizawl">Aizawl</option>
          <option value="Kohima">Kohima</option>
          <option value="Bhubaneswar">Bhubaneswar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Gangtok">Gangtok</option>
          <option value="Chennai">Shillong</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Agartala">Agartala</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Dehradun">Dehradun</option>
          <option value="Kolkata">Kolkata</option>

        </Form.Control>
      </Form.Group>
      <Form.Group  className="mb-3" controlId="exampleForm.ControlInput4" >
            <Form.Label>Enter Truck Type</Form.Label>
            <Form.Control as="select"  onChange = {handleInput} name="truckType" value={load.truckType} >
                <option value="">--Select a Truck Type--</option>
                <option value="Tanker">Tanker</option>
                <option value="Flatbed Trucks">Flatbed Trucks</option>
                <option value="Dump Truck">Dump Truck</option>
                <option value="Crane">Crane</option>
                

            </Form.Control>
      </Form.Group>
      <Form.Group  className="mb-3" controlId="exampleForm.ControlInput5" >
            <Form.Label>Enter Weight</Form.Label>
            <Form.Control  type="number" onChange ={handleInput} name="weight" value={load.weight} />
      </Form.Group>
      <Form.Group  className="mb-3" controlId="exampleForm.ControlInput6" >
            <Form.Label>Enter Shipper Id</Form.Label>
            <Form.Control type='text' onChange={handleInput} name="shipperId" value={load.shipperId} />
      </Form.Group>
      <div className='text-center' >
    <Button onClick={handleSubmit} variant='secondary m-3'>Add Load</Button>
    <Button variant='warning' type='reset' onClick={()=> setLoad({})}>Clear</Button>
    </div>
     
    </Form>
    
        </>
    )
}
export default Addload;