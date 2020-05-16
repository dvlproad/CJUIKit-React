/**
 * ImageLook2WithStateTextCollectionViewCell.js
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


export default class ImageLook2WithStateTextCollectionViewCell extends Component {
    static propTypes = {
        // imageSource: PropTypes.number.isRequired,    //图片
        // imageBorderStyle: stylePropTypes,   //图片边框样式

        stateTextHeight: PropTypes.number,  // 图片上的状态文本视图所占的高度
        stateTextString: PropTypes.string,   // 图片上的状态文本
    };

    static defaultProps = {
        imageSource: require('./resources/imageDefault.png'),
        imageBorderStyle: {
            borderRadius: 6,
            borderWidth: 0,
            borderColor: "#E5E5E5",
        },

        stateTextHeight: 0,
        stateTextString: null,
    };

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }


    render() {
        let selfStyle = ObjectCJHelper.dealPropStyle(this.props.style);

        const imageWidth = selfStyle.width;
        const imageHeight = selfStyle.height;

        if (selfStyle.width > 0 && selfStyle.height > 0) {

        } else {
            selfStyle = Object.assign({flex:1}, selfStyle);
        }


        let stateTextString = this.props.stateTextString;

        let stateBGColor = stateTextString && stateTextString.length > 0 ? 'rgba(0,0,0,0.6)' : null;

        let stateTextWidth = imageWidth;
        let stateTextHeight = this.props.stateTextHeight;
        let stateComponentStyle = Object.assign(
            {
                // display: 'inline-block',
                // display: 'flex',
                backgroundColor:stateBGColor,
                position:'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            },
            this.props.imageBorderStyle
        );

        let stateTextStyle ={flex: 1, textAlign: 'center', fontSize: 17, color: '#FFFFFF'};
        stateTextStyle = Object.assign(stateTextStyle, {lineHeight: stateTextHeight+'px'});
        let stateComponent = (
            <div style={stateComponentStyle}>
                <div
                    style={stateTextStyle}
                >
                    {stateTextString}
                </div>
            </div>
        );


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
                style={Object.assign({display:'flex'}, selfStyle)}
            >
                <img
                    style={imageStyle}
                    src={showingImage}
                    // resizeMode={'stretch'}
                    alt={'alt'}
                />

                {stateComponent}
            </div>
        );
    }
}
