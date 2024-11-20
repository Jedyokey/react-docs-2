import React, { useState } from 'react'

const initialProducts = [
    {id: 0, name: "Pizza", count: 1},
    {id: 1, name: "Cheese", count: 5},
    {id: 2, name: "Spaghetti", count: 2}
]

const RemoveCartItem = () => {
    const [products, setProducts] = useState(initialProducts);

    const handleIncreaseClick = (productId) => {
        setProducts(
            products.map(product => {
                if (product.id === productId) { 
                    return {...product, count: product.count + 1};
                } else {
                    return product; 
                }
            })
        )
    }

    const handleDecreaseClick = (productId) => {
        let nextProducts = products.map(product => {
            if (product.id === productId) {
                return {...product, count: product.count - 1}
            } else {
                return product;
            }
        })
        nextProducts = nextProducts.filter(p => p.count > 0);
        setProducts(nextProducts);
    }

  return (
    <div>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name} {" "}
                    (<b>
                        {product.count}
                    </b>) {" "}
                    <button onClick={() => {
                        handleIncreaseClick(product.id)
                    }}>
                        +
                    </button>{" "}
                    <button onClick={() => {
                        handleDecreaseClick(product.id)
                    }}>
                        -
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default RemoveCartItem


// My own solution
// setProducts(products.map(p => {
//     if (p.id === product.id && p.count > 0) {
//         return {...p, count: p.count - 1};
//     } else {
//         return p;
//     }
// }).filter(p => p.count > 0)); // Remove items with count 0