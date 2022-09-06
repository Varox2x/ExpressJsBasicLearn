const {Router} = require('express');

const router = Router();

const supermarkets = [
    {
        id: 1,
        store: 'Whole Foods',
        miles: 0.6,
    },
    {
        id: 2,
        store: 'Trader Joes',
        miles: 2.6,
    },
    {
        id: 3,
        store: 'Albertson',
        miles: 77.6,
    },
    {
        id: 4,
        store: 'HubertS',
        miles: 77.4,
    },
    {
        id: 5,
        store: 'Tower',
        miles: 7.6,
    }
]

router.get("/",(req,res) => {
    const { miles } = req.query;
    const parsedMiles = parseInt(miles);
    if(!isNaN(parsedMiles)){
        const filteredStores = supermarkets.filter((s) => s.miles <= parsedMiles);
        res.send(filteredStores)
    } else {
        res.send(supermarkets);
    }
})

//http://localhost:3001/api/markets?miles=3&sortby=asc
//req.query => { miles: '3', sortby: 'asc' }

module.exports = router