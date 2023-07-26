//sk_test_51NNaRqBYw98632o1f0O65U2BGYSnDcvdSG4L9Z3IWNmVBZqxnEQsjy7uEq0cb8A8q2xhcB3OF4wNCXFgmOYc8VzA00sOnnonOD

const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
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


//Email

mongoose.connect(
    'mongodb+srv://GoldenHoney:GoldenHoney1234@golden-honey-emails.ypjyghf.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

const emailSchema = new mongoose.Schema({
    email: {
        type: 'string',
        required: true,
        unique: true
    }
})

const EmailModel = mongoose.model('Email', emailSchema)

app.use(bodyParser.json());
app.use(cors());


app.post('/add-email', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required.' });
    }

    try {
        // Create a new email list item
        const emailItem = new EmailModel({ email });

        // Save it to the database
        await emailItem.save();

        return res.status(201).json({ message: 'Email added to the list.' });
    } catch (error) {
        // If the email already exists in the database, handle the error
        if (error.code === 11000) {
            return res.status(409).json({ error: 'Email already exists in the list.' });
        }

        // Handle other errors
        return res.status(500).json({ error: 'Failed to add email to the list.' });
    }
});

app.listen(4000, () => console.log("Listening on port 4000"))