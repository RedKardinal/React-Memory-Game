import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryList: []
  } // end State

  componentDidMount = () => {
    // console.log('Hello from componentDidMount');
    this.getPictures();
    
  } // end componentDidMount

  getPictures = () => {
    // Axios GET
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      this.setState({galleryList: []});
      response.data.forEach((photo) => {
        this.setState({
          galleryList: [...this.state.galleryList, photo]
        }) // end setState
      }) // end response.data
    }).catch(function(error) {
      console.log('Error in the App.js GET', error);
    }) // end axios GET
  } // end getPictures

  render() {
    return (

        <div className="App">
            <header className="App-header">
              <h1 className="App-title">Famous Instruments</h1>
            </header>
        <br/>
            <div className="Instructions">
              <h3>Guess the famous musician that played the instrument. Click on the image to see the answer!</h3>
              <h3>Keep track of your points with the click counter.</h3>
            </div>
            <div className="content">
        <br/>
                      {/* PUT from GalleryListAxios         from GalleryList */}
              <GalleryList putRequest={this.getPictures} galleryList={this.state.galleryList}/>
        <br/>
            </div>
        <br/>
            <div className="score">
              {/* Work score counter into later commits. Replace Likes with points */}
              <h1 className="App-title">Final Points Scored: 12 / 12 </h1>
        <br/>
            </div>
        <br/>
      </div>

    ); // end return
  } // end render
} // class App

export default App;
