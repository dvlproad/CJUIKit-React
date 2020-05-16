import React, {Component} from 'react';
import { ActivityIndicator, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

import CJActivityIndicator from "./ActivityIndicator/ActivityIndicator";

export default class TS2StudyActivityIndicatorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
        };
    }
    componentWillUnmount() {
        clearTimeout(this.closeTimer);
    }
    showToast = () => {
        this.setState({ animating: !this.state.animating });
        this.closeTimer = setTimeout(() => {
            this.setState({ animating: !this.state.animating });
        }, 1000);
    }

    render() {
        return (
            <div>
                <div style={{
                    display: 'flex',
                    height: '200px',
                    marginTop: '20px',
                    marginLeft: '20px',
                    marginRight: '20px',
                    backgroundColor:'yellow'
                }}>
                    <div style={{display: 'flex', flex:1, flexDirection:"column", justifyContent:"center", alignContent:"center", backgroundColor:'red'}}>
                        <div style={{height: '20px', backgroundColor:'green'}} />
                        <div style={{display: 'flex', flex:1,  flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:'blue'}} >
                            <ActivityIndicator
                                text="Loading..."
                                animating={true}
                            />
                        </div>
                        <CJActivityIndicator style={{display: 'flex', flex:1, backgroundColor:'#dd3fee'}} />
                    </div>
                </div>

                <WhiteSpace size="xl" />
                <Button onClick={this.showToast}>click to show Toast</Button>
                <div>
                    <ActivityIndicator
                        toast
                        text="Loading..."
                        animating={this.state.animating}
                    />
                </div>
            </div>
        );
    }
}