import React, {Component} from 'react';
import Product from '../Product/Product'
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            products: [],
            name: '',
            price: '',
            img: '',
            editing: false
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

    // onEdit = product => {
    //     const {product} = this.props
    //     console.log('edit')
    //     this.setState({
    //         editing: true})
    //     this.props.setEdit(product.name, product.price, product.img)
    // }

    // editProduct = id => {
    //     this.props.editProduct(id)

    //     this.setState({
    //         editing: false
    //     })
    // }
        
           

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
                
                {mappedProducts}
                

            </div>
        )
    }
}

export default Dashboard;