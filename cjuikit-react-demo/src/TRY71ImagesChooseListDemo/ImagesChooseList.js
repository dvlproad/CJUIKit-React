/**
 * ImagesChooseList.js
 *
 * @Description: 图片上传列表
 *               ImageActionCollectionView（2含样式已封装成APP风格，，附情况1样式纯自定义，2含样式已封装成APP风格）
 *
 * @author      chaoqian.li
 * @date        2019-11-14 15:07:19
 *
 */
import React, {Component} from 'react';
// import { Dimensions } from 'react-native';
import PropTypes from "prop-types";
import ImageActionCollectionView, { ImageUploadType as _ImageUploadType } from '../TRY61ImageActionCollectionViewDemo/ImageActionCollectionView';

export var ImageUploadType = _ImageUploadType;

export default class ImagesChooseList extends Component {
    static propTypes = {
        scrollEnabled: PropTypes.bool,              // 是否可以滚动

        imageModels: PropTypes.array,
        imageMaxCount: PropTypes.number,        //最大显示的图片个数(当达到指定图片最大量后，添加图片按钮不在显示)
        imageLoadedCountChange: PropTypes.func, //完成加载的图片个数发生变化的回调

        isEditing: PropTypes.bool,

        browseImageHandle: PropTypes.func,
        addImageCompleteBlock: PropTypes.func,
        deleteImageCompleteBlock: PropTypes.func,
    };

    static defaultProps = {
        scrollEnabled: false,

        imageModels: [],
        imageMaxCount: 10000,
        imageLoadedCountChange: (imageLoadedCount, isImageAllLoaded)=>{},

        isEditing: false,

        browseImageHandle: (buttonIndex)=>{},
        addImageCompleteBlock: (imageModels)=>{},
        deleteImageCompleteBlock: (imageModels)=>{},
    };


    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        // const screenWidth = Dimensions.get('window').width;
        const screenWidth = window.screen.width;
        const listWidth = screenWidth;

        return (
            <ImageActionCollectionView
                style={Object.assign({backgroundColor:'#FFFFFF'}, this.props.style)}   //谨记：这边设置无效
                scrollEnabled={this.props.scrollEnabled}
                listWidth={listWidth}
                sectionInset={{top:5, left:15, bottom:15, right:15}}
                cellWidthFromPerRowMaxShowCount={4} // 水平方向上的列数 & 通过每行可显示的最多个数来设置每个cell的宽度
                // cellWidthFromFixedWidth={80}       // 通过cell的固定宽度来设置每个cell的宽度
                widthHeightRatio={70/70}
                minimumInteritemSpacing={0}
                minimumLineSpacing={0}
                forceBoxHorizontalIntervalEqualMinimumInteritemSpacing={true}
                dataModels={this.props.imageModels}
                // renderCollectionCell={(item, index, defaultCollectCellStyle)=>{}}
                imageMaxCount={this.props.imageMaxCount}

                imageLoadedCountChange={this.props.imageLoadedCountChange}
                addImageSource={require('./resources/add_image@2x.png')}

                isEditing={this.props.isEditing}
                browseImageHandle={this.props.browseImageHandle}
                addImageHandle={this.props.addImageHandle}
                deleteImageHandle={(index) => {
                    // Alert.alert("删除图片" + index);
                    let imageModels = this.props.imageModels;
                    imageModels.splice(index,1);

                    this.props.deleteImageCompleteBlock && this.props.deleteImageCompleteBlock(imageModels);
                }}
                deleteButtonWidth={24}
                imageTopRightForDeleteButtonCenterOffset={2}
            />
        );
    }
}
