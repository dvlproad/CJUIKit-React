/**
 * TS421ImageLookWithStateTextCollectionViewCellPage.js
 *
 * @Description: 测试 ImageLookCollectionViewCell（3含StateText，附情况1都不含None，2含Loading，3含SateText）
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2020-05-16 01:27
 *
 */
import React, {Component} from 'react';
import ImageLook2WithStateTextCollectionViewCell from "./ImageLook2WithStateTextCollectionViewCell";
import TSDataUtil from "../TRY20ImageDataUtil/TSDataUtil";

export default class TS421ImageLookWithStateTextCollectionViewCellPage extends Component {
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
                        let stateTextHeightPercent = (Math.random()*100).toFixed(2) + "%";  // 保留两位小数

                        return (
                            <ImageLook2WithStateTextCollectionViewCell
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
                                    alignItems: 'center',
                                }}

                                imageSource={imageModel.imageSource}
                                // clickButtonHandle={this.props.clickButtonHandle}

                                stateTextString={stateTextHeightPercent}
                                stateTextHeightPercent={stateTextHeightPercent}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
