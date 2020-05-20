import React, {Component} from 'react';
import ModuleCollectionView from "../CollectionView/ModuleCollectionView/ModuleCollectionView";
import TSModuleModelsUtil from "./TSModuleModelsUtil";

export default class TS32ModuleCollectionViewPage extends Component {
    constructor(props) {
        super(props);

        const moduleModels = TSModuleModelsUtil.moduleModels();
        this.state = {
            moduleModels: moduleModels,
        };
    }

    _execModuleModel= (index)=>{
        let moduleModel = this.state.moduleModels[index];
        console.log( 'index = ' + index + "; title" + moduleModel.title);
    };

    render() {
        const moduleModels = this.state.moduleModels;

        // const screenWidth = Dimensions.get('window').width;
        const screenWidth = window.screen.width;
        const listWidth = screenWidth;

        return (
            <ModuleCollectionView
                // style={{paddingHorizontal: 40}}   //谨记：这边设置无效
                style={{backgroundColor: 'green'}}
                listWidth={listWidth}
                sectionInset={{top: 15, left: 15, bottom: 15, right: 15}}
                cellWidthFromPerRowMaxShowCount={2} // 水平方向上的列数 & 通过每行可显示的最多个数来设置每个cell的宽度
                // cellWidthFromFixedWidth={165}       // 通过cell的固定宽度来设置每个cell的宽度
                widthHeightRatio={165 / 165}
                minimumInteritemSpacing={15}
                minimumLineSpacing={10}
                dataModels={moduleModels}
                clickButtonHandle={this._execModuleModel}
            />
        );
    }
}
