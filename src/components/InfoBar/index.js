import React, { useState, useEffect, useRef }  from 'react';

import { Wrapper, Content}  from '../InfoBar/InfoBar.styles';

//helpers
import { calcTime, convertMoney } from '../../helpers';


const InfoBar = ({ time, budget, revunue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p> Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p> Budget: {calcTime(budget)}</p>
            </div>
            <div className="column">
                <p> Revenue: {calcTime(revunue)}</p>
            </div>
        </Content>
    </Wrapper>
)

export default InfoBar;