/**
 * LuckinCollectionCellCell.js
 *
 * @Description: 含图片和文字竖直居中的Cell
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2019-07-13 15:59:11
 *
 * Copyright (c) dvlproad. All rights reserved.
 */
import React, { Component } from 'react';
// import { View, ViewPropTypes } from 'react-native';
import PropTypes from "prop-types";

// const viewPropTypes = ViewPropTypes || View.propTypes;
// const stylePropTypes = viewPropTypes.style;

export default class ModuleCollectionViewCell extends Component {
    static propTypes = {
        moduleModel: PropTypes.object,
        clickButtonHandle: PropTypes.func,
    };

    static defaultProps = {
        moduleModel: [],
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
                        display: 'inline-block',
                        borderRadius: 6,
                        borderWidth: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    this.props.style,
                )}
            >
                <div
                    style={{
                        display: "flex",
                        height: '100%',
                        flexDirection: "column",
                        justifyContent:"center",
                        alignItems:"center",
                        backgroundColor: 'white',
                    }}
                    onClick={()=> {
                        this.props.clickButtonHandle();
                    }}
                >
                    <img
                        style={{
                                width: 42,
                                height: 42,
                                borderRadius: 6,
                                borderWidth: 0,
                                borderColor: "#E5E5E5",
                            }
                        }
                        src={this.props.moduleModel.imageSource}
                        alt="moduleImgAlt"
                        resizemode={'stretch'}
                    />

                    <div
                        style={Object.assign(
                            {   //单行文本水平&垂直居中
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 22,
                                fontSize: 16,
                                textAlign: "center",
                                lineHeight: 22,
                            },
                            {marginTop: 20}
                        )}
                    >
                        {this.props.moduleModel.title}
                    </div>
                </div>
            </div>
        )
    }
}
