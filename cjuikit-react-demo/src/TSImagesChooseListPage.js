/**
 * TSImagesChooseListPage.js
 *
 * @Description: TSImagesChooseListPage
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

import { CJImageUploadType as LKImageUploadType }  from './ImageActionCollectionView'
import ImagesChooseList from './ImagesChooseList';

export const CJTSDefaultImages = {
    localImageSource1: require('./img/1.jpg'),
    localImageSource2: require('./img/4.jpg'),
    networkImageSource1:    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
    networkImageCar:        'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1562053677&di=9c7e86f3099929712b5f97b94bc153c5&src=http://01.minipic.eastday.com/20161109/20161109230347_7e6b8aeb814b27aad394cc65d42237d8_4.jpeg',
    networkImageLandscape:  'https://h1.ioliu.cn//bing/Transfagarasan_ZH-CN5760731327_1920x1080.jpg',
    networkImageMountainroad:   'https://h1.ioliu.cn//bing/Transfagarasan_ZH-CN5760731327_1920x1080.jpg',
};


export default class TSImagesChooseListPage extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return CJTSNavigationFactory.backPageWithRightButtonNavigationOptions({ navigation }, `图片选择列表`, '测试状态切换', ()=>{
    //         // navigation.navigate('TSImagesChooseListPage', {});
    //         navigation.state.params.changeEditState();
    //     })
    // };

    componentWillMount(){
        // this.props.navigation.setParams({
        //     changeEditState:this.changeEditState,
        // })
    }

    changeEditState= ()=>{
        let isEditing = !this.state.isEditing;
        this.setState({
            isEditing: isEditing,
        })
    }


    constructor(props) {
        super(props);

        this.state = {
            isImageAllLoaded: false,    //图片是否全部加载完成，如果没有，则不允许点击修改按钮来切换为编辑状态
            isEditing: true,
            imageModels: [
                {
                    imageSource: CJTSDefaultImages.localImageSource1,
                    uploadType: LKImageUploadType.NotNeed,
                    uploadProgress: 0,
                    imageIndex: 0,
                },
                {
                    imageSource: CJTSDefaultImages.networkImageSource1,
                    uploadType: LKImageUploadType.Uploading,
                    uploadProgress: 20,
                    imageIndex: 1,
                },
                {
                    imageSource: CJTSDefaultImages.networkImageSource1,
                    uploadType: LKImageUploadType.Uploading,
                    uploadProgress: 60,
                    imageIndex: 2,
                },
                {
                    imageSource: CJTSDefaultImages.networkImageSource1,
                    uploadType: LKImageUploadType.Success,
                    uploadProgress: 100,
                    imageIndex: 3,
                },
                {
                    imageSource: CJTSDefaultImages.networkImageSource1,
                    uploadType: LKImageUploadType.Failure,
                    uploadProgress: 77,
                    imageIndex: 4,
                },
            ],
        }
    }



    imageLoadedCountChange= (imageLoadedCount, isImageAllLoaded)=>{
        //LKToastUtil.showMessage("完成加载的图片个数为:" + imageLoadedCount);
        this.state.isImageAllLoaded = isImageAllLoaded;
    }


    browseImageHandle=(index) => {
        // LKToastUtil.showMessage("浏览图片" + index);
    }

    addImageHandle=(index) => {
        // LKToastUtil.showMessage("添加图片" + index);
        let imageModel = {imageSource: CJTSDefaultImages.networkImageCar};

        let imageModels = this.state.imageModels;
        imageModels.splice(index, 0, imageModel);
        this.setState({
            imageModels: imageModels
        })
    }


    render() {
        return (
            <div style={{ backgroundColor:"green"}}>
                <ImagesChooseList
                    imageModels={this.state.imageModels}

                    imageLoadedCountChange={this.imageLoadedCountChange}

                    isEditing={this.state.isEditing}
                    browseImageHandle={this.browseImageHandle}
                    addImageHandle={this.addImageHandle}
                    deleteImageCompleteBlock={(imageModels)=>{
                        this.setState({
                            imageModels: imageModels
                        })
                    }}
                />
            </div>

        );
    }
}
