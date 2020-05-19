import React, {Component} from 'react';
import CellUploadStateTextOverlay from "./CellUploadStateTextOverlay";
import {ImageUploadType} from "../TRY61ImageActionCollectionViewDemo/ImageUploadStateTextUtil";

export default class TS412UploadStateTextOverlayPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let uploadProgressString = (Math.random()*100).toFixed(2);  // 保留两位小数
        let uploadProgress = parseFloat(uploadProgressString);

        return (
            <div>
                <div style={{
                    display: 'flex',
                    position: "relative",
                    height: '200px',
                    marginTop: '20px',
                    marginLeft: '20px',
                    marginRight: '20px',
                    backgroundColor:'green',
                }}>
                    <CellUploadStateTextOverlay
                        style={
                            {position:'absolute', top: 0, left: 0, bottom: 0, right: 0,}
                        }
                        uploadType={ImageUploadType.Uploading}
                        uploadProgress={uploadProgress}
                    />
                </div>
            </div>
        );
    }
}
