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

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Family Snapshot 2019-2021</h1>
        </header>
        
        <GalleryList 
          galleryList={galleryList}
          retrieveGallery={retrieveGallery}
        />

       
      </div>
    );
}

export default App;

        
        
        
        
        
        
        
        
        
      {/*}  <p>Gallery goes here</p> 
       
        <img src="images/4745A.jpeg"/> 
        <img src="images/AM1.jpeg"/>
        <img src="images/AM2.jpeg"/>
        <img src="images/AM3.jpeg"/>
        <img src="images/LA1.jpeg"/>
        <img src="images/LA2.jpeg"/>
        <img src="images/M1.jpeg"/>
      </div>
    );


  export default App; */}
