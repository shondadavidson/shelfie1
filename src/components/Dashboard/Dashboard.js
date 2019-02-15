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
            img: ''
        }
    }

    componentDidMount() {
        axios.get('/api/messages').then( res => {
            console.log(res.data)
            this.setState({
                products: res.data
            })
        })
    }
        
           

    render () {
        // const mappedProducts = this.state.products.map(product => {
        //     return (
        //         key={products.id}
        //         name={name}
        //         price={price}
        //         img={img}
        //     )
        // })
        return(
            <div>
                <p>dashboard</p>
                <Product />
                {/* {mappedProducts} */}

            </div>
        )
    }
}

export default Dashboard;