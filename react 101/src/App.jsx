import React from 'react'
import Home from "./srcs/page/home";
import Input from "./srcs/page/input";
import Nav from './srcs/page/compro_n/nav';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  Nav(1, 2)
  return (
    < >

      <Nav
        logo="logo"
        home_text="home"
        text_nav_1="img"
        text_nav_2=""
        text_nav_3="" />

      <Home />
      <hr />
      <Input />
    </>
  )
}

export default App;