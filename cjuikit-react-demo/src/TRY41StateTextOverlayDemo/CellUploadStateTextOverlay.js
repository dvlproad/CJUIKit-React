import React, { Component } from 'react';
import PropTypes from "prop-types";
import CellStateTextOverlay from "./CellStateTextOverlay";
import ImageUploadStateTextUtil, { ImageUploadType as _ImageUploadType} from "../TRY61ImageActionCollectionViewDemo/ImageUploadStateTextUtil";

export var ImageUploadType = _ImageUploadType;

export default class CellUploadStateTextOverlay extends Component {
    static propTypes = {
        uploadType: PropTypes.number,       //图片上传类型
        uploadProgress: PropTypes.number,   //图片上传进度(值范围为0到100)
    };

    static defaultProps = {
        uploadType: ImageUploadType.NotNeed,
        uploadProgress: 0,
    };

    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        let stateTextHeightPercent = ImageUploadStateTextUtil.getStateTextHeightPercent(this.props.uploadType, this.props.uploadProgress);
        // console.log("stateTextHeightPercent = " + stateTextHeightPercent);

        let stateTextString = ImageUploadStateTextUtil.getFormalImageStateText(this.props.uploadType, this.props.uploadProgress);
        if (this.props.changeShowDebugMessage) {
            stateTextString = ImageUploadStateTextUtil.getDebugImageStateText(this.props.buttonIndex, this.state.isNetworkImage);
        }
        // console.log("stateTextString = " + stateTextString);

        return (
            <CellStateTextOverlay
                style={this.props.style}
                stateTextString={stateTextString}
                stateTextHeightPercent={stateTextHeightPercent}
            />
        );
    }
}
