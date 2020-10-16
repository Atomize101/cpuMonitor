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
    transports: ['websocket', 'polling']
});

const App = ({}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        socket.on('cpu', (cpuPercent) => {
            setData((currentData => [...currentData, cpuPercent]))
        });
    }, [])

    return (
        <div>
            <h1>Real Time CPU usage</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));