/**
 * TSImageActionCollectionViewPage.js
 *
 * @Description: 测试 ImageActionCollectionView（1样式纯自定义，，附情况1样式纯自定义，2含样式已封装成APP风格）
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2020/5/7 13:51:06
 *
 * Copyright (c) dvlproad. All rights reserved.
 */

import React, {Component} from 'react';
// import { View } from 'react-native';
// import {
//     CJTSDefaultImages,
//     CJTSNavigationFactory,
// } from 'cjrn-demo-base';
//
// import { LKToastUtil } from '@luckin/react-native-theme-overlay';
//
// import {
//     ImagesChooseList,
//     LKImageUploadType,
// } from '@luckin/react-native-theme-list';
//
//
// import {
//     LKCenterText,
// } from '@luckin/react-native-theme-uikit';

import ImageActionCollectionView, { ImageUploadType }  from './CollectionView/ImageCollectionView/ImageActionCollectionView'

const CJTSDefaultImages = {
    localImageSource1: require('./img/1.jpg'),
    localImageSource2: require('./img/4.jpg'),
    networkImageSource1:    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
    networkImageCar:        'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1562053677&di=9c7e86f3099929712b5f97b94bc153c5&src=http://01.minipic.eastday.com/20161109/20161109230347_7e6b8aeb814b27aad394cc65d42237d8_4.jpeg',
    networkImageLandscape:  'https://h1.ioliu.cn//bing/Transfagarasan_ZH-CN5760731327_1920x1080.jpg',
    networkImageMountainroad:   'https://h1.ioliu.cn//bing/Transfagarasan_ZH-CN5760731327_1920x1080.jpg',
};


export default class TSImageActionCollectionViewPage extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return CJTSNavigationFactory.backPageWithRightButtonNavigationOptions({ navigation }, `图片选择列表`, '测试状态切换', ()=>{
    //         // navigation.navigate('TSImagesChooseListPage', {});
    //         navigation.state.params.changeEditState();
    //     })
    // };
    //
    // UNSAFE_componentWillMount() {
    //     this.props.navigation.setParams({
    //         changeEditState:this.changeEditState,
    //     })
    // }
    //
    // changeEditState= ()=>{
    //     let isEditing = !this.state.isEditing;
    //     this.setState({
    //         isEditing: isEditing,
    //     })
    // }


    constructor(props) {
        super(props);

        this.state = {
            isImageAllLoaded: false,    //图片是否全部加载完成，如果没有，则不允许点击修改按钮来切换为编辑状态
            isEditing: true,
            scrollEnabled: true,
            imageModels: [
                {
                    imageSource: CJTSDefaultImages.localImageSource1,
                    uploadType: ImageUploadType.NotNeed,
                    uploadProgress: 0,
                    imageIndex: 0,
                },
                {
                    imageSource: CJTSDefaultImages.networkImageSource1,
                    uploadType: ImageUploadType.Uploading,
                    uploadProgress: 20,
                    imageIndex: 1,
                },
                {
                    imageSource: CJTSDefaultImages.networkImageSource1,
                    uploadType: ImageUploadType.Uploading,
                    uploadProgress: 60,
                    imageIndex: 2,
                },
                {
                    imageSource: CJTSDefaultImages.networkImageSource1,
                    uploadType: ImageUploadType.Success,
                    uploadProgress: 100,
                    imageIndex: 3,
                },
                {
                    imageSource: CJTSDefaultImages.networkImageSource1,
                    uploadType: ImageUploadType.Failure,
                    uploadProgress: 77,
                    imageIndex: 4,
                },
            ],
        }
    }


    render() {
        // const screenWidth = Dimensions.get('window').width;
        const screenWidth = window.screen.width;
        const listWidth = screenWidth;

        return (
            <div style={{ backgroundColor:"green"}}>
                <ImageActionCollectionView
                    style={Object.assign({backgroundColor:'#FFFFFF'}, this.props.style)}   //谨记：这边设置无效
                    scrollEnabled={this.state.scrollEnabled}
                    listWidth={listWidth}
                    sectionInset={{top:5, left:15, bottom:15, right:15}}
                    cellWidthFromPerRowMaxShowCount={4} // 水平方向上的列数 & 通过每行可显示的最多个数来设置每个cell的宽度
                    // cellWidthFromFixedWidth={80}       // 通过cell的固定宽度来设置每个cell的宽度
                    widthHeightRatio={70/70}
                    minimumInteritemSpacing={0}
                    minimumLineSpacing={0}
                    forceBoxHorizontalIntervalEqualMinimumInteritemSpacing={true}
                    dataModels={this.state.imageModels}
                    // renderCollectionCell={(item, index, defaultCollectCellStyle)=>{}}
                    imageMaxCount={this.state.imageMaxCount}

                    imageLoadedCountChange={(imageLoadedCount, isImageAllLoaded)=>{
                        //LKToastUtil.showMessage("完成加载的图片个数为:" + imageLoadedCount);
                        // this.state.isImageAllLoaded = isImageAllLoaded;
                        this.setState({
                            isImageAllLoaded: isImageAllLoaded,
                        })

                    }}
                    addImageSource={require('./resources/images/addImage_common@2x.png')}

                    isEditing={this.state.isEditing}
                    browseImageHandle={(index) => {
                        console.log("浏览图片" + index);
                        // LKToastUtil.showMessage("浏览图片" + index);
                    }}
                    addImageHandle={(index) => {
                        console.log("添加图片" + index);
                        // LKToastUtil.showMessage("添加图片" + index);
                        let imageModel = {imageSource: CJTSDefaultImages.networkImageCar};

                        let imageModels = this.state.imageModels;
                        imageModels.splice(index, 0, imageModel);
                        this.setState({
                            imageModels: imageModels
                        })
                    }}
                    deleteImageHandle={(index) => {
                        console.log("删除图片" + index);
                        let imageModels = this.state.imageModels;
                        imageModels.splice(index,1);

                        this.setState({
                            imageModels: imageModels
                        })
                    }}

                    deleteButtonWidth={24}
                    imageTopRightForDeleteButtonCenterOffset={2}
                />
            </div>

        );
    }
}
