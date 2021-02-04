import React, { Component, PureComponent } from "react";
import ItemCard from "./ItemCard";

// class StateTracker extends Component {
class StateTracker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: [],
    };
    this.addItem = this.addItem.bind(this); // arrow functions do this lexically
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
    console.log(this);
    this.setState({
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
    const mappedItems = list.map((e, index, arr) => {
      return (
        <ItemCard
          key={index}
          className="card"
          name={e}
          index={index}
          deleteFunc={this.deleteItem}
          updateFunc={this.editItem}
          list={arr}
        />
      );
    });

    return (
      <div className="App">
        <header className="App-header">{this.props.person}'s ToDo List</header>
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
