import React, { useState, useEffect } from 'react';
import CovidItem from './CovidItem';

const Covids = () => {
  const [covids, setCovids] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {    
    fetch('https://disease.sh/v3/covid-19/countries')
    .then(response => response.json())
    .then(data => setCovids(data));

    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(`https://disease.sh/v3/covid-19/countries/${text}`)
    .then(response => response.json())
    .then(data => setCovids(data));    

    setText('');
}

const handleChange = (e) => {setText(e.target.value)};

  return(
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <h2>Search Movie</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" onChange={handleChange} value={text}/>
          </form>

          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
          {/* Object.entries() */}
          { covids.map(covid => <CovidItem key={covid.country} covid={covid} />) }
              
          </div>
      </div>
  </section>
  );
}

export default Covids;
