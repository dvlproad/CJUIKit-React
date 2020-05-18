/**
 * AddCell.js
 *
 * @Description: 添加 Cell
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2020/5/18 14:42:46
 *
 * Copyright (c) dvlproad. All rights reserved.
 */


import React, { Component } from 'react';
import PropTypes from "prop-types";
// const viewPropTypes = ViewPropTypes || View.propTypes;
// const stylePropTypes = viewPropTypes.style;


export default class AddCell extends Component {
    static propTypes = {
        imageTopRightPadding: PropTypes.number, // 添加按钮的右上角与边框的间距

        //src: PropTypes.number.isRequired,    //图片
        clickButtonHandle: PropTypes.func,
    };

    static defaultProps = {
        imageTopRightPadding: 10,

        scr: require('./resources/addImage_common@2x.png'),
        clickButtonHandle: ()=>{},
    };

    constructor(props) {
        super(props);

        this.state = {

        }
    }



    render() {
        return (
            <div
                style={Object.assign(
                    {
                        display:'flex',
                        position: 'relative',
                    },
                    this.props.style,
                )}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: this.props.imageTopRightPadding,
                        left: 0,
                        bottom: 0,
                        right: this.props.imageTopRightPadding,
                    }}
                    onClick={()=> {
                        this.props.clickButtonHandle();
                    }}
                >
                    <img
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width:'100%',
                            height: '100%',
                            border: 'solid',
                            borderRadius: 6,
                            borderWidth: 1,
                            borderColor: "#E5E5E5",
                        }}
                        src={this.props.src}
                        alt={'alt'}
                        // defaultSource={this.props.defaultSource}
                        // imageBorderStyle={this.props.imageBorderStyle}
                        // onLoadComplete={()=>{
                        //     this.props.onLoadComplete();
                        // }}
                        // stateTextString={stateTextString}
                        // stateTextHeight={stateTextHeight}
                        // needLoadingAnimation={this.props.needLoadingAnimation}
                        // changeShowDebugMessage={this.props.changeShowDebugMessage}
                    />
                </div>
            </div>
        );
    }
}
