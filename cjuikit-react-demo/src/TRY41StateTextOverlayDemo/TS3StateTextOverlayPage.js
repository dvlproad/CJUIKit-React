import React, {Component} from 'react';
import CellStateTextOverlay from "./CellStateTextOverlay";

export default class TS3StateTextOverlayPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let stateTextHeightPercent = (Math.random()*100).toFixed(2) + "%";  // 保留两位小数

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
                    <CellStateTextOverlay
                        style={
                            {position:'absolute', top: 0, left: 0, bottom: 0, right: 0,}
                        }
                        stateTextString={stateTextHeightPercent}
                        stateTextHeightPercent={stateTextHeightPercent}
                    />
                </div>
            </div>
        );
    }
}
