/**
 * TS33ModuleActionCollectionViewPage.js
 *
 * @Description: TS33ModuleActionCollectionViewPage
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2020-01-13 14:10:58
 *
 * Copyright (c) dvlproad. All rights reserved.
 */
import React, { Component } from 'react';

// import {
//     CJTSDefaultImages,
//     CJTSNavigationFactory,
// } from 'cjrn-demo-base';

// import { ModuleActionCollectionView } from '@luckin/react-native-theme-list';

import  ModuleActionCollectionView from './CollectionView/ModuleCollectionView/ModuleActionCollectionView';

export default class TS33ModuleActionCollectionViewPage extends Component {
    // static navigationOptions = ({navigation}) => {
    //     return CJTSNavigationFactory.backPageNavigationOptions({navigation}, `模块功能入口列表`)
    // };

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
            <ModuleActionCollectionView
                // navigation={this.props.navigation}
                moduleModels={moduleModels}
            />
        );
    }
}
