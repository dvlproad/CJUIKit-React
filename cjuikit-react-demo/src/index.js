import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';

// import App from './TS1StudyListPage';

// import App from './TS2BaseCollectionViewPage';

// import App from './TS31ModuleCollectionViewCellPage';
// import App from './TS32ModuleCollectionViewPage';
// import App from './TS33ModuleActionCollectionViewPage';

// import App from './TS41ImageLookListPage';
// import App from './TS42ImageLookWithNoneCollectionViewCellPage';
import App from './TS43ImageLookWithStateTextCollectionViewCellPage';

// import App from "./TS43LoadingPage";
// import App from './TS43ImageLookWithLoadingCollectionViewCellPage';

// import App from './TS51ImageActionWithNoneCollectionViewCellPage';
// import App from './TS52ImageActionWithStateTextCollectionViewCellPage';

// import App from './TSImagesChooseListPage';

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
