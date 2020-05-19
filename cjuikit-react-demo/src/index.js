import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';

// TRY11CollectionViewDemo(测试 CollectionView)
// import App from './TRY11CollectionViewDemo/TS111StudyListPage';
// import App from './TRY11CollectionViewDemo/TS112StudyImageListPage';
// import App from './TRY11CollectionViewDemo/TS113BaseCollectionViewPage';
// import App from './TRY11CollectionViewDemo/TS114BaseActionCollectionViewPage';


// import App from './TS31ModuleCollectionViewCellPage';
// import App from './TS32ModuleCollectionViewPage';
// import App from './TS33ModuleActionCollectionViewPage';


// TRY21ImageWithNoneCollectionViewCellDemo
// import App from './TRY21ImageWithNoneCollectionViewCellDemo/TS211ImageLookWithNoneCollectionViewCellPage';
// import App from './TRY21ImageWithNoneCollectionViewCellDemo/TS212ImageActionWithNoneCollectionViewCellPage';


// TRY31ActivityIndicatorOverlayDemo(测试 ActivityIndicatorOverlay)
// import App from "./TRY31ActivityIndicatorOverlayDemo/TS311StudyActivityIndicatorPage";
// import App from "./TRY31ActivityIndicatorOverlayDemo/TS312ActivityIndicatorOverlayPage";


// TRY32ImageWithActivityIndicatorOverlayCollectionViewCellDemo
// import App from './TRY32ImageWithActivityIndicatorOverlayCollectionViewCellDemo/TS321ImageLookWithLoadingCollectionViewCellPage';
// import App from './TRY32ImageWithActivityIndicatorOverlayCollectionViewCellDemo/TS322ImageActionWithLoadingCollectionViewCellPage';


// TRY41StateTextOverlayDemo(测试 StateTextOverlay)
// import App from "./TRY41StateTextOverlayDemo/TS411StateTextOverlayPage";
// import App from "./TRY41StateTextOverlayDemo/TS412UploadStateTextOverlayPage";

// TRY42ImageWithStateTextOverlayCollectionViewCellDemo
// import App from './TRY42ImageWithStateTextOverlayCollectionViewCellDemo/TS421ImageLookWithStateTextCollectionViewCellPage';
// import App from './TRY42ImageWithStateTextOverlayCollectionViewCellDemo/TS422ImageActionWithStateTextCollectionViewCellPage';





// TRY51ImageWithOverlayCollectionViewCellDemo
import App from "./TRY51ImageWithOverlayCollectionViewCellDemo/TS511ImageActionWithOverlayCollectionViewCellPage";
// import App from './TRY61ImageActionCollectionViewDemo/TS611ImageActionCollectionViewPage';
// import App from './TRY71ImagesChooseListDemo/TS711ImagesChooseListPage';

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
