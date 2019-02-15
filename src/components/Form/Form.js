import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: '',
            img: ''

        }
    }

    handleName(val) {
        this.setState({
            name: val
        })
    };

    handlePrice(val) {
        this.setState({
            price: val
        })
    };

    handleImg(val) {
        this.setState({
            img: val
        })
    };

    postProduct() {
        const {name, price, img} = this.state;
        axios.post('/api/inventory', {name: name, price: price, img: img}).then( res => {
            this.setState({
                products: res.data,
                name: '',
                price: '',
                img: ''
            })
        })
    }

    cancelNewProduct(){
        this.setState({
            name: '',
            price: '',
            img: ''
        })
    }

    render () {
        return(
            <div>
                <input 
                type="text"
                placeholder={`product name`}
                value={this.state.name}
                onChange={ e => this.handleName(e.target.value)} />
                <input 
                type="text"
                placeholder={`price`}
                value={this.state.price}
                onChange={ e => this.handlePrice(e.target.value)} />
                <input 
                type="text"
                placeholder={`img`}
                value={this.state.img}
                onChange={ e => this.handleImg(e.target.value)} />
                <button onClick={ () => this.cancelNewProduct()}>Cancel</button>
                <button onClick={ () => this.postProduct()}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;