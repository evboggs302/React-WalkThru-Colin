import React, { Component } from "react";
import ItemCard from "./ItemCard";

class StateTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: [],
    };
    this.addItem = this.addItem.bind(this); // arrow functions do this implicitly
    this.clearList = this.clearList.bind(this); // arrow functions do this implicitly
  }

  handleInput = (e) => {
    // console.log(e.target.value);
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

  render() {
    const { item, list } = this.state;
    const mappedItems = list.map((e, index) => {
      // return <li key={index}>{e}</li>;
      return (
        <ItemCard
          key={index}
          className="card"
          name={e}
          index={index}
          deleteFunc={this.deleteItem}
        />
      );
    });
    console.log(this.state);

    return (
      <div className="App">
        <header className="App-header"> ToDo List</header>
        <div>
          <input
            placeholder="Enter New Item"
            onChange={(e) => this.handleInput(e)}
            value={item}
          />
          <div>
            <button onClick={this.addItem}>Add Item</button>
            <button onClick={this.clearList}>Clear List</button>
          </div>
        </div>
        <ul>{mappedItems}</ul>
      </div>
    );
  }
}
export default StateTracker;
