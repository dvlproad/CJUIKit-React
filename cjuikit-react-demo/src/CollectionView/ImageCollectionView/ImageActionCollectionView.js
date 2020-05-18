/**
 * CJImageLookCollectionView.jsw.js
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

import React, {Component} from 'react';
import PropTypes from "prop-types";
// import {View, ViewPropTypes} from "react-native";

import BaseActionCollectionView from "../Base/BaseActionCollectionView";
import ImageActionCollectionViewCell  from './ImageCollectionViewCell/ImageActionCollectionViewCell';


// const viewPropTypes = ViewPropTypes || View.propTypes;
// const stylePropTypes = viewPropTypes.style;

/// 图片来源
export var ImageUploadType = {
    NotNeed: 0,     /**< 不需要上传 */
    Waiting: 1,     /**< 等待上传 */
    Uploading: 2,   /**< 正在上传 */
    Success: 3,     /**< 上传成功 */
    Failure: 4,     /**< 上传失败 */
};

export default class ImageActionCollectionView extends Component {
    static propTypes = {
        ...BaseActionCollectionView.propTypes,

        dataModels: PropTypes.array,
        imageDefaultSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        // imageBorderStyle: stylePropTypes,       // 非添加按钮的图片的边框样式(添加按钮的边框默认无)

        clickButtonHandle: PropTypes.func,
        deleteButtonWidth: PropTypes.number,    // 删除按钮的大小
        imageTopRightForDeleteButtonCenterOffset: PropTypes.number, // 图片右上角坐标与删除按钮中心坐标的偏移(平时默认两个点是重合的，即此值为0；若此需要图片右上角坐标往删除按钮中心的右上角靠，此时图片区域会变大，请填正数；反之，填负数)

        imageLoadedCountChange: PropTypes.func, // 完成加载的图片个数发生变化的回调


        browseImageHandle: PropTypes.func,
        addImageHandle: PropTypes.func,
        deleteImageHandle: PropTypes.func,

        isEditing: PropTypes.bool,
        hasAddIconWhenEditing: PropTypes.bool,  // 在编辑时候是否显示添加图片的按钮
        imageMaxCount: PropTypes.number,        // 最大显示的图片个数(当达到指定图片最大量后，添加图片按钮不在显示)
        // addImageSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),       // 添加图片的数据源
    };

    static defaultProps = {
        ...BaseActionCollectionView.defaultProps,

        dataModels: [],
        listWidth: 0,
        sectionInset: { top: 0, left: 0, bottom: 0, right: 0 },
        minimumInteritemSpacing: 10,
        minimumLineSpacing: 10,
        scrollEnabled: true,

        cellWidthFromPerRowMaxShowCount: 4,
        widthHeightRatio: 1.0,  //宽高的比例

        //imageDefaultSource: '',
        imageBorderStyle: {
            borderRadius: 6,
            borderWidth: 0,
            borderColor: "#E5E5E5",
        },

        clickButtonHandle: (buttonIndex)=>{},
        deleteButtonWidth: 24,
        imageTopRightForDeleteButtonCenterOffset: 2,

        imageLoadedCountChange: (imageLoadedCount, isImageAllLoaded)=>{},


        browseImageHandle: (buttonIndex)=>{},
        addImageHandle: (buttonIndex)=>{},
        deleteImageHandle: (buttonIndex)=>{},

        isEditing: false,
        hasAddIconWhenEditing: true,
        imageMaxCount: 10000,
        addImageSource: require('./resources/add_image@2x.png'),
    };

    constructor(props) {
        super(props);
        this.state = {
            addIconCurIndex: -1,
            imageLoadedCount: 0//完成加载的图片个数
        }
    }

    // componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
    //     if (this.props.dataModels !== nextProps.dataModels){
    //
    //     }
    // }


    componentDidMount() {
        let isImageAllLoaded = this.props.dataModels.length === 0;
        if (isImageAllLoaded) {
            this.props.imageLoadedCountChange(this.state.imageLoadedCount, isImageAllLoaded);
        }
    }


    renderDataCollectionCell(item, index, defaultCollectCellStyle) {
        let richCollectCellStyle = {
            backgroundColor: 'transparent',
            borderRadius: 4,
            borderWidth: 0,
        };
        // let collectCellStyle = [defaultCollectCellStyle, richCollectCellStyle];  // TODO: 请确认并修正使用此方式时候，CJLoadingImage的布局
        let collectCellStyle = Object.assign(defaultCollectCellStyle, richCollectCellStyle);
        // let collectCellStyle = defaultCollectCellStyle;

        return (
            <ImageActionCollectionViewCell
                key={index.toString()}
                style={collectCellStyle}

                src={item.imageSource}
                defaultSource={this.props.imageDefaultSource}
                imageBorderStyle={this.props.imageBorderStyle}

                buttonIndex={index}
                // onLoadComplete={this.props.onLoadComplete}
                onLoadComplete={(buttonIndex)=>{
                    this.onLoadComplete(buttonIndex)
                }}

                clickButtonHandle={()=>{
                    this.props.browseImageHandle(index)
                }}

                uploadType={item.uploadType}
                uploadProgress={item.uploadProgress}
                needLoadingAnimation={item.needLoadingAnimation}
                changeShowDebugMessage={this.props.changeShowDebugMessage}

                isEditing={this.props.isEditing}
                // isAddIcon={isAddIcon}
                deleteImageHandle={this.props.deleteImageHandle}
                deleteButtonWidth={this.props.deleteButtonWidth}
                imageTopRightForDeleteButtonCenterOffset={this.props.imageTopRightForDeleteButtonCenterOffset}
            />
        );
    }

    onLoadComplete=(buttonIndex)=>{
        this.state.imageLoadedCount = this.state.imageLoadedCount+1;
        let isImageAllLoaded = this.state.imageLoadedCount >= this.props.dataModels.length ? true : false;
        this.props.imageLoadedCountChange(this.state.imageLoadedCount, isImageAllLoaded);

        let message = '';
        if (isImageAllLoaded) {
            message = "所有图片加载完成，总张数为:" + this.state.imageLoadedCount;
        } else {
            message = "图片总进度加载中，当前完成张数:" + this.state.imageLoadedCount;
        }
        console.log(message);
    }


    render() {
        const addImageTopRightPadding = this.props.deleteButtonWidth/2 - this.props.imageTopRightForDeleteButtonCenterOffset;

        return (
            <BaseActionCollectionView
                style={this.props.style}
                listWidth={this.props.listWidth}
                sectionInset={this.props.sectionInset}
                cellWidthFromPerRowMaxShowCount={this.props.cellWidthFromPerRowMaxShowCount} // 水平方向上的列数 & 通过每行可显示的最多个数来设置每个cell的宽度
                // cellWidthFromFixedWidth={165}       // 通过cell的固定宽度来设置每个cell的宽度
                widthHeightRatio={this.props.widthHeightRatio}
                minimumInteritemSpacing={this.props.minimumInteritemSpacing}
                minimumLineSpacing={this.props.minimumLineSpacing}
                dataModels={this.props.dataModels}


                isEditing={this.props.isEditing}
                hasAddIconWhenEditing={this.props.hasAddIconWhenEditing}
                imageMaxCount={this.props.imageMaxCount}
                addImageTopRightPadding={addImageTopRightPadding}
                addImageSource={this.props.addImageSource}
                addImageHandle={(index)=>{
                    console.log("添加图片" + index);
                    this.props.addImageHandle(index);
                }}

                renderDataCollectionCell={(item, index, defaultCollectCellStyle)=>{
                    return this.renderDataCollectionCell(item, index, defaultCollectCellStyle);
                }}
                // clickButtonHandle={this._execModuleModel}
            />
        );
    }
}
