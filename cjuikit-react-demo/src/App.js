import React from 'react';
import logo from './logo.svg';
import './App.css';
import LKModulesEntryList from "./LKModulesEntryList";
import CJCollectionCell from "./CJCollectionCell";
import CJCollectionView from "./CJCollectionView";

function App() {
  // return (
  //     <CJCollectionCell
  //         style={[{
  //           width: 100,
  //           height: 100,
  //           marginRight: 10,
  //           marginBottom: 10,
  //           backgroundColor: '#FFFFFF',
  //           borderRadius: 6,
  //           borderWidth: 0,
  //         }, {
  //           backgroundColor: '#FFFFFF',
  //           borderRadius: 6,
  //           borderWidth: 0,
  //         }]}
  //
  //         moduleModel={{
  //           title: "通知发货",
  //           imageSource: require('./resources/images/icon_await_check.png'),
  //           nextPageName: "TSDescriptionListPage",
  //         }}
  //         // clickButtonHandle={this.props.clickButtonHandle}
  //     />
  // );

    const moduleModels = [
        {
            title: "通知发货1",
            imageSource: require('./resources/images/icon_await_check.png'),
            nextPageName: "TSDescriptionListPage",
        },
        {
            title: "采购单查询2",
            imageSource: require('./resources/images/icon_await_check.png'),
            nextPageName: "TSDescriptionListPage",
        },
        {
            title: "通知发货3",
            imageSource: require('./resources/images/icon_await_check.png'),
            nextPageName: "TSDescriptionListPage",
        },
        {
            title: "采购单查询4",
            imageSource: require('./resources/images/icon_await_check.png'),
            nextPageName: "TSDescriptionListPage",
        },
        {
            title: "采购单查询5",
            imageSource: require('./resources/images/icon_await_check.png'),
            nextPageName: "TSDescriptionListPage",
        },
        {
            title: "采购单查询6",
            imageSource: require('./resources/images/icon_await_check.png'),
            nextPageName: "TSDescriptionListPage",
        },
    ];

  function NumberList1(props) {
    const numbers = [1, 2, 3, 4, 5, 6];
    return (
        numbers.map((number) =>
            <li key={number.toString()}>
              {number}
            </li>
        )
    );
  }


  function NumberList2(props) {
      const numbers = [1, 2, 3, 4, 5, 6];
      return (
          <div style={{
              // flex:1,
              display: 'flex',
              backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
          }}
          >
              {
                  numbers.map((number) =>
                      <li key={number.toString()}>
                          {number}
                      </li>
                  )
              }
          </div>
      );
  }

  function CollectionView1(props) {
      return (
          <div style={{
              flex:1,
              display: 'flex',
              flexWrap: 'wrap',
              backgroundColor:'red',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
          }}
          >
              {
                  moduleModels.map((moduleModel, index) => {
                      return (
                          <CJCollectionCell
                              key={index.toString()}
                              style={{
                                  width: 100,
                                  height: 100,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  backgroundColor: 'blue',
                                  borderRadius: 6,
                                  borderWidth: 0,
                                  display: 'inline-block',
                                  // flex: 1,
                                  justifyContent: 'center',
                                  alignItems: 'center'
                              }}

                              moduleModel={{
                                  title: "通知发货",
                                  imageSource: require('./resources/images/icon_await_check.png'),
                                  nextPageName: "TSDescriptionListPage",
                              }}
                              // clickButtonHandle={this.props.clickButtonHandle}
                          />
                      )
                  })
              }
          </div>
      )
  }


    function CollectionView2(props) {
        // const screenWidth = Dimensions.get('window').width;
        const screenWidth = window.screen.width;
        const listWidth = screenWidth;

        return (
            <CJCollectionView
                // style={{paddingHorizontal: 40}}   //谨记：这边设置无效
                style={{backgroundColor: 'green', boxSizing: 'border-box'}}
                listWidth={listWidth}
                sectionInset={{top:15, left:15, bottom:15, right:15}}
                cellWidthFromPerRowMaxShowCount={2} // 水平方向上的列数 & 通过每行可显示的最多个数来设置每个cell的宽度
                // cellWidthFromFixedWidth={165}       // 通过cell的固定宽度来设置每个cell的宽度
                widthHeightRatio={165/165}
                minimumInteritemSpacing={15}
                minimumLineSpacing={10}
                dataModels={moduleModels}
                // clickButtonHandle={this._execModuleModel}
            />
        );
    }

    function ModulesEntryList(props) {
        return (
            <LKModulesEntryList
                // navigation={this.props.navigation}
                moduleModels={ [
                    {
                        title: "通知发货",
                        imageSource: require('./resources/images/icon_await_check.png'),
                        nextPageName: "TSDescriptionListPage",
                    },
                    {
                        title: "采购单查询",
                        imageSource: require('./resources/images/icon_await_check.png'),
                        nextPageName: "TSDescriptionListPage",
                    },
                ]}
            />
        )
    }

    let testType = 5;
    if (testType === 1) {
        return (
            <NumberList1 />
        );
    } else if (testType === 2) {
        return (
            <NumberList2 />
        );
    } else if (testType === 3) {
        return (
            <CollectionView1 />
        );
    } else if (testType === 4) {
        return (
            <CollectionView2 />
        );
    } else if (testType === 5) {
        return (
            <ModulesEntryList />
        )
    }


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <img src={require('./resources/images/icon_await_check.png')}></img>
  //
  //       <button onClick={() => this.setState({ liked: true })}>
  //         Like
  //       </button>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
