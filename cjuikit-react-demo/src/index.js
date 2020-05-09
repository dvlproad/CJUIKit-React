import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './TS1StudyListPage';
// import App from './TS2TestBaseCollectionViewPage';
// import App from './TS3TestCollectionViewCellPage';
// import App from './TS4CollectionViewPage';
// import App from './TSModulesEntryListPage';
import App from './TSImagesChooseListPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
