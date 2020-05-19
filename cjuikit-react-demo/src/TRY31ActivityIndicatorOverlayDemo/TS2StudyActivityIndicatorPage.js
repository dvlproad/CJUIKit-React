import React, {Component} from 'react';
import { ActivityIndicator, WhiteSpace, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

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
                <div
                    style={{
                        display: 'flex', flex:1, backgroundColor:'#dd3fee', height: '200px',
                        flexDirection:"column", justifyContent:"center", alignItems:"center",
                        marginTop: '20px', marginLeft: '20px', marginRight: '20px',
                    }}
                >
                    <ActivityIndicator
                        text="Loading..."
                        animating={true}
                    />
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
