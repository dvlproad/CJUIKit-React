/**
 * TS43ImageLookWithStateTextCollectionViewCellPage.js
 *
 * @Description: 测试 ImageLookCollectionViewCell（3含StateText，附情况1都不含None，2含Loading，3含SateText）
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2020-05-16 01:27
 *
 */
import React, {Component} from 'react';
import ImageLook2WithStateTextCollectionViewCell from "./TRYCollectionViewCell/ImageLook2WithStateTextCollectionViewCell";

export default class TS43ImageLookWithStateTextCollectionViewCellPage extends Component {
    render() {
        const imageModels = [
            {
                imageSource: require('./resources/images/icon_await_check.png'),
            },
            {
                imageSource: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
            },
            {
                imageSource: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
            },
            {
                imageSource: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
            },
            {
                imageSource: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
            },
            {
                imageSource: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460118221,780234760&fm=26&gp=0.jpg',
            },
        ];


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
                                    position: 'relative',
                                }}

                                imageSource={imageModel.imageSource}
                                // clickButtonHandle={this.props.clickButtonHandle}

                                stateTextString={'70'+index}
                                stateTextHeight={100}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
