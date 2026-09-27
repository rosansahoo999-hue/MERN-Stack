import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Categorical from './components/Categorical'
import { ProductItems } from './components/productItems'
import axios from 'axios';

function App() {
  let [finalcategory, setFinalcategory] = useState([])
  let [finalProduct, setFinalProduct] = useState([])
  let [catName, setCatName] = useState('')
  
  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalRes)=>{
      setFinalcategory(finalRes)
    })
  }

  let getProducts=()=>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data.products)
    .then((finalRes)=>{
      setFinalProduct(finalRes)
    })
  }

  useEffect(()=>{
    getCategory();
    getProducts();
  },[])
  
  useEffect(()=>{
    if(catName!==""){
    axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((proRes)=>proRes.data.products)
    .then((finalRes)=>{
      setFinalProduct(finalRes)
    }
  )
  }
  
  },[catName]) 
  
  let Pitems=finalProduct.map((products, index)=>{
    return(
      <ProductItems key={index} pdata={products} />
    )
  })

  return (
    <>
    <div className='py-10 bg-white'>
      <div className='max-w-330 mx-auto text-2xl'>
        <h1 className='text-center text-[40px] font-bold mb-7.5'>Our Products</h1>
        <div className='grid grid-cols-[30%_auto] gap-5'>
          <div>
            <Categorical finalcategory={finalcategory} setCatName={setCatName} />
          </div>

          <div>
            <div className='grid grid-cols-3 gap-5'>
              {
                finalProduct.length>=1 ?
              Pitems
              :
              'No Product Found'
            }
            </div>
          </div>

        </div>
      </div>
      
    </div>
    </>
  )
}

export default App;
