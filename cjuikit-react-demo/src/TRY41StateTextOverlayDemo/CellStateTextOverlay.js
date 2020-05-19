import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class CellStateTextOverlay extends Component {
    static propTypes = {
        stateTextHeightPercent: PropTypes.string,   // 图片上的状态文本视图所占的高度百分比字符串
        stateTextString: PropTypes.string,          // 图片上的状态文本
    };

    static defaultProps = {
        stateTextHeightPercent: "100%",
        stateTextString: null,
    };

    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        let stateTextString = this.props.stateTextString;

        let stateBGColor = stateTextString && stateTextString.length > 0 ? 'rgba(0,0,0,0.6)' : null;

        return (
            <div style={Object.assign(
                {
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    backgroundColor: "transparent",
                },
                this.props.style
            )}>
                <div
                    style={{
                        // position:'absolute', left: 0, right: 0, bottom: 0,
                        width: '100%',
                        height: this.props.stateTextHeightPercent,
                        backgroundColor: stateBGColor,
                    }}
                />
                <CellStateText
                    style={{
                        // [css绝对定位居中](https://www.cnblogs.com/qxp140605/p/11793774.html)
                        // position:'absolute', left: "50%", top: "50%", transform: "translate(-50%, -50%)",
                        position:'absolute', left: 0, top: 0, right: 0, bottom: 0, margin: "auto",
                        width: '100%', height:'40px', backgroundColor: "transparent"}}
                    text={this.props.stateTextString}
                />
            </div>
        );
    }
}

class CellStateText extends Component {
    static propTypes = {
        text: PropTypes.string,   // 图片上的状态文本
    };

    static defaultProps = {
        text: null,
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
                        lineHeight: this.props.style.height,
                        textAlign: 'center',
                        fontSize: 17,
                        color: '#FFFFFF',
                    },
                    this.props.style
                )}
            >
                {this.props.text}
            </div>
        );
    }
}
