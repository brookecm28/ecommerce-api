const products = require('../products.json')

const userId = (req, res) => {
    const {id} = req.params
    console.log(id)
    const user = products.find(element => {
        return element.id === +id
    })

    if(user) {
        res.status(200).send(user)
    } else {
        res.status(500).send('Item not in list')
    }
}
module.exports = userId