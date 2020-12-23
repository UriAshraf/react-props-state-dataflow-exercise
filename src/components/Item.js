import React, { Component } from 'react';

class Item extends Component {
    render() {
        const {item , discount, price} = this.props.item
        return <div>{item}: ${this.props.shouldDiscount ? price *(1 - discount) : price}</div>
        
        
        
        // <div>{this.props.item.item}: ${this.props.shouldDiscount ? 
        //     this.props.item.price *(1- this.props.item.discount) : this.props.item.price}</div>

    }
}

export default Item