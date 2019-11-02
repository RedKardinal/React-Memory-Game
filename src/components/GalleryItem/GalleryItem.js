import React, { Component } from 'react';
import axios from 'axios';


class GalleryItem extends Component{
    state = {
        showImage: true
    } // end State

    photoClick = (event) => {
        console.log('Click on photo!');
        event.preventDefault()
        this.setState({
            showImage: !this.state.showImage
        })
    } // end photoClick

    likeClick = () => {
        console.log('Click on Like!');
        //Targets function in GalleryList
        axios({
            method: 'PUT',
            url: '/gallery/like/' + this.props.photo.id
        }).then((results) => {
            // console.log('GalleryItems PUT', results);
            // This brings it to Apps.js
            this.props.putRequest();
        }).catch((error) => {
            console.log('Error in the GalleryItem.js', error);
        }) 
    } // end likeClick

    render(){
        const {showImage} = this.state;
        return(
            <>
                {/* Toggle image and text with conditional rendering below.                 */}
                { showImage === true ? <img className="grid-item" src={this.props.photo.path} alt={this.props.photo.description} width="200" height="200" onClick={this.photoClick}></img> : 
                  showImage === false ? <p className="grid-text" onClick={this.photoClick}>{this.props.photo.description}</p> : ""}
                <br/>
                <button className="button" onClick={this.likeClick}>Click!</button>
                <br/>
                <p>Points: {this.props.photo.likes}</p>
            </>
        )
    }
}

export default GalleryItem