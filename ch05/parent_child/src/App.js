import React, { Component } from 'react';
import update from 'immutability-helper';
import MyButton from './MyButton';
import List from './List';

class App extends Component {
    constructor() {
        super()
        this.state = {
            itemlist : [ ]
        }
    }

    addItem() {
        if (!this.num) this.num = 0;
        this.num++;
        let newItemList = update(this.state.itemlist, {
            $push : [ { no:new Date().getTime(), item: "아이템 "+this.num  } ]
        })
        this.setState({ itemlist : newItemList });
    }

    render() {
        return (
            <div className="container">
                <div className="well">
                    <MyButton addItem={this.addItem.bind(this)} />
                    <List itemlist={this.state.itemlist} />
                </div>
            </div>
        );
    }
}

export default App;