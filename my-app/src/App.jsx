import React from 'react';
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Main />
      <Nav />
      <About />
      <Works />
      <Contact />
    </>
  )
}

export default App;
