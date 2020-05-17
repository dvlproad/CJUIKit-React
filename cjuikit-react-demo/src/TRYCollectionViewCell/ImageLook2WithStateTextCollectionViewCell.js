/**
 * ImageLook2WithStateTextCollectionViewCell.js
 *
 * @Description: ImageLookCollectionViewCell（3含SateText，附情况1都不含None，2含Loading，3含SateText）
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
import CellStateTextOverlay from "./CellStateTextOverlay";


export default class ImageLook2WithStateTextCollectionViewCell extends Component {
    static propTypes = {
        // imageSource: PropTypes.number.isRequired,    //图片
        // imageBorderStyle: stylePropTypes,   //图片边框样式

        stateTextHeightPercent: PropTypes.number,  // 图片上的状态文本视图所占的高度的百分比
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
                <CellStateTextOverlay
                    style={Object.assign(
                        {position:'absolute', top: 0, left: 0, bottom: 0, right: 0},
                        this.props.imageBorderStyle
                    )}
                    stateTextString={this.props.stateTextString}
                    stateTextHeightPercent={this.props.stateTextHeightPercent}
                />
            </div>
        );
    }
}
