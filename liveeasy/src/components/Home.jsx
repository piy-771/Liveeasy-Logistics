import  Button  from 'react-bootstrap/Button';
import { useEffect } from 'react';
const Home=()=>{
    useEffect(()=>{
        document.title = "Home";
     },[]);
    return(
        <>
        <div className="text-center" >

        <h1>This is home page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque voluptate, odit fugit possimus, beatae ipsa fugiat et numquam voluptas alias, quae obcaecati ex rerum? Non officiis excepturi commodi sint!</p>
            <Button variant='outline-primary' >This is HOme button</Button>
        </div>
            

        </>
    )
}

export default Home;