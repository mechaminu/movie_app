import React from 'react';

function Movie({name}) {
  console.log({name});
  return <p>i like {name}</p>
}

// Component
function App() {
  return (
    <div className="App">
      <h>Hello world!!!!</h>
      <p>이 안에는 HTML이 작성된다</p>
      <p>컴포넌트는 HTML을 반환하는 함수!</p>
      {/* 
        This is how to comment
        
        For this 'Movie' component, we created property 'name' and value 'tenet'
        
        this is how information is transferred into components, like how its done in HTML elements


      */}

      <Movie name="tenet" />

      <Movie name="about time" />

      <Movie name="parasite" />

      <Movie name="django" />

    </div>
  );
}

export default App;
