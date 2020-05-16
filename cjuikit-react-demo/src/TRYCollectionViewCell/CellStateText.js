import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class CellStateText extends Component {
    static propTypes = {
        stateTextHeight: PropTypes.number,  // 图片上的状态文本视图所占的高度
        stateTextString: PropTypes.string,   // 图片上的状态文本
    };

    static defaultProps = {
        stateTextHeight: 0,
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
                    backgroundColor:stateBGColor,
                },
                this.props.style
            )}>
                <div
                    style={Object.assign(
                        {
                            flex: 1,
                            textAlign: 'center',
                            fontSize: 17,
                            color: '#FFFFFF'
                        },
                        {
                            lineHeight: this.props.stateTextHeight+'px'
                        }
                    )}
                >
                    {this.props.stateTextString}
                </div>
            </div>
        );
    }
}
