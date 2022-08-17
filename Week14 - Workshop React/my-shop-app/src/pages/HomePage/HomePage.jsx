import { useEffect, useState } from 'react'
import './HomePage.css'
import productList21 from './produse.json'; 
// [1,2,3].map(value => value*2) => [2, 4, 6]
const HomePage = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    //   .then(res => res.json())
    //   .then(json => {
    //     setProductList(json)
    //   })
  }, []) // doar odata se executa

  return (
    <>
      <div className="product-list">
        {productList21.map((productObject) => {
          return (
            <div className='product'>
              <h1>{productObject.title}</h1>
              <img src={productObject.image}></img >
              <p>{productObject.price} RON</p>
            </div>
          )
        })}
      </div>
    </>
  )

}

export default HomePage;