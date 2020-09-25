import React from 'react';


// Component and properties
function Movie({ name, image }) {
  return <div className="movieElem">
      <p>{name}</p>
      <p><img src={image} alt={name+"_poster"}/></p>
    </div>
}

// Dynamic component generation and map function
const movieList = [
  {
    name:"Tenet",
    image:"https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    name:"Interstella",
    image:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg"
  },
  {
    name:"The Dark Knight",
    image:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  },
  {
    name:"Memento",
    image:"https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,681,1000_AL_.jpg"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Hello world!!!!</h1>
      <p>이 안에는 HTML이 작성된다</p>
      <p>컴포넌트는 HTML을 반환하는 함수!</p>
      {/* 
        This is how to comment
        
        For this 'Movie' component, we created property 'name' and value 'tenet'
        
        this is how information is transferred into components, like how its done in HTML elements


      */}

      <Movie name="about time" />

      <Movie name="parasite" />

      <Movie name="django" />

      <h1>크리스토퍼 놀란 걸작선</h1>
      {
        movieList.map( (e,idx) => {
          return <Movie key={idx} name={e.name} image={e.image} />
        })}
    </div>
  );

}

export default App;
