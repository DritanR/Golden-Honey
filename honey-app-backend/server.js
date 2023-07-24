//sk_test_51NNaRqBYw98632o1f0O65U2BGYSnDcvdSG4L9Z3IWNmVBZqxnEQsjy7uEq0cb8A8q2xhcB3OF4wNCXFgmOYc8VzA00sOnnonOD

const express = require('express')
var cors = require('cors')
const stripe = require('stripe')("sk_test_51NNaRqBYw98632o1f0O65U2BGYSnDcvdSG4L9Z3IWNmVBZqxnEQsjy7uEq0cb8A8q2xhcB3OF4wNCXFgmOYc8VzA00sOnnonOD")

const app = express()
app.use(cors())
app.use(express.static("public"))
app.use(express.json())

app.post("/checkout", async (req, res) => {
    
    console.log(req.body)
    const items = req.body.items
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    })

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    })

    res.send(JSON.stringify({
        url: session.url
    }))

})

app.listen(4000, () => console.log("Listening on port 4000"))