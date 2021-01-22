import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      snippetsList: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/snippets/")
      .then(res => this.setState({ snippetsList: res.data.results }))
      .catch(err => this.setState({ errorMessage: err.message }));
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

  render() {
    return (
      <div>
        <h1>Snippets</h1>
        <p>Greetings! This is a prototyping project that I use to try out any web-related stuff. As of now (21.01.21), I have a Django Rest Framework backend with a React frontend, both dockerized with Docker.</p>
        <div>
          {this.renderSnippets()}
          {this.state.errorMessage &&
            <h3> {this.state.errorMessage} </h3>}
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
