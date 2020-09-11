import React from 'react';
import './Hr.sass';

const Hr = ({title}) =>
    <div className="hr">
        <div className="hr__line"></div>
        <p className="hr__title">{title}</p>
        <div className="hr__line"></div>
    </div>

export default Hr;