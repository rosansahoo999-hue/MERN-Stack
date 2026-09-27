import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import Footer from './Components/Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { blog } from './Data/Blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
 let headerInfo={
  email: 'wscubetech@gmail.com',
  phone: '9309520974'
 }

  return (
    <div className='main'>
     {/* <Header email='ws@gmail.com' phone='9309520974'/> */}
     <Header headerInfo={headerInfo} cname='wscubetech' c='hello'>
        <h1>Welcome to Header Section</h1> 
        <FontAwesomeIcon icon={faWhatsapp} className='text-danger'/>
        <FontAwesomeIcon icon={faPhone} className='text-danger'/>
        <FontAwesomeIcon icon={faSearch} />

     </Header>
        {/* <Container fluid>
          <Container>
            <Row>
              <Col className='col-12 text-center py-4'>
                <h1>Our Courses</h1>
              </Col>
            </Row>
            <Row>
              <Col lg='3' md='6'>
                <Card style={{ width: '18rem' }}>
                  
                    <Card.Body>
                      <Card.Title>Courses 1</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg='3' md='6'>
                <Card style={{ width: '18rem' }}>
                
                    <Card.Body>
                      <Card.Title>Courses 2</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg='3' md='6'>
                <Card style={{ width: '18rem' }}>
                  
                    <Card.Body>
                      <Card.Title>Courses 3</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg='3' md='6'>
                <Card style={{ width: '18rem' }}>
                  
                    <Card.Body>
                      <Card.Title>Courses 4</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container> */}
        <Container>
          <Row>
            { blog.map((v, i) => {
              return (
                <ProductItem pitems={v} key={i} />
              )
            }) }
            <ProductItem />
          </Row>
        </Container>
     <Footer />
   
   
   
    </div>
      
  )
}

export default App;

function ProductItem({pitems}) {
  return(
    <div className='col-lg-3 mb-4'>
      <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>
            {pitems?.title}
          </Card.Title>
            <Card.Text>
              {pitems?.body}
            </Card.Text>
              <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}










  // <div className='container'>
  //       <h1 className='text-danger'>Welcome to home page</h1>
  //    </div>

// function Card(){
//   return(
//     <div className='cardItems'>Card Div</div>
//   )
// }