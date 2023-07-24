//Coffe: price_1NXKOXBYw98632o1DOpu0x7H
//Sunglasses: price_1NXKPbBYw98632o1oHKI4fGh
//Camera: price_1NXKQQBYw98632o1DetmWL5g

const productsArray = [
    {
        id: "price_1NXKOXBYw98632o1DOpu0x7H",
        title: "Coffe",
        price: 4.99
    },
    {
        id: "price_1NXKPbBYw98632o1oHKI4fGh",
        title: "Sunglasses",
        price: 7.99
    },
    {
        id: "price_1NXKQQBYw98632o1DetmWL5g",
        title: "Camera",
        price: 20.99
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