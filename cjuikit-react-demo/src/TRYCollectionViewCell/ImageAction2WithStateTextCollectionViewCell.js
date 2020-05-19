/**
 * ImageAction2WithStateTextCollectionViewCell.js
 *
 * @Description: ImageActionCollectionViewCell（3含SateText，附情况1都不含None，2含Loading，3含SateText）
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2019-06-07 19:43:53
 *
 * Copyright (c) dvlproad. All rights reserved.
 */
import React, { Component } from 'react';
import PropTypes from "prop-types";
// const viewPropTypes = ViewPropTypes || View.propTypes;
// const stylePropTypes = viewPropTypes.style;
import CellStateTextOverlay from "./CellStateTextOverlay";
import CellDeleteButton from "./CellDeleteButton";


export default class ImageAction2WithStateTextCollectionViewCell extends Component {
    static propTypes = {
        //imageSource: PropTypes.number.isRequired,    //图片
        defaultSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        // imageBorderStyle: stylePropTypes,   //图片边框样式

        clickButtonHandle: PropTypes.func,
        deleteButtonWidth: PropTypes.number,    // 删除按钮的大小
        imageTopRightForDeleteButtonCenterOffset: PropTypes.number, // 图片右上角坐标与删除按钮中心坐标的偏移(平时默认两个点是重合的，即此值为0；若此需要图片右上角坐标往删除按钮中心的右上角靠，此时图片区域会变大，请填正数；反之，填负数)
        deleteImageHandle: PropTypes.func,
        buttonIndex: PropTypes.number,

        isEditing: PropTypes.bool,
        isAddIcon: PropTypes.bool,   //是否是添加按钮，编辑状态时候，添加按钮，不显示右上角的删除

        onLoadComplete: PropTypes.func, //图片加载结束的回调

        stateTextHeightPercent: PropTypes.number,  // 图片上的状态文本视图所占的高度百分比
        stateTextString: PropTypes.string,   // 图片上的状态文本
    };

    static defaultProps = {
        imageSource: require('./resources/imageDefault.png'),
        // defaultSource: require('./resources/imageDefault.png'),
        imageBorderStyle: {
            borderRadius: 6,
            borderWidth: 0,
            borderColor: "#E5E5E5",
        },

        clickButtonHandle: (buttonIndex)=>{},
        deleteButtonWidth: 24,
        imageTopRightForDeleteButtonCenterOffset: 2,
        deleteImageHandle: (buttonIndex)=>{},
        buttonIndex: 0,

        isEditing: false,
        isAddIcon: false,

        onLoadComplete: (buttonIndex)=>{},

        stateTextHeightPercent: 0,
        stateTextString: null,
    };

    constructor(props) {
        super(props);

        this.state = {

        }
    }



    render() {
        const { style } = this.props;

        const boxWidth = this.props.style.width;
        const boxHeight = this.props.style.height;
        let boxStyle = Object.assign(
            {width:boxWidth},
            style,
        );

        // 图片删除按钮
        const deleteButtonWidth = this.props.deleteButtonWidth;
        let shouldShowDeleteButton = this.props.isEditing && !this.props.isAddIcon;
        let deleteButtonStyle = {
            position:'absolute',
            width: deleteButtonWidth,
            height: deleteButtonWidth,
        };
        let deleteImageButton = shouldShowDeleteButton ?
            (
                <CellDeleteButton
                    style={deleteButtonStyle}
                    onPress={()=> {
                        this.props.deleteImageHandle(this.props.buttonIndex);
                    }}
                />
            )
            :
            null;

        // 图片展示视图
        const imageTopRightPadding = deleteButtonWidth/2 - this.props.imageTopRightForDeleteButtonCenterOffset;
        const imageWidth = boxWidth-imageTopRightPadding;
        const imageHeight = boxHeight-imageTopRightPadding;

        let imageStyle = {
            width: imageWidth,
            height: imageHeight,
            marginTop: imageTopRightPadding,
            marginRight:imageTopRightPadding
        };

        return (
            <div
                style={boxStyle}
                onClick={()=> {
                    this.props.clickButtonHandle(this.props.buttonIndex);
                }}
            >
                <div
                    style={{
                        display:'flex',
                        position: 'relative',
                        flex:1,
                        flexDirection:"row-reverse"
                    }}
                >
                    <img
                        style={imageStyle}
                        src={this.props.imageSource}
                        alt={'alt'}
                    />
                    <CellStateTextOverlay
                        style={Object.assign(
                            {position:'absolute', top: 0, left: 0, bottom: 0, right: 0},
                            this.props.imageBorderStyle
                        )}
                        stateTextString={this.props.stateTextString}
                        stateTextHeightPercent={this.props.stateTextHeightPercent}
                    />
                    {deleteImageButton}
                </div>
            </div>
        );
    }
}
