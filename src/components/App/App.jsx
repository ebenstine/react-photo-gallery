import React, { useState, useEffect } from 'react';
import './App.css';

import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios';

function App() {
  //begin with empty gallery array
  const [galleryList, setGalleryList] = useState([]);
  
  //run when the component is put on the DOM
  useEffect(() => {
    retrieveGallery();
  }, [] );

  const retrieveGallery = () => {
    axios
      .get('/gallery')
      .then(response => {
      console.log('GET /gallery', response.data);
      setGalleryList(response.data);
    }).catch(error => {
      console.log(`Couldn't load photos; try again later`, error);
    });
  }
  const handleLikes = (id) => {
   
    
    axios
        .put ('/gallery/like/'+id)
        .then((response) => {
            console.log(response);
            console.log("response.data", response.data);
            retrieveGallery();
        }).catch((error) => {
            console.log('Error in put', error);
        });
};


return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Family Snapshot 2019-2021</h1>
        </header>
        
        <GalleryList 
          galleryList={galleryList}
          retrieveGallery={retrieveGallery}
          handleLikes={handleLikes}
        />

       
      </div>
    );
}

export default App;

        
        
        
        
        
        
        
        
        
     