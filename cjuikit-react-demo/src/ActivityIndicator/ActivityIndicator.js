import React, {Component} from 'react';
import PropTypes from "prop-types";
import { ActivityIndicator } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

export default class CJActivityIndicator extends Component {
    static propTypes = {
        animating: PropTypes.bool,
        text: PropTypes.string,
    };

    static defaultProps = {
        animating: true,
        text: null,
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
                    {display: 'flex', flex:1,  flexDirection:"column", justifyContent:"center", alignItems:"center"},
                    this.props.style)}
            >
                <ActivityIndicator
                    text={this.props.text}
                    animating={this.props.animating}
                />
            </div>
        );
    }
}