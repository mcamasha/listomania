import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from 'Core/Components/Header'; // Modules
import {Provider} from 'react-redux'
import {store} from '../Store/store'
import MainPage from '../Modules/MainPage';
import {I18nextProvider} from "react-i18next";
import i18next from 'i18next';
import resources from '../Configs/i18n'
import {ELanguage} from "Core/Enums";
import BoardPage from "Modules/Board/Pages/BoardPage";

i18next.init({
    interpolation: {escapeValue: false},
    lng: ELanguage.ENGLISH,
    resources
});

const App = () => {
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18next}>
                <Router>
                    <div>
                        <Header />

                        <Route
                            exact
                            path={["/", "/boards"]}
                            component={MainPage}
                        />
                        <Route path="/board/:id" component={BoardPage} />
                        {/* <Route path="/topics" component={Topics} /> */}
                    </div>
                </Router>
            </I18nextProvider>
        </Provider>
    );
}

export default App;