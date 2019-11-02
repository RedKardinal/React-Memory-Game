import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component{

    render(){
        return(
            <>
            <div className="grid">
                {this.props.galleryList.map((photo) => {
                return <h2 key={photo.id}><br/><GalleryItem photo={photo} 
                //putRequest is the function called GalleryItem 
                putRequest={this.props.putRequest}/></h2>
                })}
            </div>
            </>
        )
    }
}

export default GalleryList