import React, {Component} from 'react';
import ModuleCollectionViewCell from "../CollectionView/ModuleCollectionView/ModuleCollectionViewCell";
import TSModuleModelsUtil from "./TSModuleModelsUtil";

export default class TS31ModuleCollectionViewCellPage extends Component {
    render() {
        const moduleModels = TSModuleModelsUtil.moduleModels();

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
                    moduleModels.map((moduleModel, index) => {
                        return (
                            <ModuleCollectionViewCell
                                key={index.toString()}
                                style={{
                                    width: 100,
                                    height: 100,
                                    marginTop: 10,
                                    marginBottom: 10,
                                    backgroundColor: 'white',
                                    borderRadius: 6,
                                    borderWidth: 0,
                                    display: 'inline-block',
                                    // flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                buttonIndex={index}
                                clickButtonHandle={(buttonIndex)=>{
                                    console.log('点击了cellIndex' + buttonIndex);
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
