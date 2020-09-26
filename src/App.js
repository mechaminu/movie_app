import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home'
// import OldHome from './routes/OldHome'
import About from './routes/About'
import MovieDetail from './routes/MovieDetail'
import Navigation from './components/Navigation'

// Router 종류에서 BrowserRouter를 사용할 수 있지만, Github.io deploy가 번거로워진다.
// HashRouter는 tag를 사용하여, url에 #/가 추가되는 단점이 있지만 보다 단순하다.
function App() {
  return <HashRouter>
          <Navigation />
          <Route path="/" exact={true} component={Home} />
          {/* <Route path="/old" component={OldHome} /> */}
          <Route path="/about" component={About} />
          <Route path="/movie_detail" component={MovieDetail} />
        </HashRouter>
}

export default App;
