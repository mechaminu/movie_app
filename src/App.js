import React from 'react';
import PropTypes from 'prop-types';


// Component and properties
function DummyMovie({ name }) {
  return <div>
    <p>Title : {name}</p>
  </div>
}

function Movie({ name, image, rating }) {
  return <div className="movieElem">
    <p>Title : {name} / Rating : {rating}</p>
    <p><img src={image} alt={name + "_poster"} /></p>
  </div>
}

// Argument type validation

Movie.propTypes = {
  // Movie.myTypes = {  // PropTypes element만 제대로 갖추기만 하면 상위 객체의 이름은 상관 없이 OK
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  
  rating:PropTypes.number.isRequired
  // rating: PropTypes.string.isRequired // error!
  // rating:PropTypes.number // 
};


// Dynamic component generation and map function
const movieList = [
  {
    name: "Tenet",
    image: "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    rating: 10
  },
  {
    name: "Interstella",
    image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
    rating: 9
  },
  {
    name: "The Dark Knight",
    image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    rating: 8
  },
  {
    name: "Memento",
    image: "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,681,1000_AL_.jpg",
    rating: 7
  }
];

function App() {
  return (
    <div className="App">
      <div>
        {/** This is how to comment */}
        <h1>Hello world!!!!</h1>
        <p>컴포넌트는 (JSX로 쓰여진) HTML을 반환하는 함수!</p>
      </div>
      
      <div>
        {/** Component and properties 
         * For 'Movie' components, we created property 'name' and pass values like 'aboutTime'.
         * this is how information is transferred into components, like how its done in HTML elements
        */}
        <DummyMovie name="aboutTime" />
        <DummyMovie name="parasite" />
        <DummyMovie name="django" />
      </div>

      <div>
        {/** Dynamic component generation and map function */}
        <h1>크리스토퍼 놀란 걸작선</h1>
        {movieList.map((e, idx) => <Movie key={idx} name={e.name} image={e.image} rating={e.rating} />)}
      </div>
      
    </div>
  );

}

export default App;
