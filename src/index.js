import React from 'react';
import ReactDOM from 'react-dom';
import LineDemo from './eComponent/line/demo'
import PointDemo from './eComponent/point/demo'
import BarDemo from './eComponent/bar/demo'
import PieDemo from './eComponent/pie/demo'
import MapDemo from './eComponent/map/demo'
import './index.css'

const Demo = () => (
    <div>
        <LineDemo></LineDemo>
        <PointDemo></PointDemo>
        <BarDemo></BarDemo>
        <PieDemo></PieDemo>
        <MapDemo></MapDemo>
    </div>
)
ReactDOM.render(<Demo />, document.getElementById('root'));
