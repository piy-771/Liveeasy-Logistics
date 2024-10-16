import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
const Menu=()=>{
    return(
        <>
            <ListGroup>
                <Link className="list-group-item list-grop-item-action" to="home">Home</Link>
                <Link className="list-group-item list-grop-item-action" to="addload">Add Load</Link>
                <Link className="list-group-item list-grop-item-action" to="viewloads">View Loads</Link>
                <Link className="list-group-item list-grop-item-action" to="about">About</Link>
                <Link className="list-group-item list-grop-item-action" to="contact">Contact</Link>
    
    </ListGroup>
        </>
    )
}

export default Menu;