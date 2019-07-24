import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Header} from "../Core/Components/Header";
import Boards from "../Modules/Boards";
import {Provider} from 'react-redux'
import {store} from '../Store/store'
import {withTranslation} from 'react-i18next';

const App = () => {
    return (
        <Provider store={store}>
                <Router>
                    <div>
                        <Header />

                        {/* <Route exact path="/" component={MainPage} /> */}
                        <Route path="/boards" component={Boards} />
                        {/* <Route path="/topics" component={Topics} /> */}
                    </div>
                </Router>
        </Provider>
    );
}

export default App;