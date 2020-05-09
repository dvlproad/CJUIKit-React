import React from 'react';
import './App.css';
import BaseCollectionView from "./BaseCollectionView";
import CJCollectionCell from "./CJCollectionCell";

function App() {
    const moduleModels = [
        {
            title: "通知发货1",
            imageSource: require('./resources/images/icon_await_check.png'),
            nextPageName: "TSDescriptionListPage",
        },
        {
            title: "采购单查询2",
            imageSource: require('./resources/images/icon_await_check.png'),
            nextPageName: "TSDescriptionListPage",
        },
        {
            title: "通知发货3",
            imageSource: require('./resources/images/icon_await_check.png'),
            nextPageName: "TSDescriptionListPage",
        },
        {
            title: "采购单查询4",
            imageSource: require('./resources/images/icon_await_check.png'),
            nextPageName: "TSDescriptionListPage",
        },
        {
            title: "采购单查询5",
            imageSource: require('./resources/images/icon_await_check.png'),
            nextPageName: "TSDescriptionListPage",
        },
        {
            title: "采购单查询6",
            imageSource: require('./resources/images/icon_await_check.png'),
            nextPageName: "TSDescriptionListPage",
        },
    ];



    function BaeCollectionView() {
        // const screenWidth = Dimensions.get('window').width;
        const screenWidth = window.screen.width;
        const listWidth = screenWidth;

        return (
            <BaseCollectionView
                // style={{paddingHorizontal: 40}}   //谨记：这边设置无效
                style={{backgroundColor: 'green', boxSizing: 'border-box'}}
                listWidth={listWidth}
                sectionInset={{top:15, left:15, bottom:15, right:15}}
                cellWidthFromPerRowMaxShowCount={2} // 水平方向上的列数 & 通过每行可显示的最多个数来设置每个cell的宽度
                // cellWidthFromFixedWidth={165}       // 通过cell的固定宽度来设置每个cell的宽度
                widthHeightRatio={165/165}
                minimumInteritemSpacing={15}
                minimumLineSpacing={10}
                dataModels={moduleModels}
                renderCollectionCell={(item, index, defaultCollectCellStyle)=>{
                    let richCollectCellStyle = {
                        backgroundColor: '#FFFFFF',
                        borderRadius: 6,
                        borderWidth: 0,
                    };
                    let collectCellStyle = Object.assign(defaultCollectCellStyle, richCollectCellStyle);

                    //let collectCellStyle = { ...defaultCollectCellStyle, ...richCollectCellStyle}; //方法二
                    return (
                        <CJCollectionCell
                            style={collectCellStyle}
                            key={index.toString()}

                            moduleModel={item}
                        />
                    );
                }}
                // clickButtonHandle={this._execModuleModel}
            />
        );
    }



    return (
        <BaeCollectionView />
    )
}

export default App;
