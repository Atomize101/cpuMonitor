import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    Line,
    LineChart,
    XAxis,
    ToolTip,
} from 'recharts';

const socket = io('http://localhost:3000', {
    transports: ['websocet', 'polling']
});

const App = ({}) => {

    return (
        <div>
            <h1>Real Time CPU usage</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));