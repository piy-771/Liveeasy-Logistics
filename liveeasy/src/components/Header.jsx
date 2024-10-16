import Card from 'react-bootstrap/Card';

const Header=()=>{
    return(
        <>
         <Card style={{margin:"2px",backgroundColor:"pink"}}>
      <Card.Body >
      <h1 className="text-center"  >Welcome to Liveeasy Logistics</h1>
        </Card.Body>
    </Card>
           
        </>
    )
}

export default Header;