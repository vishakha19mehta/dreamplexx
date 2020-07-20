import React from 'react';
import { useState, useEffect } from 'react';
import './App.scss';
import TopHeader from './component/header/header';
import Inputfield from './component/header/inputform';
import MovieCard from './component/moviecard/moviecard';
import Cardata from './Carddata';


function App() {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  React.useEffect(() => {
    const results = Cardata.filter(cardlist =>
      cardlist.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);


  return (
    <div className="App">

      <section className="top-header">
        <div className="container">
          <div className="row">
            <TopHeader />
            <Inputfield handleChange={handleChange} />
          </div>
        </div>
      </section>



      <div className="container" style={{ marginTop: '10rem' }}>
        <div className="row">
          {
            searchResults.map((val) =>
              <MovieCard
                key={val.id}
                imgurl={val.imgurl}
                title={val.title}
                rating={val.rating}
                genre={val.genre}
                link={val.link}
              />)
          }

        </div>
      </div>

    </div>
  );
}

export default App;
