import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Header} from "../Core/Components/Header";
import Boards from "../Modules/Boards";

const App = () => {
    return (
      <Router>
        <div>
          <Header />

          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/boards" component={Boards} />
          {/* <Route path="/topics" component={Topics} /> */}
        </div>
      </Router>
    );
}

export default App;