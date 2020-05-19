import React, {Component} from 'react';
import CellActivityIndicatorOverlay from "./CellActivityIndicatorOverlay";

export default class TS312ActivityIndicatorOverlayPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <div style={{
                    display: 'flex',
                    position: "relative",
                    height: '200px',
                    marginTop: '20px',
                    marginLeft: '20px',
                    marginRight: '20px',
                    backgroundColor:'yellow',
                }}>
                    <CellActivityIndicatorOverlay
                        style={
                            {position:'absolute', top: 0, left: 0, bottom: 0, right: 0,}
                        }
                        hudAnimating={true}
                        hudText={"正在上传..."}
                    />
                </div>
            </div>
        );
    }
}
