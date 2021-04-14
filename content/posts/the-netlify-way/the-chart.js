import React, {useEffect} from 'react';

// import "./styles.css";


import Chart from 'chart.js/auto';

const labels = [
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021'
];
const data = {
    labels: labels,
    datasets: [{
        label: 'Growth of IaaS Market',
        backgroundColor: 'rgba(56, 162, 243, 0.5)',
        borderColor: '#38a2f3',
        data: [16.2, 25.4, 24.7, 32.4, 44.5, 51.4, 65.3, 82.2]
    }]
};

const config = {
    type: 'bar',
    data,
    options: {}
};

export default function App() {
    useEffect(() => {
        const ctx = document.getElementById("myChart");
        new Chart(ctx, config);
    });
    return (
        <div className="App">
            <canvas id="myChart" width="250" height="100" >
            </canvas>
        </div>
    );
}


