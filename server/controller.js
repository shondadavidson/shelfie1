module.exports = {
    
    getAllProducts: (req, res) => {
        const db = req.app.get('db');
        
        db.get_inventory().then( resp => {
            res.status(200).send(resp)
        })
    },
    
    createProduct:  (req, res) => {
        const db = req.app.get('db');
        const {name, price, img} = req.body;
        db.create_inventory([name, price, img]).then(resp => {
            
            res.status(200).send(resp)
        })
    },

    deleteProduct: (req, res) => {
        console.log('delete test')
        const db = req.app.get('db');
        const {id} = req.params;
        

        db.delete_product([id]).then(resp => {
            res.status(200).send(resp)
        })
    },

    editProduct: (req, res) => {
        console.log('edit product')
        const db = req.app.get('db');
        const {id} = req.params;
        const {name, price, img} = req.body;

        db.edit_product([id, name, price, img]).then(resp => res.status(200).send(resp))
    }



}