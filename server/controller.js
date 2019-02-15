module.exports = {
    
    getAllProducts: (req, res) => {
        const db = req.app.get('db');

        db.getAllMessages().then( resp => {
            res.status(200).send(resp)
        })
    },

    createProduct:  (req, res) => {
        const db = req.app.get('db');
        const {name, price, img} = req.body;

        db.createProduct([name, price, img]).then(resp => {
            res.status(200).send(resp)
        })
    }



}