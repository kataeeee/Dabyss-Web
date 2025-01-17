import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/HomeComponents/Home";
import Games from "./components/GameComponents/Games";
import GameArticle from "./components/GameComponents/GameArticle";
import Blog from "./components/BlogComponents/Blog";
import BlogArticle from "./components/BlogComponents/BlogArticle";

const App = () => {
  return (
    <Router>
      <div>
        <Header></Header>
        <Route exact path="/" component={Home} />
        <Route exact path="/Games" component={Games} />
        <Route
          exact
          path="/Games/:id"
          render={(props) => <GameArticle {...props} />}
        />
        <Route exact path="/Blog" component={Blog} />
        <Route
          exact
          path="/Blog/:id"
          render={(props) => <BlogArticle {...props} />}
        />
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
