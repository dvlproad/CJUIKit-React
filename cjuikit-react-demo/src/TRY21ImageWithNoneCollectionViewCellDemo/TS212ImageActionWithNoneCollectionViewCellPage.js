/**
 * TS212ImageActionWithNoneCollectionViewCellPage.js
 *
 * @Description: 测试 ImageActionCollectionViewCell（1都不含None，附情况1都不含None，2含Loading，3含SateText，4含最终的Overlay）
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2020-05-16 01:22
 *
 */
import React, {Component} from 'react';
import ImageAction1WithNoneCollectionViewCell  from './ImageAction1WithNoneCollectionViewCell';
import TSDataUtil from "../TRY20ImageDataUtil/TSDataUtil";

export default class TS212ImageActionWithNoneCollectionViewCellPage extends Component {
    render() {
        const imageModels = TSDataUtil.imageModels();

        return (
            <div style={{
                flex:1,
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor:'red',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
            >
                {
                    imageModels.map((imageModel, index) => {
                        return (
                            <ImageAction1WithNoneCollectionViewCell
                                key={index.toString()}
                                style={{
                                    width: 100,
                                    height: 100,
                                    marginTop: 10,
                                    marginBottom: 10,
                                    backgroundColor: 'blue',
                                    borderRadius: 6,
                                    borderWidth: 0,
                                    display: 'inline-block',
                                    // flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}

                                imageSource={imageModel.imageSource}
                                isEditing={true}
                                clickButtonHandle={()=>{
                                    console.log("点击了图片" + index);
                                }}

                                deleteImageHandle={()=>{
                                    console.log("点击删除按钮" + index);
                                }}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
