import React, {Component} from 'react';
import ModuleCollectionViewCell from "./CollectionView/ModuleCollectionView/ModuleCollectionViewCell";

export class TS31ModuleCollectionViewCellPage extends Component {
    render() {
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
                            <ModuleCollectionViewCell
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

                                moduleModel={moduleModels}
                                // clickButtonHandle={this.props.clickButtonHandle}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
