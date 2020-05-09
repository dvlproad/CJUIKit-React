import React from 'react';
import './App.css';

function App() {
    function NumberList1(props) {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return (
            numbers.map((number) =>
                <li key={number.toString()}>
                    {number}
                </li>
            )
        );
    }


    function NumberList2(props) {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return (
            <div style={{
                // flex:1,
                display: 'flex',
                backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
            >
                {
                    numbers.map((number) =>
                        <li key={number.toString()}>
                            {number}
                        </li>
                    )
                }
            </div>
        );
    }

    let testType = 2;
    if (testType === 1) {
        return (
            <NumberList1 />
        );
    } else if (testType === 2) {
        return (
            <NumberList2 />
        );
    }
}

export default App;
