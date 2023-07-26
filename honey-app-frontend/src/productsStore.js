//Coffe: price_1NXKOXBYw98632o1DOpu0x7H
//Sunglasses: price_1NXKPbBYw98632o1oHKI4fGh
//Camera: price_1NXKQQBYw98632o1DetmWL5g
import HoneyJar1 from '../src/components/honeyjar1.png'
import HoneyJar2 from '../src/components/honeyjar2.png'
import HoneyJar3 from '../src/components/honeyjar3.png'

const productsArray = [
    {
        id: "price_1NYA6mBYw98632o15HpMjcQ1",
        title: "Small Honey Jar",
        img: HoneyJar1,
        price: 4.99
    },
    {
        id: "price_1NYA7dBYw98632o1BOU8ZsUa",
        title: "Medium Honey Jar",
        img: HoneyJar2,
        price: 7.99
    },
    {
        id: "price_1NYA8gBYw98632o1LHXScJOa",
        title: "Big Honey Jar",
        img: HoneyJar3,
        price: 14.99
    }
]

function getProductData (id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData === undefined) {
        console.log("Product data does not exist for ID:" + id)
        return undefined
    }
    return productData
}

export { productsArray, getProductData }