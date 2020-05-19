/**
 * TS321ImageLookWithLoadingCollectionViewCellPage.js
 *
 * @Description: 测试 ImageLookCollectionViewCell（2含Loading，附情况1都不含None，2含Loading，3含SateText）
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2020-05-16 01:25
 *
 */
import React, {Component} from 'react';
import ImageLook2WithLoadingCollectionViewCell from "./ImageLook2WithLoadingCollectionViewCell";
import TSDataUtil from "../TRY20ImageDataUtil/TSDataUtil";

export default class TS321ImageLookWithLoadingCollectionViewCellPage extends Component {
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
                            <ImageLook2WithLoadingCollectionViewCell
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
                                // clickButtonHandle={this.props.clickButtonHandle}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
