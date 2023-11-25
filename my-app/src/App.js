import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
import Container from "./UI/Container/Container";

export default function App() {
  return (
    <div>
      <Header />
      <main className={"content"}>
        <Container>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/category/:name" component={Category}/>
            <Route path="/meal/:id" component={Recipe}/>
          </Switch>
        </Container>
      </main>
    </div>
  );
}


