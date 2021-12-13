import React, {Component} from 'react';
import CartItem from './CartItem';
import CartItems from './CartItems';


class App extends Component {

  state = { products: [], items: []};
  onChange = this.onChange.bind(this);



  async componentDidMount(){


    const itemsResponse =  await fetch('http://localhost:8082/api/items');
    const itemsJson = await itemsResponse.json();
    const itemsArr = [];

    const productsResponse = await fetch('http://localhost:8082/api/products');
    const productsJson = await productsResponse.json();
    const productsArr = [];

    Object.keys(itemsJson).forEach(key => {
    itemsArr.push(itemsJson[key])});
    this.setState({items: itemsArr});
   console.log("just mounted");

    Object.keys(productsJson).forEach(key => {
    productsArr.push(productsJson[key])});
    this.setState({products: productsArr});

}

async onChange(newProd, newItems){
console.log("yep in on change");
console.log(this.state.items);
  this.setState({products: newProd});
  this.setState({items: newItems});
  console.log("this is length of new items: " + this.state.items.length);
  console.log("this is length of new products: " + this.state.products.length);
}








// async createItem(item) {
//   const response = await fetch('http://localhost:8082/api/items', {
//     method: 'POST',
//     body: JSON.stringify(item),
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     }
//   })
//   const person = await response.json()
//   this.setState({people: [...this.state.people, person]})
// }




  render(){
   
    return (

      <div className = "App">
        {/* <CartItems products = {this.state.products} items= {this.state.items}/> */}
        {/* {setTimeout(() => this.initialDisplay(),0)} */}
        {/* <button onClick = {this.addItem()}> Add Item</button> */}
       <CartItem products= {this.state.products} onProductsChange = {this.onChange} items= {this.state.items} />
        </div>

    );
  }

}

export default App;

