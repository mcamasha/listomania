import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Routers';
import * as serviceWorker from './serviceWorker';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import resources from './Configs/i18n'
import 'bootstrap/dist/css/bootstrap.css';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
