import React, {Component} from 'react';
import PropTypes from "prop-types";
import CellActivityIndicatorOverlay from "./CellActivityIndicatorOverlay";
import CellStateTextOverlay from "./CellStateTextOverlay";

/// Overlay类型
var CellOverlayType = {
    ActivityIndicator: 0,   /**< 加载hud */
    StateText: 1,           /**< stateText */
};


export default class CellOverlay extends Component {
    static propTypes = {
        overlayType: PropTypes.number,      // overlay类型(默认添加为 ActivityIndicator)

        hudAnimating: PropTypes.bool,
        hudText: PropTypes.string,
        stateTextHeight: PropTypes.number,  // 图片上的状态文本视图所占的高度
        stateTextString: PropTypes.string,  // 图片上的状态文本
    };

    static defaultProps = {
        overlayType: CellOverlayType.ActivityIndicator,

        hudAnimating: true,
        hudText: null,
        stateTextHeight: 0,
        stateTextString: null,
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        if (this.props.overlayType === CellOverlayType.StateText) {
            return (
                <CellStateTextOverlay
                    style={this.props.style}
                    stateTextString={this.props.stateTextString}
                    stateTextHeightPercent={this.props.stateTextHeightPercent}
                />
            )
        } else {
            return (
                <CellActivityIndicatorOverlay
                    style={this.props.style}
                    hudText={this.props.hudText}
                    hudAnimating={this.props.hudAnimating}
                />
            )
        }
    }
}

