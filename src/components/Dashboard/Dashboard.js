import React, {Component} from 'react';
import Product from '../Product/Product'
import Form from '../Form/Form'
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            products: [],
            name: '',
            price: '',
            img: '',
            editing: false,
            input: ''
        }
    }

    componentDidMount() {
        axios.get('/api/inventory').then( res => {
            // console.log(res.data)
            this.setState({
                products: res.data
            })
        })
    }

    deleteProduct = id => {
        console.log(id)
        axios.delete(`/api/inventory/${id}`).then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    onEdit = product => {
        console.log('edit')
        this.setState({
            name: '',
            price: '',
            img: ''
        })
    }

    editProduct = id => {
        const {name, price, img} = this.state
        console.log(id)
        axios.put(`/api/inventory/${id}`, {name: name, price: price, img: img}).then(res => {
            this.setState({
                products: res.data,
                name: '',
                price: '',
                img: '',
                editing: false

            })
        })

    }
        
           

    render () {
        const mappedProducts = this.state.products.map( product => {
            
            return (
                <Product 
                key={product.id}
                product={product}
                deleteProduct={this.deleteProduct}
                />
             
            )
        })
        // console.log(mappedProducts)
        return(
            
            <div>
                
                <p>Dashboard--</p>
                <Form 
                onEdit={this.onEdit}
                editProduct={this.editProduct}/>
                
                {mappedProducts}
                

            </div>
        )
    }
}

export default Dashboard;