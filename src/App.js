import React, {Component} from 'react';


class App extends Component {

  state = { products: null, items: null};


  
  async componentDidMount(){


    const itemsResponse =  await fetch('http://localhost:8082/api/items');
    const itemsJson = await itemsResponse.json();
    this.setState({items: itemsJson});

    const productsResponse =  await fetch('http://localhost:8082/api/products');
    const productsJson = await productsResponse.json();
    this.setState({items: productsJson});

    console.log(itemsJson);

    console.log(productsJson);

  

}




  render(){
   
    return (

      <div className = "App">
        </div>

    );
  }

}

export default App;

