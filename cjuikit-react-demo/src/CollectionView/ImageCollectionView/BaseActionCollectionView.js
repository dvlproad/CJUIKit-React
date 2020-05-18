/**
 * BaseActionCollectionView.jsw.js
 *
 * @Description: 图片列表【不仅显示，且可增删】的集合视图
 *               ImageActionCollectionView（1样式纯自定义，，附情况1样式纯自定义，2含样式已封装成APP风格）
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2019-07-13 10:43:11
 *
 * Copyright (c) dvlproad. All rights reserved.
 */

import React from 'react';
import PropTypes from "prop-types";
import AddCell from "./ImageCollectionViewCell/AddCell";

import BaseCollectionView from '../Base/BaseCollectionView';

// const viewPropTypes = ViewPropTypes || View.propTypes;
// const stylePropTypes = viewPropTypes.style;

export default class BaseActionCollectionView extends BaseCollectionView {
    static propTypes = {
        ...BaseCollectionView.propTypes,

        renderDataCollectionCell: PropTypes.func,       // 绘制cell，默认不用传

        isEditing: PropTypes.bool,
        hasAddIconWhenEditing: PropTypes.bool,  // 在编辑时候是否显示添加图片的按钮
        imageMaxCount: PropTypes.number,        // 最大显示的图片个数(当达到指定图片最大量后，添加图片按钮不在显示)
        addImageTopRightPadding: PropTypes.number, // 添加按钮的右上角与边框的间距
        // addImageSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),       // 添加图片的数据源
        addImageHandle: PropTypes.func,
    };

    static defaultProps = {
        ...BaseCollectionView.defaultProps,

        renderDataCollectionCell:(item, index, defaultCollectCellStyle)=>{},

        isEditing: false,
        hasAddIconWhenEditing: true,
        imageMaxCount: 10000,
        addImageTopRightPadding: 10,
        addImageSource: require('../../resources/addImage_common@2x.png'),
        addImageHandle: (buttonIndex)=>{},
    };

    constructor(props) {
        super(props);
        this.state = {
            addIconCurIndex: -1,
        }
    }



    getRenderDataModels(dataModels) {
        // return super.getRenderDataModels(dataModels);

        let renderImageCount = dataModels.length;
        let renderImageSources = Array.from(dataModels);
        const allowAddIconShowing = this.props.isEditing &&
            this.props.hasAddIconWhenEditing;
        if (allowAddIconShowing) {
            let shouldAddAddIcon = renderImageCount < this.props.imageMaxCount;
            if (shouldAddAddIcon) {
                this.state.addIconCurIndex = renderImageCount;

                let addImage = {
                    imageSource: this.props.addImageSource,
                    imageIndex: renderImageCount,
                };
                renderImageSources.splice(renderImageCount, 0, addImage);

            } else {
                this.state.addIconCurIndex = -1;
            }
        } else {
            this.state.addIconCurIndex = -1;
        }
        return renderImageSources;
    }

    renderCollectionCell(item, index, defaultCollectCellStyle) {
        let richCollectCellStyle = {
            backgroundColor: 'transparent',
            borderRadius: 4,
            borderWidth: 0,
        };
        // let collectCellStyle = [defaultCollectCellStyle, richCollectCellStyle];  // TODO: 请确认并修正使用此方式时候，CJLoadingImage的布局
        let collectCellStyle = Object.assign(defaultCollectCellStyle, richCollectCellStyle);
        // let collectCellStyle = defaultCollectCellStyle;

        // Add Cell
        let isAddIcon = index === this.state.addIconCurIndex;
        // const addImageTopRightPadding = this.props.deleteButtonWidth/2 - this.props.imageTopRightForDeleteButtonCenterOffset;
        const addImageTopRightPadding = this.props.addImageTopRightPadding;
        if (isAddIcon) {
            return (
                <AddCell
                    key={index.toString()}
                    style={collectCellStyle}
                    imageTopRightPadding={addImageTopRightPadding}

                    src={item.imageSource}
                    clickButtonHandle={()=>{
                        this.props.addImageHandle(index);
                    }}
                />
            )
        }

        return (
            this.props.renderDataCollectionCell(item, index, defaultCollectCellStyle)
        );
    }


    render() {
        return super.render();
    }
}
