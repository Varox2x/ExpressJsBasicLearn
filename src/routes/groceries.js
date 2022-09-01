const { Router } = require('express');

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

router.get('',(req, res,next) => {
        console.log("Before Handling req");
        next();
    },
    (req, res) => {
        res.send(groceryList)
    })

router.get(':item', (req, res) => {
    const {item} = req.params;
    const groceryItem = groceryList.find((g) => g.item === item)
    if(!groceryItem) res.send('No such item')
    console.log(req.params.item);
    res.send(groceryItem);
})

router.post('', (req, res) => {
    console.log(req.body);
    groceryList.push(req.body)
    res.send(201);
})

module.exports = router;