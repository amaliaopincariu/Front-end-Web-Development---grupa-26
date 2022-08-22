import { useEffect, useState } from 'react'
import './HomePage.css'
import productList21 from './produse.json';
// [1,2,3].map(value => value*2) => [2, 4, 6]
const cart = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    pices: 1,
  },

]

const HomePage = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    //   .then(res => res.json())
    //   .then(json => {
    //     setProductList(json)
    //   })
  }, []) // doar odata se executa
  const onClickToCart = function (addedProduct) {
    console.log("Added to cart produs = ", addedProduct)
    const existProduct = cart.find((cartProduct) => {
      return cartProduct.id === addedProduct.id;
    })
    if (existProduct) {
      existProduct.pices += 1;
    } else {
      addedProduct.pices = 1;
      cart.push(addedProduct);
    }

    console.log('Current cart = ', cart)
  }


  return (
    <>
      <div className="product-list">
        {productList21.map((productObject) => {
          return (
            <div className='product'>
              <h1>{productObject.title}</h1>
              <img src={productObject.image}></img >
              <p>{productObject.price} RON</p>
              <button className='btn' onClick={(_event) => {
                onClickToCart(productObject);
              }}>Add To Cart</button>
            </div>
          )
        })}
      </div>
    </>
  )

}

export default HomePage;