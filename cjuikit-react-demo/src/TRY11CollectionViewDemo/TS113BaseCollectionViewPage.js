import React, {Component} from 'react';
import PropTypes from "prop-types";
import BaseCollectionView from "../CollectionView/Base/BaseCollectionView";

export default class TS113BaseCollectionViewPage extends Component {
    render() {
        const imageSources = [
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
        ];

        // const screenWidth = Dimensions.get('window').width;
        const screenWidth = window.screen.width;
        const listWidth = screenWidth;

        return (
            <BaseCollectionView
                // style={{paddingHorizontal: 40}}   //谨记：这边设置无效
                style={{backgroundColor: 'green', boxSizing: 'border-box'}}
                listWidth={listWidth}
                sectionInset={{top:15, left:15, bottom:15, right:15}}
                cellWidthFromPerRowMaxShowCount={2} // 水平方向上的列数 & 通过每行可显示的最多个数来设置每个cell的宽度
                // cellWidthFromFixedWidth={165}       // 通过cell的固定宽度来设置每个cell的宽度
                widthHeightRatio={400/165}
                minimumInteritemSpacing={15}
                minimumLineSpacing={10}
                dataModels={imageSources}
                renderCollectionCell={(item, index, defaultCollectCellStyle)=>{
                    let richCollectCellStyle = {
                        backgroundColor: '#FFFFFF',
                        borderRadius: 6,
                        borderWidth: 0,
                    };
                    let collectCellStyle = Object.assign(defaultCollectCellStyle, richCollectCellStyle);

                    //let collectCellStyle = { ...defaultCollectCellStyle, ...richCollectCellStyle}; //方法二
                    return (
                        <img
                            style={collectCellStyle}
                            key={index.toString()}

                            src={item}
                        />
                    );
                }}
                // clickButtonHandle={this._execModuleModel}
            />
        );
    }
}