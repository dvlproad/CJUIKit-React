/**
 * ModuleCollectionView.jsw.js
 *
 * @Description: 默认的集合视图（使用 ModuleCollectionViewCell,即含图片和文字竖直居中的Cell）
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2019-07-13 10:43:11
 *
 * Copyright (c) dvlproad. All rights reserved.
 */
import React from 'react';
import PropTypes from "prop-types";
// import {View, ViewPropTypes} from "react-native";
import ModuleCollectionViewCell  from './ModuleCollectionViewCell';
import BaseCollectionView from '../Base/BaseCollectionView';
// import ObjectCJHelper from './Helper/ObjectCJHelper';

// const viewPropTypes = ViewPropTypes || View.propTypes;
// const stylePropTypes = viewPropTypes.style;

export default class ModuleCollectionView extends BaseCollectionView {
    static propTypes = {
        dataModels: PropTypes.array,
        imageDefaultSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        // imageBorderStyle: stylePropTypes,       //非添加按钮的图片的边框样式(添加按钮的边框默认无)

        clickButtonHandle: PropTypes.func,
    };

    static defaultProps = {
        dataModels: [],
        listWidth: 0,
        sectionInset: { top: 0, left: 0, bottom: 0, right: 0 },
        minimumInteritemSpacing: 10,
        minimumLineSpacing: 10,

        cellWidthFromPerRowMaxShowCount: 4,
        widthHeightRatio: 1.0,  //宽高的比例

        //imageDefaultSource: '',
        imageBorderStyle: {
            borderRadius: 6,
            borderWidth: 0,
            borderColor: "#E5E5E5",
        },

        clickButtonHandle: (buttonIndex)=>{},
    };

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    renderCollectionCell(item, index, defaultCollectCellStyle) {
        let richCollectCellStyle = {
            backgroundColor: '#FFFFFF',
            borderRadius: 6,
            borderWidth: 0,
        };
        let collectCellStyle = Object.assign(defaultCollectCellStyle, richCollectCellStyle);

        //let collectCellStyle = { ...defaultCollectCellStyle, ...richCollectCellStyle}; //方法二
        return (
            <ModuleCollectionViewCell
                style={collectCellStyle}
                key={index.toString()}

                moduleModel={item}
                defaultSource={this.props.imageDefaultSource}
                imageBorderStyle={this.props.imageBorderStyle}

                buttonIndex={index}
                clickButtonHandle={()=>{
                    this.props.clickButtonHandle(index);
                }}

                needLoadingAnimation={item.needLoadingAnimation}
            />
        );
    }

    render() {
        return super.render();
    }

}
