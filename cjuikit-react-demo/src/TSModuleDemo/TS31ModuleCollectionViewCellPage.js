import React, {Component} from 'react';
import ModuleCollectionViewCell from "../CollectionView/ModuleCollectionView/ModuleCollectionViewCell";
import TSModuleModelsUtil from "./TSModuleModelsUtil";

export default class TS31ModuleCollectionViewCellPage extends Component {
    render() {
        const moduleModels = TSModuleModelsUtil.moduleModels();

        return (
            <div style={{
                display: 'flex',
                backgroundColor:'red',
                marginTop: 60,
                // boxSizing: 'border-box',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: "flex-start",
            }}
            >
                {
                    moduleModels.map((moduleModel, index) => {
                        console.log('index' + index);
                        // return (
                        //     <img
                        //         key={index.toString()}
                        //         style={{
                        //             width: 100,
                        //             height: 100,
                        //             marginRight: 10,
                        //             marginBottom: 10,
                        //             backgroundColor: 'blue',
                        //         }}
                        //         onClick={()=>{
                        //             console.log('点击了 index' + index);
                        //         }}
                        //         src={moduleModel.imageSource}
                        //         alt={"alt"}
                        //     />
                        // );
                        return (
                            <ModuleCollectionViewCell
                                key={index.toString()}
                                style={{
                                    width: 100,
                                    height: 100,
                                    marginRight: 10,
                                    marginBottom: 10,
                                    backgroundColor: 'blue',
                                }}
                                buttonIndex={index}
                                clickButtonHandle={()=>{
                                    console.log('点击了 index' + index);
                                }}

                                moduleModel={moduleModel}
                                // clickButtonHandle={this.props.clickButtonHandle}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
