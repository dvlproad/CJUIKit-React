/**
 * ImageLook1WithNoneCollectionViewCell.js
 *
 * @Description: 图片控件(只含加载动画,但不含其他可操作事件)
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2019-06-07 19:54:15
 *
 * Copyright (c) dvlproad. All rights reserved.
 */
import React, { Component } from 'react';
import PropTypes from "prop-types";
import { ObjectCJHelper } from './ObjectCJHelper';

export default class ImageLook1WithNoneCollectionViewCell extends Component {
    static propTypes = {
        //imageSource: PropTypes.number.isRequired,    //图片
        defaultSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),    //图片加载前的默认显示图
        errorSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),      //图片加载失败的显示图
        // imageBorderStyle: stylePropTypes,   //图片边框样式
    };

    static defaultProps = {
        imageSource: require('./resources/imageDefault.png'),
        defaultSource: require('./resources/imageDefault.png'),
        errorSource: require('./resources/imageError.png'),
        imageBorderStyle: {
            borderRadius: 6,
            borderWidth: 0,
            borderColor: "#E5E5E5",
        },
    };

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        let selfStyle = ObjectCJHelper.dealPropStyle(this.props.style);

        const imageWidth = selfStyle.width;
        const imageHeight = selfStyle.height;

        if (selfStyle.width > 0 && selfStyle.height > 0) {

        } else {
            selfStyle = Object.assign({flex:1}, selfStyle);
        }

        let imageStyle = Object.assign(
            {
                width: imageWidth,
                height: imageHeight,
                borderRadius: 6,
                borderWidth: 0,
                borderColor: "#E5E5E5",
            },
            this.props.imageBorderStyle
        );

        let showingImage = this.props.imageSource;

        return (
            <div
                style={selfStyle}
            >
                <img
                    style={imageStyle}

                    src={showingImage}
                    alt={'alt'}
                    clickButtonHandle={this.props.clickButtonHandle}
                />
            </div>
        );
    }
}
