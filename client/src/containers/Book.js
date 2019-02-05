import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import StartPage from '../components/StartPage.jsx';
import Page from '../components/Page.jsx'
import EndPage from '../components/EndPage.jsx';

import Api from '../js/api.js';
const arduino = new Api('http://localhost:9090');
const kinect = new Api('http://localhost:8080');

class Book extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPage: 0
    }

    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);

    arduino.socket.on((`keyPressed`, key => this.handKeyPressed(key)));
    kinect.socket.on(`gesture`, gesture => this.handleGesture(gesture));
  }

  handleKeyDown = e => {

    if(e.keyCode === 37 && (this.state.currentPage >= 2)){
      this.setState({currentPage: this.state.currentPage - 2});
    }

    if(e.keyCode === 39 && (this.state.currentPage < this.pageCount - 2)){
      this.setState({currentPage: this.state.currentPage + 2});
    }
  }

  handleKeyUp = e => {

  }

  handleKeyPressed = key => {
    console.log(`Key detected: ${key}`);
  }

  handleGesture = gesture => {
    console.log(`Gesture detected: ${gesture}`);

    if(gesture === `swipeLeft` &&  (this.state.currentPage >= 2)){
      this.setState({currentPage: this.state.currentPage - 2});
    }

    if(gesture === `swipeRight` && (this.state.currentPage < this.pageCount - 2)){
      this.setState({currentPage: this.state.currentPage + 2});
    }
  }

  render() {
    const {startPage, pages, endPage} = this.props.data;
    this.pageCount = this.props.data.pages.length + 2;

    if(this.state.currentPage === 0){
      return (
        <React.Fragment>
          <StartPage data={startPage}  type={'odd'}/>
          <Page data={pages[this.state.currentPage]} key={pages[this.state.currentPage].id} type={'even'}/>
        </React.Fragment>
      );
    }else if(this.state.currentPage === this.pageCount - 2){
      return(
        <React.Fragment>
          <Page data={pages[this.state.currentPage - 1]} key={pages[this.state.currentPage - 1].id}  type={'odd'}/>
          <EndPage data={endPage} type={'even'}/>
        </React.Fragment>
      )
    }else{
      return(
        <React.Fragment>
          <Page data={pages[this.state.currentPage -1 ]} key={pages[this.state.currentPage - 1].id}  type={'odd'}/>
          <Page data={pages[this.state.currentPage]} key={pages[this.state.currentPage].id} type={'even'}/>
        </React.Fragment>
      )
    }
  }
}

export default withRouter(Book);
