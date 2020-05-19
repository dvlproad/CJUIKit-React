import React, {Component} from 'react';
import PropTypes from "prop-types";
import BaseActionCollectionView from "../CollectionView/Base/BaseActionCollectionView";


export default class TS2BaseActionCollectionViewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isImageAllLoaded: false,    //图片是否全部加载完成，如果没有，则不允许点击修改按钮来切换为编辑状态
            isEditing: true,
            scrollEnabled: true,
            imageSources: [
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
            ],
        }
    }

    render() {
        // const screenWidth = Dimensions.get('window').width;
        const screenWidth = window.screen.width;
        const listWidth = screenWidth;

        return (
            <BaseActionCollectionView
                // style={{paddingHorizontal: 40}}   //谨记：这边设置无效
                style={{backgroundColor: 'green', boxSizing: 'border-box'}}
                listWidth={listWidth}
                sectionInset={{top:15, left:15, bottom:15, right:15}}
                cellWidthFromPerRowMaxShowCount={2} // 水平方向上的列数 & 通过每行可显示的最多个数来设置每个cell的宽度
                // cellWidthFromFixedWidth={165}       // 通过cell的固定宽度来设置每个cell的宽度
                widthHeightRatio={400/165}
                minimumInteritemSpacing={15}
                minimumLineSpacing={10}
                dataModels={this.state.imageSources}



                isEditing={true}
                hasAddIconWhenEditing={true}
                imageMaxCount={10000}
                addImageTopRightPadding={0}
                addImageSource={require('./resources/add_baseAction@2x.png')}
                addImageHandle={(index)=>{
                    console.log("添加图片" + index);
                    // LKToastUtil.showMessage("添加图片" + index);
                    let addedImageSource = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg';

                    let imageSources = this.state.imageSources;
                    imageSources.splice(index, 0, addedImageSource);
                    this.setState({
                        imageSources: imageSources
                    })
                }}

                renderDataCollectionCell={(item, index, defaultCollectCellStyle)=>{
                    let richCollectCellStyle = {
                        backgroundColor: '#FFFFFF',
                        borderRadius: 6,
                        borderWidth: 0,
                    };
                    let collectCellStyle = Object.assign(defaultCollectCellStyle, richCollectCellStyle);

                    //let collectCellStyle = { ...defaultCollectCellStyle, ...richCollectCellStyle}; //方法二
                    return (
                        <img
                            style={collectCellStyle}
                            key={index.toString()}

                            src={item}
                        />
                    );
                }}
                // clickButtonHandle={this._execModuleModel}
            />
        );
    }
}