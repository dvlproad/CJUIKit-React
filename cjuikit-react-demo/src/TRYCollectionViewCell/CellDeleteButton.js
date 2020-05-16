// 删除的图片按钮
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CellDeleteButton extends Component {
    static propTypes = {
        onPress: PropTypes.func
    };

    static defaultProps = {
        onPress: null,
    };


    render() {
        return (
            <img
                style={this.props.style}
                src={require('./resources/imageDelete_blue.png')}
                alt={'alt'}
                onClick={(event) => {
                    event.stopPropagation();
                    this.props.onPress()
                }}
            />
        )
    }
}
