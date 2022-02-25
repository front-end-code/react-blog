import { React}  from 'react';
import Navbar from './Navbar';
import Home from './Home';
import CreateBlog from './CreateBlog';
import Sidebar from './Sidebar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';

const App = () => {

  return (
    <BrowserRouter>
      <div className='bg-info'>
          <Navbar />
          <div className="container">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/blogs/:id">
                  <BlogDetails />
                </Route>
                <Route exact path="/create">
                  <CreateBlog />
                </Route>
              </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
