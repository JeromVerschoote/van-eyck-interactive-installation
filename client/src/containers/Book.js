import React, { Component } from 'react';
import { withRouter, BrowserRouter } from "react-router-dom";

import StartPage from '../components/StartPage.jsx';
import Page from '../components/Page.jsx'
import EndPage from '../components/EndPage.jsx';

class Book extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPage: 0
    }

    document.addEventListener('keydown', this.handleKeyDown);

    const {arduino, kinect} = this.props.server;
    arduino.socket.on(`touch`, touch => this.handleTouch(touch));
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

  handleTouch = key => {
    console.log(`Touch detected: ${key}`);
  }

  handleGesture = gesture => {
    console.log(`Gesture detected: ${gesture}`);

    if(gesture === `swipeRight` &&  (this.state.currentPage >= 2)){
      //this.setState({currentPage: this.state.currentPage - 2});
    }

    if(gesture === `swipeLeft` && (this.state.currentPage < this.pageCount - 2)){
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
          <BrowserRouter><Page data={pages[this.state.currentPage]} key={pages[this.state.currentPage].id} type={'even'} parent={startPage.title.toLowerCase()}/></BrowserRouter>
        </React.Fragment>
      );
    }else if(this.state.currentPage === this.pageCount - 2){
      return(
        <React.Fragment>
         <BrowserRouter><Page data={pages[this.state.currentPage - 1]} key={pages[this.state.currentPage - 1].id}  type={'odd'} parent={startPage.title.toLowerCase()}/></BrowserRouter>
          <EndPage data={endPage} type={'even'}/>
        </React.Fragment>
      )
    }else{
      return(
        <React.Fragment>
          <BrowserRouter><Page data={pages[this.state.currentPage -1 ]} key={pages[this.state.currentPage - 1].id}  type={'odd'} parent={startPage.title.toLowerCase()}/></BrowserRouter>
          <BrowserRouter><Page data={pages[this.state.currentPage]} key={pages[this.state.currentPage].id} type={'even'} parent={startPage.title.toLowerCase()}/></BrowserRouter>
        </React.Fragment>
      )
    }
  }
}

export default withRouter(Book);
