import React, {Component} from 'react';
import PropTypes from "prop-types";
import CellActivityIndicatorOverlay from "../TRY31ActivityIndicatorOverlayDemo/CellActivityIndicatorOverlay";
import CellUploadStateTextOverlay, { ImageUploadType as _ImageUploadType} from "../TRY41StateTextOverlayDemo/CellUploadStateTextOverlay";

/// Overlay类型
export var CellOverlayType = {
    ActivityIndicator: 0,   /**< 加载hud */
    StateText: 1,           /**< stateText */
};


export var ImageUploadType = _ImageUploadType;


export default class CellOverlay extends Component {
    static propTypes = {
        overlayType: PropTypes.number,      // overlay类型(默认添加为 ActivityIndicator)

        hudAnimating: PropTypes.bool,
        hudText: PropTypes.string,
        uploadType: PropTypes.number,       //图片上传类型
        uploadProgress: PropTypes.number,   //图片上传进度(值范围为0到100)
    };

    static defaultProps = {
        overlayType: CellOverlayType.ActivityIndicator,

        hudAnimating: true,
        hudText: null,
        uploadType: ImageUploadType.NotNeed,
        uploadProgress: 0,
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        if (this.props.overlayType === CellOverlayType.StateText) {
            return (
                <CellUploadStateTextOverlay
                    style={this.props.style}
                    uploadType={this.props.uploadType}
                    uploadProgress={this.props.uploadProgress}
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

