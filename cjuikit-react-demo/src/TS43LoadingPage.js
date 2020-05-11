import React, {Component} from 'react';
import { ActivityIndicator }  from 'antd-mobile';

export default class TS43LoadingPage extends Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flex:1,
                    height: '300px',
                    backgroundColor:'red',
                    alignItems: 'center',
                }}
            >
                <ActivityIndicator animating />
                <ActivityIndicator
                    toast
                    text="正在加载…"
                    size="small"
                    animating={true}
                />

            </div>
        )
    }
}
