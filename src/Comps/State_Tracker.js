import React, { Component } from "react";
import ItemCard from "./ItemCard";

class StateTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: [],
    };
  }

  handleInput = (e) => {
    // console.log(e.target.value);
    this.setState({
      item: e.target.value,
    });
    return;
  };

  addItem = () => {
    console.log("addItem fired");
    this.setState({
      item: "",
      list: [...this.state.list, this.state.item],
    });
    return;
  };

  deleteItem = (index) => {
    console.log("delete item fired");
    this.setState({
      list: this.state.list.splice(index, 1),
    });
    return;
  };

  render() {
    const { item, list } = this.state;
    const mappedItems = list.map((e, index) => {
      // return <li key={index}>{e}</li>;
      return (
        <li>
          <ItemCard className="card" name={e} />
          <button onClick={() => this.deleteItem(index)}>Delete Item</button>
        </li>
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
            <button>Clear List</button>
          </div>
        </div>
        <ul>{mappedItems}</ul>
      </div>
    );
  }
}
export default StateTracker;
