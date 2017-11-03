import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import SearchBar from './containers/SearchBar'
import List from './components/List'

const ROOT_URL = "https://swapi.co/api/people/?search="

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      list : []
    };
  }

  search( term ){
    axios.get(`${ROOT_URL}${term}`).then(resp =>{
        console.log(resp.data)
        this.setState({list: resp.data})
    })
}

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={ term => this.search( term ) } />
        <List list={this.state.list}  />
      </div>
    );
  }
}

export default App;
