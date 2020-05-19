import React, {Component} from 'react';
import PropTypes from "prop-types";
import { ActivityIndicator } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

export default class CellActivityIndicatorOverlay extends Component {
    static propTypes = {
        hudAnimating: PropTypes.bool,
        hudText: PropTypes.string,
    };

    static defaultProps = {
        hudAnimating: true,
        hudText: null,
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div
                style={Object.assign(
                    {
                        display: 'flex', flex:1, backgroundColor:'rgba(0,0,0,0.6)',
                        flexDirection:"column", justifyContent:"center", alignItems:"center",
                    },
                    this.props.style)}
            >
                <ActivityIndicator
                    text={this.props.hudText}
                    animating={this.props.hudAnimating}
                />
            </div>
        );
    }
}
