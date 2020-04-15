import React from 'react';
import logo from './logo.svg';
import './App.css';
import awaitUrl from './resources/images/icon_await_check.png';
import LKModulesEntryList from "./LKModulesEntryList";
import CJCollectionCell from "./CJCollectionCell";

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

    const datas = [
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
    ];

  function NumberList(props) {
    // const numbers = [1, 2, 3, 4, 5, 6];
    // return (
    //     numbers.map((number) =>
    //         <li key={number.toString()}>
    //           {number}
    //         </li>
    //     )
    // );
      return (
          datas.map((item) =>
              <div key={item.title}
                  numColumns={2}
              >
                  <CJCollectionCell
                      style={[{
                          width: 100,
                          height: 100,
                          marginRight: 10,
                          marginBottom: 10,
                          backgroundColor: '#FFFFFF',
                          borderRadius: 6,
                          borderWidth: 0,
                      }, {
                          backgroundColor: '#FFFFFF',
                          borderRadius: 6,
                          borderWidth: 0,
                      }]}

                      moduleModel={{
                          title: "通知发货",
                          imageSource: require('./resources/images/icon_await_check.png'),
                          nextPageName: "TSDescriptionListPage",
                      }}
                      // clickButtonHandle={this.props.clickButtonHandle}
                  />
              </div>
          )
      );
  }



  return (
      <NumberList />

  //     <li
  //         style={{ backgroundColor: '#F4F4F4' }}
  //         // scrollEnabled={this.props.scrollEnabled}
  //         data={datas}
  //         keyExtractor={(item, index) => index.toString()}
  //         renderItem={({ item, index }) => {
  //           let cellMarginRight = 10;
  //           let cellMarginBottom = 10;
  //
  //           let defaultCollectCellStyle = {
  //             width: 100,
  //             height: 100,
  //             marginRight: cellMarginRight,
  //             marginBottom: cellMarginBottom,
  //             backgroundColor: '#FFFFFF',
  //             borderRadius: 6,
  //             borderWidth: 0,
  //           };
  //
  //           return (
  //               this.renderCollectionCell(item, index, defaultCollectCellStyle)
  //           )
  //         }}
  //         numColumns={2}
  //
  //         // ListHeaderComponent={listHeaderComponent}
  //     />
  )

  // return (
  //     <LKModulesEntryList
  //         // navigation={this.props.navigation}
  //         moduleModels={ [
  //           {
  //             title: "通知发货",
  //             imageSource: require('./resources/images/icon_await_check.png'),
  //             nextPageName: "TSDescriptionListPage",
  //           },
  //           {
  //             title: "采购单查询",
  //             imageSource: require('./resources/images/icon_await_check.png'),
  //             nextPageName: "TSDescriptionListPage",
  //           },
  //         ]}
  //     />
  // );

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
