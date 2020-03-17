import React,{ Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
//this library create an unique id all time is called
import uuid from 'uuid';


class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  }
  handleChange = e =>{
    this.setState({
      item:e.target.value
    });
  };
  handleSubmit = e =>{
    e.preventDefault();
        const newItem={
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem];

    this.setState(
      {
        items:updatedItems,
        item:'',
        id:uuid(),
        editItem:false
      }
    );
  };

  deleteList = (e) =>{
    this.setState({
      items:[]
    })
  };

  deleteItem = (id) => {
    const filteredItem = this.state.items.filter(item =>
      item.id !== id)
      this.setState=({
         items:filteredItem
      });
  }; 
  
  render(){
    return (
      <div className="container">
        <div className="row">
        
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center"> To do In React that will be refactored in Typescript later </h3>
          <TodoInput 
              item = {this.state.item} 
              handleChange = {this.handleChange} 
              handleSubmit = {this.handleSubmit }    
          />
          <TodoList  
              items={this.state.items}
              deleteList = {this.deleteList}
              deleteItem = {this.deleteItem}
          />
             
       

          </div>
        </div>
      </div>
    );
  }
}
export default App;
