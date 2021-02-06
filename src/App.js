import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './Home';
import Post from './Post';
import Header from './components/Header/Header'
import SearchBox from './components/SearchBox/SearchBox'
import ResultContainer from './components/ResultContainer/ResultContainer'
// https://reacttraining.com/react-router/web/example/basic for routing

const name = require('@rstacruz/startup-name-generator');

class App extends Component {
  state = {
    headertext: "Name It!",
    headerExpanded: true,
    suggestedName: []
  }

  handleinputChange = (inputText) => {

    this.setState({
      headerExpanded: !(inputText.length > 0), suggestedName: inputText.length > 0 ? name(inputText) : []
    })
    console.log("Input text is :", inputText)
  }

  render() {

    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headtitle={this.state.headertext} />
        <SearchBox onInputChange={this.handleinputChange} />
        <ResultContainer suggestedName={this.state.suggestedName} />
        {/* {this.state.headertext} */}
        {/* <button onClick={() => {
          this.setState({
            headertext: "This is a cool App Changed"
          })
        }}>Search</button> */}
      </div>
    );
  }
}


export default App;

{/* <BrowserRouter>
      <div>
        <NavigationBar />


        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Post} />
        </Switch>

      </div>
    </BrowserRouter> */}