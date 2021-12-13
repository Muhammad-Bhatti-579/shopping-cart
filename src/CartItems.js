// import CartItem from "./CartItem";
import React, {Component} from 'react';


class CartItems extends Component {
  // state= {product: {name: "Mediocre Iron Watch", price: "399" , quantity: "3"}};




  render(){
    return(

        <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
        <div className="list-group-item">
        <div className="row">
        <div className="col-md-8">Product</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-2">Quantity</div>
      </div>
    </div>
    <div class= "list-group-item">
      {this.props.products.map((product) => 
      <div class= "row" key = {product.id}>
      <>
      <div class="col-md-8"> {product.name}</div>
      <div class="col-md-2" > {product.priceInCents}</div>
      <div class="col-md-2"> {this.props.items[product.id-1].quantity}</div>
      </>
      </div>

      )}
  
      </div>
  </div>
</div>

    );
  

}
}


export default CartItems;