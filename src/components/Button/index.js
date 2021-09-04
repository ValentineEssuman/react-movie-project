import React from 'react';

import {Wrapper, Text } from './Button.styles';

const Button = ({text, callback}) => (
    <Wrapper type= 'button' onClick={callback}>
        <Text>
        {text}
        </Text>
        
    </Wrapper>

);
export default Button;
