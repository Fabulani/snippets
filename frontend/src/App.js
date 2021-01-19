import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      snippetsList: []
    };
  }

  componentDidMount() {
    this.refreshList();
  }
  
  refreshList = () => {
    axios
      .get("http://localhost:8080/snippets/")
      .then(res => this.setState({ snippetsList: res.data.results }))
      .catch(err => console.log(err));
  };

  renderSnippets = () => {
    const newSnippets = this.state.snippetsList;
    console.log(newSnippets)
    return newSnippets.map(item => (
      <li key={item.id}>
        <span> {item.title}</span>
      </li>
    ))
  }

  render(){
    return (
      <div>
        <div>
          {this.renderSnippets()}
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
