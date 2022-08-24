import React, { useState } from 'react'
   
//set controlled form
//add onSubmit to capture event 
//set router 
//use param hook
//push method to push new info to app

function NewArtworkForm({ onAddArtwork }) {
  //declare state-medium, artist, title, year, image
  const [medium, setMedium] = useState("");
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState();
  const [image, setImage] = useState("");

  //handle submit
  //POST method

  function handleSubmit(e) {
    e.preventDefault(); //prevent page from refreshing
//fetch request with POST
    fetch("http://localhost:4000/artworks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        medium: medium,
        artist: artist,
        title: title,
        year: year,
        image: image,
      }),
    })
      .then((response)  => response.json()) 
      .then((newArtwork) => onAddArtwork(newArtwork));
      
    //add new artwork to page
  }





  return (
//include text input area with states
//target input value for users to enter information
    <div >
    <h2 class="add-artwork">Add Artwork</h2>
       <form class="artwork-form"onSubmit={handleSubmit}>
          <input
         type="text"
         name="medium"
         placeholder="Artwork Medium"
         onChange={(e) => setMedium(e.target.value)}
         />
          <input
            type="text"
            name="artist"
            placeholder="Artist"
            onChange={(e) => setArtist(e.target.value)}
          />
           <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          />
          <input
           type="number"
           name="year"
           placeholder="Year"
           value={year}
           onChange={(e) => setYear(parseFloat(e.target.value))}
         />
         <input 
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
         />
           <button type="submit">Add to database</button>
        </form>
    </div>
  );
}

export default NewArtworkForm;