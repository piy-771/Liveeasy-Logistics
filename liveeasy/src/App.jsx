//import Button from 'react-bootstrap/Button';
//import { message } from "antd";
import { Col, Container, Row } from 'react-bootstrap';
import Addload from './components/Addload';
import Allloads from './components/Alloads';
import Home from './components/Home';
//import Load from './components/Load';
import Header from './components/Header';
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
const App=()=>{
  
  return(
    
    <>
    <BrowserRouter>
    <Container  >
      <Header/>
      <Row>
        <Col md={4}>
        
          <Menu/>
        
        
        
      
        </Col>
        <Col md={8}>
        <Routes>
        
           <Route index element={<Home/>}/>
           <Route path="home" element={<Home/>}/>
           <Route path="addload" element={<Addload/>}/>
           <Route path="viewloads" element={<Allloads/>}/>
           <Route path="about" element={<About/>}/>
           <Route path="contact" element={<Contact/>}/>
          
        </Routes>
        
        </Col>
      </Row>
     </Container>
    </BrowserRouter>
     
    </>
  )
}
export default App;