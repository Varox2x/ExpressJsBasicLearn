const { Router } = require('express');
const Console = require("console");

const router = Router();

const groceryList = [
    {
        item: 'milk',
        quantity: 2
    },
    {
        item: 'banana',
        quantity: 3
    },
    {
        item: 'apple',
        quantity: 4
    }
];

router.get('/',(req, res) => {
        res.cookie("visited", true, {maxAge: 10000});
        res.send(200);
    })

router.get('/:item', (req, res) => {
    const {item} = req.params;
    const groceryItem = groceryList.find((g) => g.item === item)
    Console.log(req.headers.cookie)
    if(!groceryItem) res.send('No such item')
    console.log(req.params.item);
    res.send(groceryItem);
})

router.post('/', (req, res) => {
    console.log(req.body);
    groceryList.push(req.body)
    res.send(201);
})

module.exports = router;