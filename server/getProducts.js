const products = require('../products.json')

const getProducts = (req, res) => {
    const {price} = req.query
    
    if (!price) {
        res.status(200).send(products)
    } else {
    //    console.log(price) 
        const filteredPrice = products.filter(element => {
            return price <= element.price
        })
        res.status(200).send(filteredPrice)
    }    

    
}

module.exports = getProducts