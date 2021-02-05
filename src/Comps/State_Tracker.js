import React, { Component, PureComponent } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";

// class StateTracker extends Component {
class StateTracker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: [],
      person: {
        name: "",
      },
    };
    this.addItem = this.addItem.bind(this); // arrow functions use "lexical 'this' binding" which automatically binds them to the scope in which they are defined
    this.clearList = this.clearList.bind(this); // arrow functions do this implicitly
  }

  componentDidMount() {
    axios.get("https://swapi.dev/api/people/1/").then((res) => {
      console.log(res);
      this.setState({
        person: res.data,
      });
    });
  }

  handleInput = (e) => {
    this.setState({
      item: e.target.value,
    });
    return;
  };

  addItem() {
    console.log("addItem fired");
    this.setState({
      item: "",
      list: [...this.state.list, this.state.item],
    });
    return;
  }

  deleteItem = (index) => {
    console.log("delete item fired");
    let coppiedList = [...this.state.list];
    coppiedList.splice(index, 1);
    this.setState({
      list: coppiedList,
    });
    return;
  };

  clearList() {
    this.setState({
      item: "",
      list: [],
    });
  }

  editItem = (updatedItem, index) => {
    let coppiedList = [...this.state.list];
    coppiedList.splice(index, 1, updatedItem);
    this.setState({
      list: coppiedList,
    });
  };

  render() {
    const { item, list } = this.state;
    // const mappedItems = list.map((e, index, arr) => {
    //   return (
    //     <ItemCard
    //       key={index}
    //       className="card"
    //       name={e}
    //       index={index}
    //       deleteFunc={this.deleteItem}
    //       updateFunc={this.editItem}
    //       list={arr}
    //     />
    //   );
    // });
    console.log(this.state);
    return (
      <div className="App">
        {/* <header className="App-header">{this.props.person}'s ToDo List</header> */}
        {/* <div>
          <input
            placeholder="Enter New Item"
            onChange={(e) => this.handleInput(e)}
            value={item}
          />
          <div>
            <button onClick={this.addItem}>Add Item</button>
            <button onClick={this.clearList}>Clear List</button>
          </div>
        </div> */}
        {/* <ul>{mappedItems}</ul> */}
        <h1>{this.state.person.name}</h1>
      </div>
    );
  }
}
export default StateTracker;
