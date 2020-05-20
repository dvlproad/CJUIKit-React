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

import ModuleActionCollectionView from '../CollectionView/ModuleCollectionView/ModuleActionCollectionView';
import TSModuleModelsUtil from "./TSModuleModelsUtil";

export default class TS33ModuleActionCollectionViewPage extends Component {
    // static navigationOptions = ({navigation}) => {
    //     return CJTSNavigationFactory.backPageNavigationOptions({navigation}, `模块功能入口列表`)
    // };

    render() {
        const moduleModels = TSModuleModelsUtil.moduleModels();

        return (
            <ModuleActionCollectionView
                // navigation={this.props.navigation}
                moduleModels={moduleModels}
            />
        );
    }
}
