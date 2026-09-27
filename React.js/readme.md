## What are React Component:-
> Functional Components.
> Class Components.

## SetUp + Adding BootStrap:-
- Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
syntax:-
<Container fluid>
          <Container>
            <Row>
              <Col className='col-12 text-center py-4'>
                <h1>Our Courses</h1>
              </Col>
            </Row>
            <Row>
              <Col lg='3' md='6'>
                <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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
        </Container>

## Props:-



## Using Children Props:-



## How to Pass Object to Child Components:-


## How to add a front awesome icon:-
i> Add SVG Core:- npm i --save @fortawesome/fontawesome-svg-core
ii> Add Icon Packages:- npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

iii>  Add the React Component:- npm i --save @fortawesome/react-fontawesome@latest

## How to setup Tailwind CSS:-
i> tailwindcss package:- npm install -D tailwindcss / version- npm install -D tailwindcss@3 postcss autoprefixer
ii> config file:- npx tailwindcss init 

iii> tailwind.config.js file code paste:- /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*/.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

iv> index.css file code paste:-

# vite connect tailwindcss:-
- npm install tailwindcss @tailwindcss/vite.
- vite.config.js:- config tailwindcss.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

- index.css:- connect tailwindcss
@import "tailwindcss";

## How to import css & images in vite/react:-

## Event Handling:-

## Hooks (UseState in Hooks):-

## Conditional Statement (if-else-statement):-

## Ternary Operator(React Conditional Rendering):-

## Module Style for a Components:-

## Show or Hide Password:-

## Responsive Menu:-

## Create Login Modal:-

## Create Faq using state:-

## Create Faq with props drilling:-

## What is Key Prop In React Js & its Importance:-

## Notification Components:-

## Buliding a Todo List App Project in React.Js:-

## Create Tabbing:-

## Adding a Static Routing With Link:-

## Dynamic Routes:-

## How to Setup 404 Page In React Routing:-

## Controlled Components Input:-

## Enquiry Form Handle With State Using Controller Components:-

## Show UserData From State in Table Tag:-

## Email or Phone Number Already Exists:-

## Delete Row in UserData State:-

## React Toastify:-
npm i react-toastify
App.jsx:-
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

## Update UserRow in UserData State:-

## Password Generator App:-

## Create Whether App Using Fetch API:-

## useEffect Hook:-

## How To Bulid A React E-Commerce Min Web App (Axios):-
