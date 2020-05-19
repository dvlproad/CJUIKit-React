import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';

// TRY11CollectionViewDemo(测试 CollectionView)
// import App from './TRY11CollectionViewDemo/TS1StudyListPage';
// import App from './TRY11CollectionViewDemo/TS1StudyImageListPage';
// import App from './TRY11CollectionViewDemo/TS2BaseCollectionViewPage';
// import App from './TRY11CollectionViewDemo/TS2BaseActionCollectionViewPage';


// import App from './TS31ModuleCollectionViewCellPage';
// import App from './TS32ModuleCollectionViewPage';
// import App from './TS33ModuleActionCollectionViewPage';


// TRY21ImageWithNoneCollectionViewCellDemo
// import App from './TRY21ImageWithNoneCollectionViewCellDemo/TS42ImageLookWithNoneCollectionViewCellPage';
// import App from './TRY21ImageWithNoneCollectionViewCellDemo/TS51ImageActionWithNoneCollectionViewCellPage';


// TRY31ActivityIndicatorOverlayDemo(测试 ActivityIndicatorOverlay)
// import App from "./TRY31ActivityIndicatorOverlayDemo/TS2StudyActivityIndicatorPage";
// import App from "./TRY31ActivityIndicatorOverlayDemo/TS2ActivityIndicatorOverlayPage";


// TRY32ImageWithActivityIndicatorOverlayCollectionViewCellDemo
// import App from './TRY32ImageWithActivityIndicatorOverlayCollectionViewCellDemo/TS43ImageLookWithLoadingCollectionViewCellPage';
// import App from './TRY32ImageWithActivityIndicatorOverlayCollectionViewCellDemo/TS52ImageActionWithLoadingCollectionViewCellPage';


// TRY41StateTextOverlayDemo(测试 StateTextOverlay)
// import App from "./TRY41StateTextOverlayDemo/TS3StateTextOverlayPage";

// TRY42ImageWithStateTextOverlayCollectionViewCellDemo
// import App from './TRY42ImageWithStateTextOverlayCollectionViewCellDemo/TS43ImageLookWithStateTextCollectionViewCellPage';
// import App from './TRY42ImageWithStateTextOverlayCollectionViewCellDemo/TS52ImageActionWithStateTextCollectionViewCellPage';





// TRY51ImageWithOverlayCollectionViewCellDemo
// import App from "./TRY51ImageWithOverlayCollectionViewCellDemo/TS53ImageActionWithOverlayCollectionViewCellPage";

import App from './TRY61ImageActionCollectionViewDemo/TSImageActionCollectionViewPage';
// import App from './TRY71ImagesChooseListDemo/TSImagesChooseListPage';

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
