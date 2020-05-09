import React from 'react';
import logo from './logo.svg';
import './App.css';
import CJCollectionCell from "./CJCollectionCell";

function App() {
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

    function TSCollectionViewCellPage() {
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

    return (
        <TSCollectionViewCellPage />
    );
}

export default App;
