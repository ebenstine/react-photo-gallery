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
  }, []);
  //function get all the images
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
  //function to update a single image
  const handleLikes = (id) => {

    //communicates to server 
    axios
      .put('/gallery/like/' + id)
      .then((response) => {
        console.log(response);
        console.log("response.data", response.data);
        retrieveGallery();
      }).catch((error) => {
        console.log('Error in put', error);
      });
  };

  //draws in gallery from component and provides DOM info
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Light Studies at the Old House</h1>
      </header>

      <GalleryList
        galleryList={galleryList}
        retrieveGallery={retrieveGallery}
        handleLikes={handleLikes}
      />

    <footer className="footer"> you </footer>
    </div>
    
 
  );
}

export default App;










