import React, {Component} from 'react';
import PropTypes from "prop-types";
import CellActivityIndicatorOverlay from '../TRYCollectionViewCell/CellActivityIndicatorOverlay'

export default class CJImage extends Component {
    static propTypes = {
        hudAnimating: PropTypes.bool,
        text: PropTypes.string,
    };

    static defaultProps = {
        hudAnimating: true,
        text: null,
    };

    static propTypes = {
        // imageSource: PropTypes.number.isRequired,    //图片
        // defaultSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),    //图片加载前的默认显示图
        // errorSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),      //图片加载失败的显示图
        // imageBorderStyle: stylePropTypes,   //图片边框样式

        // 是否需要加载动画(默认需要)
        // 有以下体验不友好的情况需要特殊处理：即从本地上传的图片会得到网络图片地址，
        // 如果此时把网络图片的地址更新上去，会导致再显示菊花loading，不大友好，需要设置本属性为false
        needLoadingAnimation: PropTypes.bool,
    };

    static defaultProps = {
        imageSource: require('./resources/imageDefault.png'),
        defaultSource: require('./resources/imageDefault.png'),
        errorSource: require('./resources/imageError.png'),
        imageBorderStyle: {
            borderRadius: 6,
            borderWidth: 0,
            borderColor: "#E5E5E5",
        },

        needLoadingAnimation: false,
    };

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div
                style={Object.assign(
                    {position: 'relative'},
                    this.props.style
                )}
            >
                <img
                    style={Object.assign(
                        {
                            width: this.props.style.width,
                            height: this.props.style.height,
                            borderRadius: 6,
                            borderWidth: 0,
                            borderColor: "#E5E5E5",
                        },
                        this.props.imageBorderStyle
                    )}
                    src={this.props.src}
                    // defaultSource={this.props.defaultSource}
                    // resizeMode={'stretch'}
                    alt={'alt'}
                    // onLoadStart={this.onLoadStart}
                    // onLoadEnd={this.onLoadEnd}
                    // onLoad={this.onLoadSuccess}
                    // onError={this.onLoadError}
                />

                <CellActivityIndicatorOverlay
                    style={{
                        display: 'flex', flex:1, backgroundColor:'rgba(0,0,0,0.6)',
                        position:'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                    hudAnimating={this.props.hudAnimating}
                />
            </div>
        );
    }
}
