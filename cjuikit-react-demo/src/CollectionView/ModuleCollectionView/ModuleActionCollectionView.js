/**
 * ModuleActionCollectionView.js
 *
 * @Description: RN模块里常见的首页集合视图
 *
 * @author      chaoqian.li
 * @date        2019-11-07 13:02:02
 */
import React, {Component} from 'react';
// import { Alert, Dimensions } from 'react-native';
import PropTypes from "prop-types";
// import { ModuleCollectionView } from '@luckin/react-native-base-list';
// import { LKRouteUtil } from "@luckin/react-native-theme-uikit";
import ModuleCollectionView from "./ModuleCollectionView";

export default class ModuleActionCollectionView extends Component {
    static propTypes = {
        moduleModels: PropTypes.array,
    }

    static defaultProps = {
        moduleModels: [],
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    _execModuleModel= (index)=>{
        let moduleModel = this.props.moduleModels[index];
        console.log( '点击了moduleIndex = ' + index + "; title" + moduleModel.title);

        if (moduleModel.clickButtonHandle) {
            moduleModel.clickButtonHandle(index, moduleModel);
        } else if (moduleModel.nextPageName && moduleModel.nextPageName.length > 0) {
            console.log('准备进入下一页' +  moduleModel.nextPageName);
            console.log( 'history = ' + this.props.history);
            this.props.history && this.props.history.push(moduleModel.nextPageName);
            // this.props.navigation.navigate(moduleModel.nextPageName);
            // LKRouteUtil.push(this.props.navigation, moduleModel.nextPageName, {});
        } else {
            // Alert.alert("提示：请至少设置 moduleModel.clickButtonHandle 或 moduleModel.nextPageName");
        }
    }



    render() {
        // const screenWidth = Dimensions.get('window').width;
        const screenWidth = window.screen.width;
        console.log('screenWidth = ' + screenWidth);
        const listWidth = screenWidth;

        return (
            <ModuleCollectionView
                // style={{paddingHorizontal: 40}}   //谨记：这边设置无效
                listWidth={listWidth}
                sectionInset={{top:15, left:15, bottom:15, right:15}}
                cellWidthFromPerRowMaxShowCount={2} // 水平方向上的列数 & 通过每行可显示的最多个数来设置每个cell的宽度
                // cellWidthFromFixedWidth={165}       // 通过cell的固定宽度来设置每个cell的宽度
                widthHeightRatio={165/165}
                minimumInteritemSpacing={15}
                minimumLineSpacing={10}
                dataModels={this.props.moduleModels}
                clickButtonHandle={this._execModuleModel}
            />
        );
    }
}
