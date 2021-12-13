import React, {Component} from 'react';

class CartItem extends Component  {
  state= {targetVal: 1, addQuantity: 0, items: {}, products: {}, updated: false, total: 0};
  handleChange = this.handleChange.bind(this);
  num = 0;
 



onSubmit = (e) => {
  e.preventDefault();
  
  console.log("this is target val" + this.state.targetVal);

  this.setState(prevState =>{
    let item = Object.assign({}, prevState.item);
    item.product_id= this.props.items[this.state.targetVal -1].product_id;
    item.quantity = this.state.addQuantity;
    item.id = this.props.items[this.state.targetVal -1].id;
    

    console.log("this is added quantity" + this.state.addQuantity);
    this.createItem(item);
  })

}

announceTotal = () => {
  alert("Your total is " + this.state.total);
}

calculateTotal = (products,items) => {
  let quantity = items.map((item) => item.quantity)
  console.log("THIS IS QUANTITY: " + quantity);
  let sum = products.reduce((total, item, currentIndex) => 
  (item.priceInCents * quantity[currentIndex]) + total, 0);
  sum = (sum/100).toFixed(2);
  this.setState({ 
    total: sum
  }, () => {this.announceTotal()
  });
}

handleChange(e) {
  this.setState({targetVal: e.target.value});
}

async createItem(item) {
  const response = await fetch('http://localhost:8082/api/items', {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

  console.log("this is body" + JSON.stringify(item));
  const newItem = await response.json();
  var itemObj = {};
  var prodObj = {};
  this.setState(prevState =>{
    let product = Object.assign({}, prevState.newItem);
    let item = Object.assign({},prevState.newItem );
    product.name = this.props.products[newItem.product_id -1].name;
    product.priceInCents = this.props.products[newItem.product_id -1].priceInCents;
    product.id = newItem.id; 
    product.quantity = newItem.quantity;
    item.product_id = newItem.product_id;
    item.quantity = newItem.quantity;
    item.id = newItem.id;
    prodObj = product;
    itemObj = item;

  })

  console.log("consoling prod obj");
  console.log(prodObj);
  console.log("consoling item OBJ");
  console.log(itemObj);
  this.setState({
    products: [...this.props.products, prodObj]
  });

  this.setState({
    items: [...this.props.items, itemObj]
  }, () => {
    this.props.onProductsChange(this.state.products, this.state.items);
    this.calculateTotal(this.state.products, this.state.items);
  }
  );
}


render(){
  return(
    <>
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
          <div class="list-group-item">
            {this.props.products.map((product, index) => 
            <div class="row" key={product.id}>
            <>
            <div class="col-md-8"> {product.name}</div>
            <div class="col-md-2"> {product.priceInCents /100}</div>                          
            <div class="col-md-2"> {console.log("this is index" + index)}
            {this.props.items[index].quantity} </div>  
            </>
            </div>
            )}
          </div>
        </div>
      </div>

        <div className="items">
          <p>
            <b>Product</b>
          </p>
          <div className="select-container">
            <select onChange={this.handleChange}>
              {this.props.products.map((product) => <option key={product.id} value={product.id}> Name: {product.name} | Cost in Cents: {product.priceInCents} </option>)}
            </select>
          </div>
          <form onSubmit={this.onSubmit}>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <p>
              <label>
                <b>Quantity:</b> <input type="text" onChange={(e) => this.setState({ addQuantity: e.target.value })} name="quantity" />
              </label>
            </p>
            <br>
            </br>
            <p>
              <input type="submit" value="Submit" />
            </p>
          </form>
        </div>
        </> 
    );
  
  }
}


export default CartItem;
